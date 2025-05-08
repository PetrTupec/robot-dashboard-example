import "./ToolButtons.css"

const ToolButtons = ({ isRunning, viewMode, onClickChangeView, onClickPauseSimulation, aditionalButtons }) => {
    const buttonChangeViewText = viewMode === "old" ? "NEW" : "OLD"

    return (
        <div className="tool-buttons">
            <div className="btn-group shadow">
                <button
                    title="Toggle view"
                    className="btn btn-warning btn-change-view"
                    onClick={onClickChangeView}
                >
                    <span className="fw-bold text-small">{buttonChangeViewText}</span>
                </button>
                <button
                    title={isRunning ? "Pause simulation" : "Continue simulation"}
                    className="btn btn-warning"
                    onClick={onClickPauseSimulation}
                >
                    <i className={isRunning ? "fas fa-pause" : "fas fa-play"}></i>
                </button>
            </div>
            {aditionalButtons &&
                <div className="btn-group shadow ms-2">
                    {aditionalButtons}
                </div>}
        </div>
    )
}

export default ToolButtons