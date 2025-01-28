import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './Home.jsx';
import Homecontent from './HomeContent/Homecontent.jsx';
import Petlisting from './Components/Petlisting.jsx';
import Donationcampaign from './Components/Donationcampaign.jsx';

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
        path: '/',
        element: <Homecontent />,
      },      
      {
        path: '/',
        element: <Homecontent />,
      },
      {
        path: '/petlisting',
        element: <Petlisting />,
      },
      {
        path: '/donationcampaign',
        element: <Donationcampaign />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
