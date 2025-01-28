import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { authContext } from "../Authprovider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
    let { login, setUser, signInWithGoogle, signInWithGithub } = useContext(authContext)
    const navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        login(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                toast.success('login successful')
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                const errorMessage = error.message;
                const errorText = errorMessage.includes("auth/invalid-credential")
                    ? "Invalid Email or Password. Please try again with correct information."
                    : "Something went wrong. Please try again.";
                toast.error(errorText);
            });

    }

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
                            <div className="text-right mt-2">
                                <button
                                    type="button"
                                    className="text-sm text-[#0A303A] hover:underline focus:outline-none">
                                    Forgot password?
                                </button>
                            </div>
                        </div>
                        <div>
                            <button className="w-full py-3 text-white rounded-lg bg-[#0A303A]">Login</button>
                        </div>
                    </form>
                    <div className="mt-4 flex items-center justify-center gap-2">
                        <p className="text-[#0A303A]">Or sign in with</p>
                        <button onClick={githubSign} className="w-fit p-1 text-[#0A303A] border border-[#0A303A] rounded-full"><FaGithub className="size-6" /></button>
                        <button onClick={googleSign} className="w-fit p-1 text-[#0A303A] border border-[#0A303A] rounded-full"><FaGoogle className="size-6" /></button>
                    </div>
                    <p className="text-center mt-4 text-sm text-[#0A303A]">Don’t have an account? <Link to="/register" className="underline">Register</Link></p>
                </div>
            </div>

        </div>
    );
};

export default Login;