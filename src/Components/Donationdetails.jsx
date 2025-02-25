import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../Authprovider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Helmet } from "react-helmet";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const DonationForm = ({ handleDonation }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [amount, setAmount] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        if (amount <= 0) {
            toast.error("Donation cannot be in negative.");
            return;
        }

        const card = elements.getElement(CardElement);
        if (!card) return;
        handleDonation(e, amount);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
                <span className="text-gray-700">Donation Amount ($)</span>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-2 mt-1 border rounded"
                    placeholder="Enter amount"
                    required
                />
            </label>
            <label className="block">
                <span className="text-gray-700">Credit Card Details</span>
                <div className="p-2 mt-1 border rounded bg-white">
                    <CardElement />
                </div>
            </label>
            <button type="submit" disabled={!stripe} className="w-full p-2 text-white bg-[#F04336] rounded">
                Donate Now
            </button>
        </form>
    );
};

const Donationdetails = () => {
    const donation = useLoaderData();
    const [showModal, setShowModal] = useState(false);
    const { user } = useContext(authContext);

    const handleDonation = (e, amount) => {
        e.preventDefault();
        const form = e.target;
        const donationData = {
            petId: donation._id,
            petDisease: donation.shortDescription,
            petImage: donation.image,
            donatorName: user.displayName,
            donatorEmail: user.email,
            creatorEmail: donation.useremail,
            timestamp: new Date().toISOString(),
            amount,
        };

        fetch("https://pawpalace-server.vercel.app/donators", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(donationData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success("Donated Successfully.");
                    form.reset();
                    setShowModal(false);
                } else {
                    toast.error("Something went wrong");
                }
            });
    };

    return (
        <div>
            <Helmet><title>Donation Details | PawPalace</title></Helmet> 
            <div className="max-w-3xl mx-auto p-6 border border-[#F04336] rounded-lg shadow-lg bg-white text-[#0A303A]">
                <img className="w-full h-96 object-fill rounded-lg mb-4" src={donation.image} alt="" />
                <p className="text-3xl font-bold">{donation.shortDescription}</p>
                <p>Required Donation : {donation.maxDonation}</p>
                <p>Received Amount : {donation.donatedAmount}</p>
                <button onClick={() => setShowModal(true)} className="mt-4 bg-[#0A303A] text-white px-4 py-2 rounded-lg">Donate Now</button>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96 border-2 border-[#0A303A]">
                        <h2 className="text-xl font-bold mb-4">Donation for {donation.shortDescription}</h2>
                        <img src={donation.image} className="w-20 h-20 object-cover rounded-lg mb-3" />
                        <Elements stripe={stripePromise}>
                            <DonationForm handleDonation={handleDonation} />
                        </Elements>
                        <button type="button" onClick={() => setShowModal(false)} className="mt-4 w-full border-[#F04336] border-2 text-[#F04336] px-4 py-2 rounded-lg">
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Donationdetails;
