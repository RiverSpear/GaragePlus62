import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//styling
import './index.css';
import './style/App.css'
import './style/Config.css'
import './style/ThirdParty.css'
import './style/font.css'
import 'aos/dist/aos.css'; 

//route
import Home from './pages/homepage/Home';
import FaqPage from './pages/faq/FaqPage';

import reportWebVitals from './reportWebVitals';
import LocationPage from './pages/location/LocationPage';
import ServicePage from './pages/service/ServicePage';
import SingleServicePage from './pages/service/SingleServicePage';
import SingleLocationPage from './pages/location/SingleLocationPage';
import ContactPage from './pages/contact/ContactPage';
import Loading from './components/Loading/Loading';
import TestimonyPage from './pages/testimony/TestimonyPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/faq",
    element: <FaqPage/>,
  },
  {
    path: "/lokasi",
    element: <LocationPage/>,
  },
  {
    path: "/lokasi/:slug",
    element: <SingleLocationPage/>,
  },
  {
    path: "/servis",
    element: <ServicePage/>,
  },
  {
    path: "/servis/:slug",
    element: <SingleServicePage/>,
  },
  {
    path: "/kontak",
    element: <ContactPage/>,
  },
  {
    path: "/testimoni",
    element: <TestimonyPage/>,
  },
  {
    path: "/loading",
    element: <Loading/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
