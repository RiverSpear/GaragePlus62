import React from "react";
import LokasiBox from "../../../components/common/LokasiBox";

function Location() {
    return (
        <>
            <div className="flex flex-col gap-20 px-5 lg:px-28">
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
                    <p className="worksans-600 text-[25px] sm:text-[31px] text-neutral-800 capitalize">
                        Lokasi Bengkel
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row justify-center gap-32 w-full">
                    <LokasiBox
                        boxClass="flex flex-col gap-5 w-full lg:w-[325px] xl:w-[500px]"
                        typeClass="worksans-600 text-amber-500 text-xl text-center"
                        contentContainer="flex flex-col-reverse gap-7"
                        addressClass="flex flex-col text-center gap-5"
                        socmedContainerClass="flex justify-center items-center gap-5"
                        buttonClass="mx-auto"
                        showMap={true}
                    />
                </div>
            </div>
        </>
    );
}

export default Location;
