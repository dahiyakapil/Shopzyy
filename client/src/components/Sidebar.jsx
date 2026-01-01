import { Link, useNavigate } from "react-router-dom";

export const Sidebar = () => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col w-64 min-h-screen bg-slate-900 text-slate-200 shadow-xl">

            {/* Header */}
            <div className="flex items-center justify-center h-16 border-b border-slate-700">
                <h3 className="text-xl font-semibold tracking-wide text-indigo-400">
                    Admin Panel
                </h3>
            </div>

            {/* Menu */}
            <div className="flex flex-col gap-2 px-4 py-6">

                {/* Dashboard (Active) */}
                <button onClick={() => {
                    return navigate("/admin/dashboard")
                }} className="w-full text-left px-4 py-3 rounded-lg bg-indigo-500 text-white font-medium shadow-md transition">
                    Dashboard
                </button>

                {/* Products */}
                <button onClick={() => {
                    return navigate("/admin/products")
                }} className="w-full text-left px-4 py-3 rounded-lg text-slate-300 font-medium
          hover:bg-slate-800 hover:text-white transition">
                    Products
                </button>

                {/* Brands */}
                <button
                onClick={() => {
                    return navigate("/admin/brands")
                }}
                 className="w-full text-left px-4 py-3 rounded-lg text-slate-300 font-medium
          hover:bg-slate-800 hover:text-white transition">
                    Brands
                </button>
                {/* Category */}
                <button
                onClick={() => {
                    return navigate("/admin/category")
                }}
                 className="w-full text-left px-4 py-3 rounded-lg text-slate-300 font-medium
          hover:bg-slate-800 hover:text-white transition">
                    Category
                </button>

                {/* Orders */}
                <button className="w-full text-left px-4 py-3 rounded-lg text-slate-300 font-medium
          hover:bg-slate-800 hover:text-white transition">
                    Orders
                </button>

                {/* Users */}
                <button className="w-full text-left px-4 py-3 rounded-lg text-slate-300 font-medium
          hover:bg-slate-800 hover:text-white transition">
                    Users
                </button>

            </div>
        </div>
    );
};
