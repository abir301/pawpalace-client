import { useContext } from "react";
import { authContext } from "../Authprovider";



const Dashtext = () => {

const { user} = useContext(authContext);

    return (
        <div>
            <h1 className="text-4xl font-bold text-[#0A303A] text-center mt-20">Welcome Back {user?.displayName}</h1>
        </div>
    );
};

export default Dashtext;