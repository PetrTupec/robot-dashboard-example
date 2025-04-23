import Header from "../../components/Header"
import ModalDialog from "../../components/ModalDialog"
import WorkplaceCard from "../../components/workplaceCard/WorkplaceCard"
import WorkplaceCardOld from "../../components/workplaceCard/WorkplaceCardOld"
import DashboardHeader from "../../components/DashboardHeader"
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
  const [robotsCount, setRobotsCount] = useState(10)
  const [robotErrorCount, setRobotErrorCount] = useState(0)
  const { robots, isRunningRef } = useRobotSimulation(robotsCount)
  const WorkplaceCardComponent = isOldView ? WorkplaceCardOld : WorkplaceCard

  useEffect(() => {
    const body = document.body

    if (isOldView) {
      body.setAttribute("data-bs-theme", "light")
    } else {
      const userPref = localStorage.getItem("theme") || "auto"
      body.setAttribute("data-bs-theme", userPref)
    }
  }, [isOldView])

  useEffect(() => {
    setRobotErrorCount(robots.filter(robot => robot.error === 1).length)
  }, [robots])

  const handleClickPauseSimulation = () => {
    isRunningRef.current = !isRunningRef.current
    setIsRunning(isRunningRef.current)
  }

  const handleClickChangeView = () => {
    setIsOldView(!isOldView)
  }

  const handleOnCloseModalDialog = () => {
    setModalDialog({ initialStateModalDialog })
  }

  return (
    <>

      <ModalDialog
        show={modalDialog.show}
        onClose={handleOnCloseModalDialog}
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

      <DashboardHeader
        isOldView={isOldView}
        errorCount={robotErrorCount}
      />

      <div className={`d-flex flex-row flex-wrap gap-3 ${isOldView ? "" : "justify-content-center"}`}>
        {robots.map((robot) =>
          <WorkplaceCardComponent
            key={robot.id}
            {...robot}
            setModalDialog={setModalDialog}
          />
        )}
      </div>

    </>
  )
}

export default Dashboard