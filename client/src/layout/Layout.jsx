import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"

const Layout = () => {



    return (
        <>
            <div className="flex max-h-screen">

                <Sidebar />

                <div className="flex-1 flex flex-col min-h-screen">
                    <div className="h-10 bg-slate-800">
                        <Navbar />
                    </div>
                    <main className="flex-1 p-6 bg-gray-200 overflow-auto"><Outlet /></main>
                </div>
            </div>
        </>
    )
}

export default Layout;