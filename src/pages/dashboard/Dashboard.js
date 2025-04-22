import Header from "../../components/Header"
import ModalDialog from "../../components/ModalDialog"
import { useEffect, useState } from "react"
import WorkplaceCard from "../../components/workplaceCard/WorkplaceCard"
import WorkplaceCardOld from "../../components/workplaceCard/WorkplaceCardOld"
import "./Dashboard.css"
import { useRobotSimulation } from "../../hooks/useRobotSimulation"

const Dashboard = () => {
  const initialStateModalDialog = { show: false, title: "", message: "" }
  const [modalDialog, setModalDialog] = useState(initialStateModalDialog)
  const [isRunning, setIsRunning] = useState(true)
  const [isOldView, setIsOldView] = useState(false)
  const WorkplaceCardComponent = isOldView ? WorkplaceCardOld : WorkplaceCard
  const { robots, isRunningRef } = useRobotSimulation()

  useEffect(() => {
    const body = document.body;

    if (isOldView) {
      body.setAttribute("data-bs-theme", "light");
    } else {
      const userPref = localStorage.getItem("theme") || "auto";
      body.setAttribute("data-bs-theme", userPref);
    }
  }, [isOldView]);

  const handleClickPauseSimulation = () => {
    isRunningRef.current = !isRunningRef.current
    setIsRunning(isRunningRef.current)
  }

  const handleClickChangeView = () => {
    setIsOldView(!isOldView)
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
      <div className="tool-buttons">
        <div className="btn-group shadow">
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
      {/* Server status */}
      <div className="row">
        <div className="col mb-2">
          {isOldView ?
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
      {/* Workplace dashboard */}
      <div className={`d-flex flex-row flex-wrap gap-3 ${isOldView ? "" : "justify-content-center"}`}>
        {robots.map((robot, key) =>
          <WorkplaceCardComponent
            key={key}
            robotName={robot.id}
            status={robot.status}
            running={robot.running}
            hold={robot.hold}
            error={robot.error}
            program={robot.program}
            point={String(robot.point).padStart(4, '0')}
            robotError={robot.robotError}
            setModalDialog={setModalDialog}
          />
        )}
      </div>
    </>
  )
}

export default Dashboard