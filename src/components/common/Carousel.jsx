import React from "react";
import Slider from "react-slick";
import ServisBoxItem from "./ServisBoxItem";

const Carousel = ({ articles }) => {

    return (
        <div className="w-full">
            <Slider {...settings}>
                {articles.map((article, i) => (
                    <ServisBoxItem key={i} article={article} />
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
