import React from "react";
import { Link } from "react-router-dom";

function ServisBoxItem({ article, servisBox, responsiveStyle }) {
    return (
        <>
            <div className={servisBox}>
                <Link
                    to={`/servis/${article.fields.slug}`}
                    className={responsiveStyle}
                >
                    <div className="group flex flex-col w-full h-full">
                        <img
                            src={
                                "https:" +
                                article.fields.headlinePhoto.fields.file.url
                            }
                            alt={article.fields.headlinePhoto.fields.title}
                            className="w-full h-[200px] sm:h-[275px] lg:h-[235px] object-cover rounded-[20px] mb-3"
                        />
                        <div className="flex-1 flex flex-col items-start gap-2 text-left">
                            <div className="flex-1 flex flex-col gap-2">
                                <div className="flex flex-wrap gap-2">
                                    {article.fields.detailService
                                        .slice(0, 1)
                                        .map((detailService, i) =>
                                            detailService.fields
                                                .serviceAllIn ? (
                                                <p
                                                    key={i}
                                                    className="worksans-600 text-[12px] bg-amber-50 text-black border border-amber-500 px-2 py-1 w-max rounded-full"
                                                >
                                                    Service All In
                                                </p>
                                            ) : null
                                        )}
                                    <p className="worksans-600 text-[12px] bg-amber-50 text-black border border-amber-500 px-2 py-1 w-max rounded-full">
                                        {article.fields.detailService.length}{" "}
                                        varian paket
                                    </p>
                                </div>
                                <p className="group-hover:text-amber-500 worksans-500 duration-100">
                                    {article.fields.servicePackageName}
                                </p>
                            </div>
                            {article.fields.detailService.length > 0 &&
                                (() => {
                                    const cheapestService =
                                        article.fields.detailService.reduce(
                                            (min, current) =>
                                                current.fields.price <
                                                min.fields.price
                                                    ? current
                                                    : min
                                        );

                                    return (
                                        <div
                                            key={cheapestService.sys.id}
                                            className="flex flex-col mt-auto"
                                        >
                                            <p className="worksans-500 text-[12px] text-gray-500">
                                                Mulai dari
                                            </p>
                                            <p className="worksans-600 text-[18px]">
                                                {cheapestService.fields.price
                                                    .toLocaleString("id-ID", {
                                                        style: "currency",
                                                        currency: "IDR",
                                                    })
                                                    .replace(/,00$/, "")}
                                            </p>
                                        </div>
                                    );
                                })()}
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default ServisBoxItem;
