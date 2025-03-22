import React from "react";
import useFetchArticles from "../../hooks/useFetchArticle";
import { Link } from "react-router-dom";

function ServisBox() {
    const { articles } = useFetchArticles("service", null, true);
    return (
        <>
            <div className="flex flex-wrap justify-center gap-10">
                {articles.map((article, index) => (
                    <Link
                        to={`/servis/${article.fields.slug}`}
                        key={index}
                        className="group flex flex-col gap-3 w-[275px] md:w-[375px]"
                    >
                        <img
                            src={
                                "https:" +
                                article.fields.headlinePhoto.fields.file.url
                            }
                            alt={article.fields.headlinePhoto.fields.title}
                            className=" w-full h-[175px] md:h-[225px] object-cover rounded-[20px]"
                        />
                        <div className="flex flex-col gap-2 h-full">
                            <div className="flex-1 flex flex-col gap-2">
                                {article.fields.detailService
                                    .slice(0, 1)
                                    .map((detailService, i) =>
                                        detailService.fields.serviceAllIn ? (
                                            <p
                                                key={i}
                                                className="worksans-600 text-[12px] bg-amber-50 text-black border border-amber-500 px-2 py-1 w-max rounded-full"
                                            >
                                                Service All In
                                            </p>
                                        ) : null
                                    )}
                                <p className="group-hover:text-amber-500 worksans-500 duration-300">
                                    {article.fields.servicePackageName}
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                {article.fields.detailService
                                    .map((detailService) => (
                                        <div key={detailService.sys.id}>
                                            <p className="worksans-500 text-[12px] text-slate-500">
                                                Mulai dari
                                            </p>
                                            <p className="worksans-600 text-[18px]">
                                                {detailService.fields.price
                                                    .toLocaleString("id-ID", {
                                                        style: "currency",
                                                        currency: "IDR",
                                                    })
                                                    .replace(/,00$/, "")}
                                            </p>
                                        </div>
                                    ))
                                    .reduce((prev, cur) =>
                                        cur.props.children[1].props.children <
                                        prev.props.children[1].props.children
                                            ? cur
                                            : prev
                                    )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default ServisBox;
