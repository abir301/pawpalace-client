import { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../Authprovider";
import toast from "react-hot-toast";

const Register = () => {
    const navigate = useNavigate()
    let { newUser, setUser, changeProfile, signInWithGoogle, signInWithGithub } = useContext(authContext)
    let [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;

        setError('');
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            setError(
                <div>
                    <p>Password must contain:</p>
                    <ul>
                        <li>One capital letter</li>
                        <li>One small letter</li>
                        <li>At least 6 characters</li>
                    </ul>
                </div>
            );
            return;
        }

        newUser(email, password)
            .then((result) => {
                const user = result.user;
                const userData = {
                    email: user.email,
                    displayName: name,
                    photoURL: photo,
                    role: "user",
                };

                changeProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser(user);
                        fetch("http://localhost:5000/user", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(userData),
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                if (data.token) {
                                    localStorage.setItem("jwtToken", data.token);
                                }
                                console.log(data.token);
                            });
                        toast.success("Registration successful");
                        navigate("/");
                    })
                    .catch((error) => {
                        toast.error("Profile update failed: " + error.message);
                    });
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };
    const googleSign = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user)
                toast.success('Google sign in successful');
                navigate("/");
            })
            .catch((error) => {
                console.error("Error during sign-in:", error.message);
            });
    }

    const githubSign = () => {
        signInWithGithub()
            .then((result) => {
                const user = result.user;
                setUser(user)
                toast.success('Sign in successful');
                navigate("/");
            })
            .catch((error) => {
                console.error("Error during sign-in:", error.message);
            });
    }


    return (
        <div>
            <div className="flex justify-center items-center bg-gray-100">
                <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-8 my-14">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A303A]" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Image
                            </label>
                            <input type="url" name="photo" placeholder="Image URL" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A303A]" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A303A]" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A303A]"
                                required
                            />
                        </div>
                        <div>
                            <button className="w-full py-3 text-white rounded-lg bg-[#0A303A]">Register</button>
                        </div>
                    </form>
                    <div className="mt-4 flex items-center justify-center gap-2">
                        <p className="text-[#0A303A]">Or sign in with</p>
                        <button onClick={githubSign} className="w-fit p-1 text-[#0A303A] border border-[#0A303A] rounded-full"><FaGithub className="size-6" /></button>
                        <button onClick={googleSign} className="w-fit p-1 text-[#0A303A] border border-[#0A303A] rounded-full"><FaGoogle className="size-6" /></button>
                    </div>

                    <p className="text-center mt-4 text-sm text-[#0A303A]">Already have an account? <Link to="/login" className="underline">Login</Link></p>
                    {
                        error && <div>
                            <div className="text-red-600 pl-4 pb-2">{error}</div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Register;