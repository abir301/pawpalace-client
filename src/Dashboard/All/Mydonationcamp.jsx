import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { authContext } from "../../Authprovider";
import toast from "react-hot-toast";

const Mydonationcamp = () => {
    const loadCamps = useLoaderData();
    const { user } = useContext(authContext);
    const [camps, setCamps] = useState([]);
    const [selectedDonators, setSelectedDonators] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (loadCamps && user) {
            const userPets = loadCamps.filter((p) => p.useremail === user?.email);
            setCamps(userPets);
        }
    }, [loadCamps, user]);

    const togglePause = (id) => {
        const updatedCamps = camps.map((camp) =>
            camp._id === id ? { ...camp, paused: !camp.paused } : camp
        );
        setCamps(updatedCamps);

        toast.success(
            updatedCamps.find((camp) => camp._id === id)?.paused
                ? "Donation paused"
                : "Donation unpaused"
        );
    };

    const handleViewDonators = (donators) => {
        setSelectedDonators(donators);
        setShowModal(true);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">My Donation Campaigns</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border">Pet Name</th>
                            <th className="px-4 py-2 border">Max Donation Amount</th>
                            <th className="px-4 py-2 border">Donation Progress</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {camps.map((camp) => (
                            <tr key={camp._id} className="text-center">
                                <td className="px-4 py-2 border">{camp.petName}</td>
                                <td className="px-4 py-2 border">${camp.maxDonation}</td>
                                <td className="px-4 py-2 border">
                                    <div className="w-full bg-gray-200 rounded-full h-4">
                                        <div
                                            className="bg-green-500 h-4 rounded-full"
                                            style={{
                                                width: `${Math.min(
                                                    (camp.currentDonation / camp.maxDonation) * 100,
                                                    100
                                                )}%`,
                                            }}
                                        ></div>
                                    </div>
                                    <span className="text-sm">
                                        ${camp.currentDonation} / ${camp.maxDonation}
                                    </span>
                                </td>
                                <td className="px-4 py-2 border space-x-2">
                                    <button
                                        onClick={() => togglePause(camp._id)}
                                        className={`px-3 py-1 text-white rounded ${camp.paused ? "bg-gray-500" : "bg-red-500"
                                            }`}
                                    >
                                        {camp.paused ? "Unpause" : "Pause"}
                                    </button>
                                    <button
                                        onClick={() => navigate(`/edit-donation/${camp._id}`)}
                                        className="px-3 py-1 bg-blue-500 text-white rounded"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleViewDonators(camp.donators || [])}
                                        className="px-3 py-1 bg-green-500 text-white rounded"
                                    >
                                        View Donators
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-96">
                        <h2 className="text-xl font-semibold mb-4">Donators</h2>
                        <ul className="space-y-2">
                            {selectedDonators.length > 0 ? (
                                selectedDonators.map((donator, index) => (
                                    <li
                                        key={index}
                                        className="flex justify-between items-center border-b py-2"
                                    >
                                        <span>{donator.name}</span>
                                        <span>${donator.amount}</span>
                                    </li>
                                ))
                            ) : (
                                <p>No donators yet.</p>
                            )}
                        </ul>
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg"
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
