import { useEffect, useRef, useState } from "react"
import { createRobots, setRobotStatus } from "../utils/RobotManager"

export const useRobotSimulation = (robotsCount) => {
    const isRunningRef = useRef(true)
    const [robots, setRobots] = useState([])

    useEffect(() => {
        setRobots(createRobots(robotsCount))

        const updateInterval = setInterval(() => {
            if (!isRunningRef.current) return

            setRobots(prev =>
                prev.map(robot => {
                    const now = Date.now()
                    if (!robot.errorUntil || now > robot.errorUntil) {
                        const updated = { ...robot }
                        setRobotStatus(updated, robot.point + 1, 0, 0)
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
                setRobotStatus(robot, robot.point, 0, 1)

                const newRobots = [...prev]
                newRobots[index] = robot
                return newRobots
            })
        }, 10000)

        return () => {
            clearInterval(updateInterval)
            clearInterval(errorInterval)
        }
    }, [robotsCount])

    return { robots, isRunningRef }
}
