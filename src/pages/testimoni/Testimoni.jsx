import React from "react";
import useFetchArticles from "../../hooks/useFetchArticle";
import Navbar from "../../components/layout/Navbar";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/footer/Footer";
import TestimoniBox from "../../components/common/TestimoniBox";
import Breadcrumb from "../../components/common/Breadcrumb";
import Loading from "../../components/layout/loading/Loading";
import BadRequest from "../../components/errors/BadRequest";
import PageNotFound from "../../components/errors/PageNotFound";

function Testimoni() {
    const { articles, isLoading, error } = useFetchArticles("testimonial");

    if (isLoading) return <Loading />;
    if (error) return <BadRequest />;
    if (!articles) return <PageNotFound />;
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center gap-20 w-full px-5 sm:px-10 md:px-16 xl:px-24 pt-40 pb-40">
                <div>
                    <Breadcrumb
                        paths={[
                            { label: "Garageplus62" },
                            { label: "Testimoni" },
                        ]}
                    />
                    <Header
                        page="Testimoni"
                        title="Dari Pelanggan, Untuk Kamu!"
                        description="Nggak cuma janji kosong! Inilah pengalaman nyata dari pelanggan yang telah mencoba layanan kami. Baca bagaimana mereka merasakan kemudahan, kenyamanan, dan hasil yang sesuai harapan. Mungkin, cerita mereka bisa jadi awal perjalanan kamu bersama kami!"
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
                    {articles.map((article, i) => (
                        <TestimoniBox
                            key={i}
                            testimony={article.fields.testimony}
                            reviewerName={article.fields.reviewerName}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Testimoni;
