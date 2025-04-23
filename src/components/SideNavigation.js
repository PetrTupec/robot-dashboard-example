import "./sideNavigation.css";
import { Link } from "react-router-dom";

const SideNavigation = ({ isVisible }) => {
    return (
        <>
            {isVisible && <div className="sidenav-overlay"></div>}
            <div
                id="sidenav"
                className={"sidenav position-fixed top-0 start-0 h-100 " + (isVisible ? 'd-flex' : 'd-none') + " d-md-flex flex-column"}
            >
                <div className="sidenav-menu-header text-secondary p-2">Main</div>
                <ul className="nav nav-pills flex-column mb-auto p-2">
                    <li className="nav-item">
                        <Link
                            to={"/dashboard"}
                            className="nav-link text-secondary"
                        >
                            <i className="fas fa-th-large text-warning"></i>
                            <span className="ms-2">Dashboard</span>
                        </Link>
                    </li>
                </ul>
                <div className="sidenav-menu-footer bg-dark text-secondary">
                    <div className="small">Přihlášený:</div>
                    <span>admin</span>
                </div>
            </div>
        </>
    )
}

export default SideNavigation