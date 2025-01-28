import { useLoaderData } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { authContext } from "../../Authprovider";
import toast from "react-hot-toast";

const Adoptionreq = () => {
    const { user } = useContext(authContext);
    const data = useLoaderData();
    const [filterReq, setFilter] = useState([]);

    useEffect(() => {
        if (user?.email) {
            setFilter(data.filter(req => req.ownerEmail === user.email));
        }
    }, [user?.email, data]);

    const handleAction = (id, action) => {
        if (action === "accept") {
            toast.success("Adoption request accepted!");
        } else if (action === "reject") {
            toast.error("Adoption request rejected!");
        }
        setFilter(prev => prev.filter(req => req._id !== id));
    };

    return (
        <div className="p-6 bg-gray-100">
            <h1 className="text-2xl md:text-3xl text-[#F04336] font-bold text-center mb-8">
                Adoption Requests
            </h1>
            {filterReq.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table-auto border-collapse w-full bg-white shadow-lg rounded-md">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 border text-sm md:text-base">#</th>
                                <th className="px-4 py-2 border text-sm md:text-base">Pet Name</th>
                                <th className="px-4 py-2 border text-sm md:text-base">Adopter Name</th>
                                <th className="px-4 py-2 border text-sm md:text-base">Adopter Email</th>
                                <th className="px-4 py-2 border text-sm md:text-base">Phone</th>
                                <th className="px-4 py-2 border text-sm md:text-base">Address</th>
                                <th className="px-4 py-2 border text-sm md:text-base">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterReq.map((req, index) => (
                                <tr key={req._id} className="text-center">
                                    <td className="px-4 py-2 border text-sm md:text-base">{index + 1}</td>
                                    <td className="px-4 py-2 border text-sm md:text-base">{req.petName}</td>
                                    <td className="px-4 py-2 border text-sm md:text-base">{req.adopterName}</td>
                                    <td className="px-4 py-2 border text-sm md:text-base">{req.adopterEmail}</td>
                                    <td className="px-4 py-2 border text-sm md:text-base">{req.phone}</td>
                                    <td className="px-4 py-2 border text-sm md:text-base">{req.address}</td>
                                    <td className="px-4 py-2 border flex flex-wrap justify-center gap-2">
                                        <button
                                            onClick={() => handleAction(req._id, "accept")}
                                            className="bg-[#0A303A] text-white px-3 py-2 rounded-lg text-sm md:text-base"
                                        >
                                            Accept
                                        </button>
                                        <button
                                            onClick={() => handleAction(req._id, "reject")}
                                            className="border-[#0A303A] border-2 text-[#0A303A] px-3 py-2 rounded-lg text-sm md:text-base"
                                        >
                                            Reject
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-gray-500 text-sm md:text-base">
                    No adoption requests found.
                </p>
            )}
        </div>
    );
};

export default Adoptionreq;
