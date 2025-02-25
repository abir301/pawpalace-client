import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Allpets = () => {
    const [pets, setPets] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch("https://pawpalace-server.vercel.app/admin-pet", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => {
                if (res.status === 403) {
                    navigate("/dashboard");
                    return;
                }
                return res.json();
            })
            .then((data) => setPets(data))
            .catch((error) => console.error("Error fetching pets:", error));
    }, [navigate]);

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
                fetch(`https://pawpalace-server.vercel.app/addpet/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your pet has been deleted.",
                                icon: "success",
                            });
                            setPets((pet) => pet.filter((pe) => pe._id !== id));
                        }
                    });
            }
        });
    };

    return (
        <div className="ml-10">
            <Helmet><title>Admin Pets | PawPalace</title></Helmet> 
            <h1 className="text-3xl font-medium my-14">Pet Management</h1>
            <table className="w-full border-collapse border border-gray-300 mt-4">
                <thead>
                    <tr className="bg-gray-100 border-b border-gray-300">
                        <th className="p-3 border border-gray-300">Image</th>
                        <th className="p-3 border border-gray-300">Name</th>
                        <th className="p-3 border border-gray-300">Age</th>
                        <th className="p-3 border border-gray-300">Location</th>
                        <th className="p-3 border border-gray-300">Status</th>
                        <th className="p-3 border border-gray-300">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((pet) => (
                        <tr key={pet._id} className="border-b border-gray-300 text-center">
                            <td className="p-3 border border-gray-300">
                                <img src={pet.image} alt={pet.name} className="w-12 h-12 rounded-lg mx-auto" />
                            </td>
                            <td className="p-3 border border-gray-300">{pet.name}</td>
                            <td className="p-3 border border-gray-300">{pet.age}</td>
                            <td className="p-3 border border-gray-300">{pet.location}</td>
                            <td className="p-3 border border-gray-300">
                                {pet.adopted ? "Adopted" : "Not Adopted"}
                            </td>
                            <td className="p-3 flex justify-center items-center gap-3">
                                <Link to={`/dashboard/update-pet/${pet._id}`} className="p-3 bg-[#0A303A] text-white rounded-lg"><FaEdit /></Link>
                                <button onClick={() => handleDelete(pet._id)} className="p-3 bg-[#0A303A] text-white rounded-lg"><FaTrash /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Allpets;
