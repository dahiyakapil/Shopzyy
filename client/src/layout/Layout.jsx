import { Outlet } from "react-router-dom"
import { Navabr } from "../components/Navbar"
import { Footer } from "../components/Footer"

const Layout = () => {



    return (
        <>
            <div>
                <Navabr />
            </div>
            <div>
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default Layout;