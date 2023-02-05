import React from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos'

import ListLocation from './components/location/list location/ListLocationHomepage'
import Faq from './components/faq/Faq'
import Footer from '../../components/footer/Footer'
import ListService from './components/service/list service/ListService'
import MarketingBox from '../../components/marketing box/MarketingBox'
import Chat from '../../components/chat/Chat'
import AboutHomepage from './components/about/AboutHomepage'
import TestimonyHomepage from './components/testimony/TestimonyHomepage'
import Navbar from '../../components/navigation bar/Navbar'

export const HomeModel = () => {
    Aos.init();
    return (
        <>
            <div className='flex flex-col gap-44'>
                <div>
                    <Navbar/>
                    <AboutHomepage/>
                </div>
                <div className='flex justify-center'>
                    <p className='text-center worksans-600 text-[21px] sm:text-[25px] w-full md:w-3/4 lg:w-1/2 px-10'>Perawatan Komplit Untuk Motor Kesayanganmu! Yuk, kunjungi bengkel kami, jangan tunggu sampe motormu rusak ya!</p>
                </div>
                <div className='flex flex-col items-center gap-10 px-10 md:px-28'>
                    <p className='text-[25px] sm:text-[31px] worksans-600 capitalize'>Servis kami</p>
                    <ListService/>
                    <Link to='/servis'>
                        <div className='flex items-center gap-5 worksans bg-amber-500 hover:bg-amber-400 text-white w-fit rounded-full px-7 py-4 duration-200'>
                            Servis
                            <svg width="59" height="24" viewBox="0 0 59 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12L53.9998 11.8433" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M47.3911 4.85147L54.3911 11.8515L47.3911 18.8515" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </Link>
                </div>
                <div className='flex flex-col items-center gap-10 px-5 md:px-20 xl:px-32'>
                    <p className='text-[25px] sm:text-[31px] worksans-600 capitalize'>Lokasi kami</p>
                    <ListLocation/>
                </div>
                <div className='flex flex-col lg:flex-row justify-between gap-20 px-5 md:px-20 xl:px-32'>
                    <div className='flex flex-col gap-5 w-full lg:w-1/2'>
                        <p className='worksans-600 text-[25px] sm:text-[31px] text-neutral-800'>Frequently Asked Questions</p>
                        <p className='text-[16px] text-slate-700 worksans w-full lg:w-3/4'>Punya pertanyaan? Cari pertanyaan dan jawabanmu di daftar kami.</p>
                        <Link to="/faq">
                            <p className='worksans-500 bg-amber-500 hover:bg-amber-400 duration-200 text-white px-6 py-4 rounded-full w-max cursor-pointer capitalize'>Semua FAQ</p>
                        </Link>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <Faq/>
                    </div>
                </div>
                <div className='flex flex-col gap-10 bg-gray-100 text-center px-5 md:px-20 xl:px-40 py-20'>
                    <p className='text-[25px] sm:text-[31px] worksans-600 capitalize'>Testimoni</p>
                    <div>
                        <TestimonyHomepage/>
                    </div>
                    <Link to='/testimoni' className='flex justify-center'>
                        <div className='flex items-center gap-5 bg-amber-500 hover:bg-amber-400 duration-200  w-fit rounded-full px-7 py-4'>
                            <p className='worksans-500 text-white'>Lihat lebih banyak</p>
                            <svg width="59" height="24" viewBox="0 0 59 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12L53.9998 11.8433" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M47.3911 4.85147L54.3911 11.8515L47.3911 18.8515" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </Link>
                </div>
                <div className='px-5 md:px-20 xl:px-32'>
                    <MarketingBox/>
                </div>
                <Footer/>
                <Chat/>
            </div>
        </>
    )
}
