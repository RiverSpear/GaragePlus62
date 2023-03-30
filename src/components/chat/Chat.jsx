import React, { useEffect, useState } from 'react';
import client from '../../client';
import Loading from '../Loading/Loading';

import whatsapp_icon from '../../asset/icon/whatsapp.png';
import instagram_icon from '../../asset/icon/instagram.png';
import tiktok_icon from '../../asset/icon/tik-tok.png';

function Chat() {
    const [articles, setArticles] = useState([]);
    const [popup, setPopup] = useState(false);

    useEffect(() => {
        client
            .getEntries({ content_type: 'location' })
            .then((response) => {
                const sortedArticles = response.items.sort((a, b) => {
                    if (a.fields.type === b.fields.type) return 0;
                    if (a.fields.type === true) return -1;
                    return 1;
                });
                setArticles(sortedArticles);
            })
            .catch(console.error);
    }, []);

    function formatPhoneNumber(phoneNumber) {
        let digits = phoneNumber.replace(/\D/g, '');
        if (digits.startsWith('62')) {
            digits = '0' + digits.substr(2);
        }
        return digits.replace(/(\d{4})(\d{4})(\d{4})?/, '$1 $2 $3').trim();
    }

    if (!articles) return <Loading />;
    return (
        <>
            <span
                className='fixed bottom-10 right-10 z-10 bg-white p-3 rounded-full shadow shadow-gray-300 cursor-pointer duration-200'
                onClick={() => setPopup(true)}
            >
                <svg
                    width='24px'
                    height='24px'
                    strokeWidth='1.5'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    color='#000000'
                >
                    <path
                        d='M8 10h8M8 14h4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22z'
                        stroke='#000000'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='stroke-amber-500'
                    ></path>
                </svg>
            </span>
            <div
                className={`fixed z-20 inset-0 bg-white duration-200 ${
                    popup
                        ? 'h-screen visible opacity-100'
                        : 'h-0 invisible opacity-0'
                }`}
            >
                <span
                    className='flex justify-end m-5 md:m-10 cursor-pointer'
                    onClick={() => setPopup(false)}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2}
                        stroke='currentColor'
                        className='w-10 h-10 hover:rotate-180 duration-200'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M6 18L18 6M6 6l12 12'
                        />
                    </svg>
                </span>
                <div className='flex flex-col gap-10 px-5 md:px-20 lg:px-32'>
                    <div className='flex flex-col gap-1 border-b pb-5'>
                        <p className='worksans-500 text-[18px]'>
                            Punya pertanyaan ?
                        </p>
                        <p className='worksans className="flex flex-col gap-2"text-[14px]'>
                            Pilih lokasi bengkel favoritmu dan hubungi tim kami.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-14'>
                        {articles.map((article) => (
                            <div
                                key={article.sys.id}
                                className='flex flex-col gap-5'
                            >
                                <div className='flex flex-col gap-2'>
                                    <p className='worksans-500 text-[18px]'>
                                        Garage Plus62{' '}
                                        {article.fields.streetName}
                                    </p>
                                    <a
                                        href={article.fields.googleMapsLink}
                                        target='_blank'
                                        rel='noreferrer'
                                        className='worksans text-gray-500 hover:underline'
                                    >
                                        {article.fields.longAddress}
                                    </a>
                                </div>
                                <div className='flex flex-wrap items-center gap-5'>
                                    <a
                                        href={
                                            'https://wa.me/' +
                                            article.fields.whatsapp
                                        }
                                        target='_blank'
                                        rel='noreferrer'
                                        className='group flex items-center gap-3 whitespace-nowrap'
                                    >
                                        <img
                                            src={whatsapp_icon}
                                            alt=''
                                            width={24}
                                        />
                                        <p className='worksans text-gray-600 group-hover:underline'>
                                            {formatPhoneNumber(
                                                article.fields.whatsapp
                                            )}
                                        </p>
                                    </a>
                                    <a
                                        href={article.fields.instagramUrl}
                                        target='_blank'
                                        rel='noreferrer'
                                        className='group flex items-center gap-3'
                                    >
                                        <img
                                            src={instagram_icon}
                                            alt=''
                                            width={24}
                                        />
                                        <p className='worksans text-gray-600 group-hover:underline'>
                                            {article.fields.instagram}
                                        </p>
                                    </a>
                                    <a
                                        href={article.fields.tikTokUrl}
                                        target='_blank'
                                        rel='noreferrer'
                                        className='group flex items-center gap-3'
                                    >
                                        <img
                                            src={tiktok_icon}
                                            alt=''
                                            width={24}
                                        />
                                        <p className='worksans text-gray-600 group-hover:underline'>
                                            {article.fields.tikTok}
                                        </p>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chat;
