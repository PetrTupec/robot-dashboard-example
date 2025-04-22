import robotIcon from "../../assets/icon_robot.png"
import StatusLedRobot from "../StatusLedRobot"
import "./workplaceCardOld.css"

const WorkplaceCard = ({ robotName, status, running, hold, error, program, point }) => {

    return (
        <div>
            <div className="workplace-card-old">
                <div className="workplace-card-header-old workplace-card-header-bg-old">
                    <span>Stanice 1 Robot {robotName}</span>
                </div>
                <div className="workplace-card-body">
                    <div className="row d-flex border-bottom p-2">
                        <div className="col d-flex flex-row align-items-center">
                            <img src={robotIcon} alt="robot-icon" /> <i className="small">{status ? "ONLINE" : "OFFLINE"}</i>
                            <div className="ms-auto text-small">
                                <StatusLedRobot
                                    isOld={true}
                                    text={"Running"}
                                    color={"green"}
                                    isOn={running} />
                                <StatusLedRobot
                                    isOld={true}
                                    text={"Hold"}
                                    color={"yellow"}
                                    isOn={hold} />
                                <StatusLedRobot
                                    isOld={true}
                                    text={"Error"}
                                    color={"red"}
                                    isOn={error} />
                            </div>
                        </div>
                    </div>
                    <div className="px-2 border-top">
                        <div className="row text-small">
                            <span className="col">Program</span>
                            <span className="col-auto ms-auto">Point</span>
                        </div>
                        <div className="row text-small">
                            <i className="col">{program}</i>
                            <i className="col-auto ms-auto">P{point}</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkplaceCard