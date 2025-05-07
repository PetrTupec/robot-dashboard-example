import "./Counter.css"

const counter = ({ min = 0, max = 999, value, onChange, toolTipDecrement, tooltipIncrement, toolTipValue }) => {
    const handleDecrement = () => onChange(value - 1)
    const handleIncrement = () => onChange(value + 1)

    return (
        <div className="btn-group bg-warning">
            <button
                title={toolTipDecrement}
                className="btn btn-warning"
                onClick={handleDecrement}
                disabled={value <= min}
            >
                <i className="fas fa-minus"></i>
            </button>
            <span
                title={toolTipValue}
                className="value">
                {value}
            </span>
            <button
                title={tooltipIncrement}
                className="btn btn-warning"
                onClick={handleIncrement}
                disabled={value >= max}
            >
                <i className="fas fa-plus"></i>
            </button>
        </div>
    )
}

export default counter