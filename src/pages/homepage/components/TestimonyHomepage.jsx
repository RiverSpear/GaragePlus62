import React, { useEffect, useState } from 'react'
import client from '../../../client';
import Loading from '../../../components/Loading/Loading';

function TestimonyHomepage() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        client.getEntries({ content_type: 'testimonial' })
            .then((response) => setArticles(response.items))
            .catch(console.error);
    }, []);

    if (!articles) return <Loading/>;
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    articles.map((article, index) => {
                        return (article.fields.showOnHomepage === true) ? (
                            <div key={article.sys.id} className='flex flex-col justify-between gap-5 bg-white text-left rounded-2xl shadow-lg p-6'>
                                <p className='worksans text-gray-600 italic text-[14px] sm:text-[16px] text-left'>{article.fields.testimony}</p>
                                <div className='flex items-center gap-3'>
                                    <span className='bg-amber-100 text-amber-500 text-center leading-[40px] w-10 h-10 rounded-lg worksans-500 text-[20px]'>{article.fields.reviewerName.match(/\b(\w)/g).join('')}</span>
                                    <p className='worksans-600'>{article.fields.reviewerName}</p>
                                </div>
                            </div>
                        ) : null
                    })
                }
            </div>
        </>
    )
}

export default TestimonyHomepage