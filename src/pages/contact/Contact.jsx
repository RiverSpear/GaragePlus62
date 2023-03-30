import React, { useEffect, useState } from 'react'
import client from '../../client';
import Footer from '../../components/footer/Footer'
import Loading from '../../components/Loading/Loading';
import Navbar from '../../components/navigation bar/Navbar'
import ScrollToTop from '../../components/scroll to top/ScrollToTop'

import whatsapp_icon from '../../asset/icon/whatsapp.png'
import instagram_icon from '../../asset/icon/instagram.png'
import tiktok_icon from '../../asset/icon/tik-tok.png'
import { Link } from 'react-router-dom';

function Contact() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        client.getEntries({ content_type: 'location' })
            .then((response) => {
                const sortedArticles = response.items.sort((a, b) => {
                    if (a.fields.type === b.fields.type) return 0;
                    if (a.fields.type === true) return -1;
                    return 1;
                });
                setArticles(sortedArticles)
            })
            .catch(console.error);
    }, []);

    if (!articles) return <Loading/>;
    return (
        <>
            <Navbar/>
            <div className='blob'></div>
            <div className='flex flex-col gap-44 bg-[#faf9f9] pt-44'>
                <div className='flex flex-col items-center gap-20 px-5 md:px-20 xl:px-32'>
                    <div className='flex flex-col items-center gap-5 text-center px-10 lg:px-32'>
                        <p className='text-[31px] sm:text-[48px] worksans-500'>Hubungi Kami</p>
                        <p className='worksans text-slate-500 w-full sm:w-3/4 md:w-1/2 text-center leading-7'>Kami Siap Memberikan Layanan Perawatan Kendaraan yang Prima - Kunjungi Bengkel Kami atau <Link to='/kontak' className='underline'>Hubungi Kami Sekarang!</Link></p>
                    </div>
                    <div className='flex flex-wrap justify-center gap-10'>
                        {
                            articles.map((article, index) => (
                                <div key={index} className="bg-white p-7 rounded-2xl w-full sm:w-[500px]">
                                    <div className='flex flex-col gap-5'>
                                        <div className='flex justify-between items-center'>
                                            <p className='worksans-500'>GaragePlus62 {article.fields.streetName}</p>
                                            {
                                                article.fields.type === true ? (
                                                    <p className='text-[14px] worksans-600 text-amber-500'>Pusat</p>
                                                ) : (
                                                    <p className='text-[14px] worksans-600 text-amber-500'>Cabang</p>
                                                )
                                            }
                                        </div>
                                        <p className='worksans text-[14px] text-slate-500 leading-6 w-full sm:w-3/4'>{article.fields.longAddress}</p>
                                        <div className='flex gap-10'>
                                            <a href={article.fields.instagramUrl} target='_blank' rel='noreferrer'>
                                                <img src={instagram_icon} alt="Instagram icons created by Pixel perfect - Flaticon" title="instagram icons" width={20} longdesc="https://www.flaticon.com/free-icons/instagram" />
                                            </a>
                                            <a href={article.fields.tikTokUrl} target='_blank' rel='noreferrer' className='flex items-center gap-5'>
                                                <img src={tiktok_icon} alt="Tiktok icons created by Pixel perfect - Flaticon" title="tiktok icons" width={20} longdesc="https://www.flaticon.com/free-icons/tiktok" />
                                            </a>
                                            <a href={'https://wa.me/' + article.fields.whatsapp} target='_blank' rel='noreferrer' className='flex items-center gap-5'>
                                                <img src={whatsapp_icon} alt="Whatsapp icons created by Pixel perfect - Flaticon" title="whatsapp icons" width={20} longdesc="https://www.flaticon.com/free-icons/whatsapp" />
                                            </a>
                                        </div>
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

export default Contact