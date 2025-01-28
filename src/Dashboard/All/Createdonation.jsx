import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { authContext } from "../../Authprovider";

const Createdonation = () => {
        const { user } = useContext(authContext);
        const useremail = user?.email;
        const username = user?.displayName;
        const userpic = user?.photoURL;
    const [imageURL, setImageURL] = useState("");
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("image", file);

        try {
            const apiKey = "7b4d8303329d3b365de61f57b9f42756";
            const response = await axios.post(`https://api.imgbb.com/1/upload?key=${apiKey}`, formData);
            const imageUrl = response.data.data.display_url;
            setImageURL(imageUrl);
            console.log("Image uploaded:", imageUrl);
        } catch (error) {
            console.error("Image upload failed:", error);
        }
    };

    const onSubmit = (data) => {
        if (!imageURL) {
            alert("Please upload an image.");
            return;
        }

        const now = new Date();
        const dateTime = now.toISOString();

        const donationData = {
            ...data,
            image: imageURL,
            createdAt: dateTime,
            useremail,
            username,
            userpic,
        };

        fetch('http://localhost:5000/adddonation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(donationData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    reset();
                    toast.success("Donation campaign created successfully!");
                } else {
                    toast.error("Something went wrong");
                }
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Add a Donation Campaign</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Pet Picture</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="w-full p-2 border rounded-lg border-gray-400"
                        />
                        {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Maximum Donation Amount</label>
                        <input
                            type="number"
                            {...register("maxDonation", { required: "Maximum donation amount is required" , min: { value: 1, message: "Max donation cannot be in negative" } })}
                            placeholder="Enter the maximum donation amount"
                            className="w-full p-2 border rounded-lg border-gray-400"
                        />
                        {errors.maxDonation && <p className="text-red-500 text-sm">{errors.maxDonation.message}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Last Date of Donation</label>
                        <input
                            type="date"
                            {...register("lastDate", { required: "Last date of donation is required" })}
                            className="w-full p-2 border rounded-lg border-gray-400"
                        />
                        {errors.lastDate && <p className="text-red-500 text-sm">{errors.lastDate.message}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Short Description</label>
                        <input
                            {...register("shortDescription", { required: "Short description is required" })}
                            placeholder="Enter a short description"
                            className="w-full p-2 border rounded-lg border-gray-400"
                        />
                        {errors.shortDescription && <p className="text-red-500 text-sm">{errors.shortDescription.message}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Long Description</label>
                        <textarea
                            {...register("longDescription", {
                                required: "Long description is required",
                                minLength: {
                                    value: 10,
                                    message: "Long description must be at least 10 characters",
                                },
                            })}
                            placeholder="Enter a detailed description"
                            className="w-full p-2 border rounded-md"
                        ></textarea>
                        {errors.longDescription && <p className="text-red-500 text-sm">{errors.longDescription.message}</p>}
                    </div>

                    <div>
                        <button type="submit" className="w-full p-3 text-white bg-[#0A303A] rounded-lg">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Createdonation;
