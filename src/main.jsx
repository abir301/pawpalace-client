import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
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
import Dashtext from './Dashboard/Dashtext.jsx';
import Updatepet from './Dashboard/All/Updatepet.jsx';
import Petdetails from './Components/Petdetails.jsx';
import Alldonations from './Dashboard/Admin/Alldonations.jsx';
import Allpets from './Dashboard/Admin/Allpets.jsx';
import Alluser from './Dashboard/Admin/Alluser.jsx';
import Updatedonation from './Dashboard/All/Updatedonation.jsx';
import Donationdetails from './Components/Donationdetails.jsx';



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
        loader: () => fetch(`https://pawpalace-server.vercel.app/addpet`)
      },      
      {
        path: 'petlisting/:category',
        element: <Petlisting />,
        loader: () => fetch(`https://pawpalace-server.vercel.app/addpet`)
      },
      {
        path: 'petlisting/details/:id',
        element: <Petdetails />,
        loader: ({ params }) => fetch(`https://pawpalace-server.vercel.app/addpet/${params.id}`)
      },
      {
        path: 'donationcampaign',
        element: <Donationcampaign />,
        loader: () => fetch(`https://pawpalace-server.vercel.app/adddonation`)
      },
      {
        path: 'donationcampaign/details/:id',
        element: <Donationdetails />,
        loader: ({ params }) => fetch(`https://pawpalace-server.vercel.app/adddonation/${params.id}`)
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard',
        element: <Dashtext />,
        loader: async ({ params }) => {
          const donation = await fetch(`https://pawpalace-server.vercel.app/adddonation`); 
          const pet = await fetch(`https://pawpalace-server.vercel.app/addpet`); 
          const loadDonation = await donation.json(); 
          const loadPet = await pet.json(); 
          return { loadDonation , loadPet };
        }
      },

      {
        path: 'addpet',
        element: <Addpet />,
      },
      {
        path: 'adoption-requests',
        element: <Adoptionreq />,
        loader: () => fetch(`https://pawpalace-server.vercel.app/adoptreq`)
      },
      {
        path: 'mypets',
        element: <Myaddedpets />,
        loader: () => fetch(`https://pawpalace-server.vercel.app/addpet`)
      },
      {
        path: 'create-donation',
        element: <Createdonation />,
      },
      {
        path: 'mydonation-campaign',
        element: <Mydonationcamp />,
        loader: async ({ params }) => {
          const donation = await fetch(`https://pawpalace-server.vercel.app/adddonation`); 
          const donators= await fetch(`https://pawpalace-server.vercel.app/donators`); 
          const loadDonation = await donation.json(); 
          const loadDonators = await donators.json(); 
          return { loadDonation , loadDonators };
        },
      },
      {
        path: 'mydonations',
        element: <Mydonations />,
        loader: () => fetch(`https://pawpalace-server.vercel.app/donators`)
      },
      {
        path: 'update-donation/:id',
        element: <Updatedonation />,
        loader: ({ params }) => fetch(`https://pawpalace-server.vercel.app/adddonation/${params.id}`)
      },
      {
        path: 'update-pet/:id',
        element: <Updatepet />,
        loader: ({ params }) => fetch(`https://pawpalace-server.vercel.app/addpet/${params.id}`)
      },
      {
        path: 'admin-alldonations',
        element: <Alldonations />,
      },
      {
        path: 'admin-allpets',
        element: <Allpets />,
      },
      {
        path: 'admin-alluser',
        element: <Alluser />,
      }
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
