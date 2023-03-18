import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import client from '../../client';

import Footer from '../../components/footer/Footer';
import Loading from '../../components/Loading/Loading';
import Navbar from '../../components/navigation bar/Navbar';
import ScrollToTop from '../../components/scroll to top/ScrollToTop';

function Faq() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        client.getEntries({ content_type: 'faq' })
            .then((response) => {
                const sortedArticles = response.items.sort((a, b) => a.fields.contentOrder - b.fields.contentOrder);
                setArticles(sortedArticles);
            })
            .catch(console.error);
    }, []);

    if (!articles) return <Loading/>;
    return (
        <>
            <Navbar/>
            <div className='blob'></div>
            <div className='flex flex-col gap-44 bg-[#F4F4F4] pt-44'>
                <div className='flex justify-center'>
                    <div className='flex flex-col gap-10 w-full md:w-3/4 lg:w-1/2 px-5'>
                        <div className='flex flex-col gap-5'>
                            <div className='flex items-center gap-2 text-[14px] text-gray-500 worksans'>
                                <Link to="/" className='cursor-pointer hover:text-amber-500'>Garage Plus62</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                                <p>FAQ</p>
                            </div>
                            <p className='text-[31px] worksans-500 capitalize'>Pertanyaan seputar bengkel kami</p>
                        </div>
                        <div className='flex flex-col gap-10'>
                            {
                                articles.map((article, index) => (
                                    <div key={index} className='flex flex-col gap-2'>
                                        <span className='flex items-start gap-2 worksans-500'>
                                            <p>Q:</p>
                                            <p>{article.fields.question}</p>
                                        </span>
                                        <span className='flex items-start gap-2 worksans text-gray-700'>
                                            <p>A:</p>
                                            <p>{article.fields.answer}</p>
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <Footer/>
                <ScrollToTop/>
            </div>
        </>
    )
}

export default Faq