import Header from "../../components/Header"
import ModalDialog from "../../components/ModalDialog"
import WorkplaceCard from "../../components/workplaceCard/WorkplaceCard"
import WorkplaceCardOld from "../../components/workplaceCard/WorkplaceCardOld"
import ServerStatusHeader from "../../components/ServerStatusHeader"
import ToolButtons from "../../components/ToolButtons"
import Counter from "../../components/Counter"
import { useEffect, useState } from "react"
import { useRobotSimulation } from "../../hooks/useRobotSimulation"
import "./Dashboard.css"

const Dashboard = () => {
  const initialStateModalDialog = { show: false, title: "", message: "" }
  const [modalDialog, setModalDialog] = useState(initialStateModalDialog)
  const [isRunning, setIsRunning] = useState(true)
  const [isOldView, setIsOldView] = useState(false)
  const WorkplaceCardComponent = isOldView ? WorkplaceCardOld : WorkplaceCard
  const [robotsCount, setRobotsCount] = useState(10)
  const { robots, isRunningRef } = useRobotSimulation(robotsCount)

  useEffect(() => {
    const body = document.body

    if (isOldView) {
      body.setAttribute("data-bs-theme", "light")
    } else {
      const userPref = localStorage.getItem("theme") || "auto"
      body.setAttribute("data-bs-theme", userPref)
    }
  }, [isOldView])

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

      <ToolButtons
        isRunning={isRunning}
        onClickChangeView={handleClickChangeView}
        onClickPauseSimulation={handleClickPauseSimulation}
        aditionalButtons={
          <Counter
            min={1}
            max={20}
            value={robotsCount}
            onChange={setRobotsCount}
          />
        }
      />
      <ServerStatusHeader
        isOldView={isOldView}
      />
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