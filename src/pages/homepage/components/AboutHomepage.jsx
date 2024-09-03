import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../../../client";
import Loading from "../../../components/Loading/Loading";
import PageNotFound from "../../error/PageNotFound";

function AboutHomepage() {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await client.getEntries({
                    content_type: "aboutUs",
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
            <div className="absolute top-0 bg-gradient-to-b from-amber-50 to-white w-full h-screen"></div>
            {articles.map((article, i) => (
                <div key={i} className="relative flex flex-col gap-20 z-50">
                    <div className="flex flex-col items-center gap-10 pt-40">
                        <div className="flex flex-col items-center gap-5 text-center w-full lg:w-3/4">
                            <p className="worksans-500 text-[31px] sm:text-[44px]">
                                {article.fields.headline}
                            </p>
                            <p className="worksans text-[15px] leading-7 w-3/4 lg:w-2/3">
                                {article.fields.headlineDescription}
                            </p>
                        </div>
                        <div className="flex gap-5 text-[14px] sm:text-[16px] text-center whitespace-nowrap">
                            <Link
                                to="/lokasi"
                                className="worksans-500 capitalize bg-amber-500 hover:bg-amber-400 text-white px-8 py-3 rounded-full duration-200"
                            >
                                Lokasi Kami
                            </Link>
                            <Link
                                to="/servis"
                                className="worksans-500 capitalize bg-amber-500 hover:bg-amber-400 text-white px-8 py-3 rounded-full duration-200"
                            >
                                Servis Kami
                            </Link>
                        </div>
                    </div>
                    <div className="px-5">
                        <img
                            src={
                                `https:` +
                                article.fields.background.fields.file.url
                            }
                            alt=""
                            className="h-[300px] md:h-[500px] w-full object-cover rounded-3xl"
                        />
                    </div>
                </div>
            ))}
        </>
    );
}

export default AboutHomepage;
