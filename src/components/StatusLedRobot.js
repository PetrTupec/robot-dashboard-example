import "./statusLedRobot.css"

const StatusLedRobot = ({ text, color, isOn }) => {
    return (
        <div className="col d-flex align-items-center">
            <span className="me-1">{text}</span><div className={`led-robot ms-auto led-${color} ${isOn ? 'on' : 'off'}`}></div>
        </div>
    )
}

export default StatusLedRobot
