import { useState } from 'react';

const Aboutus = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (
        <section className="py-10 bg-red-50">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">About Us</h2>
                <p className="text-lg text-gray-600">Learn more about how we work and why we are passionate about pet adoption.</p>
            </div>
            <div className="mx-auto max-w-4xl">
                <div
                    className="mb-4 p-4 bg-white rounded-lg shadow-md cursor-pointer border border-gray-200"
                    onClick={() => toggleQuestion(1)}
                >
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-800">How does the adoption process work?</h3>
                        <span className="text-blue-500">{openQuestion === 1 ? "-" : "+"}</span>
                    </div>
                    {openQuestion === 1 && (
                        <p className="mt-2 text-gray-600">
                            The adoption process is simple! Browse available pets, fill out an adoption application, and connect with the shelter or foster home to meet your new friend.
                        </p>
                    )}
                </div>

                <div
                    className="mb-4 p-4 bg-white rounded-lg shadow-md cursor-pointer border border-gray-200"
                    onClick={() => toggleQuestion(2)}
                >
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-800">Why was this website created?</h3>
                        <span className="text-blue-500">{openQuestion === 2 ? "-" : "+"}</span>
                    </div>
                    {openQuestion === 2 && (
                        <p className="mt-2 text-gray-600">
                            This website was built to connect loving homes with pets in need, making the adoption process easier and more accessible for everyone.
                        </p>
                    )}
                </div>

                <div
                    className="mb-4 p-4 bg-white rounded-lg shadow-md cursor-pointer border border-gray-200"
                    onClick={() => toggleQuestion(3)}
                >
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-800">How can I find the right pet for me?</h3>
                        <span className="text-blue-500">{openQuestion === 3 ? "-" : "+"}</span>
                    </div>
                    {openQuestion === 3 && (
                        <p className="mt-2 text-gray-600">
                            Use our advanced search filters to find pets based on breed, size, age, and other preferences that fit your lifestyle.
                        </p>
                    )}
                </div>

                <div
                    className="mb-4 p-4 bg-white rounded-lg shadow-md cursor-pointer border border-gray-200"
                    onClick={() => toggleQuestion(4)}
                >
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-800">What resources are available for new pet owners?</h3>
                        <span className="text-blue-500">{openQuestion === 4 ? "-" : "+"}</span>
                    </div>
                    {openQuestion === 4 && (
                        <p className="mt-2 text-gray-600">
                            We provide a variety of resources, including training tips, pet care guides, and access to local veterinary services to help you along the way.
                        </p>
                    )}
                </div>

                <div
                    className="mb-4 p-4 bg-white rounded-lg shadow-md cursor-pointer border border-gray-200"
                    onClick={() => toggleQuestion(5)}
                >
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-800">Can I volunteer or donate to help?</h3>
                        <span className="text-blue-500">{openQuestion === 5 ? "-" : "+"}</span>
                    </div>
                    {openQuestion === 5 && (
                        <p className="mt-2 text-gray-600">
                            Absolutely! You can volunteer your time, foster pets, or donate to support shelters and rescue organizations listed on our site.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Aboutus;
