import { useState } from "react"
import { Outlet } from "react-router-dom"
import { useTheme } from "../../context/ThemeContext"
import Navbar from "./Navbar/Navbar"
import SideNavigation from "./SideNavigation/SideNavigation"
import Footer from "./Footer/Footer"

const SharedLayout = () => {
    const { theme, viewMode, toggleTheme } = useTheme()
    const [isSideNavigationVisible, setIsSideNavigationVisible] = useState(false);
   
    const handleClickToggleMenuVisibility = () => setIsSideNavigationVisible(prev => !prev);

    return (
        <>
            <Navbar
                theme={theme}
                viewMode={viewMode}
                onToggleTheme={toggleTheme}
                onToggleMenu={handleClickToggleMenuVisibility}
            />
            <main className="content-ms-custom">
                <SideNavigation isVisible={isSideNavigationVisible} />
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