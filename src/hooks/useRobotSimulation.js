import { useEffect, useRef, useState } from "react"

export const useRobotSimulation = () => {
    const robotErrors = [
        { code: "A7051", message: "", subMessage: "" },      // Servo power down
        { code: "E4010", message: "", subMessage: "" },      // Safety holder working
        { code: "E3100", message: "", subMessage: "G5" },    // Please turn on Servo(**) **is Axis name.
        { code: "E7001", message: "", subMessage: "FA" },    // Collision detected (FA) 
        { code: "E1900", message: "", subMessage: "" },      // HOLD user defined message
        { code: "E1050", message: "", subMessage: "" },      // Position does not match
        { code: "W1610", message: "", subMessage: "" },      // Wire feeder lock detected
        { code: "W5050", message: "", subMessage: "" }       // Example of unknown error
    ]
    const robotsCount = 10
    const isRunningRef = useRef(true)

    const createRobots = () => {
        const robotArray = []

        for (let i = 0; i < robotsCount; i++) {
            robotArray.push({
                id: i,
                status: 1,
                running: 1,
                hold: 0,
                error: 0,
                program: `weld_program_${Math.floor(Math.random() * 90000 + 10000)}`,
                point: 0,
                robotError: {
                    code: 0,
                    message: "",
                    subMessage: ""
                }
            })
        }

        return robotArray
    }

    const [robots, setRobots] = useState([])

    const setRobotStatus = (robot, program, point, hold, error) => {
        const robotError = error
            ? { ...robotErrors[Math.floor(Math.random() * robotErrors.length)] }
            : { code: 0, message: "", subMessage: "" }

        robot.status = 1
        robot.running = error || hold ? 0 : 1
        robot.hold = error || hold ? 1 : 0
        robot.error = error ? 1 : 0
        robot.program = program
        robot.point = point
        robot.robotError = robotError
    }

    useEffect(() => {
        setRobots(createRobots())

        const updateInterval = setInterval(() => {
            if (!isRunningRef.current) return

            setRobots(prev =>
                prev.map(robot => {
                    const now = Date.now()
                    if (!robot.errorUntil || now > robot.errorUntil) {
                        const updated = { ...robot }
                        setRobotStatus(updated, robot.program, robot.point + 1, 0, 0)
                        updated.errorUntil = null
                        return updated
                    }
                    return robot
                })
            )
        }, 1000)

        const errorInterval = setInterval(() => {
            if (!isRunningRef.current) return

            setRobots(prev => {
                const index = Math.floor(Math.random() * prev.length)
                const robot = { ...prev[index] }

                robot.errorUntil = Date.now() + Math.floor(Math.random() * 20000 + 5000)
                setRobotStatus(robot, robot.program, robot.point, 0, 1)

                const newRobots = [...prev]
                newRobots[index] = robot
                return newRobots
            })
        }, 10000)

        return () => {
            clearInterval(updateInterval)
            clearInterval(errorInterval)
        }
    }, [])

    return { robots, isRunningRef }
}
