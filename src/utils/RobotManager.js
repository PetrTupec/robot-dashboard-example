const robotErrors = [
    { code: "A7051", message: "", subMessage: "" },                                     // Servo power down
    { code: "E4010", message: "", subMessage: "" },                                     // Safety holder working
    { code: "E3100", message: "", subMessage: "G5" },                                   // Please turn on Servo(**) **is Axis name.
    { code: "E7001", message: "", subMessage: "FA" },                                   // Collision detected (FA) 
    { code: "E1900", message: "", subMessage: "Check position of the next point" },     // HOLD user defined message
    { code: "E1050", message: "", subMessage: "" },                                     // Position does not match
    { code: "W1610", message: "", subMessage: "" },                                     // Wire feeder lock detected
    { code: "W5050", message: "", subMessage: "" }                                      // Example of unknown error
]

export const createRobots = (robotsCount) => {
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

export const setRobotStatus = (robot, point, hold, error) => {
    const robotError = error
        ? { ...robotErrors[Math.floor(Math.random() * robotErrors.length)] }
        : { code: 0, message: "", subMessage: "" }

    robot.status = 1
    robot.running = error || hold ? 0 : 1
    robot.hold = error || hold ? 1 : 0
    robot.error = error ? 1 : 0
    robot.point = point
    robot.robotError = robotError
}