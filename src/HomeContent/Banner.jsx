

const Banner = () => {
    return (
        <div>
            <div className="relative h-screen">
                <div className="absolute inset-0 bg-cover" style={{ backgroundImage: "url('/images/bg.jpg')" }}></div>

                <div className="absolute inset-0 flex items-center justify-start pl-10">
                    <div className="relative text-white max-w-xl">
                        <p className="text-8xl ">Find your new <br /> best <span className="text-[#F04336]">Friend</span></p>
                        <div className="flex items-center gap-4 mt-4">
                            <button className="font-medium text-3xl bg-[#F04336] py-2 px-3 border-2 border-[#F04336] rounded-lg hover:bg-transparent hover:text-[#F04336] transition duration-300">
                                PawPalace
                            </button>
                            <img className="w-24" src="/images/paw.png" alt="Paw Icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;