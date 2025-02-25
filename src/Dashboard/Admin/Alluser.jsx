import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";


const Alluser = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch("https://pawpalace-server.vercel.app/admin-user", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => {
                if (res.status === 403) {
                    
                    navigate("/dashboard");
                    return; 
                }
                return res.json(); 
            })
            .then((data) => {
                if (data) {
                    setUsers(data);
                }
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    }, [navigate]);


    const handleMakeAdmin = (id) => {
        const token = localStorage.getItem("token");

        Swal.fire({
            title: "Promote to Admin?",
            text: "Are you sure you want to make this user an admin?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make admin!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://pawpalace-server.vercel.app/admin-user/make-admin/${id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.success) {
                            Swal.fire({
                                title: "Success!",
                                text: "User has been promoted to admin.",
                                icon: "success",
                            });
                            setUsers(users.map(user =>
                                user._id === id ? { ...user, role: "admin" } : user
                            ));
                        }
                    })
                    .catch((error) => console.error("Error:", error));
            }
        });
    };





    return (
        <div>
            <Helmet><title>Admin Users | PawPalace</title></Helmet> 
            <h1 className="text-3xl font-medium my-14">User Management</h1>
            <table className="w-full border-collapse border border-gray-300 mt-4">
                <thead>
                    <tr className="bg-gray-100 border-b border-gray-300">
                        <th className="p-3 border border-gray-300">Profile</th>
                        <th className="p-3 border border-gray-300">Name</th>
                        <th className="p-3 border border-gray-300">Email</th>
                        <th className="p-3 border border-gray-300">Role</th>
                        <th className="p-3 border border-gray-300">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id} className="border-b border-gray-300 text-center">
                            <td className="p-3 border border-gray-300">
                                <img src={user.photoURL} alt="" className="w-12 h-12 rounded-lg mx-auto" />
                            </td>
                            <td className="p-3 border border-gray-300">{user.displayName}</td>
                            <td className="p-3 border border-gray-300">{user.email}</td>
                            <td className="p-3 border border-gray-300">{user.role}</td>
                            <td className="p-3 border border-gray-300">
                                {user.role !== "admin" ? (
                                    <button
                                        onClick={() => handleMakeAdmin(user._id)}
                                        className="px-3 py-1 bg-[#0A303A] text-white rounded-lg"
                                    >
                                        Make Admin
                                    </button>
                                ) : (
                                    <span className="text-[#0A303A] font-semibold">Admin</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default Alluser;
