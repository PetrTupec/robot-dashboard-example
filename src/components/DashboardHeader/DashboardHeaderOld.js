import StatusLed from "../StatusLed/StatusLed"

const DashboardHeaderOld = ({serverStatus}) => {
    const statusLedColor = serverStatus ? "green" : "red"
    return (
        <div className="d-flex flex-row align-items-center gap-2 workplace-card-header workplace-card-header-bg-old py-1 border-bottom mb-3">
            <div>Server</div>
            <div className="ms-auto d-flex">
                <span className="me-2">Status</span>
                <StatusLed
                    isOld={true}
                    color={statusLedColor}
                    isOn={true}
                />
            </div>
        </div>
    )
}

export default DashboardHeaderOld
