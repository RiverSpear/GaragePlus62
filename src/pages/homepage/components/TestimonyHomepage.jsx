import React, { useEffect, useState } from "react";
import client from "../../../client";
import Loading from "../../../components/Loading/Loading";
import PageNotFound from "../../error/PageNotFound";

function TestimonyHomepage() {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await client.getEntries({
                    content_type: "testimonial",
                });
                setArticles(response.items);
            } catch (err) {
                setError(err);
            }
        };
        fetchData();
    }, []);

    if (!articles) return <Loading />;
    if (error) return <PageNotFound />;
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
                {articles.map((article, index) => {
                    return article.fields.showOnHomepage === true ? (
                        <div
                            key={article.sys.id}
                            className="flex flex-col justify-between items-start gap-5"
                        >
                            <p className="worksans-500 italic text-[14px] sm:text-[16px] text-left">
                                {article.fields.testimony}
                            </p>
                            <p className="worksans-600 text-amber-500">
                                {article.fields.reviewerName}
                            </p>
                        </div>
                    ) : null;
                })}
            </div>
        </>
    );
}

export default TestimonyHomepage;
