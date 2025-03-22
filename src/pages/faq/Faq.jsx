import React from "react";
import useFetchArticles from "../../hooks/useFetchArticle";

import Navbar from "../../components/layout/Navbar";
import Header from "../../components/layout/Header";
import Accordion from "../../components/common/Accordion";
import Footer from "../../components/layout/footer/Footer";
import Breadcrumb from "../../components/common/Breadcrumb";
import Loading from "../../components/layout/loading/Loading";
import BadRequest from "../../components/errors/BadRequest";
import PageNotFound from "../../components/errors/PageNotFound";

function Faq() {
    const { articles, isLoading, error } = useFetchArticles("faq");

    if (isLoading) return <Loading />;
    if (error) return <BadRequest />;
    if (!articles) return <PageNotFound />;
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center gap-20 w-full px-5 sm:px-10 md:px-16 xl:px-24 pt-40 pb-40">
                <div>
                    <Breadcrumb
                        paths={[{ label: "Garageplus62" }, { label: "FAQ" }]}
                    />
                    <Header
                        page="FAQ"
                        title="Pertanyaan seputar bengkel kami"
                        description="Butuh info lebih lanjut? Tenang, semua pertanyaan yang sering ditanyakan sudah kita rangkum di sini. Cek dulu sebelum tanya, siapa tahu jawabannya udah ada! 🚀"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2 md:gap-y-5">
                    {articles.map((article, index) => (
                        <Accordion
                            key={index}
                            question={article.fields.question}
                            answer={article.fields.answer}
                            containerClass="bg-slate-50 p-5 cursor-pointer rounded-xl"
                            questionClass="worksans-500 hover:text-amber-500"
                            iconClass="size-5"
                            answerClass="text-[.875rem] mt-2 worksans text-slate-500"
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Faq;
