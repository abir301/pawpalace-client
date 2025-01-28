import { NavLink } from "react-router-dom";

const Header = () => {

    //[#0A303A]
    //[#F04336]  

    return (
        <div className="flex items-center justify-around">
            <div className="flex flex-col items-center">
                <img className="w-16" src="/public/images/paw.png" alt="" />
                <p className="text-xl font-medium text-[#F04336] ">PawPalace</p>
            </div>
            <div className="flex gap-10">
                <NavLink className={({ isActive }) => `font-medium ${isActive ? 'text-[#F04336]' : 'text-gray-400'}`} to='/' >Home</NavLink>
                <NavLink className={({ isActive }) => `font-medium ${isActive ? 'text-[#F04336]' : 'text-gray-400'}`} to='/petlisting'>Pet Listing</NavLink>
                <NavLink className={({ isActive }) => `font-medium ${isActive ? 'text-[#F04336]' : 'text-gray-400'}`} to='/donationcampaign'>Donation Campaign</NavLink>
            </div>
            <div className="flex gap-3">
                <NavLink to="/login"><button className="font-medium border-[2px] border-[#F04336] bg-[#F04336] text-white px-3 py-2 rounded-lg">Login</button></NavLink>
                <NavLink to="/register"><button className="font-medium border-[2px] border-[#F04336] text-[#F04336] px-3 py-2 rounded-lg">Register</button></NavLink>
            </div>

        </div>
    );
};

export default Header;