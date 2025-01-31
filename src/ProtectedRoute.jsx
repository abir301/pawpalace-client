import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "./Authprovider";


const ProtectedRoute = ({ children, adminOnly = false }) => {
    const { user } = useContext(authContext);

    if (adminOnly && user.role !== "admin") {

        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
