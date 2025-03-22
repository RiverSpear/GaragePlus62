import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/Header";
import LokasiBox from "../../components/common/LokasiBox";
import Breadcrumb from "../../components/common/Breadcrumb";

function Lokasi() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center gap-20 w-full px-5 sm:px-10 md:px-16 xl:px-24 pt-40 pb-40">
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
                        boxClass="flex flex-col gap-7 bg-white p-5 md:p-8 rounded-2xl shadow-[0_0_100px_20px_rgba(0,0,0,0.05)] w-full lg:w-[500px] duration-200"
                        showMap={true}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Lokasi;
