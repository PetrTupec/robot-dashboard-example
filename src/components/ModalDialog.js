import "./modalDialog.css"

function modalDialog({ show, onClose, onCloseText, onConfirm, onComfirmText, title, message }) {
    return show
        ? <>
            <div className="modal-overlay"></div>
            <div className="modal fade show"
                style={{ display: "block" }}
                tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {title && <div className="modal-header">{title}</div>}
                        <div className="modal-body">{message}</div>
                        <div className="modal-footer">
                            {onConfirm &&
                                <button type="button" className="btn btn-primary btn-sm small" onClick={onConfirm}>
                                    {onComfirmText}
                                </button>
                            }
                            {onClose &&
                                <button type="button" className="btn btn-secondary btn-sm small" onClick={onClose}>
                                    {onCloseText}
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
        : null
}
export default modalDialog