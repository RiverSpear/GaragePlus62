import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import client from '../../client';
import Footer from '../../components/footer/Footer';
import Loading from '../../components/Loading/Loading';
import Navbar from '../../components/navigation bar/Navbar';

export function withRouter(Children){
    return(props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

function SingleServicePage({ match }) {
    const [singleArticles, setSingleArticles] = useState(null);

    useEffect(() => {
        client.getEntries({ content_type: 'service', 'fields.slug': match.params.slug })
            .then((response) => setSingleArticles(response.items[0]))
            .catch(console.error);
    }, [match.params.slug]);

    if (!singleArticles) return <Loading/>;
    return (
        <>
            <Navbar/>
            <div className='blob'></div>
            <div className='flex flex-col gap-44 bg-[#faf9f9] pt-44'>
                <div className='flex flex-col items-center gap-20 px-10 lg:px-32'>
                    <p className='worksans-500 text-[31px] md:text-[48px] text-center w-full sm:w-3/4 z-10'>{singleArticles.fields.servicePackageName}</p>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                        {singleArticles.fields.detailService.map((detailService, index) => (
                            <div key={index} className="flex flex-col items-center gap-14 sm:gap-20 bg-white px-10 py-14 rounded-2xl">
                                <div className='flex flex-col items-center gap-5'>
                                    <div className='text-center'>
                                        <p className='worksans-600 text-lg lg:text-2xl'>{detailService.fields.tier}</p>
                                        <p className='worksans-500 text-gray-700'>{detailService.fields.detailServiceName}</p>
                                    </div>
                                    <p className='worksans-600 text-3xl text-amber-500'>
                                    {detailService.fields.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }).replace(/,00$/, "")}
                                    </p>
                                </div>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                                    {detailService.fields.servicePart.map((_, index) => (
                                    <span className='flex items-center gap-2' key={index}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 stroke-green-500 flex-shrink-0">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        <p className="worksans-500 text-gray-600">{detailService.fields.servicePart[index]}</p>
                                    </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default withRouter(SingleServicePage)