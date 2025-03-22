import React from "react";
import useFetchArticles from "../../../hooks/useFetchArticle";
import TestimoniBox from "../../../components/common/TestimoniBox";

function Testimony() {
    const { articles } = useFetchArticles("testimonial");
    return (
        <>
            <div className="flex flex-col items-center gap-5 md:gap-10">
                <p className="worksans-600 text-[25px] sm:text-[31px] text-neutral-800 capitalize">
                    Testimoni Pelanggan
                </p>
                <div className="flex flex-wrap justify-center gap-5">
                    {articles.map((article, i) => {
                        return article.fields.showOnHomepage === true ? (
                            <TestimoniBox
                                key={i}
                                testimony={article.fields.testimony}
                                reviewerName={article.fields.reviewerName}
                            />
                        ) : null;
                    })}
                </div>
            </div>
        </>
    );
}

export default Testimony;
