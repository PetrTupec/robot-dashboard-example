import "./Counter.css"

const counter = ({ min = 0, max = 999, value, onChange }) => {
    const handleDecrement = () => onChange(value - 1)
    const handleIncrement = () => onChange(value + 1)

    return (
        <div className="btn-group bg-warning">
            <button
                className="btn btn-warning"
                onClick={handleDecrement}
                disabled={value <= min}
            >
                <i className="fas fa-arrow-left"></i>
            </button>
            <span className="value">{value}</span>
            <button
                className="btn btn-warning"
                onClick={handleIncrement}
                disabled={value >= max}
            >
                <i className="fas fa-arrow-right"></i>
            </button>
        </div>
    )
}

export default counter