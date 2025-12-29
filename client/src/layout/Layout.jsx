import { Outlet } from "react-router-dom"
import { Navabr } from "../components/Navbar"
import { Footer } from "../components/Footer"

export const Layout = () => {



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