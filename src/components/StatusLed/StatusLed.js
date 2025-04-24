import "./StatusLed.css"

const StatusLed = ({ isOld, text, color, isOn }) => {
    const ledClass = isOld ? "server-status-led" : "led-robot"
    const ledStatus = isOn ? 'on' : 'off'
    const statusLedClass = `${ledClass} ms-auto led-${color} ${ledStatus}`

    return (
        <div className="col d-flex align-items-center">
            <span className="me-1">{text}</span>
            <div className={statusLedClass}></div>
        </div>
    )
}

export default StatusLed
