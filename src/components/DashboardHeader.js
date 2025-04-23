import "./dashboardHeader.css"

const DashboardHeader = ({ isOldView, errorCount, onClickErrorConter }) => {
    return (
        <div className="row">
            <div className="col mb-3">
                <div className={
                    `d-flex flex-row align-items-center gap-2 ${isOldView ? "workplace-card-header workplace-card-header-bg-old py-1 border-bottom mb-3" : ""}`}
                >
                    <div>{isOldView ? "Server" : "Server status"}</div>
                    {isOldView &&
                        <span className="ms-auto">Status</span>}
                    <div className="server-status-led led-green on"></div>
                    {(!isOldView && errorCount > 0) &&
                        <button
                            className="btn btn-danger px-3 error-indicate-button shadow"
                            onClick={onClickErrorConter}
                        >
                            <i className="fas fa-triangle-exclamation"></i>
                            <span className="ms-2">{errorCount}</span>
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader
