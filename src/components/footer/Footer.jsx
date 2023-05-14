import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import client from '../../client';
import Loading from '../Loading/Loading';
import LocationFooter from './LocationFooter';

function Footer() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        client.getEntries({ content_type: 'aboutUs' })
            .then((response) => setArticles(response.items))
            .catch(console.error);
    }, []);

    if (!articles) return <Loading/>;
    return (
        <>
            <div className='flex flex-wrap gap-20 bg-white px-10 md:px-20 xl:px-32 py-32 rounded-3xl'>
                {
                    articles.map((article, index) => (
                        <div key={index} className='flex flex-wrap gap-32'>
                            <div className='flex flex-col gap-10 w-[350px]'>
                                <p className='text-amber-500 worksans-500'>{article.fields.garageName}</p>
                                <p className='worksans text-gray-700 text-[15px]'>{article.fields.headlineDescription}</p>
                            </div>
                            <div className='flex flex-col gap-10'>
                                <p className='text-amber-500 worksans-500'>Quick Links</p>
                                <div className='flex flex-col gap-3 worksans text-gray-700'>
                                    <Link to="/servis" className='hover:text-amber-500'>Services</Link>
                                    <Link to="/lokasi" className='hover:text-amber-500'>Locations</Link>
                                    <Link to="/faq" className='uppercase hover:text-amber-500'>faq</Link>
                                    <Link to="/testimoni" className='hover:text-amber-500'>Testimoni</Link>
                                </div>
                            </div>
                            <div className='flex flex-col gap-10'>
                                <p className='text-amber-500 worksans-500'>Jam Operasional</p>
                                <table className='worksans text-gray-700 whitespace-nowrap'>
                                    <tbody>
                                        <tr>
                                            <td className='pb-3 pr-14'>Senin - Sabtu</td>
                                            <td className='pb-3'>{article.fields.mondaySaturday}</td>
                                        </tr>
                                        <tr>
                                            <td className='pb-3'>Jumat</td>
                                            <td className='pb-3'>{article.fields.friday}</td>
                                        </tr>
                                        <tr>
                                            <td className='pb-3'>Minggu & Hari libur</td>
                                            <td className='pb-3'>{article.fields.holiday}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))
                }
                <div className='flex flex-col gap-10'>
                    <p className='text-amber-500 worksans-500'>Lokasi</p>
                    <LocationFooter/>
                </div>
            </div>
        </>
    )
}

export default Footer