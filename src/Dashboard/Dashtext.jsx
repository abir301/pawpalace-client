import { useContext } from "react";
import { authContext } from "../Authprovider";
import { useLoaderData } from "react-router-dom";


const Dashtext = () => {
    const { loadDonation, loadPet } = useLoaderData();
    const { user } = useContext(authContext);

    const userEmail = user?.email;
    const userDonations = loadDonation?.filter(donation => donation.useremail === userEmail) || [];
    const userPets = loadPet?.filter(pet => pet.useremail === userEmail) || [];

    return (
        <div className="max-w-xl mx-auto mt-20  rounded-lg">
            <h1 className="text-3xl font-bold text-[#0A303A]">User Profile</h1>
            <div className="bg-white shadow-lg">
                <div className="h-28 bg-[#ff8a82] rounded-tl-lg rounded-tr-lg"></div>
                <div className="p-3 relative text-center">
                    <div className="">
                        <img src={user?.photoURL} alt="User Avatar" className="w-32 h-32 rounded-full border-4 border-white -mt-14" />
                        <div className="text-left ml-6">
                            <h2 className="text-2xl font-bold mt-2">{user?.displayName || "User Name"}</h2>
                            <p className="text-gray-500">{user?.email}</p>
                        </div>
                    </div>

                    <div className="mt-6 border-t pt-4">
                        <h3 className="text-lg font-semibold">User Contributions</h3>
                        <p className="text-gray-700">Total Donations: {userDonations.length} | Total Pets: {userPets.length}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashtext;
