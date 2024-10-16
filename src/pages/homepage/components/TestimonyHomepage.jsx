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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {articles.map((article, index) => {
                    return article.fields.showOnHomepage === true ? (
                        <div
                            key={article.sys.id}
                            className="flex flex-col justify-between items-start gap-3 bg-amber-50 text-left rounded-2xl p-6"
                        >
                            <div className="flex flex-col gap-3">
                            <span>
                                <svg
                                    width="28px"
                                    height="28px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke-width="1.5"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M9.21255 12.75C9.12943 13.5242 8.9054 14.1421 8.5147 14.6891C7.99181 15.4211 7.11571 16.1036 5.66459 16.8292C5.29411 17.0144 5.14394 17.4649 5.32918 17.8354C5.51442 18.2059 5.96493 18.3561 6.33541 18.1708C7.88429 17.3964 9.00819 16.5789 9.7353 15.5609C10.4761 14.5238 10.75 13.3571 10.75 12V7.5C10.75 6.53351 9.96649 5.75 9 5.75H5C4.03351 5.75 3.25 6.53351 3.25 7.5V11C3.25 11.9665 4.03352 12.75 5 12.75H9.21255Z"
                                        fill="#f59e0b"
                                    ></path>
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M19.2125 12.75C19.1294 13.5242 18.9054 14.1421 18.5147 14.6891C17.9918 15.4211 17.1157 16.1036 15.6646 16.8292C15.2941 17.0144 15.1439 17.4649 15.3292 17.8354C15.5144 18.2059 15.9649 18.3561 16.3354 18.1708C17.8843 17.3964 19.0082 16.5789 19.7353 15.5609C20.4761 14.5238 20.75 13.3571 20.75 12V7.5C20.75 6.53352 19.9665 5.75 19 5.75H15C14.0335 5.75 13.25 6.53352 13.25 7.5V11C13.25 11.9665 14.0335 12.75 15 12.75H19.2125Z"
                                        fill="#f59e0b"
                                    ></path>
                                </svg>
                            </span>
                            <p className="worksans-500 text-[15px] text-left">
                                {article.fields.testimony}
                            </p>
                            </div>
                            <p className="worksans-600 text-black w-max">
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
