import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Alldonations = () => {

    const navigate = useNavigate();
    const [donation, setDonation] = useState([]);


    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch("https://pawpalace-server.vercel.app/admin-donation", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => {
                if (res.status === 403) {
                    navigate("/dashboard");
                    return;
                }
                return res.json();
            })
            .then((data) => setDonation(data))
            .catch((error) => console.error("Error fetching pets:", error));
    }, [navigate]);


    const handleDonation = (id, stat) => {
        console.log(stat)
        fetch(`https://pawpalace-server.vercel.app/adddonation/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ donationstat: !stat }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire("Donation status changed.");
                    setDonation(donation.map(donation =>
                        donation._id === id ? { ...donation, donationstat: !stat } : donation
                    ));
                }
            });
    };

        const handleDelete = (id) => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://pawpalace-server.vercel.app/adddonation/${id}`, {
                        method: "DELETE",
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Donation has been deleted.",
                                    icon: "success",
                                });
                                setDonation((pet) => pet.filter((pe) => pe._id !== id));
                            }
                        });
                }
            });
        };



    return (
        <div className="p-5 lg:ml-10 mt-10">
            <Helmet><title>Admin Donations | PawPalace</title></Helmet> 
            <h2 className="text-xl font-bold mb-4">All Donations</h2>
            <table className="w-full border-collapse border border-gray-700">
                <thead>
                    <tr className="">
                        <th className="border border-black p-2"> Name</th>
                        <th className="border border-black p-2">Max Donation</th>
                        <th className="border border-black p-2">Email</th>
                        <th className="border border-black p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {donation.map(donation => (
                        <tr key={donation._id} className="text-center">
                            <td className="border border-black lg:p-2">{donation.shortDescription}</td>
                            <td className="border border-black lg:p-2">${donation.maxDonation}</td>
                            <td className="border border-black lg:p-2">{donation.useremail}</td>
                            <td className="border border-black lg:p-2 space-x-2 space-y-2 my-2">
                                <button className={`px-3 py-1 text-white ${donation.donationstat ? 'bg-red-500' : 'bg-green-500'} rounded`}
                                    onClick={() => handleDonation(donation._id, donation.donationstat)}>{donation.donationstat ? 'Pause' : 'Unpause'}</button>
                                <button className="px-3 py-1 bg-[#0A303A] text-white rounded" onClick={() => navigate(`/dashboard/update-donation/${donation._id}`)}>Edit</button>
                                <button className="px-3 py-1 bg-[#0A303A] text-white rounded" onClick={() => handleDelete(donation._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    );
};

export default Alldonations;
