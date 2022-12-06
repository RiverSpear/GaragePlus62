import React from 'react'

import Navbar from '../../components/navigation bar/Navbar'
import MarketingBox from '../../components/marketing box/MarketingBox'
import Footer from '../../components/footer/Footer'
import Service from './Service'
import ScrollToTop from '../../components/scroll to top/ScrollToTop'

import background from '../../asset/image/background.png'
import { Link } from 'react-router-dom'

export default function ServicePage() {
    return (
        <>
            <Navbar/>
            <img src={background} alt="" className='absolute -z-10' />
            <div className='flex flex-col gap-44 py-44 px-5 md:px-20 xl:px-32'>
                <div className='flex flex-col items-center gap-3 text-center px-10 lg:px-32'>
                    <p className='text-[31px] sm:text-[48px] worksans-500'>Servis Kami</p>
                    <p className='worksans text-slate-500 w-full sm:w-3/4 md:w-1/2 text-center leading-7'>Pilih salah satu servis terbaik untuk kendaraan kesayanganmu. Punya pertanyaan dengan servis kami? Silahkan <Link to='/contact' className='underline'>Hubungi tim kami.</Link></p>
                </div>
                <Service/>
                <MarketingBox/>
            </div>
            <Footer/>
            <ScrollToTop/>
        </>
    )
}
