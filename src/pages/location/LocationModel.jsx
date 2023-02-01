import React from 'react'
import { Link } from 'react-router-dom'
import Ripples from 'react-ripples'

const LocationModel = ({article}) => {
    const {slug, type, streetName, longAddress, googleMapsEmbed, googleMapsLink} = article.fields
    return (
        <>
            <div className='flex flex-col lg:flex-row items-center gap-20 lg:gap-32 bg-white px-5 sm:px-20 py-5 sm:py-10 shadow-[0_25px_50px_-25px_rgba(148,163,184,0.5)] rounded-xl duration-200'>
                <div className='flex flex-col gap-3 w-full lg:w-1/2'>
                    <div className='flex flex-col gap-3'>
                        {
                            type === false ? (
                                <p className='worksans-600 text-amber-500'>Pusat</p>
                            ) : (
                                <p className='worksans-600 text-amber-500'>Cabang</p>
                            )
                        }
                        <p className='worksans-600 text-[21px] sm:text-[31px]'>{streetName}</p>
                    </div>
                    <p className='worksans text-slate-500 leading-7'>{longAddress}</p>
                    <div className='flex flex-col sm:flex-row gap-5 w-fit'>
                        <Ripples color="rgba(244,244,244,.3)" during={1200}>
                            <a href={googleMapsLink} target="_blank" rel='noreferrer' className='bg-amber-500 hover:bg-amber-400 worksans-500 text-[14px] text-white px-5 py-3 whitespace-nowrap rounded-full duration-200'>Lihat di maps</a>
                        </Ripples>
                        <Ripples color="rgba(244,244,244,.3)" during={1200}>
                            <Link to={`/lokasi/${slug}`} className='bg-slate-100 hover:bg-slate-50 worksans-500 text-[14px] text-slate-700 px-5 py-3 whitespace-nowrap rounded-full duration-200'>Detail lokasi</Link>
                        </Ripples>
                    </div>
                </div>
                <div className='location'>
                    <div dangerouslySetInnerHTML={{ __html: googleMapsEmbed }}></div>
                </div>
            </div>
        </>
    )
}

export default LocationModel