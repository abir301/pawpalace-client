import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Toaster } from "react-hot-toast";


const Dashboard = () => {
    return (<>
        <Toaster></Toaster>
        <div className="flex">

            <Sidebar></Sidebar>
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    </>

    );
};

export default Dashboard;