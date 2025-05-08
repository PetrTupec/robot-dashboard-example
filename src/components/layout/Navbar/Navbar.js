import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = ({ theme, viewMode, onToggleTheme, onToggleMenu }) => {
    const iconClass = `text-${theme === "light" ? "warning" : "secondary"} fas fa-lightbulb`

    return (
        <nav className="navbar navbar-expand position-fixed w-100">
            <Link
                to={"/dashboard"}
                className="navbar-brand text-center text-white"
            >
                Dashboard exmaple
            </Link>
            {viewMode === "new" &&
                <button
                    title="Toggle theme"
                    className="btn ms-auto"
                    onClick={onToggleTheme}
                >
                    <i className={iconClass}></i>
                </button>}
            <div className="d-md-none">
                <button
                    title="Show menu"
                    className="nav-link btn ms-2 me-4 text-secondary"
                    onClick={onToggleMenu}
                >
                    <i className="fas fa-bars" />
                </button>
            </div>
        </nav >
    )
}

export default Navbar