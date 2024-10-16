import React, { useEffect, useState } from "react";
import "lazysizes";
import { Link } from "react-router-dom";
import client from "../../../client";

import Loading from "../../../components/Loading/Loading";
import PageNotFound from "../../error/PageNotFound";

function ListService() {
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
            <div className="flex flex-wrap justify-between gap-y-20">
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
                            className="lazyload w-full h-[200px] object-cover rounded-2xl"
                        />
                        <div className="flex flex-col gap-10 h-full">
                            <div className="flex-1 flex flex-col gap-2">
                                {article.fields.detailService
                                    .slice(0, 1)
                                    .map((detailService, index) => {
                                        if (detailService.fields.serviceAllIn) {
                                            return (
                                                <p
                                                    key={index}
                                                    className="worksans-600 text-[15px] text-amber-600 w-max"
                                                >
                                                    Service All In
                                                </p>
                                            );
                                        }
                                        return null; // Add this line to return a value for non-matching cases
                                    })}
                                <p className="worksans-500">
                                    {article.fields.servicePackageName}
                                </p>
                                <p className="worksans-500 text-slate-500 text-[14px]">
                                    Kami menyediakan{" "}
                                    {article.fields.detailService.length} paket
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                {article.fields.detailService
                                    .map((detailService) => (
                                        <div key={detailService.sys.id}>
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
                                        cur.props.children[1].props.children < prev.props.children[1].props.children ? cur : prev
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
        </>
    );
}

export default ListService;
