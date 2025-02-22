import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { authContext } from "../Authprovider";

const Petdetails = () => {
    const pet = useLoaderData();
    const [showModal, setShowModal] = useState(false);
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const { user } = useContext(authContext);
    console.log(pet.useremail)
    const handleAdopt = (e) => {
        e.preventDefault();
        const form = e.target
        const adoptionData = {

            petId: pet._id,
            petName: pet.name,
            petImage: pet.image,
            adopterName: user.displayName,
            adopterEmail: user.email,
            ownerEmail: pet.useremail,
            phone,
            address,
            timestamp: new Date().toISOString(),
        };

        fetch('http://localhost:5000/adoptreq', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adoptionData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success("Applied for adoption.")
                    form.reset()
                    setShowModal(false)
                }
                else {
                    toast.error("Something went wrong")
                }

            })


    };

    return (
        <div className="max-w-3xl mx-auto p-6 border rounded-lg shadow-lg">
            <img src={pet.image} alt={pet.name} className="w-full h-64 object-cover rounded-lg mb-4" />
            <h1 className="text-3xl font-bold">{pet.name}</h1>
            <p className="text-gray-600">{pet.short}</p>
            <p className="mt-2"><span className="font-bold">Age:</span> {pet.age} years</p>
            <p><span className="font-bold">Location:</span> {pet.location}</p>
            <p><span className="font-bold">Category:</span> {pet.category.value}</p>
            <p className="mt-4 font-medium">{pet.long}</p>
            <button
                onClick={() => setShowModal(true)}
                className="mt-4 bg-[#F04336] text-white px-4 py-2 rounded-lg"
            >
                Adopt
            </button>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Adopting {pet.name}</h2>
                        <form onSubmit={handleAdopt}>
                            <img src={pet.image} alt={pet.name} className="w-20 h-20 object-cover rounded-lg mb-3" />

                            <div className="mb-2">
                                <label className="block text-gray-700">Pet ID</label>
                                <input type="text" value={pet._id} disabled className="w-full border rounded p-2 bg-gray-200" />
                            </div>

                            <div className="mb-2">
                                <label className="block text-gray-700">Your Name</label>
                                <input type="text" value={user.displayName} disabled className="w-full border rounded p-2 bg-gray-200" />
                            </div>

                            <div className="mb-2">
                                <label className="block text-gray-700">Your Email</label>
                                <input type="email" value={user.email} disabled className="w-full border rounded p-2 bg-gray-200" />
                            </div>

                            <div className="mb-2">
                                <label className="block text-gray-700">Phone Number</label>
                                <input
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                    className="w-full border rounded p-2"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div className="mb-2">
                                <label className="block text-gray-700">Address</label>
                                <input
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                    className="w-full border rounded p-2"
                                    placeholder="Enter your address"
                                />
                            </div>

                            <div className="flex justify-between mt-4">
                                <button type="submit" className="bg-[#F04336] text-white px-4 py-2 rounded-lg">
                                    Submit Request
                                </button>
                                <button type="button" onClick={() => setShowModal(false)} className="border-[#F04336] border-2 text-[#F04336] px-4 py-2 rounded-lg">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Petdetails;
