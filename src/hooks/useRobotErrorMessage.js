import { useEffect, useRef, useState } from "react"
import { apiGet } from "../utils/api"

export default function useRobotErrorMessage(robotError) {
    const [errorMessage, setErrorMessage] = useState("")
    const [errorData, setErrorData] = useState({})
    const lastFetchedCode = useRef(null)

    useEffect(() => {
        const fetchError = async () => {
            if (!robotError?.code || robotError.code === lastFetchedCode.current) return

            try {
                const data = await apiGet("/errors/" + robotError.code)
                setErrorData(data)

                const message = data.id === "EX190"
                    ? "HOLD - " + robotError.subMessage
                    : data.message.en + " " + robotError.subMessage

                setErrorMessage(message)
                lastFetchedCode.current = robotError.code
            } catch (err) {
                console.error("Error fetching error details:", err)
            }
        }

        fetchError()
    }, [robotError])

    return { errorMessage, errorData }
}
