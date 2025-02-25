import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Petlisting = () => {
    const data = useLoaderData();
    const { category } = useParams();
    const [searchTerm, setSearch] = useState("");


    const filteredPets = data.filter(pet =>
        pet.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category === "all" || !category || pet.category.value.toLowerCase() === category.toLowerCase())
    );
    

    return (
        <div className="p-6 bg-gray-100">
            <Helmet><title>Pet Lists | PawPalace</title></Helmet> 
            <h1 className="text-3xl text-[#F04336] font-bold text-center mb-8">Pet Listing</h1>

            <div className="lg:flex items-center justify-around">
                <div className="lg:my-10 my-4 flex items-center justify-center gap-2 lg:gap-6">
                    <NavLink to="/petlisting/all" className={({ isActive }) => `p-1 px-2 w-20 flex items-center justify-center rounded-full font-medium ${isActive ? 'text-white bg-[#F04336] border-2 border-[#F04336]' : 'text-[#F04336] border-2 border-[#F04336]'}`}>All</NavLink>
                    <NavLink to="/petlisting/cat" className={({ isActive }) => `p-1 px-2 w-20 flex items-center justify-center rounded-full font-medium ${isActive ? 'text-white bg-[#F04336] border-2 border-[#F04336]' : 'text-[#F04336] border-2 border-[#F04336]'}`}>Cat</NavLink>
                    <NavLink to="/petlisting/bird" className={({ isActive }) => `p-1 px-2 w-20 flex items-center justify-center rounded-full font-medium ${isActive ? 'text-white bg-[#F04336] border-2 border-[#F04336]' : 'text-[#F04336] border-2 border-[#F04336]'}`}>Bird</NavLink>
                    <NavLink to="/petlisting/rabbit" className={({ isActive }) => `p-1 px-2 w-20 flex items-center justify-center rounded-full font-medium ${isActive ? 'text-white bg-[#F04336] border-2 border-[#F04336]' : 'text-[#F04336] border-2 border-[#F04336]'}`}>Rabbit</NavLink>
                    <NavLink to="/petlisting/dog" className={({ isActive }) => `p-1 px-2 w-20 flex items-center justify-center rounded-full font-medium ${isActive ? 'text-white bg-[#F04336] border-2 border-[#F04336]' : 'text-[#F04336] border-2 border-[#F04336]'}`}>Dog</NavLink>
                </div>
                <div className="">
                    <input type="text" placeholder="Search by name" className="p-2 border border-[#F04336] focus:border-[#F04336] outline-none rounded-md w-64" value={searchTerm}
                        onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
                {filteredPets.length > 0 ? ( filteredPets.map(pet => (
                    <div key={pet._id} className="bg-white p-4 rounded-lg shadow-md w-fit">
                        <img src={pet.image} alt={pet.name} className="w-72 h-48 object-cover rounded-md mb-4" />
                        <h2 className="text-xl font-semibold">{pet.name}</h2>
                        <p className="text-gray-600">Age: {pet.age}</p>
                        <p className="text-gray-600">Location: {pet.location}</p>
                        <button className="mt-2 px-4 py-2 text-white bg-[#0A303A] rounded-lg">
                        <Link to={`/petlisting/details/${pet._id}`}>View Details</Link>
                        </button>
                    </div>
                ))) : ('no pet found')}
            </div>

        </div>
    );
};

export default Petlisting;
