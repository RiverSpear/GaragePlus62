import React, { useEffect, useState } from "react";
import client from "../../../client";
import Loading from "../../../components/Loading/Loading";

import whatsapp_icon from "../../../asset/icon/whatsapp.svg";
import instagram_icon from "../../../asset/icon/instagram.svg";
import tiktok_icon from "../../../asset/icon/tiktok.svg";
import PageNotFound from "../../error/PageNotFound";

function ListLocationHomepage() {
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
            <div className="flex flex-wrap justify-center gap-32 w-full">
                {articles.map((article, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center gap-5 w-full md:w-3/4 lg:w-1/3 xl:w-2/5"
                    >
                        {article.fields.type === true ? (
                            <p className="worksans-600 text-amber-600 text-[18px] w-max">Pusat</p>
                        ) : (
                            <p className="worksans-600 text-amber-600 text-[18px] w-max">
                                Cabang
                            </p>
                        )}
                        <div className="flex flex-col items-center gap-8">
                            <p className="worksans text-gray-600">
                                {article.fields.longAddress}
                            </p>
                            <div className="flex items-center gap-10">
                                <a
                                    href={
                                        "https://wa.me/" +
                                        article.fields.whatsapp
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-5"
                                >
                                    <img
                                        src={whatsapp_icon}
                                        alt="Whatsapp icons created by Pixel perfect - Flaticon"
                                        title="whatsapp icons"
                                        width={24}
                                        longdesc="https://www.flaticon.com/free-icons/whatsapp"
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
                                        alt="Instagram icons created by Pixel perfect - Flaticon"
                                        title="instagram icons"
                                        width={24}
                                        longdesc="https://www.flaticon.com/free-icons/instagram"
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
                                        alt="Tiktok icons created by Pixel perfect - Flaticon"
                                        title="tiktok icons"
                                        width={24}
                                        longdesc="https://www.flaticon.com/free-icons/tiktok"
                                    />
                                </a>
                            </div>
                            <a
                                href={article.fields.googleMapsLink}
                                target="_blank"
                                rel="noreferrer"
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
                                    Lihat Google Maps
                                </p>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ListLocationHomepage;
