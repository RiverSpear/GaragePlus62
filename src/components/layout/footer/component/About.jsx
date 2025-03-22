import React from "react";
import { Link } from "react-router-dom";
import useFetchArticles from "../../../../hooks/useFetchArticle";
import Location from "./Location";

function About() {
    const { articles } = useFetchArticles("aboutUs");
    return (
        <>
            {articles.map((article, index) => (
                <div key={index} className="flex flex-col gap-10 lg:gap-20">
                    <div className="flex flex-col gap-2 w-full">
                        <Link to="/" className="w-max">
                            <img
                                src={
                                    "https:" +
                                    article.fields.logo.fields.file.url
                                }
                                alt=""
                                className="w-[80px]"
                            />
                        </Link>
                        <p className="worksans text-slate-500 text-sm w-full md:w-[400px]">
                            {article.fields.headlineDescription}
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
                        <div className="flex flex-col sm:flex-row gap-10 md:gap-20">
                            <div className="flex flex-col gap-5 whitespace-nowrap">
                                <p className="worksans-600">Quick Links</p>
                                <div className="flex flex-col gap-2 worksans text-slate-500 text-sm">
                                    <Link
                                        to="/servis"
                                        className="hover:text-amber-500"
                                    >
                                        Servis kami
                                    </Link>
                                    <Link
                                        to="/lokasi"
                                        className="hover:text-amber-500"
                                    >
                                        Lokasi kami
                                    </Link>
                                    <Link
                                        to="/faq"
                                        className="uppercase hover:text-amber-500"
                                    >
                                        FAQ
                                    </Link>
                                    <Link
                                        to="/testimoni"
                                        className="hover:text-amber-500"
                                    >
                                        Testimoni
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 whitespace-nowrap">
                                <p className="worksans-600">Jam Operasional</p>
                                <table className="worksans text-slate-500 blackspace-nowrap text-sm">
                                    <tbody>
                                        <tr>
                                            <td className="pb-2 pr-14">
                                                Senin - Sabtu
                                            </td>
                                            <td className="pb-2">
                                                {article.fields.mondaySaturday}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pb-2">Jumat</td>
                                            <td className="pb-2">
                                                {article.fields.friday}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pb-2">
                                                Minggu & Hari libur
                                            </td>
                                            <td className="pb-2">
                                                {article.fields.holiday}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-10">
                            <Location />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default About;
