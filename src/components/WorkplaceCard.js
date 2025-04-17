import "./workplaceCard.css"
import robotIcon from "../assets/icon_robot.png"
import StatusLedRobot from "./StatusLedRobot"

const WorkplaceCard = ({robotName, status, running, hold, error, program, point}) => {
    return (
        <div className="workplace-card g-0">
            <div className="workplace-card-header">
                <strong>Stanice 1  | </strong><span>Robot {robotName}</span>
            </div>
            <div className="workplace-card-body p-2 small">
                <div className="row d-flex mb-1 small">
                    <div className="col d-flex flex-row align-items-center">
                        <img src={robotIcon} alt="robot-icon" /> <span>{status ? "ONLINE" : "OFFLINE"}</span>
                        <div className="ms-auto small">
                            <StatusLedRobot 
                            text={"Running"}
                            color={"green"}
                            isOn={running}/>
                            <StatusLedRobot 
                            text={"Hold"}
                            color={"yellow"}
                            isOn={hold}/>
                            <StatusLedRobot 
                            text={"Error"}
                            color={"red"}
                            isOn={error}/>
                        </div>
                    </div>
                </div>
                <div className="row small">
                    <span className="col small">Program</span>
                    <span className="col-auto small ms-auto">Point</span>
                </div>
                <div className="row small">
                    <i className="col small">{program}</i>
                    <i className="col-auto small ms-auto">P{point}</i>
                </div>
            </div>
        </div>
    )
}

export default WorkplaceCard