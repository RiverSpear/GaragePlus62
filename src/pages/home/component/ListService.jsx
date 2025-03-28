import React, { useEffect, useRef, useState } from "react";
import ServisBoxItem from "../../../components/common/ServisBoxItem.jsx";
import useFetchArticles from "../.././../hooks/useFetchArticle";
import Button from "../../../components/common/Button.jsx";
import ArrowIcon from "../../../assets/icon/ArrowIcon.jsx";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

function ListService() {
    const carouselRef = useRef(null);
    const { articles } = useFetchArticles("service", null, true);
    const [slidePercentage, setSlidePercentage] = useState(100);
    const updateSlidePercentage = () => {
        if (window.innerWidth >= 1024) {
            setSlidePercentage(33.33);
        } else if (window.innerWidth >= 768) {
            setSlidePercentage(50);
        } else {
            setSlidePercentage(100);
        }
    };

    // Gunakan useEffect agar nilai berubah saat window di-resize
    useEffect(() => {
        updateSlidePercentage();
        window.addEventListener("resize", updateSlidePercentage);
        return () =>
            window.removeEventListener("resize", updateSlidePercentage);
    }, []);

    return (
        <>
            <div id="servis" className="flex flex-col gap-20">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start w-full">
                    <p className="worksans-600 text-[2rem] md:text-[2.5rem] text-left">
                        Layanan Servis
                    </p>
                    <div className="flex flex-col gap-4 w-full md:w-1/3 text-left">
                        <p className="worksans text-gray-700 text-[15px]">
                            Servis motor nggak pake ribet, ada beragam paket
                            yang bisa kamu pilih! Di sini, kamu bisa temukan
                            berbagai paket servis. Tinggal pilih paket yang
                            sesuai dengan kebutuhanmu.
                        </p>
                        <Button
                            buttonName="Lihat Servis"
                            to="/servis"
                            icon={ArrowIcon}
                        />
                    </div>
                </div>

                {/* Carousel */}
                <div className="relative max-w-screen-sm md:max-w-screen-md lg:max-w-screen h-full">
                    <Carousel
                        ref={carouselRef}
                        showThumbs={false}
                        showArrows={false}
                        infiniteLoop
                        showStatus={false}
                        showIndicators={false}
                        centerMode={true}
                        centerSlidePercentage={slidePercentage}
                    >
                        {articles.map((article, i) => (
                            <ServisBoxItem
                                article={article}
                                key={i}
                                servisBox="group px-4 w-full h-full"
                                responsiveStyle="h-full"
                            />
                        ))}
                    </Carousel>
                    <div className="flex justify-center gap-4 mt-12">
                        <button
                            onClick={() => carouselRef.current?.onClickPrev()}
                            title="Prev"
                            aria-label="Prev"
                            className="cursor-pointer bg-gray-200 hover:bg-amber-200 duration-200 p-2 rounded-full"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.75}
                                stroke="currentColor"
                                className="w-[20px]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                                />
                            </svg>
                        </button>
                        <button
                            onClick={() => carouselRef.current?.onClickNext()}
                            title="Next"
                            aria-label="Next"
                            className="cursor-pointer bg-gray-200 hover:bg-amber-200 duration-200 p-2 rounded-full"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.75}
                                stroke="currentColor"
                                className="w-[20px]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListService;
