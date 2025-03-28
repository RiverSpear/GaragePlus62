import React from "react";
import Navbar from "../../components/layout/Navbar";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/footer/Footer";
import Breadcrumb from "../../components/common/Breadcrumb";
import ScrollToTop from "../../components/layout/ScrollToTop";
import ServisBoxItem from "../../components/common/ServisBoxItem";
import useFetchArticles from "../../hooks/useFetchArticle";

function Servis() {
    const { articles } = useFetchArticles("service", null, true);
    return (
        <>
            <Navbar />
            <div
                id="top"
                className="flex flex-col gap-20 w-full 2xl:w-[1500px] px-5 sm:px-10 md:px-16 xl:px-24 pt-40 pb-40 mx-auto"
            >
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
                <div>
                    {articles.map((article, i) => (
                        <ServisBoxItem
                            article={article}
                            key={i}
                            responsiveStyle="w-full sm:w-[300px] lg:w-[29%] h-full float-left mb-5 sm:mr-8"
                        />
                    ))}
                </div>
            </div>
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default Servis;
