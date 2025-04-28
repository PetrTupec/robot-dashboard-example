import "./DashboardHeader.css"

const DashboardHeader = ({ isOldView, errorCount, onClickErrorCounter }) => {
    return (
        <div className="d-flex flex-row align-items-center gap-2">
            <div>Server status</div>
            <div className="server-status-led led-green on"></div>
            {(!isOldView && errorCount > 0) &&
                <button
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
