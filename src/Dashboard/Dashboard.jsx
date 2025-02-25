import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";


const Dashboard = () => {
    return (<>
        <Toaster></Toaster>
        <div className="flex">
        <Helmet><title>Dashboard | PawPalace</title></Helmet> 
            <Sidebar></Sidebar>
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    </>

    );
};

export default Dashboard;