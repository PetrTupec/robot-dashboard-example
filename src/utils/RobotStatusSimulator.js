const robotsCount = 10
const robotErrors = [
  { code: "A7051", message: "", subMessage: "" },      // Servo power down
  { code: "E4010", message: "", subMessage: "" },      // Safety holder working
  { code: "E3100", message: "", subMessage: "G5" },    // Please turn on Servo(**) **is Axis name.
  { code: "E7001", message: "", subMessage: "FA" },    // Collision detected (FA) 
  { code: "E1900", message: "", subMessage: "" },      // HOLD user defined message
  { code: "E1050", message: "", subMessage: "" },      // Position does not match
  { code: "W1610", message: "", subMessage: "" }       // Wire feeder lock detected
]

const createRobots = () => {
  const robotArray = [];
  for (let i = 0; i < robotsCount; i++) {
    robotArray.push({
      id: i,
      status: 1,
      running: 1,
      hold: 0,
      error: 0,
      program: "weld_program_" + Math.floor(Math.random() * 90000 + 10000),
      point: 0,
      robotError: {
        code: 0,
        message: "",
        subMessage: ""
      }
    });
  }
  return robotArray;
};

const setRobotStatus = (robot, program, point, hold, error) => {
  robot.status = 1
  robot.running = error || hold ? 0 : 1
  robot.hold = error || hold ? 1 : 0
  robot.error = error ? 1 : 0
  robot.program = program
  robot.point = point

  if (error) {
    const randomError = robotErrors[Math.floor(Math.random() * robotErrors.length)]
    robot.robotError = { ...randomError }
  } else {
    robot.robotError = { code: 0, message: "", subMessage: "" }
  }
};

export const simulateRobotStatus = (isRunningRef) => {
  const robots = createRobots()

  // Pravidelná aktualizace stavu robotů
  setInterval(() => {
    if (!isRunningRef.current) return
    const now = Date.now();
    robots.forEach(robot => {
      if (!robot.errorUntil || now > robot.errorUntil) {
        setRobotStatus(robot, robot.program, robot.point + 1, 0, 0)
        robot.errorUntil = null
      }
    })
  }, 1000)

  // Přidělění erroru náhodnému robotu vybranému po deseti vteřinách na dobu mezi 5 až 20 vteřinami 
  setInterval(() => {
    if (!isRunningRef.current) return
    const robot = robots[Math.floor(Math.random() * robots.length)]
    robot.errorUntil = Date.now() + Math.floor(Math.random() * 20000 + 5000)
    setRobotStatus(robot, robot.program, robot.point, 0, 1)
  }, 10000)

  return robots
};