import { useState } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import SideNavigation from "./SideNavigation"
import Footer from "./Footer"

const SharedLayout = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const handleClickToggle = () => {
        setIsSidebarVisible(!isSidebarVisible);
    }

    return (
        <>
            <Navbar onClickToggle={handleClickToggle} />
            <main className="content-ms-custom">
                <SideNavigation isVisible={isSidebarVisible} />
                <div className="d-flex flex-column flex-grow-1">
                    <div className="content p-4">
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </main>
        </>
    )
}

export default SharedLayout