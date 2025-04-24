import robotIcon from "../../assets/icon_robot.png"
import StatusLed from "../StatusLed/StatusLed"
import "./WorkplaceCardOld.css"

const WorkplaceCard = ({ robotName, status, running, hold, error, program, point }) => {
    point = String(point).padStart(4, '0')

    return (
        <div>
            <div className="workplace-card-old">
                <div className="workplace-card-header-old workplace-card-header-bg-old">
                    <span>Robot {robotName}</span>
                </div>
                <div className="workplace-card-body">
                    <div className="row d-flex border-bottom p-2">
                        <div className="col d-flex flex-row align-items-center">
                            <img
                                src={robotIcon}
                                alt="Robot icon"
                            />
                            <span className="fst-italic">{status ? "ONLINE" : "OFFLINE"}</span>
                            <div className="ms-auto text-small">
                                <StatusLed
                                    isOld={true}
                                    text={"Running"}
                                    color={"green"}
                                    isOn={running}
                                />
                                <StatusLed
                                    isOld={true}
                                    text={"Hold"}
                                    color={"yellow"}
                                    isOn={hold}
                                />
                                <StatusLed
                                    isOld={true}
                                    text={"Error"}
                                    color={"red"}
                                    isOn={error}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="px-2 border-top">
                        <div className="row text-small">
                            <span className="col">Program</span>
                            <span className="col-auto ms-auto">Point</span>
                        </div>
                        <div className="row text-small fst-italic">
                            <span className="col">{program}</span>
                            <span className="col-auto ms-auto">P{point}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkplaceCard