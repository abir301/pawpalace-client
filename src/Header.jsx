import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "./Authprovider";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const { user, logOut } = useContext(authContext);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50 bg-white drop-shadow-lg">
            <div className="flex items-center justify-between px-4 md:px-10 lg:px-20 py-3">
                <div className="flex items-center gap-2">
                    <img className="w-12" src="/images/paw.png" alt="PawPalace Logo" />
                    <p className="text-xl font-medium text-[#F04336]">PawPalace</p>
                </div>
                
                <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
                </div>

                <div className="hidden md:flex gap-10">
                    <NavLink className={({ isActive }) => `font-medium ${isActive ? 'text-[#F04336]' : 'text-gray-400'}`} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => `font-medium ${isActive ? 'text-[#F04336]' : 'text-gray-400'}`} to='/petlisting/all'>Pet Listing</NavLink>
                    <NavLink className={({ isActive }) => `font-medium ${isActive ? 'text-[#F04336]' : 'text-gray-400'}`} to='/donationcampaign'>Donation Campaign</NavLink>
                </div>

                <div className="hidden md:flex gap-3">
                    {user && user.email ? (
                        <details className="relative dropdown">
                            <summary className="cursor-pointer flex items-center">
                                <img className="w-10 rounded-lg" src={user.photoURL} title={user.displayName} alt="User Icon" />
                            </summary>
                            <ul className="absolute right-0 mt-2 w-40 bg-base-100 rounded-box shadow-lg border border-gray-200">
                                <li><Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-200">Dashboard</Link></li>
                                <li><button className="w-full text-left px-4 py-2 hover:bg-gray-200" onClick={logOut}>Log Out</button></li>
                            </ul>
                        </details>
                    ) : (
                        <>
                            <NavLink to="/login"><button className="font-medium border-[2px] border-[#F04336] bg-[#F04336] text-white px-3 py-2 rounded-lg">Login</button></NavLink>
                            <NavLink to="/register"><button className="font-medium border-[2px] border-[#F04336] text-[#F04336] px-3 py-2 rounded-lg">Register</button></NavLink>
                        </>
                    )}
                </div>

                {menuOpen && (
                    <div className="md:hidden absolute top-16 left-0 w-full bg-white drop-shadow-lg flex flex-col items-center gap-5 py-4">
                        <NavLink className={({ isActive }) => `font-medium ${isActive ? 'text-[#F04336]' : 'text-gray-400'}`} to='/' onClick={() => setMenuOpen(false)}>Home</NavLink>
                        <NavLink className={({ isActive }) => `font-medium ${isActive ? 'text-[#F04336]' : 'text-gray-400'}`} to='/petlisting' onClick={() => setMenuOpen(false)}>Pet Listing</NavLink>
                        <NavLink className={({ isActive }) => `font-medium ${isActive ? 'text-[#F04336]' : 'text-gray-400'}`} to='/donationcampaign' onClick={() => setMenuOpen(false)}>Donation Campaign</NavLink>

                        {user && user.email ? (
                            <>
                                <Link to="/dashboard" className="font-medium text-gray-400" onClick={() => setMenuOpen(false)}>Dashboard</Link>
                                <button className="font-medium text-gray-400" onClick={() => { logOut(); setMenuOpen(false); }}>Log Out</button>
                            </>
                        ) : (
                            <>
                                <NavLink to="/login" onClick={() => setMenuOpen(false)}><button className="font-medium border-[2px] border-[#F04336] bg-[#F04336] text-white px-3 py-2 rounded-lg">Login</button></NavLink>
                                <NavLink to="/register" onClick={() => setMenuOpen(false)}><button className="font-medium border-[2px] border-[#F04336] text-[#F04336] px-3 py-2 rounded-lg">Register</button></NavLink>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
