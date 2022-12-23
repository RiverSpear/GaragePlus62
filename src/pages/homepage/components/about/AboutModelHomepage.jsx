import React from 'react'
import { Link } from 'react-router-dom'

import LocationHeadlineHomepage from '../location/location headline/LocationHeadlineHomepage'

const AboutModelHomepage = ({article}) => {
    const {background, garageName, shortDescription} = article.fields
    return (
        <>
            <div className='bg-center bg-cover' style={{backgroundImage: `url(${'https:' + background.fields.file.url})`}}>
                <div className='bg-gradient-to-b sm:bg-gradient-to-r to-black/50 from-black h-screen w-full'>
                    <div className='absolute top-1/2 sm:left-1/2 md:left-0 -translate-y-1/2 sm:-translate-x-1/2 md:-translate-x-0 w-full flex flex-col items-center md:items-start text-center md:text-left gap-14 text-white pl-0 md:pl-20'>
                        <div className='flex flex-col'>
                            <p className='worksans-600 text-[21px] sm:text-[39px] uppercase'>Welcome to</p>
                            <p className='worksans-600 text-[31px] sm:text-[61px] uppercase'>{garageName}</p>
                        </div>
                        <p className='worksans leading-8 -mt-10 w-3/4 sm:w-1/2'>{shortDescription}</p>
                        <Link to='/service'>
                            <div className='flex items-center gap-5 worksans bg-white/25 w-fit rounded-full px-7 py-4'>
                                Explore
                                <svg width="59" height="24" viewBox="0 0 59 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12L53.9998 11.8433" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M47.3911 4.85147L54.3911 11.8515L47.3911 18.8515" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='hidden lg:block absolute bottom-0 right-0 p-14'>
                    <LocationHeadlineHomepage/>
                </div>
            </div>
        </>
    )
}

export default AboutModelHomepage