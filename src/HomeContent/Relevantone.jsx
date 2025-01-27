
const Relevantone = () => {
    return (
        <div>
            <div className="w-[80%] mx-auto">
                <h1 className="text-[#0A303A] text-4xl font-bold text-center py-5">Puppies Waiting for Adoption</h1>
                <p className="text-gray-500 text-center text-lg pb-6">Get all popular breeds and dogs of your choice from us.</p>
                <div className="flex items-center justify-around">
                    <div className="flex flex-col gap-2 items-center py-3 border-[#0A303A] border-2 w-fit rounded-lg">
                        <img className="w-80 h-60 object-contain" src="https://www.akc.org/wp-content/uploads/2017/11/German-Shepherd-on-White-00.jpg" alt="" />
                        <h1 className="bg-[#F04336] text-white w-fit p-2 rounded-lg font-medium ">German Shepherd</h1>
                    </div>
                    <div className="flex flex-col gap-2 items-center py-3 border-[#0A303A] border-2 w-fit rounded-lg">
                        <img className="w-80 h-60 object-contain" src="https://consumer-cms.petfinder.com/sites/default/files/images/content/Golden%20Retriever%201.jpg" alt="" />
                        <h1 className="bg-[#F04336] text-white w-fit p-2 rounded-lg font-medium ">Golden Retriever</h1>
                    </div>
                    <div className="flex flex-col gap-2 items-center py-3 border-[#0A303A] border-2 w-fit rounded-lg">
                        <img className="w-80 h-60 object-contain" src="https://consumer-cms.petfinder.com/sites/default/files/images/content/Labrador%20Retriever%20%201_0.jpg" alt="" />
                        <h1 className="bg-[#F04336] text-white w-fit p-2 rounded-lg font-medium ">Labrador Retriever</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Relevantone;