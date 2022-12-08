import React from 'react'
import Footer from '../../components/footer/Footer'
import MarketingBox from '../../components/marketing box/MarketingBox'
import Navbar from '../../components/navigation bar/Navbar'
import Testimony from './Testimony'

import background from '../../asset/image/background.png'
import ScrollToTop from '../../components/scroll to top/ScrollToTop'
import { Link } from 'react-router-dom'

function TestimonyPage() {
    return (
        <>
            <Navbar/>
            <img src={background} alt="" className='absolute -z-10' />
            <div className='flex flex-col gap-44 pt-44'>
                <div className='flex flex-col items-center gap-20'>
                    <div className='flex flex-col items-center gap-10 text-center px-5 lg:px-32'>
                        <div className='flex flex-col items-center gap-3'>
                            <p className='worksans-500 text-amber-500 tracking-widest uppercase'>Testimoni</p>
                            <p className='worksans-500 text-[31px] md:text-[48px] text-center'>Apa yang pelanggan katakan kepada kami</p>
                        </div>
                        <span className='worksans text-gray-700'>Ingin memberikan testimoni ? Silahkan <Link to="/contact" className='underline'>hubungi tim kami.</Link></span>
                    </div>
                    <div className='px-5 md:px-20 xl:px-32'>
                        <Testimony/>
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

export default TestimonyPage