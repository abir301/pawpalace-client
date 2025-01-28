import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Toaster } from "react-hot-toast";


const Dashboard = () => {
    return (<>
        <Toaster></Toaster>
        <div className="flex gap-10">

            <Sidebar></Sidebar>
            <main className="flex-1 p-6">
                <Outlet />
            </main>
        </div>
    </>

    );
};

export default Dashboard;