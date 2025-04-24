import "./StatusLed.css"

const StatusLed = ({ isOld, text, color, isOn }) => {
    return (
        <div className="col d-flex align-items-center">
            <span className="me-1">{text}</span>
            <div className={`${isOld ? "server-status-led" : "led-robot"} ms-auto led-${color} ${isOn ? 'on' : 'off'}`}></div>
        </div>
    )
}

export default StatusLed
