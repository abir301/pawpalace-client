import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom"; 

const Petlisting = () => {
    const data = useLoaderData();

    return (
        <div className="p-6 bg-gray-100">
            <h1 className="text-3xl text-[#F04336] font-bold text-center mb-8">Pet Listing</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
                {data.map(pet => (
                    <div key={pet._id} className="bg-white p-4 rounded-lg shadow-md w-fit">
                        <img src={pet.image} alt={pet.name} className="w-72 h-48 object-cover rounded-md mb-4" />
                        <h2 className="text-xl font-semibold">{pet.name}</h2>
                        <p className="text-gray-600">Age: {pet.age}</p>
                        <p className="text-gray-600">Location: {pet.location}</p>
                        <button className="mt-2 px-4 py-2 text-white bg-[#0A303A] rounded-lg">
                        <Link to={`/petlisting/${pet._id}`} >View Details</Link>
                        </button>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Petlisting;
