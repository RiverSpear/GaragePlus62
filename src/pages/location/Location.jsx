import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import client from "../../client";
import Loading from "../../components/Loading/Loading";
import Navbar from "../../components/navigation bar/Navbar";
import Footer from "../../components/footer/Footer";
import ScrollToTop from "../../components/scroll to top/ScrollToTop";

import whatsapp_icon from "../../asset/icon/whatsapp.svg";
import instagram_icon from "../../asset/icon/instagram.svg";
import tiktok_icon from "../../asset/icon/tiktok.svg";
import PageNotFound from "../error/PageNotFound";

function Location() {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await client.getEntries({
                    content_type: "location",
                });
                setArticles(
                    response.items.sort((a, b) => {
                        if (a.fields.type === b.fields.type) return 0;
                        if (a.fields.type === true) return -1;
                        return 1;
                    })
                );
            } catch (err) {
                setError(err);
            }
        };
        fetchData();
    }, []);

    if (!articles) return <Loading />;
    if (error) return <PageNotFound />;
    return (
        <>
            <div>
                <Navbar />
                <div className="bg-gradient-to-r from-amber-200 to-orange-200 w-full h-[150px]"></div>
                <div className="flex flex-col gap-44 pt-20">
                    <div className="flex flex-col items-center gap-20">
                        <div className="flex flex-col items-center gap-5 text-center px-10 lg:px-32 z-10">
                            <p className="text-[31px] sm:text-[48px] worksans-500">
                                Lokasi Bengkel
                            </p>
                            <p className="worksans text-slate-700 w-full sm:w-3/4 md:w-1/2 text-center leading-7">
                                Bengkel kami terletak di lokasi yang strategis
                                dan mudah dijangkau dari mana pun Anda berada.
                                Tak perlu khawatir menempuh perjalanan jauh,
                                kami siap melayani Anda dengan sepenuh hati. -{" "}
                                <Link to="/kontak" className="underline">
                                    Hubungi Kami Sekarang!
                                </Link>
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-10 px-0 md:px-20 xl:px-32">
                            {articles.map((article, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-7 bg-white p-5 md:p-8 rounded-2xl shadow-[0_0_100px_20px_rgba(0,0,0,0.05)] w-[375px] md:w-[500px] duration-200"
                                >
                                    <div className="flex flex-col gap-3">
                                        {article.fields.type === true ? (
                                            <p className="worksans-600 text-amber-500">
                                                Pusat
                                            </p>
                                        ) : (
                                            <p className="worksans-600 text-amber-500">
                                                Cabang
                                            </p>
                                        )}
                                    </div>
                                    <p className="worksans text-gray-700 leading-7">
                                        {article.fields.longAddress}
                                    </p>
                                    <div className="flex items-center gap-10">
                                        <a
                                            href={article.fields.whatsappUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-5"
                                        >
                                            <img
                                                src={whatsapp_icon}
                                                alt="Whatsapp icons"
                                                title="whatsapp icons"
                                                className="w-[24px] h-full"
                                            />
                                        </a>
                                        <a
                                            href={article.fields.instagramUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-5"
                                        >
                                            <img
                                                src={instagram_icon}
                                                alt="Instagram icons"
                                                title="instagram icons"
                                                className="w-[24px] h-full"
                                            />
                                        </a>
                                        <a
                                            href={article.fields.tikTokUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-5"
                                        >
                                            <img
                                                src={tiktok_icon}
                                                alt="Tiktok icons"
                                                title="tiktok icons"
                                                className="w-[24px] h-full"
                                            />
                                        </a>
                                    </div>
                                    <div className="map-container">
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: article.fields
                                                    .googleMapsEmbed,
                                            }}
                                            width="575"
                                            height="450"
                                            frameBorder="0"
                                            allowFullScreen
                                        ></div>
                                    </div>
                                    <a
                                        href={article.fields.googleMapsLink}
                                        className="group flex items-center gap-2 bg-black px-5 py-3 worksans rounded-full w-max"
                                    >
                                        <span className="group-hover:rotate-45 bg-white duration-200 p-2 rounded-full">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                className="w-4 h-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                                />
                                            </svg>
                                        </span>
                                        <p className="capitalize text-white">
                                            google maps
                                        </p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </div>
        </>
    );
}

export default Location;
