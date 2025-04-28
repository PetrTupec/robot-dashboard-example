const DashboardHeaderOld = () => {
    return (
        <div className="d-flex flex-row align-items-center gap-2 workplace-card-header workplace-card-header-bg-old py-1 border-bottom mb-3">
            <div>Server</div>
            <span className="ms-auto">Status</span>
            <div className="server-status-led led-green on"></div>
        </div>
    )
}

export default DashboardHeaderOld
