import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "./Authprovider";
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
const Header = () => {

    //[#0A303A]
    //[#F04336]  
    const { user, logOut} = useContext(authContext);

    return (
        <div>
            
            <div className="flex items-center justify-around">
                <div className="md:flex flex-col items-center hidden ">
                    <img className="w-16" src="/public/images/paw.png" alt="" />
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
                            <Menu animate={{ mount: { y: 0 }, unmount: { y: 25 }, }}
                            >
                                <MenuHandler>
                                    <img className="w-10" src={user.photoURL} title={user.displayName} alt="User Icon" />
                                </MenuHandler>
                                <MenuList>
                                <Link to='/dashboard'><MenuItem className="hover:bg-gray-200">Dashboard</MenuItem></Link>
                                    <MenuItem className="hover:bg-gray-200" onClick={logOut}>Log Out</MenuItem>
                                </MenuList>
                            </Menu>

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