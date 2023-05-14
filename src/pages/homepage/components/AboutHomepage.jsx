import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import client from '../../../client';
import Loading from '../../../components/Loading/Loading';

function AboutHomepage() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        client.getEntries({ content_type: 'aboutUs' })
            .then((response) => setArticles(response.items))
            .catch(console.error);
    }, []);

    if (!articles) return <Loading/>;
    return (
        <>
            {
                articles.map((article) => (
                    <div key={article} className='bg-center bg-cover' style={{backgroundImage: `url(${'https:' + article.fields.background.fields.file.url})`}}>
                        <div className='bg-black/75 h-screen w-full'>
                            <div className='flex flex-col items-center gap-8 m-auto text-center py-44 px-10 text-white w-full md:w-3/4 lg:w-1/2'>
                                <p className='worksans-600 text-[31px] sm:text-[39px]'>{article.fields.headline}</p>
                                <p className='worksans-500 text-[17px]'>{article.fields.headlineDescription}</p>
                                <Link to='/servis' className='worksans-500 capitalize bg-amber-500 hover:bg-amber-400 px-10 py-4 rounded-full duration-200'>lihat servis</Link>
                            </div>
                        </div>
                    </div>
                ))
            } 
        </>
    )
}

export default AboutHomepage