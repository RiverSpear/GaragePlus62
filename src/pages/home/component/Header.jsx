import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 w-full">
                <div className="w-full md:w-1/2">
                    <p className="worksans-600 text-[1.75rem] sm:text-[2.25rem] md:text-[3rem] xl:text-[3.5rem] text-gray-500 leading-normal md:leading-20">
                        Motor Kesayangan Bermasalah?
                    </p>
                    <span className="flex flex-col lg:flex-row items-start lg:items-center gap-2 md:gap-5">
                        <p className="worksans-600 text-[1.75rem] sm:text-[2.25rem] md:text-[3rem] xl:text-[3.5rem] whitespace-nowrap">
                            garage+62 Solusinya!
                        </p>
                        <a
                            href="#servis"
                            title="Go to servis"
                            className="bg-amber-500 p-3 rounded-full"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="currentColor"
                                className="size-4 sm:size-5 md:size-6 stroke-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                                />
                            </svg>
                        </a>
                    </span>
                </div>
                <div className="flex flex-col gap-2 w-full sm:w-1/2 md:w-1/4">
                    <p className="bg-amber-50 worksans-500 text-[.875rem] px-2 py-1 w-max rounded-full">
                        Garageplus62
                    </p>
                    <p className="worksans text-[.9375rem]">
                        Percayakan perawatan motormu kepada teknisi
                        berpengalaman dan peralatan modern, untuk hasil yang
                        maksimal
                    </p>
                    <Link className="group flex items-center gap-2">
                        <p className="text-amber-500 worksans-500 text-[.875rem] underline underline-offset-8">
                            Lihat Servis
                        </p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4 stroke-amber-500 group-hover:ml-1 duration-300"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Header;
