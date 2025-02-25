import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useLoaderData} from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Updatedonation = () => {

    const donationData = useLoaderData(); 

    const {
        _id,
        image,
        maxDonation,
        lastDate,
        shortDescription,
        longDescription,
        donationstat,
        donatedAmount,
    } = donationData;

    const [imageURL, setImageURL] = useState(image);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            maxDonation,
            lastDate,
            shortDescription,
            longDescription,
        }
    });

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
        const updatedData = {
            ...data,
            image: imageURL,
            donationstat,
            donatedAmount,
        };

        fetch(`https://pawpalace-server.vercel.app/updatedonation/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success("Donation campaign updated successfully!");

                } else {
                    toast.error("Something went wrong");
                }
            })

    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Helmet><title>Update Donation | PawPalace</title></Helmet> 
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Update Donation Campaign</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Pet Picture</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="w-full p-2 border rounded-lg border-gray-400"
                        />
                        {imageURL && <img src={imageURL} alt="Preview" className="mt-2 h-32 object-cover rounded-lg" />}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Maximum Donation Amount</label>
                        <input
                            type="number"
                            {...register("maxDonation", { required: "Max donation amount is required", min: 1 })}
                            className="w-full p-2 border rounded-lg border-gray-400"
                        />
                        {errors.maxDonation && <p className="text-red-500 text-sm">{errors.maxDonation.message}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Last Date of Donation</label>
                        <input
                            type="date"
                            {...register("lastDate", { required: "Last date is required" })}
                            className="w-full p-2 border rounded-lg border-gray-400"
                        />
                        {errors.lastDate && <p className="text-red-500 text-sm">{errors.lastDate.message}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Short Description</label>
                        <input
                            {...register("shortDescription", { required: "Short description is required" })}
                            className="w-full p-2 border rounded-lg border-gray-400"
                        />
                        {errors.shortDescription && <p className="text-red-500 text-sm">{errors.shortDescription.message}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Long Description</label>
                        <textarea
                            {...register("longDescription", { required: "Long description is required", minLength: 10 })}
                            className="w-full p-2 border rounded-md"
                        ></textarea>
                        {errors.longDescription && <p className="text-red-500 text-sm">{errors.longDescription.message}</p>}
                    </div>

                    <div>
                        <button type="submit" className="w-full p-3 text-white bg-[#0A303A] rounded-lg">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Updatedonation;
