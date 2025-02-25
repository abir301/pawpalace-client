import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../../Authprovider";
import { Helmet } from "react-helmet";


const Mydonations = () => {
    const {user} = useContext(authContext)
    const data = useLoaderData();
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        if (user?.email) {
            const userDonations = data.filter(donation => donation.donatorEmail === user.email);
            setDonations(userDonations);
        }
    }, [data, user]);

    const handleRefund = (id) => {
        Swal.fire({
            title: "Are you sure you want a refund?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://pawpalace-server.vercel.app/donators/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Refunded!",
                                text: "Your donation has been refunded",
                                icon: "success",
                            });
                            setDonations((donation) => donation.filter((don) => don._id !== id));
                        }
                    });
            }
        });
    };

    return (
        <div className="p-6">
            <Helmet><title>My Donation | PawPalace</title></Helmet> 
            <h1 className="text-2xl font-bold mb-4">My Donations</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="p-3 text-left">Pet Image</th>
                            <th className="p-3 text-left">Disease</th>
                            <th className="p-3 text-left">Donated Amount</th>
                            <th className="p-3 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donations.length > 0 ? (
                            donations.map((donation) => (
                                <tr key={donation._id} className="border-b hover:bg-gray-50">
                                    <td className="p-3">
                                        <img src={donation.petImage} alt="Pet" className="w-16 h-16 rounded-lg object-cover" />
                                    </td>
                                    <td className="p-3">{donation.petDisease}</td>
                                    <td className="p-3">${donation.amount}</td>
                                    <td className="p-3">
                                        <button onClick={() => handleRefund(donation._id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                                            Request Refund
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="p-3 text-center text-gray-500">No donations found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Mydonations;
