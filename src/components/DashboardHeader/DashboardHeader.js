import "./DashboardHeader.css"
import StatusLed from "../StatusLed/StatusLed"

const DashboardHeader = ({ isOldView, errorCount, onClickErrorCounter, serverStatus }) => {
    const statusLedColor = serverStatus ? "green" : "red"

    return (
        <div className="d-flex flex-row align-items-center gap-2">
            <div className="d-flex">
                <span className="me-2">Server status</span>
                <StatusLed
                    isOld={true}
                    color={statusLedColor}
                    isOn={true}
                />
            </div>
            {(!isOldView && errorCount > 0) &&
                <button
                    title="Go to error"
                    className="btn btn-danger px-3 error-indicate-button shadow"
                    onClick={onClickErrorCounter}
                >
                    <i className="fas fa-triangle-exclamation"></i>
                    <span className="ms-2">{errorCount}</span>
                </button>
            }
        </div>
    )
}

export default DashboardHeader
