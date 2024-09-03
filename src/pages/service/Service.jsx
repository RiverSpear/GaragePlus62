import React, { useEffect, useState } from "react";
import "lazysizes";
import client from "../../client";
import { Link } from "react-router-dom";

import Loading from "../../components/Loading/Loading";
import Navbar from "../../components/navigation bar/Navbar";
import Footer from "../../components/footer/Footer";
import ScrollToTop from "../../components/scroll to top/ScrollToTop";
import PageNotFound from "../error/PageNotFound";

function Service() {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await client.getEntries({
                    content_type: "service",
                    order: "fields.contentOrder",
                });
                setArticles(
                    response.items.sort(
                        (a, b) => a.fields.contentOrder - b.fields.contentOrder
                    )
                );
            } catch (err) {
                setError(err);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined" && window.lazySizes) {
            window.lazySizes.init();
        }
    }, []);

    if (!articles) return <Loading />;
    if (error) return <PageNotFound />;
    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-r from-amber-200 to-orange-200 w-full h-[150px]"></div>
            <div className="flex flex-col gap-44 pt-20 z-20">
                <div className="flex flex-col items-center gap-5 text-center px-10 lg:px-32 z-10">
                    <p className="text-[31px] sm:text-[48px] worksans-500">
                        Produk Servis
                    </p>
                    <p className="worksans text-slate-700 w-full sm:w-3/4 md:w-1/2 text-center leading-7">
                        Kendaraan Anda adalah aset berharga yang perlu dijaga
                        dengan baik. Pastikan kendaraan Anda selalu dalam
                        kondisi prima dan terhindar dari kerusakan yang lebih
                        parah. -{" "}
                        <Link to="/kontak" className="underline">
                            Hubungi Kami Sekarang!
                        </Link>
                    </p>
                </div>
                <div className="flex flex-wrap justify-between gap-y-20 px-5 md:px-20 xl:px-32">
                    {articles.map((article, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-3 w-[350px] xl:w-[375px]"
                        >
                            <img
                                data-src={
                                    "https:" +
                                    article.fields.headlinePhoto.fields.file.url
                                }
                                alt={article.fields.headlinePhoto.fields.title}
                                className="lazyload h-[200px] object-cover rounded-2xl"
                            />
                            <div className="flex flex-col gap-10 h-full">
                                <div className="flex-1 flex flex-col gap-2">
                                    {article.fields.detailService
                                        .slice(0, 1)
                                        .map((detailService, index) => {
                                            if (
                                                detailService.fields
                                                    .serviceAllIn
                                            ) {
                                                return (
                                                    <p
                                                        key={index}
                                                        className="worksans-600 text-[14px] text-amber-500"
                                                    >
                                                        Service All In
                                                    </p>
                                                );
                                            }
                                        })}
                                    <p className="worksans-500">
                                        {article.fields.servicePackageName}
                                    </p>
                                    <p className="worksans-500 text-slate-500 text-[14px]">
                                        Kami menyediakan{" "}
                                        {article.fields.detailService.length}{" "}
                                        paket
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    {article.fields.detailService
                                        .map((detailService) => (
                                            <div>
                                                <p className="worksans-500 text-[12px]">
                                                    Mulai dari
                                                </p>
                                                <p className="worksans-600 text-[18px]">
                                                    {detailService.fields.price.toLocaleString(
                                                        "id-ID",
                                                        {
                                                            style: "currency",
                                                            currency: "IDR",
                                                        }
                                                    )}
                                                </p>
                                            </div>
                                        ))
                                        .reduce((prev, cur) =>
                                            cur.price < prev.price ? cur : prev
                                        )}
                                    <Link
                                        to={`/servis/${article.fields.slug}`}
                                        className="bg-orange-100 hover:bg-amber-500 duration-200 worksans-500 whitespace-nowrap px-4 py-2 rounded-full"
                                    >
                                        Ayo cek
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Footer />
                <ScrollToTop />
            </div>
        </>
    );
}

export default Service;
