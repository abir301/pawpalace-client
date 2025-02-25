
import { useContext, useState } from "react";
import { authContext } from "../../Authprovider";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";



const Addpet = () => {

    const { user } = useContext(authContext);
    const useremail = user?.email;
    const username = user?.displayName;
    const userpic = user?.photoURL;
    const [imageURL, setImageURL] = useState("");

    const now = new Date();
    const timeser = `${now.getDate()}/${now.getMonth() + 1}`;


    const { register, handleSubmit, control, formState: { errors } ,reset } = useForm();

    const categories = [
        { value: "cat", label: "Cat" },
        { value: "dog", label: "Dog" },
        { value: "bird", label: "Bird" },
        { value: "rabbit", label: "Rabbit" },
    ];

    const onSubmit = (data) => {
        if (!imageURL) {
            alert("Please upload an image.");
            return;
        }

        const petData = {
            ...data,
            image: imageURL,
            useremail,
            username,
            userpic,
            timeser,
            adopted: false,
        };
        console.log(petData);

        fetch('https://pawpalace-server.vercel.app/addpet', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(petData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    reset();
                    toast.success("Pet added successfully!")
                }
                else {
                    toast.error("Something went wrong")
                }

            })

    
};

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


return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Helmet><title>Add Pet | PawPalace</title></Helmet> 
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Add a Pet</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium">Image URL</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full p-2 border rounded-lg border-gray-400"
                    />
                    {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Name</label>
                    <input
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        placeholder="Pet Name"
                        className="w-full p-2 border rounded-lg border-gray-400"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Age</label>
                    <input
                        type="number"
                        {...register("age", { required: "Age is required", min: { value: 1, message: "Age cannot be in negative" } })}
                        placeholder="Pet Age"
                        className="w-full p-2 border rounded-lg border-gray-400"
                    />
                    {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Location</label>
                    <input
                        {...register("location", { required: "Location is required" })}
                        placeholder="Pet Location"
                        className="w-full p-2 border rounded-lg border-gray-400"
                    ></input>
                    {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Short Description</label>
                    <input
                        {...register("short", { required: "Short description is required" })}
                        placeholder="Short Description"
                        className="w-full p-2 border rounded-lg border-gray-400"
                    ></input>
                    {errors.short && <p className="text-red-500 text-sm">{errors.short.message}</p>}
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Category</label>
                    <Controller
                        name="category"
                        control={control}
                        rules={{ required: "Category is required" }}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={categories}
                                className="basic-single"
                                classNamePrefix="select"
                                placeholder="Select Category"
                            />
                        )}
                    />
                    {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Long Description</label>
                    <textarea
                        {...register("long", {
                            required: "Long description is required",
                            minLength: {
                                value: 10,
                                message: "Long description must be at least 10 characters",
                            },
                        })}
                        placeholder="Enter a detailed description"
                        className="w-full p-2 border rounded-md"
                    ></textarea>
                    {errors.long && <p className="text-red-500 text-sm">{errors.long.message}</p>}
                </div>

                <div>
                    <button type="submit" className="w-full p-3 text-white bg-[#0A303A] rounded-lg">Submit</button>
                </div>
            </form>
        </div>
    </div>
);
};

export default Addpet;