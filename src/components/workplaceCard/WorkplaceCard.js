import robotIcon from "../../assets/icon_robot.png"
import StatusLed from "../StatusLed/StatusLed"
import { forwardRef } from "react"
import "./WorkplaceCard.css"
import { useRobotErrorData } from "../../hooks/useRobotErrorMessage"

const WorkplaceCard = forwardRef((props, ref) => {
    const {
        id,
        status,
        running,
        hold,
        error,
        program,
        point,
        robotError,
        setModalDialog
    } = props

    
    const { errorTitle, errorMessage } = useRobotErrorData(robotError)
    
    const containerClass = `workplace-card-container ${error ? "red-blinking-shadow" : ""}`;
    const headerClass = `workplace-card-header workplace-card-header${error ? "-error-bg" : "-bg"}`;
    
    const formattedPoint = String(point).padStart(4, '0')

    const handleOnClickInfo = () => {
        setModalDialog({
            show: true,
            title: errorTitle,
            message: errorMessage
        })
    }

    return (
        <div
            className={containerClass}
            ref={ref}
        >
            <div className="workplace-card">
                <div className={headerClass} >
                    <strong>Robot {id}</strong>
                </div>
                <div className="workplace-card-body p-2">
                    <div className="row d-flex mb-1">
                        <div className="col d-flex flex-row align-items-center">
                            <img
                                src={robotIcon}
                                alt="Robot icon"
                            />
                            <span className="fst-italic">{status ? "ONLINE" : "OFFLINE"}</span>
                            <div className="ms-auto text-small">
                                <StatusLed
                                    isOld={false}
                                    text={"Running"}
                                    color={"green"}
                                    isOn={running}
                                />
                                <StatusLed
                                    isOld={false}
                                    text={"Hold"}
                                    color={"yellow"}
                                    isOn={hold}
                                />
                                <StatusLed
                                    isOld={false}
                                    text={"Error"}
                                    color={"red"}
                                    isOn={error}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row text-small">
                        <span className="col">Program</span>
                        <span className="col-auto ms-auto">Point</span>
                    </div>
                    <div className="row text-small fst-italic">
                        <span className="col">{program}</span>
                        <span className="col-auto ms-auto">P{formattedPoint}</span>
                    </div>
                </div>
            </div>

            {!!error &&
                <div className="workplace-card-footer-bg d-flex p-2 text-small">
                    <div>{errorTitle}</div>
                    <button
                        className="ms-auto border-0 bg-warning icon-question d-flex align-items-center justify-content-center"
                        onClick={handleOnClickInfo}>
                        <span className="text-dark">?</span>
                    </button>
                </div>}
        </div>
    )
})

export default WorkplaceCard