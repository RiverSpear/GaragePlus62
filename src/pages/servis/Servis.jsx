import React from "react";
import Navbar from "../../components/layout/Navbar";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/footer/Footer";
import ServisBox from "../../components/common/ServisBox";
import Breadcrumb from "../../components/common/Breadcrumb";

function Servis() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center gap-20 w-full px-5 sm:px-10 md:px-16 xl:px-24 pt-40 pb-40">
                <div>
                    <Breadcrumb
                        paths={[{ label: "Garageplus62" }, { label: "Servis" }]}
                    />
                    <Header
                        page="Servis"
                        title="Produk Servis"
                        description="Kendaraan Anda adalah aset berharga yang perlu dijaga
                        dengan baik. Pastikan kendaraan Anda selalu dalam
                        kondisi prima dan terhindar dari kerusakan yang lebih
                        parah."
                    />
                </div>
                <ServisBox />
            </div>
            <Footer />
        </>
    );
}

export default Servis;
