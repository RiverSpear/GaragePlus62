import React, { useEffect, useState } from 'react'
import client from '../../../client';
import Loading from '../../../components/Loading/Loading';

function Faq() {
    const [articles, setArticles] = useState([]);
    const [activeIndex, setActiveIndex] = useState(-1);

    const toggleActiveIndex = (index) => {
        if (index === activeIndex) {
            setActiveIndex(-1);
        } else {
            setActiveIndex(index);
        }
    };

    useEffect(() => {
        client.getEntries({ content_type: 'faq' })
            .then((response) => setArticles(response.items))
            .catch(console.error);
    }, []);

    if (!articles) return <Loading/>;
    return (
        <>
            {
                articles.map((article, index) => { 
                    return(article.fields.priority === true) ? (
                        <div key={index} className={`accordion-title flex flex-col gap-3 pb-10 ${activeIndex === index ? "active" : ""}`} onClick={() => toggleActiveIndex(index)}>
                            <div className={`accordion-title ${activeIndex === index ? "text-amber-500" : ""} flex justify-between cursor-pointer`} onClick={() => toggleActiveIndex(index)}>
                                <p className="worksans-500 text-[15px] pr-10 duration-200">{article.fields.question}</p>
                                <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" className={`${activeIndex === index ? "rotate-90" : ""} duration-300`}>
                                    <path d="M6 9l6 6 6-6" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div>
                            <p className={`accordion-content ${activeIndex === index ? "show" : "hide"} worksans text-[15px] text-gray-700`}>{article.fields.answer}</p>
                        </div>
                    ) : null
                })
            }
        </>
    )
}

export default Faq