import Header from "../../components/Header"
import WorkplaceCard from "../../components/WorkplaceCard"
import { simulateRobotStatus } from "../../utils/RobotStatusSimulator"
import { useEffect, useState } from "react"
import "./Dashboard.css"

const Dashboard = () => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    const robotArray = simulateRobotStatus();
    setRobots([...robotArray]);

    const interval = setInterval(() => {
      setRobots([...robotArray]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header title={"Dashboard"} />
      <div className="row">
        <div className="col d-flex flex-row align-items-center">
          <div>Server status</div><div className="server-status-dot server-status-run ms-2"></div>
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {robots.map(robot =>
          <WorkplaceCard
            robotName={robot.id}
            status={robot.status}
            running={robot.running}
            hold={robot.hold}
            error={robot.error}
            program={robot.program}
            point={robot.point}
            robotError={robot.robotError}
          />
        )}
      </div>
    </>
  )
}

export default Dashboard