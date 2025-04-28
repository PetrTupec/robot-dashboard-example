import Header from "../../components/layout/Header/Header"
import ModalDialog from "../../components/ModalDialog/ModalDialog"
import WorkplaceCard from "../../components/WorkplaceCard/WorkplaceCard"
import WorkplaceCardOld from "../../components/WorkplaceCard/WorkplaceCardOld"
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader"
import DashboardHeaderOld from "../../components/DashboardHeader/DashboardHeaderOld"
import ToolButtons from "../../components/ToolButtons/ToolButtons"
import Counter from "../../components/Counter/Counter"

import { useEffect, useState, useRef } from "react"
import { useRobotSimulation } from "../../hooks/useRobotSimulation"
import { apiGet } from "../../utils/api"

import "./Dashboard.css"

const Dashboard = () => {
  const initialStateModalDialog = { show: false, title: "", message: "" }
  const [modalDialog, setModalDialog] = useState(initialStateModalDialog)
  const [isRunning, setIsRunning] = useState(true)
  const [isOldView, setIsOldView] = useState(false)
  const [robotsCount, setRobotsCount] = useState(10)
  const [errorIndex, setErrorIndex] = useState(0)
  const [errorRobots, setErrorRobots] = useState([])
  const [isServerOnline, setIsServerOnline] = useState(true)
  const { isRunningRef } = useRobotSimulation(robotsCount)
  const [robots, setRobots] = useState([])
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      apiGet("/robots/status")
        .then((data) => {
          setRobots(data)
          setIsServerOnline(true)
        })
        .catch((error) => {
          console.error("Fetch error:", error)
          setIsServerOnline(false)
        })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

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

      <div className="row">
        <div className="col mb-3">
          {isOldView
            ? <DashboardHeaderOld
              serverStatus={isServerOnline} />
            : <DashboardHeader
              isOldView={isOldView}
              errorCount={errorRobots.length}
              onClickErrorCounter={scrollToRobot}
              serverStatus={isServerOnline}
            />
          }
        </div>
      </div>

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