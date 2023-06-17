import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//styling
import './index.css';
import './style/App.css'
import './style/Config.css'
import './style/ThirdParty.css'
import './style/font.css'
import 'aos/dist/aos.css'; 

//route
import Home from './pages/homepage/Home';
import Service from './pages/service/Service';
import Location from './pages/location/Location';
import Faq from './pages/faq/Faq';

import SingleServicePage from './pages/service/SingleServicePage';
import Contact from './pages/contact/Contact';
import Testimony from './pages/testimony/Testimony';
import PageNotFound from './pages/error/PageNotFound';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' exact element={<Home/>} />
                    <Route path='/home' exact element={<Home/>} />
                    <Route path="/faq" exact element={<Faq/>}/>
                    <Route path="/lokasi" exact element={<Location/>}/>
                    <Route path="/servis"  exact element={<Service/>}/>
                    <Route path="/servis/:slug" element={<SingleServicePage/>}/>
                    <Route path="/kontak" exact element={<Contact/>}/>
                    <Route path="/testimoni" exact element={<Testimony/>}/>
                    <Route path="/*" element={<PageNotFound/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App