import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"

const Layout = () => {



    return (
        <>
            <div className="flex h-screen">

                <Sidebar />

                <div className="flex-1 flex-col">
                    <div className="h-10 bg-yellow-700">
                        <Navbar />
                    </div>
                    <main className="p-6 m-6 bg-gray-200 "><Outlet /></main>
                </div>
            </div>
        </>
    )
}

export default Layout;