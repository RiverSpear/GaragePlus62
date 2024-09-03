import React from "react";
import { Link } from "react-router-dom";

import ListLocation from "./components/ListLocationHomepage";
import Faq from "./components/Faq";
import Footer from "../../components/footer/Footer";
import ListService from "./components/ListService";
import MarketingBox from "../../components/marketing box/MarketingBox";
import Chat from "../../components/chat/Chat";
import AboutHomepage from "./components/AboutHomepage";
import TestimonyHomepage from "./components/TestimonyHomepage";
import NavbarHomepage from "../../components/navigation bar/NavbarHompage";

function Home() {
    return (
        <>
            <div className="flex flex-col gap-56">
                <div>
                    <NavbarHomepage />
                    <AboutHomepage />
                </div>
                <div className="flex flex-col gap-20 px-5 lg:px-28">
                    <div className="flex flex-col gap-5">
                        <p className="text-[25px] sm:text-[39px] worksans-600 capitalize">
                            Layanan Servis
                        </p>
                        <p className="worksans text-gray-700 w-full md:w-3/4">
                            Servis motor nggak pake ribet, ada beragam paket
                            yang bisa kamu pilih! Di sini, kamu bisa temukan
                            berbagai paket servis, Tinggal pilih paket yang
                            sesuai dengan kebutuhanmu.
                        </p>
                    </div>
                    <ListService />
                </div>
                <div className="flex flex-col items-center gap-20 px-5 md:px-20 xl:px-32">
                    <div className="flex flex-col items-center gap-5">
                        <span className="bg-amber-500 p-5 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="white"
                                className="w-12 h-12"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                />
                            </svg>
                        </span>
                        <p className="text-[25px] sm:text-[39px] worksans-600 capitalize">
                            Lokasi Bengkel
                        </p>
                    </div>
                    <ListLocation />
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-20 px-5 md:px-20 xl:px-32">
                    <div className="flex flex-col gap-5 w-full lg:w-1/2">
                        <p className="worksans-600 text-[25px] sm:text-[39px] text-neutral-800 capitalize">
                            Pertanyaan yang Sering Ditanya
                        </p>
                        <p className="text-[16px] text-slate-700 worksans w-full lg:w-3/4">
                            Bingung? Ada pertanyaan? Kepoin dulu FAQ kita, kali
                            aja udah dijawab! kita siap ngebantu kamu
                        </p>
                        <Link
                            to="/faq"
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
                                Penasaran? Cek FAQ!
                            </p>
                        </Link>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <Faq />
                    </div>
                </div>
                <div className="flex flex-col gap-16 text-center px-5 md:px-20 xl:px-40">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
                        <p className="text-[25px] sm:text-[39px] worksans-600 capitalize">
                            Testimoni Pelanggan
                        </p>
                        <Link
                            to="/testimoni"
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
                                lihat testimoni
                            </p>
                        </Link>
                    </div>
                    <TestimonyHomepage />
                </div>
                <div className="px-5 md:px-20 xl:px-32">
                    <MarketingBox />
                </div>
                <div className="relative z-[100]"><Chat /></div>
                <Footer />
            </div>
        </>
    );
}

export default Home;
