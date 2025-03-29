import React from "react";
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
