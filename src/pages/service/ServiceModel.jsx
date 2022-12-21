import React from 'react'
import { Link } from 'react-router-dom'

const ServiceModel = ({article}) => {
    const { slug, headlinePhoto, servicePackName, detailDescription, vehicle } = article.fields
    const priceSplitter = (number) => (number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));

    return (
        <>
            <Link to={`/service/${slug}`} className='flex flex-col bg-white shadow-[0_25px_50px_-25px_rgba(148,163,184,0.5)] hover:shadow-[0_25px_50px_-15px_rgba(148,163,184,0.5)] hover:scale-105 duration-200 rounded-xl w-[300px]'>
                <img src={'https:' + headlinePhoto.fields.file.url} alt="" className="rounded-tl-xl rounded-tr-xl w-full h-[175px]" />
                <div className='flex flex-1 flex-col justify-between gap-10 p-4'>
                    <div className='flex flex-col gap-2'>
                        <p className='worksans text-slate-500 text-[14px]'>{vehicle}</p>
                        <p className='worksans-600 text-[16px]'>{servicePackName}</p>
                        <p className='worksans text-slate-500 text-[14px]'>{detailDescription.listServices.length} paket berbeda</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        { 
                            detailDescription.listServices.slice(0,1).map((_, index) => (
                                <p key={index} className='worksans-500 text-center text-amber-600 bg-amber-50 w-full py-3 rounded-full'>Service All In</p>
                            )).filter(item => !item.serviceAllIn)
                        }
                        {
                            detailDescription.listServices.map((_, i) => (
                                <p className='worksans-500 text-center text-gray-600 bg-gray-100 w-full py-3 rounded-full' key={i}>Mulai dari Rp {priceSplitter(detailDescription.listServices[i].price)}</p>
                            )).reduce((prev, cur) => (cur.price < prev.price ? cur : prev))
                        }
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ServiceModel