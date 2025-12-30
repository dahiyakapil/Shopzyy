import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"

const Layout = () => {



    return (
        <>
            <div>
                <Navbar />
            </div>
            <div style={{ display: "flex" }}>
                <Sidebar />
                <Outlet />
            </div>
        </>
    )
}

export default Layout;