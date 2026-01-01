import React, { useEffect, useRef, useState } from 'react'
import { User } from 'lucide-react'
import useLogout from '../hooks/useLogout'

export const Navbar = () => {
    const { logout } = useLogout()
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="bg-slate-800">
            <div className='flex justify-end p-4 ' ref={menuRef}>
                <button
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    className="flex items-center gap-2 text-white hover:opacity-90 cursor-pointer">
                    <User size={18} />
                </button>

                {open && (
                    <div className="absolute right-4 mt-10 bg-white text-black rounded shadow p-1 z-50">
                        <button
                            onClick={() => logout()}
                            className="px-4 py-2 hover:bg-gray-100 w-full text-left"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}