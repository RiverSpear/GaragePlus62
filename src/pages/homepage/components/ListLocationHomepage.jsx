import React, { useEffect, useState } from 'react'
import client from '../../../client';
import Loading from '../../../components/Loading/Loading';

import whatsapp_icon from '../../../asset/icon/whatsapp.png'
import instagram_icon from '../../../asset/icon/instagram.png'
import tiktok_icon from '../../../asset/icon/tik-tok.png'

function ListLocationHomepage() {
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
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {
                    articles.map((article, index) => (
                        <div key={index} className='flex flex-col gap-5 bg-white p-10 rounded-2xl'>
                            {
                                article.fields.type === true ? (
                                    <p className='worksans-500 text-amber-500'>Pusat</p>
                                ) : (
                                    <p className='worksans-500 text-amber-500'>Cabang</p>
                                )
                            }
                            <div className='flex flex-col gap-8'>
                                <p className='worksans text-gray-600'>{article.fields.longAddress}</p>
                                <div className='flex items-center gap-10'>
                                    <a href={article.fields.whatsappUrl} target="_blank" rel='noreferrer' className='flex items-center gap-5'>
                                        <img src={whatsapp_icon} alt="Whatsapp icons created by Pixel perfect - Flaticon" title="whatsapp icons" width={24} longdesc="https://www.flaticon.com/free-icons/whatsapp" />
                                    </a>
                                    <a href={article.fields.instagramUrl} target="_blank" rel='noreferrer' className='flex items-center gap-5'>
                                        <img src={instagram_icon} alt="Instagram icons created by Pixel perfect - Flaticon" title="instagram icons" width={24} longdesc="https://www.flaticon.com/free-icons/instagram"/>
                                    </a>
                                    <a href={article.fields.tikTokUrl} target="_blank" rel='noreferrer' className='flex items-center gap-5'>
                                        <img src={tiktok_icon} alt="Tiktok icons created by Pixel perfect - Flaticon" title="tiktok icons" width={24} longdesc="https://www.flaticon.com/free-icons/tiktok" />
                                    </a>
                                </div>
                                <a href={article.fields.googleMapsLink} target="_blank" rel='noreferrer' className='group flex items-center gap-2 bg-black px-5 py-3 worksans rounded-full w-max'>
                                    <span className='group-hover:rotate-45 bg-white duration-200 p-2 rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </span>
                                    <p className='capitalize text-white'>Lihat Google Maps</p>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ListLocationHomepage