import React, { useEffect, useState } from 'react'
import client from '../../client';
import Loading from '../Loading/Loading';

function LocationFooter() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        client.getEntries({ content_type: 'location' })
            .then((response) => {
                const sortedArticles = response.items.sort((a, b) => {
                    if (a.fields.type === b.fields.type) return 0;
                    if (a.fields.type === true) return -1;
                    return 1;
                })
                setArticles(sortedArticles)
            })
            .catch(console.error);
    }, []);

    if (!articles) return <Loading/>;
    return (
        <>
            <div className='flex flex-wrap gap-10 lg:gap-20'>
                {
                    articles.map((article, index) => (
                        <div key={index} className='flex flex-col gap-2 worksans text-gray-700 w-[300px]'>
                            {
                                article.fields.type === true ? (
                                    <p className='worksans-600'>Pusat</p>
                                ) : (
                                    <p className='worksans-600'>Cabang</p>
                                )
                            }
                            <p className='text-[14px]'>{article.fields.longAddress}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default LocationFooter