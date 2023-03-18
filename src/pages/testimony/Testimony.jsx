import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import client from '../../client';

import Footer from '../../components/footer/Footer';
import Loading from '../../components/Loading/Loading';
import Navbar from '../../components/navigation bar/Navbar';
import ScrollToTop from '../../components/scroll to top/ScrollToTop';

function Testimony() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        client.getEntries({ content_type: 'testimonial' })
            .then((response) => (
                setArticles(response.items)
            ))
            .catch(console.error);
    }, []);

    if (!articles) return <Loading/>;
    return (
        <>
            <Navbar/>
            <div className='flex flex-col gap-44 bg-[#F4F4F4] pt-44'>
                <div className='blob'></div>
                <div className='flex flex-col items-center gap-20 z-10'>
                    <div className='flex flex-col items-center gap-10 text-center px-5 lg:px-32'>
                        <p className='worksans-500 text-[31px] md:text-[48px] text-center w-full md:w-3/4'>Apa yang Mereka Katakan Tentang Layanan Kami</p>
                        <span className='worksans text-gray-700'>Ingin memberikan testimoni ? Silahkan <Link to="/kontak" className='underline'>hubungi tim kami.</Link></span>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-20 xl:px-32'>
                        {
                            articles.map((article, index) => (
                                <div key={index} className='flex flex-col justify-between gap-5 bg-white text-left rounded-2xl p-6'>
                                    <p className='worksans text-gray-600 italic text-[14px] sm:text-[16px] text-left'>{article.fields.testimony}</p>
                                    <div className='flex items-center gap-3'>
                                        <span className='bg-amber-100 text-amber-500 text-center leading-[40px] w-10 h-10 rounded-lg worksans-500 text-[20px]'>{article.fields.reviewerName.match(/\b(\w)/g).join('')}</span>
                                        <p className='worksans-600'>{article.fields.reviewerName}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <Footer/>
                <ScrollToTop/>
            </div>
        </>
    )
}

export default Testimony