

const Relevanttwo = () => {
    return (
        <div className="bg-blue-50">
            <div className="w-[80%] mx-auto">
                <h1 className="text-[#0A303A] text-4xl font-bold text-center py-5">Hear from our customers</h1>
                <p className="text-gray-500 text-center text-lg pb-6">Hear from the people who are satisfied by our service</p>
                <div className="grid grid-cols-2 gap-10 pb-10">
                    <div className="flex items-center justify-around gap-6 border-2 border-[#F04336] rounded-lg p-2">
                        <img className="border-2 border-[#F04336] rounded-full w-20" src="https://themebeyond.com/pre/petco-prev/petco-live/img/images/testi_avatar01.png" alt="" />
                        <div>
                            <p className="text-gray-500 text-lg font-medium">I adopted my dog through PawPalace, and the experience was seamless! The website is easy to navigate,
                                with detailed pet profiles and helpful filters. I found my perfect furry friend in no time. Highly
                                recommend it to anyone looking to adopt!</p>
                            <h1 className="font-bold text-xl text-[#0A303A]">Anna Frank</h1>
                            <p className="text-gray-500 font-medium">High School Teacher</p>
                        </div>
                    </div>
                    <div className="items-center justify-around flex gap-6 border-2 border-[#F04336] rounded-lg p-2">
                        <img className="border-2 border-[#F04336] rounded-full" src="https://themebeyond.com/pre/petco-prev/petco-live/img/images/testi_avatar02.png" alt="" />
                        <div>
                            <p className="text-gray-500 text-lg font-medium">As an engineer, I appreciated how efficiently PawPalace is designed. The adoption process was simple
                                and enjoyable! The pet profiles were informative, and I loved how user-friendly the site is. I’m so
                                happy to have found my adorable companion here.</p>
                            <h1 className="font-bold text-xl text-[#0A303A]">Thomas Mark</h1>
                            <p className="text-gray-500 font-medium">Civil Engineer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Relevanttwo;