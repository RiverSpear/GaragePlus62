import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../../client";

import Footer from "../../components/footer/Footer";
import Loading from "../../components/Loading/Loading";
import Navbar from "../../components/navigation bar/Navbar";
import ScrollToTop from "../../components/scroll to top/ScrollToTop";
import PageNotFound from "../error/PageNotFound";

function Testimony() {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await client.getEntries({
                    content_type: "testimonial",
                });
                setArticles(response.items);
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
            <Navbar />
            <div className="bg-gradient-to-r from-amber-200 to-orange-200 w-full h-[150px]"></div>
            <div className="flex flex-col gap-44 pt-20">
                <div className="flex flex-col items-center gap-20 z-10">
                    <div className="flex flex-col items-center gap-10 text-center px-5 lg:px-32">
                        <p className="worksans-500 text-[31px] md:text-[48px] text-center w-full md:w-3/4">
                            Apa yang Mereka Katakan Tentang Layanan Kami
                        </p>
                        <span className="worksans text-gray-700">
                            Ingin memberikan testimoni ? Silahkan{" "}
                            <Link to="/kontak" className="underline">
                                hubungi tim kami.
                            </Link>
                        </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-20 xl:px-32">
                        {articles.map((article, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-between gap-5 bg-white text-left rounded-2xl shadow-[0_0_100px_20px_rgba(0,0,0,0.05)] p-6"
                            >
                                <p className="worksans-500 italic text-[14px] sm:text-[16px] text-left">
                                    {article.fields.testimony}
                                </p>
                                <p className="worksans-600 text-amber-500">
                                    {article.fields.reviewerName}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
                <ScrollToTop />
            </div>
        </>
    );
}

export default Testimony;
