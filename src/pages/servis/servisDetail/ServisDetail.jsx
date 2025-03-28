import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchArticles from "../../../hooks/useFetchArticle";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/footer/Footer";
import Breadcrumb from "../../../components/common/Breadcrumb";
import Loading from "../../../components/layout/loading/Loading";
import BadRequest from "../../../components/errors/BadRequest";
import PageNotFound from "../../../components/errors/PageNotFound";
import ScrollToTop from "../../../components/layout/ScrollToTop";

function ServisDetail() {
    const { slug } = useParams();
    const {
        articles: singleArticle,
        isLoading,
        error,
    } = useFetchArticles("service", slug);
    const [activeTab, setActiveTab] = useState(0);

    if (isLoading) return <Loading />;
    if (error) return <BadRequest />;
    if (!singleArticle) return <PageNotFound />;

    return (
        <>
            <Navbar />
            <div
                id="top"
                className="flex flex-col gap-5 w-full 2xl:w-[1500px] px-5 sm:px-10 md:px-16 xl:px-24 pt-28 md:pt-40 pb-40 mx-auto"
            >
                <Breadcrumb
                    paths={[
                        { label: "Garageplus62" },
                        { label: "Servis" },
                        { label: `${singleArticle.fields.servicePackageName}` },
                    ]}
                />
                <div className="flex flex-col md:flex-row gap-5 md:gap-10 w-full ">
                    <img
                        src={
                            "https:" +
                            singleArticle.fields.headlinePhoto.fields.file.url
                        }
                        className="w-full md:w-1/2 h-[200px] sm:h-[300px] md:h-[375px] lg:h-[425px] object-cover rounded-[20px]"
                    />
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2 w-full lg:w-3/4">
                            <p className="worksans-600 text-2xl">
                                {singleArticle.fields.servicePackageName}
                            </p>
                            <p className="worksans text-[14px] text-gray-600">
                                {singleArticle.fields.serviceDescription}
                            </p>
                        </div>
                        {singleArticle.fields.detailService.map(
                            (detailService, i) => (
                                <p
                                    key={i}
                                    className={`worksans-600 text-2xl ${
                                        activeTab === i ? "block" : "hidden"
                                    }`}
                                >
                                    {detailService.fields.price
                                        .toLocaleString("id-ID", {
                                            style: "currency",
                                            currency: "IDR",
                                        })
                                        .replace(/,00$/, "")}
                                </p>
                            )
                        )}
                        <div className="flex flex-col gap-2 border-t border-b border-slate-200 py-5">
                            <p className="worksans-500">Pilih varian: </p>
                            <div className="flex flex-wrap gap-2">
                                {singleArticle.fields.detailService.map(
                                    (detailService, i) => (
                                        <button
                                            key={i}
                                            name={
                                                detailService.fields
                                                    .detailServiceName -
                                                detailService.fields.tier
                                            }
                                            onClick={() => setActiveTab(i)}
                                            className={`text-sm text-left px-3 py-2 rounded-full hover:text-amber-500 hover:bg-amber-50 transition-all duration-200 cursor-pointer ${
                                                activeTab === i
                                                    ? "bg-amber-50 worksans-500 text-amber-500"
                                                    : "bg-slate-50 worksans"
                                            } `}
                                        >
                                            {
                                                detailService.fields
                                                    .detailServiceName
                                            }{" "}
                                            - {detailService.fields.tier}
                                        </button>
                                    )
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="worksans-500">Detail servis:</p>
                            {singleArticle.fields.detailService.map(
                                (detailService, index) => (
                                    <div
                                        key={index}
                                        className={`flex flex-col gap-2 ${
                                            activeTab === index
                                                ? "block"
                                                : "hidden"
                                        }`}
                                    >
                                        {detailService.fields.servicePart.map(
                                            (part, idx) => (
                                                <span
                                                    className="flex items-center gap-2"
                                                    key={idx}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={2.5}
                                                        stroke="currentColor"
                                                        className="w-5 h-5 stroke-amber-500 flex-shrink-0"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M4.5 12.75l6 6 9-13.5"
                                                        />
                                                    </svg>
                                                    <p className="worksans-500 text-[15px]">
                                                        {part}
                                                    </p>
                                                </span>
                                            )
                                        )}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default ServisDetail;
