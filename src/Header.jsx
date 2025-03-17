import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "./Authprovider";

const Header = () => {

    //[#0A303A]
    //[#F04336]  
    const { user, logOut } = useContext(authContext);

    return (
        <div className=" sticky top-0 z-50 bg-white drop-shadow-lg">

            <div className="flex items-center justify-around lg:gap-28">
                <div className="md:flex flex-col items-center hidden ">
                    <img className="w-16" src="/images/paw.png" alt="" />
                    <p className="text-xl font-medium text-[#F04336] ">PawPalace</p>
                </div>
                <div className="flex gap-10">
                    <NavLink className={({ isActive }) => `font-medium ${isActive ? 'text-[#F04336]' : 'text-gray-400'}`} to='/' >Home</NavLink>
                    <NavLink className={({ isActive }) => `font-medium ${isActive ? 'text-[#F04336]' : 'text-gray-400'}`} to='/petlisting'>Pet Listing</NavLink>
                    <NavLink className={({ isActive }) => `font-medium ${isActive ? 'text-[#F04336]' : 'text-gray-400'}`} to='/donationcampaign'>Donation Campaign</NavLink>
                </div>
                <div className="flex gap-3">
                    {user && user.email ?
                        (<>
                            <details className="relative dropdown">
                                <summary className="cursor-pointer flex items-center">
                                    <img className="w-10" src={user.photoURL} title={user.displayName} alt="User Icon" />
                                </summary>
                                <ul className="absolute right-0 mt-2 w-40 bg-base-100 rounded-box shadow-lg border border-gray-200">
                                    <li><Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-200">Dashboard</Link></li>
                                    <li><button className="w-full text-left px-4 py-2 hover:bg-gray-200"onClick={logOut}>Log Out</button></li>
                                </ul>
                            </details>

                        </>)
                        : (
                            <>
                                <NavLink to="/login"><button className="font-medium border-[2px] border-[#F04336] bg-[#F04336] text-white px-3 py-2 rounded-lg">Login</button></NavLink>
                                <NavLink to="/register"><button className="font-medium border-[2px] border-[#F04336] text-[#F04336] px-3 py-2 rounded-lg">Register</button></NavLink>
                            </>
                        )}

                </div>

            </div>
        </div>


    );
};

export default Header;