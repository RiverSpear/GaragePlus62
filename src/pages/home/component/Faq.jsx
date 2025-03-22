import React from "react";
import useFetchArticles from "../../../hooks/useFetchArticle";

import Accordion from "../../../components/common/Accordion";
import ArrowIcon from "../../../assets/icon/ArrowIcon";
import Button from "../../../components/common/Button";

function Faq() {
    const { articles } = useFetchArticles("faq");
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between gap-20">
                <div className="flex flex-col gap-5 w-full md:w-1/3">
                    <div className="flex flex-col gap-2">
                        <p className="worksans-600 text-[25px] sm:text-[31px] text-neutral-800 capitalize">
                            Pertanyaan yang Sering Ditanya
                        </p>
                        <p className="text-slate-700 worksans text-[14px] md:text-[1rem] w-full sm:w-1/2 md:w-full">
                            Bingung? Ada pertanyaan? Kepoin dulu FAQ kita, kali
                            aja udah dijawab! kita siap ngebantu kamu
                        </p>
                    </div>
                    <Button
                        buttonName="Penasaran? Cek FAQ!"
                        to="/faq"
                        icon={ArrowIcon}
                    />
                </div>
                <div className="flex flex-col gap-5 w-full md:w-1/2 lg:w-[600px]">
                    {articles.map((article, index) => {
                        return article.fields.priority === true ? (
                            <Accordion
                                key={index}
                                question={article.fields.question}
                                answer={article.fields.answer}
                                containerClass="cursor-pointer"
                                questionClass="worksans-500 hover:text-amber-500"
                                iconClass="size-5"
                                answerClass="text-[.875rem] mt-2 worksans text-slate-500"
                            />
                        ) : null;
                    })}
                </div>
            </div>
        </>
    );
}

export default Faq;
