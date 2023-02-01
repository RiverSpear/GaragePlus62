import React from 'react'
import Location from './Location.jsx'
import Navbar from '../../components/navigation bar/Navbar'
import MarketingBox from '../../components/marketing box/MarketingBox'
import Footer from '../../components/footer/Footer'
import ScrollToTop from '../../components/scroll to top/ScrollToTop'
import { Link } from 'react-router-dom'

import background from '../../asset/image/background.png'

export default function LocationPage() {
    return (
        <>
            <Navbar/>
            <img src={background} alt="" className='absolute -z-10' />
            <div className='flex flex-col gap-44 pt-44'>
                <div className='flex flex-col items-center gap-20'>
                    <div className='flex flex-col items-center gap-5'>
                        <div className='flex flex-col items-center gap-3'>
                            <p className='worksans-500 text-amber-500 tracking-widest uppercase'>lokasi</p>
                            <p className='text-[31px] sm:text-[48px] worksans-500'>Lokasi Bengkel</p>
                        </div>
                        <span className='worksans text-slate-500 w-full sm:w-3/4 md:w-1/2 text-center leading-7 px-10'>Semua yang perlu kamu ketahui tentang lokassi kami ada disini. Punya pertanyaan lebih lanjut? Silahkan <Link to="/kontak" className='underline'>hubungi tim kami.</Link></span>
                    </div>
                    <div className='px-5 md:px-20 xl:px-32'>
                        <Location/>
                    </div>
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
