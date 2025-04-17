const SidebarToggle = ({ onClick }) => {
    return (
        <div className="d-md-none">
            <button className="nav-link btn me-4 text-secondary" onClick={onClick} id="sidebarToggle">
                <i className="fas fa-bars" />
            </button>
        </div>
    )
}

export default SidebarToggle