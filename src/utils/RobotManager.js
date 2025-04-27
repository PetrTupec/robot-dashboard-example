const robotErrors = [
    { code: "AX051", message: "", subMessage: "" },                                     // Servo power failure
    { code: "EX410", message: "", subMessage: "" },                                     // Safety mechanism active
    { code: "EX310", message: "", subMessage: "G5" },                                   // E-axis servo is off
    { code: "EX701", message: "", subMessage: "FA" },                                   // Obstacle or cold start issue 
    { code: "EX190", message: "", subMessage: "Check position of the next point" },     // Custom user message
    { code: "EX150", message: "", subMessage: "" },                                     // Orientation mismatch
    { code: "WX610", message: "", subMessage: "" },                                     // Wire feed jammed
    { code: "WX050", message: "", subMessage: "" }                                      // Example of unknown error
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
    const robotError = robot.robotError.code !== 0 ? robot.robotError : (error
        ? { ...robotErrors[Math.floor(Math.random() * robotErrors.length)] }
        : { code: 0, message: "", subMessage: "" });

    
    robot.status = 1
    robot.running = error || hold ? 0 : 1
    robot.hold = error || hold ? 1 : 0
    robot.error = error ? 1 : 0
    robot.point = point
    robot.robotError = robotError
}