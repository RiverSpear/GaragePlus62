import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../../client";
import Loading from "../Loading/Loading";

function Navbar() {
    const [articles, setArticles] = useState([]);
    const [mobileNavbar, setMobileNavbar] = useState(false);

    useEffect(() => {
        client
            .getEntries({ content_type: "aboutUs" })
            .then((response) => setArticles(response.items))
            .catch(console.error);
    }, []);

    if (!articles) return <Loading />;
    return (
        <>
            {articles.map((article, index) => (
                <div key={index}>
                    <div className="fixed z-20 bg-white w-full shadow-[0_25px_50px_-25px_rgba(148,163,184,0.35)]">
                        <div className="flex items-center justify-between gap-10 worksans px-5 lg:px-32">
                            <Link to="/" className="w-16 md:w-20">
                                <img
                                    src={
                                        "https:" +
                                        article.fields.logo.fields.file.url
                                    }
                                    alt="logo"
                                    className="w-full h-auto"
                                />
                            </Link>
                            <div
                                className="block md:hidden cursor-pointer"
                                onClick={() => setMobileNavbar(true)}
                            >
                                <svg
                                    width="24px"
                                    height="24px"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    color="#000000"
                                >
                                    <path
                                        d="M3 5h18M3 12h18M3 19h18"
                                        stroke="#000000"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </div>
                            <div className="hidden md:flex gap-10 text-black">
                                <Link
                                    to="/"
                                    className="hover-underline-animation"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/servis"
                                    className="hover-underline-animation"
                                >
                                    Servis
                                </Link>
                                <Link
                                    to="/lokasi"
                                    className="hover-underline-animation"
                                >
                                    Lokasi
                                </Link>
                                <Link
                                    to="/faq"
                                    className="uppercase hover-underline-animation"
                                >
                                    faq
                                </Link>
                                <Link
                                    to="/testimoni"
                                    className="hover-underline-animation"
                                >
                                    Testimoni
                                </Link>
                            </div>
                            <Link
                                to="/kontak"
                                className="hidden group md:flex items-center gap-2 bg-black pl-4 worksans-500 rounded-full w-max"
                            >
                                <p className="capitalize text-white text-[14px] whitespace-nowrap">
                                    Hubungi kami
                                </p>
                                <span className="group-hover:rotate-45 bg-white/30 p-3 rounded-full duration-200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.75}
                                        stroke="currentColor"
                                        className="w-5 h-5 stroke-white"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                        />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div
                        className={`fixed inset-0 z-20 bg-white duration-200 ${
                            mobileNavbar
                                ? "h-screen visible pt-20 sm:pt-32 opacity-100"
                                : "h-0 invisible pt-0 opacity-0"
                        }`}
                    >
                        <span
                            className="absolute right-0 top-0 p-10 cursor-pointer"
                            onClick={() => setMobileNavbar(false)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-10 h-10 hover:rotate-180 duration-200"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </span>
                        <div className="h-full flex justify-end pt-10 px-20">
                            <div className="flex flex-col gap-7 worksans-500 text-[25px] text-right">
                                <Link
                                    to="/"
                                    className="hover:pr-5 hover:text-amber-500 duration-200"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/servis"
                                    className="hover:pr-5 hover:text-amber-500 duration-200"
                                >
                                    Servis
                                </Link>
                                <Link
                                    to="/lokasi"
                                    className="hover:pr-5 hover:text-amber-500 duration-200"
                                >
                                    Lokasi
                                </Link>
                                <Link
                                    to="/faq"
                                    className="hover:pr-5 hover:text-amber-500 uppercase duration-200"
                                >
                                    faq
                                </Link>
                                <Link
                                    to="/testimoni"
                                    className="hover:pr-5 hover:text-amber-500 duration-200"
                                >
                                    Testimoni
                                </Link>
                                <Link
                                    to="/kontak"
                                    className="hover:pr-5 hover:text-amber-500 capitalize duration-200"
                                >
                                    Kontak kami
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Navbar;
