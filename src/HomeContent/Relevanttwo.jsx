

const Relevanttwo = () => {
    return (
        <div className="">
            <div className="w-[80%] mx-auto mb-10">
                <h1 className="text-[#0A303A] text-4xl font-bold text-center py-5">Hear from our customers</h1>
                <p className="text-gray-500 text-center text-lg pb-6">Hear from the people who are satisfied by our service</p>
                <div className="flex items-center justify-center">
                    <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-20">
                        <div className="w-[320px] lg:w-[400px] drop-shadow-lg bg-white border-[1px] border-gray-400 p-4 rounded-lg">
                            <div className="rating rating-lg">
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" aria-label="5 star" defaultChecked />
                            </div>
                            <p className="text-gray-500 text-lg font-medium">I adopted my dog through PawPalace, and the experience was seamless! The website is easy to navigate,
                                with detailed pet profiles and helpful filters. I found my perfect furry friend in no time. Highly
                                recommend it to anyone looking to adopt!</p>
                            <div className="flex items-center gap-4 mt-3">
                                <img className="border-2 border-[#F04336] rounded-full w-20" src="https://themebeyond.com/pre/petco-prev/petco-live/img/images/testi_avatar01.png" alt="" />
                                <div>
                                    <h1 className="font-bold text-xl text-[#0A303A]">Anna Frank</h1>
                                    <p className="text-gray-500 font-medium">High School Teacher</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[320px] lg:w-[400px] drop-shadow-lg bg-white border-[1px] border-gray-400 p-4 rounded-lg">
                            <div className="rating rating-lg">
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" aria-label="5 star" defaultChecked />
                            </div>
                            <p className="text-gray-500 text-lg font-medium">As an engineer, I appreciated how efficiently PawPalace is designed. The adoption process was simple
                                and enjoyable! The pet profiles were informative, and I loved how user-friendly the site is. I’m so
                                happy to have found my adorable companion here.</p>
                            <div className="flex items-center gap-4 mt-3">
                                <img className="border-2 border-[#F04336] rounded-full" src="https://themebeyond.com/pre/petco-prev/petco-live/img/images/testi_avatar02.png" alt="" />
                                <div>
                                    <h1 className="font-bold text-xl text-[#0A303A]">Tim Southee</h1>
                                    <p className="text-gray-500 font-medium">Civil Engineer</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[320px] lg:w-[400px] drop-shadow-lg bg-white border-[1px] border-gray-400 py-2 px-4 rounded-lg">
                            <div className="rating rating-lg">
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" aria-label="5 star" defaultChecked />
                            </div>
                            <p className="text-gray-500 text-lg font-medium">I found my furry companion through PawPalace, and the process was effortless!
                                The platform is user-friendly, featuring in-depth pet profiles and smart filters. It made finding my ideal pet quick and stress-free.
                                I highly recommend it to anyone searching for a new best friend!</p>
                            <div className="flex items-center gap-4 mt-3">
                                <img className="border-2 border-[#F04336] rounded-full w-20" src="https://themebeyond.com/pre/petco-prev/petco-live/img/images/testi_avatar01.png" alt="" />
                                <div>
                                    <h1 className="font-bold text-xl text-[#0A303A]">Emma Swift</h1>
                                    <p className="text-gray-500 font-medium">High School Teacher</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Relevanttwo;