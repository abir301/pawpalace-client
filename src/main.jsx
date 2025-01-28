import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './Home.jsx';
import Homecontent from './HomeContent/Homecontent.jsx';
import Petlisting from './Components/Petlisting.jsx';
import Donationcampaign from './Components/Donationcampaign.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import Auth from './Authprovider';
import Dashboard from './Dashboard/Dashboard.jsx';
import Addpet from './Dashboard/All/Addpet.jsx';
import Adoptionreq from './Dashboard/All/Adoptionreq.jsx';
import Myaddedpets from './Dashboard/All/Myaddedpets.jsx';
import Createdonation from './Dashboard/All/Createdonation.jsx';
import Mydonationcamp from './Dashboard/All/Mydonationcamp.jsx';
import Mydonations from './Dashboard/All/Mydonations.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Homecontent />,
      },      
      {
        path: 'login',
        element: <Login />,
      },      
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'petlisting',
        element: <Petlisting />,
      },
      {
        path: 'donationcampaign',
        element: <Donationcampaign />,
      },
    ],
  },  
  {
    path: "/dashboard",
    element: <Dashboard/>,
    children: [
     
      {
        path: 'addpet',
        element: <Addpet />,
      },      
      {
        path: 'adoption-requests',
        element: <Adoptionreq />,
      },
      {
        path: 'mypets',
        element: <Myaddedpets />,
      },
      {
        path: 'create-donation',
        element: <Createdonation />,
      },
      {
        path: 'mydonation-campaign',
        element: <Mydonationcamp />,
      },
      {
        path: 'mydonations',
        element: <Mydonations />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth>
    <RouterProvider router={router} />
    </Auth>
  </StrictMode>
)
