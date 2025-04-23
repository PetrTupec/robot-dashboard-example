const ToolButtons = ({ isRunning, onClickChangeView, onClickPauseSimulation, aditionalButtons }) => {
    return (
        <div className="tool-buttons">
            <div className="btn-group shadow">
                <button
                    className="btn btn-warning"
                    onClick={onClickChangeView}>
                    <i className="fas fa-rotate"></i>
                </button>
                <button
                    className="btn btn-warning"
                    onClick={onClickPauseSimulation}>
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