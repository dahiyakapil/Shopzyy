import { User } from 'lucide-react'

export const Navbar = () => {
    return (
        <>
            <div className="bg-slate-800">
               
                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 text-white hover:opacity-90">
                                <User size={18} />
                                
                            </button>
                        </div>
                   
            </div>
        </>
    )
}