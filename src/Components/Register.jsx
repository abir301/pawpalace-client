import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
    return (
        <div>
            <div className="flex justify-center items-center bg-gray-100">
                <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-8 my-14">
                    <form className="space-y-4">
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
                            <input type="url" name="email" placeholder="Image URL" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A303A]" required />
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
                        <button className="w-fit p-1 text-[#0A303A] border border-[#0A303A] rounded-full"><FaGithub className="size-6" /></button>
                        <button className="w-fit p-1 text-[#0A303A] border border-[#0A303A] rounded-full"><FaGoogle className="size-6" /></button>
                    </div>
                    <p className="text-center mt-4 text-sm text-[#0A303A]">Already have an account? <span className="underline">Login</span></p>
                </div>
            </div>
        </div>
    );
};

export default Register;