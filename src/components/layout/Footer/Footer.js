import "./Footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer py-4 mt-auto">
            <div className="container-fluid px-4">
                <div className="d-flex align-items-center justify-content-between small">
                    <div className="text-secondary">Created by Petr Tupec {currentYear}</div>
                    <div>
                        <a
                            href="https://github.com/PetrTupec/robot-dashboard-example/blob/main/README.md"
                            className="nav-link text-secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            O projektu
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer