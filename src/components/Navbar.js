import "./navbar.css"
import { Link } from "react-router-dom"
import { useTheme } from "../utils/ThemeContext"

const Navbar = ({ onClickToggle }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="navbar navbar-expand position-fixed w-100">
            <Link to={"/"} className="navbar-brand text-center text-white">
                Dashboard exmaple
            </Link>
            <button className="btn text-light ms-auto" onClick={toggleTheme}>
                <i className={`text-warning fas fa-${theme === "light" ? "moon" : "sun"}`}></i>
            </button>
            <div className="d-md-none">
                <button className="nav-link btn me-4 text-secondary" onClick={onClickToggle}>
                    <i className="fas fa-bars" />
                </button>
            </div>
        </nav >
    )
}

export default Navbar