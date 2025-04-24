import Header from "../../components/layout/Header/Header"
import ModalDialog from "../../components/ModalDialog/ModalDialog"
import WorkplaceCard from "../../components/workplaceCard/WorkplaceCard"
import WorkplaceCardOld from "../../components/workplaceCard/WorkplaceCardOld"
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader"
import ToolButtons from "../../components/ToolButtons/ToolButtons"
import Counter from "../../components/Counter/Counter"
import { useEffect, useState, useRef } from "react"
import { useRobotSimulation } from "../../hooks/useRobotSimulation"
import "./Dashboard.css"

const Dashboard = () => {
  const initialStateModalDialog = { show: false, title: "", message: "" }
  const [modalDialog, setModalDialog] = useState(initialStateModalDialog)
  const [isRunning, setIsRunning] = useState(true)
  const [isOldView, setIsOldView] = useState(false)
  const [robotsCount, setRobotsCount] = useState(10)
  const [errorIndex, setErrorIndex] = useState(0)
  const [errorRobots, setErrorRobots] = useState([])
  const { robots, isRunningRef } = useRobotSimulation(robotsCount)
  const WorkplaceCardComponent = isOldView ? WorkplaceCardOld : WorkplaceCard
  const refs = useRef({})

  const scrollToRobot = () => {
    if (errorRobots.length === 0) return

    const nextRobot = errorRobots[errorIndex % errorRobots.length]
    refs.current[nextRobot.id]?.scrollIntoView({ behavior: "smooth", block: "center" })
    setErrorIndex((prev) => (prev + 1) % errorRobots.length)
  }

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
    setErrorRobots(robots.filter(robot => robot.error === 1))
  }, [robots])

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
        errorCount={errorRobots.length}
        onClickErrorConter={scrollToRobot}
      />

      <div className={`d-flex flex-row flex-wrap gap-3 ${isOldView ? "" : "justify-content-center"}`}>
        {robots.map((robot) =>
          <WorkplaceCardComponent
            key={robot.id}
            ref={(el) => (refs.current[robot.id] = el)}
            {...robot}
            setModalDialog={setModalDialog}
          />
        )}
      </div>

    </>
  )
}

export default Dashboard