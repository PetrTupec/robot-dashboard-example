import robotIcon from "../../assets/icon_robot.png"
import StatusLedRobot from "../StatusLedRobot"
import { findError } from "../../utils/ErrorManager"
import "./workplaceCard.css"

const WorkplaceCard = ({ id, status, running, hold, error, program, point, robotError, setModalDialog }) => {
    const errorData = findError(robotError.code)
    point = String(point).padStart(4, '0')

    const handleOnClickInfo = () => {
        const title = errorData.id + " - " + errorData.message.en
        const message =
            "Message:\n" + errorData.message.en + "\n\n" +
            "Cause:\n" + errorData.cause.en + "\n\n" +
            "Solution:\n" + errorData.solution.en

        setModalDialog({
            show: true,
            title: title,
            message: message
        })
    }

    return (
        <div className={`workplace-card-container ${error ? "red-blinking-shadow" : ""}`}>
            <div className="workplace-card">
                <div className={`workplace-card-header workplace-card-header${error ? "-error-bg" : "-bg"}`} >
                    <strong>Robot {id}</strong>
                </div>
                <div className="workplace-card-body p-2">
                    <div className="row d-flex mb-1">
                        <div className="col d-flex flex-row align-items-center">
                            <img src={robotIcon} alt="robot-icon" /> <i className="small">{status ? "ONLINE" : "OFFLINE"}</i>
                            <div className="ms-auto text-small">
                                <StatusLedRobot
                                    isOld={false}
                                    text={"Running"}
                                    color={"green"}
                                    isOn={running} />
                                <StatusLedRobot
                                    isOld={false}
                                    text={"Hold"}
                                    color={"yellow"}
                                    isOn={hold} />
                                <StatusLedRobot
                                    isOld={false}
                                    text={"Error"}
                                    color={"red"}
                                    isOn={error} />
                            </div>
                        </div>
                    </div>
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
            {error > 0 &&
                <div className="workplace-card-footer-bg d-flex p-2 text-small">
                    <div>{robotError.code} - {errorData ? errorData.message.en : "Error not find"}</div>
                    <button
                        className="ms-auto border-0 bg-warning icon-question d-flex align-items-center justify-content-center"
                        onClick={handleOnClickInfo}>
                        <span className="text-dark">?</span>
                    </button>
                </div>}
        </div>
    )
}

export default WorkplaceCard