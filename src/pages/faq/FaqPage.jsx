import React from 'react'
import { Link } from 'react-router-dom'

import Faq from './Faq'
import Navbar from '../../components/navigation bar/Navbar'
import MarketingBox from '../../components/marketing box/MarketingBox'
import Footer from '../../components/footer/Footer'
import ScrollToTop from '../../components/scroll to top/ScrollToTop'

import background from '../../asset/image/background.png'

export default function FaqPage() {
    return (
        <>
            <Navbar/>
            <img src={background} alt="" className='absolute -z-10' />
            <div className='flex flex-col gap-44 pt-44'>
                <div className='flex flex-col items-center gap-20'>
                    <div className='flex flex-col items-center gap-5 text-center px-5 lg:px-32'>
                        <div className='flex flex-col items-center gap-3'>
                            <p className='worksans-500 text-amber-500 tracking-widest uppercase'>faq</p>
                            <p className='text-[31px] sm:text-[48px] worksans-500'>Frequently Asked Question</p>
                        </div>
                        <p className='worksans text-slate-500 w-full sm:w-3/4 md:w-1/2 text-center leading-7'>Semua yang kamu perlu ketahui ada disini. Punya pertanyaan lebih lanjut? Silahkan <Link to="/contact" className='underline'>hubungi tim kami.</Link></p>
                    </div>
                    <Faq/>
                </div> 
                <div className='px-5 md:px-20 xl:px-32'>
                    <MarketingBox/>
                </div>
                <Footer/>
                <ScrollToTop/>
            </div>
        </>
    )
}
