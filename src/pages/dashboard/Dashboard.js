import Header from "../../components/Header"
import WorkplaceCard from "../../components/WorkplaceCard"
import ModalDialog from "../../components/ModalDialog"
import { simulateRobotStatus } from "../../utils/RobotStatusSimulator"
import { useEffect, useRef, useState } from "react"
import "./Dashboard.css"
import "../../components/statusLedRobot.css"

const Dashboard = () => {
  const initialStateModalDialog = { show: false, title: "", message: "" }
  const [modalDialog, setModalDialog] = useState(initialStateModalDialog)
  const [robots, setRobots] = useState([])
  const [isRunning, setIsRunning] = useState(true)
  const isRunningRef = useRef(true)

  useEffect(() => {
    isRunningRef.current = true
    const robotArray = simulateRobotStatus(isRunningRef);
    setRobots([...robotArray]);

    const interval = setInterval(() => {
      setRobots([...robotArray]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClickPauseSimulation = () => {
    isRunningRef.current = !isRunningRef.current
    setIsRunning(isRunningRef.current)
  }

  return (
    <>
      <ModalDialog
        show={modalDialog.show}
        onClose={() => setModalDialog({ initialStateModalDialog })}
        onCloseText={"Close"}
        title={modalDialog.title}
        message={modalDialog.message}
      />
      <Header title={"Dashboard"} />
      <div className="row">
        <div className="col mb-2">
          {/* Server status */}
          <div className="d-flex flex-row align-items-center gap-2">
            <div>Server status</div>
            <div className="server-status-led led-green on"></div>
            {/* Tool buttons */}
            <div className="ms-auto">
              <button
                className="btn btn-warning"
                onClick={handleClickPauseSimulation}>
                <i className={isRunning ? "fas fa-pause" : "fas fa-play"}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-center gap-3">
        {robots.map((robot, key) =>
          <WorkplaceCard
            key={key}
            robotName={robot.id}
            status={robot.status}
            running={robot.running}
            hold={robot.hold}
            error={robot.error}
            program={robot.program}
            point={robot.point}
            robotError={robot.robotError}
            setModalDialog={setModalDialog}
          />
        )}
      </div>
    </>
  )
}

export default Dashboard