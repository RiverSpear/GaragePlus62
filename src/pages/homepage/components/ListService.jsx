import React, { useEffect, useState } from 'react';
import 'lazysizes';
import { Link } from 'react-router-dom';
import client from '../../../client';

import Loading from '../../../components/Loading/Loading';
import PageNotFound from '../../error/PageNotFound'

function ListService() {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await client.getEntries({
                    content_type: 'service',
                    order: 'fields.contentOrder',
                });
                setArticles(
                    response.items.sort(
                        (a, b) => a.fields.contentOrder - b.fields.contentOrder
                    )
                );
            } catch (err) {
                setError(err);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.lazySizes) {
            window.lazySizes.init();
        }
    }, []);

    if (!articles) return <Loading />;
    if (error) return <PageNotFound />;
    return (
        <>
            <div className='flex flex-wrap justify-center gap-10'>
                {articles.map((article, index) => (
                    <Link
                        to={`/servis/${article.fields.slug}`}
                        key={index}
                        className='flex flex-col justify-between gap-5 bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-gray-200 duration-200 hover:scale-[1.02] w-[375px]'
                    >
                        <div className='flex flex-col gap-5'>
                            <img
                                data-src={
                                    'https:' +
                                    article.fields.headlinePhoto.fields.file.url
                                }
                                alt={article.fields.headlinePhoto.fields.title}
                                className='lazyload h-[175px] rounded-2xl'
                            />
                            <div className='flex justify-between items-start gap-5'>
                                <p className='worksans-500 text-[18px]'>
                                    {article.fields.servicePackageName}
                                </p>
                                <p className='bg-amber-400 worksans-500 py-1.5 px-3 rounded-full whitespace-nowrap'>
                                    {article.fields.detailService.length} paket
                                </p>
                            </div>
                        </div>
                        {/* {
                                article.fields.detailService.map((detailService) => (
                                    <p className='bg-gray-100 text-gray-500 worksans-500 text-center py-3 w-full rounded-full'>Mulai dari {detailService.fields.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                                )).reduce((prev, cur) => (cur.price < prev.price ? cur : prev))
                            } */}
                    </Link>
                ))}
            </div>
        </>
    );
}

export default ListService;
