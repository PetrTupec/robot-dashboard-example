import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer py-4 mt-auto">
            <div className="container-fluid px-4">
                <div className="d-flex align-items-center justify-content-between small">
                    <div className="text-secondary">Vytvořil Petr Tupec {currentYear}</div>
                    <div>
                        <Link
                            to={"/#"}
                            className="nav-link text-secondary"
                        >
                            O projektu
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer