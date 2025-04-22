const ServerStatusHeader = ({ isOldView }) => {
    return (
        <div className="row">
            <div className="col mb-2">
                <div className={
                    `d-flex flex-row align-items-center gap-2 ${isOldView ? "workplace-card-header workplace-card-header-bg-old py-1 border-bottom mb-4" : ""}`}
                >
                    <div>{isOldView ? "Server" : "Server status"}</div>
                    {isOldView && <span className="ms-auto">Status</span>}
                    <div className="server-status-led led-green on"></div>
                </div>
            </div>
        </div>
    )
}

export default ServerStatusHeader
