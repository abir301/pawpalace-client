import { Link, useLoaderData } from "react-router-dom";


const Donationcampaign = () => {

    const donations = useLoaderData();

    return (
        <div className="p-6 bg-gray-100">
            <div className="w-[80%] mx-auto">
                <h1 className="text-3xl text-[#F04336] font-bold text-center mb-8">Donation Campaign</h1>
                <div className="grid-cols-1 grid lg:grid-cols-3 md:grid-cols-2 gap-y-20">
                    {(donations.map(donation => <div className="bg-white p-4 rounded-lg shadow-md w-fit" key={donation._id}>
                        <img className="w-72 h-48 object-cover rounded-md mb-4" src={donation.image} alt="" />
                        <p className="text-xl font-bold">{donation.shortDescription}</p>
                        <p className="text-gray-600">Required Amount :{donation.maxDonation}</p>
                        <button className="mt-2 px-4 py-2 text-white bg-[#0A303A] rounded-lg">
                        <Link to={`/donationcampaign/details/${donation._id}`}>View Details</Link>
                        </button>
                    </div>))}
                </div>

            </div>
        </div>

    );
};

export default Donationcampaign;