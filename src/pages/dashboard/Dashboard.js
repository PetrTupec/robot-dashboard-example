import Header from "../../components/Header"
import ModalDialog from "../../components/ModalDialog"
import { simulateRobotStatus } from "../../utils/RobotStatusSimulator"
import { useEffect, useRef, useState } from "react"
import WorkplaceCard from "../../components/workplaceCard/WorkplaceCard"
import WorkplaceCardOld from "../../components/workplaceCard/WorkplaceCardOld"
import "./Dashboard.css"

const Dashboard = () => {
  const initialStateModalDialog = { show: false, title: "", message: "" }
  const [modalDialog, setModalDialog] = useState(initialStateModalDialog)
  const [robots, setRobots] = useState([])
  const [isRunning, setIsRunning] = useState(true)
  const isRunningRef = useRef(true)
  const [isOld, isOldState] = useState(false)

  useEffect(() => {
    isRunningRef.current = true
    const robotArray = simulateRobotStatus(isRunningRef)
    setRobots([...robotArray])

    const interval = setInterval(() => {
      setRobots([...robotArray])
    }, 1000)

    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    const body = document.body;

    if (isOld) {
      body.setAttribute("data-bs-theme", "light");
    } else {
      const userPref = localStorage.getItem("theme") || "auto";
      body.setAttribute("data-bs-theme", userPref);
    }
  }, [isOld]);

  const handleClickPauseSimulation = () => {
    isRunningRef.current = !isRunningRef.current
    setIsRunning(isRunningRef.current)
  }

  const handleClickChangeView = () => {
    isOldState(!isOld)
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
      {/* Tool buttons */}
      <div className="row text-end tool-buttons">
        <div className="col">
          <div className="ms-auto btn-group">
            <button
              className="btn btn-warning"
              onClick={handleClickChangeView}>
              <i className="fas fa-rotate"></i>
            </button>
            <button
              className="btn btn-warning"
              onClick={handleClickPauseSimulation}>
              <i className={isRunning ? "fas fa-pause" : "fas fa-play"}></i>
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col mb-2">
          {/* Server status */}
          {isOld ?
            <div className="d-flex flex-row align-items-center gap-2 workplace-card-header workplace-card-header-bg-old py-1 border-bottom mb-4">
              <div>Server</div>
              <span className="ms-auto">Status</span>
              <div className="server-status-led led-green on"></div>
            </div>
            :
            <div className="d-flex flex-row align-items-center gap-2">
              <div>Server status</div>
              <div className="server-status-led led-green on"></div>
            </div>}
        </div>
      </div>
      <div className={`d-flex flex-row flex-wrap gap-3 ${isOld ? "" : "justify-content-center"}`}>
        {robots.map((robot, key) =>
          isOld ?
            <WorkplaceCardOld
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
            :
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