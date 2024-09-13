import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../../client";
import Footer from "../../components/footer/Footer";
import Loading from "../../components/Loading/Loading";
import Navbar from "../../components/navigation bar/Navbar";
import PageNotFound from "../error/PageNotFound";

export function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />;
    };
}

function SingleServicePage({ match }) {
    const [singleArticles, setSingleArticles] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await client.getEntries({
                    content_type: "service",
                    "fields.slug": match.params.slug,
                });
                setSingleArticles(response.items[0]);
            } catch (err) {
                setError(err);
            }
        };
        fetchData();
    }, [match.params.slug]);

    if (!singleArticles) return <Loading />;
    if (error) return <PageNotFound />;

    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-r from-amber-200 to-orange-200 w-full h-[150px]"></div>
            <div className="flex flex-col gap-44 pt-20">
                <div className="flex flex-col items-center gap-20 px-10 lg:px-32">
                    <p className="worksans-500 text-[31px] md:text-[48px] text-center w-full sm:w-3/4 z-10">
                        {singleArticles.fields.servicePackageName}
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                        {singleArticles.fields.detailService.map(
                            (detailService, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-7"
                                >
                                    <div className="flex flex-col gap-5 border-b-2 pb-7">
                                        <div className="flex flex-col gap-2">
                                            <p className="worksans-600 text-[15px] text-amber-500">
                                                {detailService.fields.tier}
                                            </p>
                                            <p className="worksans-600 text-[18px]">
                                                {
                                                    detailService.fields
                                                        .detailServiceName
                                                }
                                            </p>
                                            <p className="worksans text-[14px] text-slate-600">
                                                Peningkatan performa mesin yang
                                                signifikan: Performa mesin akan
                                                lebih optimal dengan peningkatan
                                                tenaga
                                            </p>
                                        </div>
                                        <p className="worksans-600 text-3xl">
                                            {detailService.fields.price
                                                .toLocaleString("id-ID", {
                                                    style: "currency",
                                                    currency: "IDR",
                                                })
                                                .replace(/,00$/, "")}
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 gap-2">
                                        {detailService.fields.servicePart.map(
                                            (_, index) => (
                                                <span
                                                    className="flex items-center gap-2"
                                                    key={index}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={2}
                                                        stroke="currentColor"
                                                        className="w-5 h-5 stroke-green-500 flex-shrink-0"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M4.5 12.75l6 6 9-13.5"
                                                        />
                                                    </svg>
                                                    <p className="worksans-500 text-[15px]">
                                                        {
                                                            detailService.fields
                                                                .servicePart[
                                                                index
                                                            ]
                                                        }
                                                    </p>
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default withRouter(SingleServicePage);
