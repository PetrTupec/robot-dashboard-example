import { useEffect, useRef } from "react"
import { createRobots, setRobotStatus } from "../utils/robotManager"
import { updateRobotSimulationData } from "../mocks/robotSimulationData"

export const useRobotSimulation = (robotsCount) => {
    const isRunningRef = useRef(true)
    const robotsRef = useRef(createRobots(robotsCount))

    const updateRobotStatus = (prevRobots) => {
        return prevRobots.map(robot => {
            if (!robot.errorUntil || Date.now() > robot.errorUntil) {
                const updated = { ...robot }
                setRobotStatus(updated, robot.point + 1, 0, 0)
                updated.errorUntil = null
                return updated
            }
            return robot
        })
    }

    const simulateError = (prevRobots) => {
        const newRobots = [...prevRobots]
        const index = Math.floor(Math.random() * prevRobots.length)
        const robot = { ...newRobots[index] }

        robot.errorUntil = Date.now() + Math.floor(Math.random() * 20000 + 5000)
        setRobotStatus(robot, robot.point, 0, 1)
        newRobots[index] = robot

        return newRobots
    }

    useEffect(() => {
        robotsRef.current = createRobots(robotsCount)

        const updateRobotsInterval = setInterval(() => {
            if (isRunningRef.current) {
                robotsRef.current = updateRobotStatus(robotsRef.current)
                updateRobotSimulationData(robotsRef.current)
            }
        }, 1000)

        const errorInterval = setInterval(() => {
            if (isRunningRef.current) {
                robotsRef.current = simulateError(robotsRef.current)
            }
        }, 10000)

        return () => {
            clearInterval(updateRobotsInterval)
            clearInterval(errorInterval)
        }
    }, [robotsCount])

    return { isRunningRef }
}
