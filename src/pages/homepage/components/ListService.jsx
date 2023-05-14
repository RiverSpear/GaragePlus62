import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import client from '../../../client';
import Loading from '../../../components/Loading/Loading';

function ListService() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        client
            .getEntries({
                content_type: 'service',
                order: 'fields.contentOrder',
            })
            .then((response) => {
                const sortedArticles = response.items.sort(
                    (a, b) => a.fields.contentOrder - b.fields.contentOrder
                );
                setArticles(sortedArticles);
            })
            .catch(console.error);
    }, []);

    if (!articles) return <Loading />;
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
                                src={
                                    'https:' +
                                    article.fields.headlinePhoto.fields.file.url
                                }
                                alt=''
                                className='w-full h-[175px] rounded-2xl'
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
