import React from "react";
import useFetchArticles from "../../../../hooks/useFetchArticle";

function Location() {
    const { articles } = useFetchArticles("location");
    return (
        <>
            {articles.map((article, index) => (
                <div
                    key={index}
                    className="flex flex-col gap-2 worksans text-black w-full md:w-[300px]"
                >
                    {article.fields.type === true ? (
                        <p className="worksans-600">Pusat</p>
                    ) : (
                        <p className="worksans-600">Cabang</p>
                    )}
                    <p className="text-sm text-slate-500">{article.fields.longAddress}</p>
                </div>
            ))}
        </>
    );
}

export default Location;
