import "./navbar.css"
import { Link } from "react-router-dom"
import SidebarToggle from "./SidebarToggle"
import { useTheme } from "../utils/ThemeContext"

const Navbar = ({ onClickToggle }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="navbar navbar-expand position-fixed w-100">
            <Link to={"/"} className="navbar-brand text-center text-white">
                Dashboard exmaple
            </Link>
            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">

            </form>
            <ul className="navbar-nav ms-auto me-1 ms-md-0 me-lg-4">
                <li className="nav-item dropdown">
                    <a className="nav-link text-secondary dropdown-toggle" id="navbarDropdown" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw" /></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#!">Settings</a></li>
                        <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                        <li><a className="dropdown-item" href="#!">Logout</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li>
                            <a id="toggle" href="#!" className="dropdown-item" onClick={toggleTheme}>
                                {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                            </a>
                        </li>
                    </ul>
                </li>
            </ul >
            <SidebarToggle onClick={onClickToggle} />
        </nav >
    )
}

export default Navbar