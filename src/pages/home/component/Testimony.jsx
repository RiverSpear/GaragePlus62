import React, { useEffect, useRef, useState } from "react";
import useFetchArticles from "../../../hooks/useFetchArticle";
import TestimoniBox from "../../../components/common/TestimoniBox";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

function Testimony() {
    const carouselRef = useRef(null);
    const { articles } = useFetchArticles("testimonial");
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
            <div className="grid grid-cols-1 gap-5 md:gap-10">
                <p className="worksans-600 text-[25px] sm:text-[31px] text-center text-neutral-800 capitalize">
                    Testimoni Pelanggan
                </p>
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
                        {articles.map((article, i) =>  (
                                <TestimoniBox
                                    key={i}
                                    testimony={article.fields.testimony}
                                    reviewerName={article.fields.reviewerName}
                                    className=""
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

export default Testimony;
