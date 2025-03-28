import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/Header";
import LokasiBox from "../../components/common/LokasiBox";
import Breadcrumb from "../../components/common/Breadcrumb";
import ScrollToTop from "../../components/layout/ScrollToTop";

function Lokasi() {
    return (
        <>
            <Navbar />
            <div
                id="top"
                className="flex flex-col items-center gap-20 w-full 2xl:w-[1500px] px-5 sm:px-10 md:px-16 xl:px-24 pt-40 pb-40 mx-auto"
            >
                <div>
                    <Breadcrumb
                        paths={[{ label: "Garageplus62" }, { label: "Lokasi" }]}
                    />
                    <Header
                        page="Lokasi"
                        title="Lokasi Bengkel"
                        description="Bengkel kami terletak di lokasi yang strategis dan mudah
                        dijangkau dari mana pun Anda berada. Tak perlu khawatir
                        menempuh perjalanan jauh, kami siap melayani Anda dengan
                        sepenuh hati"
                    />
                </div>
                <div className="flex flex-wrap justify-center gap-10">
                    <LokasiBox
                        boxClass="flex flex-col gap-5 bg-white p-5 md:p-8 rounded-2xl shadow-[0_0_100px_20px_rgba(0,0,0,0.05)] w-full lg:w-[500px] duration-200"
                        typeClass="worksans-600 text-amber-500 text-xl"
                        contentContainer="flex flex-col gap-5"
                        addressClass="flex flex-col gap-5"
                        socmedContainerClass="flex items-center gap-5"
                        showMap={true}
                    />
                </div>
            </div>
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default Lokasi;
