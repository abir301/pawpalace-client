import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../../Authprovider";
import { Helmet } from "react-helmet";

const Mydonationcamp = () => {
    const { loadDonation, loadDonators } = useLoaderData();
        const { user } = useContext(authContext);
    const navigate = useNavigate();
    const [donation, setDonation] = useState(loadDonation);
    const [showModal, setShowModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

        useEffect(() => {
            if (loadDonation && user) {
                const userDonation = loadDonation.filter((don) => don.useremail === user?.email);
                setDonation(userDonation);
            }
        }, [loadDonation, user]);

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

    const filteredDonators = loadDonators.filter(donator => donator.petId === selectedId);

    return (
        <div className="p-5 ml-10">
            <Helmet><title>My Donation Camp | PawPalace</title></Helmet> 
            <h2 className="text-xl font-bold mb-4">My Donation Requests</h2>
            <table className="w-full border-collapse border border-gray-700">
                <thead>
                    <tr className="">
                        <th className="border border-black p-2"> Name</th>
                        <th className="border border-black p-2">Max Donation</th>
                        <th className="border border-black p-2">Progress</th>
                        <th className="border border-black p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {donation.map(donation => (
                        <tr key={donation._id} className="text-center">
                            <td className="border border-black p-2">{donation.shortDescription}</td>
                            <td className="border border-black p-2">${donation.maxDonation}</td>
                            <td className="border border-black p-2">
                                <div className="w-full bg-gray-300 rounded-full h-4">
                                    <div
                                        className="bg-[#0A303A] border-[#0A303A] border-4 h-4 rounded-full"
                                        style={{width: `${(loadDonators
                                            .filter(donator => donator.petId === donation._id)
                                            .reduce((total, donator) => total + parseFloat(donator.amount || 0), 0) / donation.maxDonation) * 100}%`
                                    }}
                                    ></div>
                                </div>
                            </td>
                            <td className="border border-black p-2 space-x-2">
                                <button className={`px-3 py-1 text-white ${donation.donationstat ? 'bg-red-500' : 'bg-green-500'} rounded`}
                                    onClick={() => handleDonation(donation._id, donation.donationstat)}>{donation.donationstat ? 'Pause' : 'Unpause'}</button>
                                <button className="px-3 py-1 bg-[#0A303A] text-white rounded" onClick={() => navigate(`/dashboard/update-donation/${donation._id}`)}>Edit</button>
                                <button className="px-3 py-1 bg-[#0A303A] text-white rounded" onClick={() =>{ setSelectedId(donation._id); setShowModal(true);}}>View Donators</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Donators</h2>
                        {filteredDonators.length > 0 ? (
                            <ul>
                                {filteredDonators.map(donator => (
                                    <li key={donator._id} className="px-10">
                                        <div className="flex justify-between items-center">
                                            <p className="my-2">{donator.donatorEmail}</p>
                                            <p className=" text-gray-600">{donator.amount}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-600">No donators for this pet.</p>
                        )}
                        <button
                            className="mt-4 w-full border-[#F04336] border-2 text-[#F04336] px-4 py-2 rounded-lg"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Mydonationcamp;

