function RelevantFour() {
    return (
        <div className="relative min-h-[300px] py-16">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/newsletter.png')" }}
            ></div>

            <div className="absolute inset-0 flex items-center justify-start lg:pl-10 px-6">
                <div className="relative text-white max-w-lg">
                    <p className="text-3xl font-bold">Subscribe to our newsletter</p>
                    <p className="mt-2">We send emails each month!</p>

                    <div className="flex mt-4">
                        <input
                            className="bg-white text-gray-600 py-2 px-4 rounded-l-lg w-full placeholder-gray-400"
                            type="email"
                            placeholder="Enter your email..."
                        />
                        <button
                            className="font-medium text-lg bg-[#F04336] text-white py-2 px-4 border-2 border-[#F04336] rounded-r-lg hover:bg-transparent hover:text-[#F04336] transition duration-300"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RelevantFour;
