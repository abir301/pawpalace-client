
const Action = () => {
    return (
        <div>
            <div className="py-10 bg-blue-50">
                <div className="text-center mb-8">
                    <h1 className="text-[#0A303A] text-4xl font-bold text-center pb-5">Call to action</h1>
                    <p className="text-lg text-gray-500">Every pet deserves a loving home. Start your adoption journey today.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-[80%]">
                    <div className="p-3 bg-white rounded-2xl shadow-md  hover:border-[#0A303A] border-white drop-shadow-lg duration-300 border-2 flex flex-col items-center">
                        <div className="">
                            <img className="w-72 h-52 object-contain" src="https://static.boredpanda.com/blog/wp-content/uploads/2015/01/pet-adoption-before-and-after-3__880.jpg" alt="" />
                        </div>
                        <p className="text-center text-gray-800 mb-2">Opening my heart to adoption brought endless joy to my life.</p>
                        <p className="font-bold text-[#0A303A]">Emma Johnson</p>
                        <p className="text-sm text-gray-600">Adoptive Pet Parents</p>
                    </div>

                    <div className="p-3 bg-white rounded-2xl shadow-md hover:border-[#0A303A] border-white drop-shadow-lg duration-300 border-2 flex flex-col items-center">
                        <div className="">
                            <img className="w-72 h-52 object-contain" src="https://i.redd.it/riz4ig2nkp431.jpg" alt="" />
                        </div>
                        <p className="text-center text-gray-800 mb-2">Adopting my furry friend has been the most fulfilling experience.</p>
                        <p className="font-bold text-[#0A303A]">David Smith</p>
                        <p className="text-sm text-gray-600">Animal Advocate</p>
                    </div>

                    <div className="p-3 bg-white rounded-2xl shadow-md hover:border-[#0A303A] border-white drop-shadow-lg duration-300 border-2 flex flex-col items-center">
                        <div >
                            <img className="w-72 h-52 object-contain" src="https://www.boredpanda.com/blog/wp-content/uploads/2022/07/before-after-adoption-rescued-dogs-pics-fb56.png" alt="" />
                        </div>
                        <p className="text-center text-gray-800 mb-2">Providing a loving home is the best gift you can give to a pet in need.</p>
                        <p className="font-bold text-[#0A303A]">Sophia Lee</p>
                        <p className="text-sm text-gray-600">Pet Lover</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Action;