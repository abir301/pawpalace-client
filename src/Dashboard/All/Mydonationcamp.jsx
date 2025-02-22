import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Mydonationcamp = () => {
    const donations = useLoaderData();
    const navigate = useNavigate();
    const [donation, setDonation] = useState(donations);
    const [modal, setModalData] = useState(null);

    const handleDonation = (id, stat) => {
        console.log(stat)
        fetch(`http://localhost:5000/adddonation/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ donationstat: !stat }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire("Donation has been stopped.");
                    setDonation(donation.map(donation =>
                        donation._id === id ? { ...donation, donationstat: !stat } : donation
                    ));
                }
            });
    };

    const openModal = (donators) => {
        setModalData(donators);
    };

    const closeModal = () => {
        setModalData(null);
    };

    return (
        <div className="p-5">
            <h2 className="text-xl font-bold mb-4">My Donation Requests</h2>
            <table className="w-full border-collapse border border-gray-700">
                <thead>
                    <tr className="">
                        <th className="border border-black p-2">Pet Name</th>
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
                                        className="bg-[#0A303A] border-2 h-4 rounded-full"
                                        style={{ width: `${(donation.collectedAmount / donation.maxDonation) * 100}%` }}
                                    ></div>
                                </div>
                            </td>
                            <td className="border border-black p-2 space-x-2">
                                <button className={`px-3 py-1 text-white ${donation.donationstat ? 'bg-red-500' : 'bg-green-500'} rounded`}
                                    onClick={() => handleDonation(donation._id, donation.donationstat)}>{donation.donationstat ? 'Pause' : 'Unpause'}</button>
                                <button className="px-3 py-1 bg-[#0A303A] text-white rounded" onClick={() => navigate(`/edit-donation/${donation.id}`)}>Edit</button>
                                <button className="px-3 py-1 bg-[#0A303A] text-white rounded" onClick={() => openModal(donation.donators)}>View Donators</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {modal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-5 rounded shadow-lg">
                        <h3 className="text-lg font-bold mb-2">Donators</h3>
                        <ul>
                            {modal.map((donator, index) => (
                                <li key={index} className="border-b py-1">{donator.name}: ${donator.amount}</li>
                            ))}
                        </ul>
                        <button className="mt-3 bg-red-500 text-white px-4 py-1 rounded" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Mydonationcamp;

