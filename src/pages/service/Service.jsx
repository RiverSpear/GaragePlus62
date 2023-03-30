import React, { useEffect, useState } from 'react'
import client from '../../client'
import { Link } from 'react-router-dom';

import Loading from '../../components/Loading/Loading'
import Navbar from '../../components/navigation bar/Navbar';
import Footer from '../../components/footer/Footer';
import ScrollToTop from '../../components/scroll to top/ScrollToTop';

function Service() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        client.getEntries({ content_type: 'service' })
            .then((response) => setArticles(response.items))
            .catch(console.error);
    }, []);

    const lowestPriceHandle = articles.reduce((min, article) => {
        const prices = article.fields.detailService.map((detail) => detail.fields.price);
        const lowest = Math.min(...prices);
        return lowest < min ? lowest : min;
    }, Infinity).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });

    if (!articles) return <Loading/>;
    return (
        <>
            <Navbar/>
            <div className='blob'></div>
            <div className='flex flex-col gap-44 bg-[#faf9f9] pt-44 z-20'>
                <div className='flex flex-col items-center gap-5 text-center px-10 lg:px-32'>
                    <p className='text-[31px] sm:text-[48px] worksans-500'>Produk Servis</p>
                    <p className='worksans text-slate-500 w-full sm:w-3/4 md:w-1/2 text-center leading-7'>Jaga Kendaraan Anda dalam Kondisi Terbaik dengan Jasa Servis Berkualitas dari Kami - <Link to='/kontak' className='underline'>Hubungi Kami Sekarang!</Link></p>
                </div>
                <div className='flex flex-wrap justify-center gap-10'>
                    {
                        articles.map((article) => (
                            <Link to={`/servis/${article.fields.slug}`} key={article.sys.id} className="flex flex-col justify-between gap-5 bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-gray-200 hover:scale-[1.02] duration-200 w-[375px]">
                                <div className='flex flex-col gap-5'>
                                    <img src={'https:' + article.fields.headlinePhoto.fields.file.url} alt="" className='w-full h-[175px] rounded-2xl'/>
                                    <div className='flex justify-between items-center gap-5'>
                                        <p className='worksans-500 text-[18px]'>{article.fields.servicePackageName}</p>
                                        <p className='bg-amber-400 worksans-500 py-1.5 px-3 rounded-full whitespace-nowrap'>{article.fields.detailService.length} paket</p>
                                    </div>
                                </div>
                                <p className='bg-gray-100 text-gray-500 worksans-500 text-center py-3 w-full rounded-full'>Mulai dari {lowestPriceHandle.replace(/,00$/, "")}</p>
                            </Link>
                        ))
                    }
                </div>
                <Footer/>
                <ScrollToTop/>
            </div>
        </>
    )
}

export default Service