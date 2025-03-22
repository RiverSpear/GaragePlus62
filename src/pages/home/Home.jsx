import React from "react";
import Navbar from "../../components/layout/Navbar";
import Header from "./component/Header";
import Gallery from "./component/Gallery";
import ListService from "./component/ListService";
import Location from "./component/Location";
import Faq from "./component/Faq";
import Testimony from "./component/Testimony";
import Footer from "../../components/layout/footer/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center gap-40 w-full px-5 sm:px-10 md:px-16 xl:px-24 pt-40 pb-40">
                <Header />
                <Gallery />
                <ListService />
                <Location />
                <Faq />
                <Testimony />
            </div>
            <Footer />
        </>
    );
}

export default Home;
