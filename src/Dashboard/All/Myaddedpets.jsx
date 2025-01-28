import { useContext, useEffect, useMemo, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { authContext } from "../../Authprovider";
import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    getPaginationRowModel,
    flexRender,
} from "@tanstack/react-table";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";

const MyAddedPets = () => {
    const loadPets = useLoaderData();
    const { user } = useContext(authContext);
    const [pets, setPets] = useState([]);

    useEffect(() => {
        if (loadPets && user) {
            const userPets = loadPets.filter((p) => p.useremail === user?.email);
            setPets(userPets);
        }
    }, [loadPets, user]);

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
                fetch(`http://localhost:5000/addpet/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your service has been deleted.",
                                icon: "success",
                            });
                            setPets((pet) => pet.filter((pe) => pe._id !== id));
                        }
                    });
            }
        });
    };

    const handleAdopt = (id) => {
        fetch(`http://localhost:5000/addpet/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ adopted: true }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    setPets((prev) =>
                        prev.map((pet) =>
                            pet._id === id ? { ...pet, adopted: true } : pet
                        )
                    );
                    Swal.fire("The pet has been marked as adopted.");
                } else {
                    Swal.fire("Failed to update the pet status.");
                }
            });
    };


    const columns = useMemo(
        () => [
            {
                accessorKey: "id",
                header: "S/N",
                cell: (info) => info.row.index + 1,
            },
            {
                accessorKey: "name",
                header: "Pet Name",
            },
            {
                accessorKey: "category.value",
                header: "Category",
            },
            {
                accessorKey: "image",
                header: "Pet Image",
                cell: (info) => (
                    <img
                        src={info.getValue()}
                        alt=""
                        className="w-16 h-16 object-cover rounded-lg"
                    />
                ),
            },
            {
                accessorKey: "adopted",
                header: "Adoption Status",
                cell: (info) => (info.getValue() ? "Adopted" : "Not Adopted"),
            },
            {
                accessorKey: "actions",
                header: "Actions",
                cell: ({ row }) => (
                    <div className="flex gap-2">
                        <Link to={`/dashboard/update-pet/${row.original._id}`}>                        
                        <button
                            className="bg-[#0A303A] text-white px-3 py-3 rounded-lg"
                        
                        >
                            <FaPen className="size-5 " />
                        </button></Link>

                        <button  
                            className="bg-[#0A303A] text-white px-3 py-1 rounded-lg"
                            onClick={() => handleDelete(row.original._id)}
                        >
                            <MdDelete className="size-5" />
                        </button>
                        <button
                            className="bg-[#0A303A] text-white px-4 py-2 rounded-lg"
                            onClick={() => handleAdopt(row.original._id)}
                            disabled={row.original.adopted}
                        >
                            Mark as Adopted
                        </button>
                    </div>
                ),
            },
        ],
        []
    );

    const table = useReactTable({
        data: pets,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">My Added Pets</h1>
            <table className="table-auto w-full border">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className="border px-4 py-2 cursor-pointer"
                                    onClick={header.column.getToggleSortingHandler()}
                                >
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                    {{
                                        asc: " ↑",
                                        desc: " ↓",
                                    }[header.column.getIsSorted()] ?? null}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="border px-4 py-2">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-2">
                    <button
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </button>
                    <button
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </button>
                </div>
                <span>
                    Page {table.getState().pagination.pageIndex + 1} of {" "}
                    {table.getPageCount()}
                </span>
            </div>
        </div>
    );
};

export default MyAddedPets;
