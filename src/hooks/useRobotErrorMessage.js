import { useEffect, useRef, useState } from "react"
import { apiGet } from "../utils/api"
import { createErrorTitle, createErrorMessage } from "../utils/errorManager"

export const useRobotErrorData = (robotError) => {
    const [errorTitle, setErrorTitle] = useState("-")
    const [errorMessage, setErrorMessage] = useState("-")
    const lastFetchedCode = useRef(null)

    useEffect(() => {
        const fetchError = async () => {
            if (!robotError?.code || robotError.code === lastFetchedCode.current) return

            try {
                const data = await apiGet("/errors/" + robotError.code)

                setErrorTitle(createErrorTitle(robotError, data))
                setErrorMessage(createErrorMessage(data))

                lastFetchedCode.current = robotError.code
            } catch (err) {
                console.error("Error fetching error details:", err)
            }
        }

        fetchError()
    }, [robotError])

    return { errorTitle, errorMessage }
}