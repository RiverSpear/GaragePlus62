import React from 'react'

import Contact from './Contact'

import Footer from '../../components/footer/Footer'
import MarketingBox from '../../components/marketing box/MarketingBox'
import Navbar from '../../components/navigation bar/Navbar'
import ScrollToTop from '../../components/scroll to top/ScrollToTop'
import background from '../../asset/image/background.png'

function ContactPage() {
    return (
        <>
            <Navbar/>
            <img src={background} alt="" className='absolute -z-10' />
            <div className='flex flex-col gap-44 pt-44'>
                <div className='flex flex-col items-center gap-20 px-5 md:px-20 xl:px-32'>
                    <div className='flex flex-col items-center gap-3 text-center'>
                        <div className='flex flex-col items-center gap-3'>
                            <p className='worksans-500 text-amber-500 tracking-widest uppercase'>kontak</p>
                            <p className='text-[31px] sm:text-[48px] worksans-500'>Kontak Kami</p>
                        </div>
                        <p className='worksans text-slate-500 w-full sm:w-3/4 md:w-1/2 text-center leading-7'>Pastikan memilih lokasi bengkel yang sesuai dengan yang diinginkan. Setiap lokasi mempunyai kontak yang berbeda.</p>
                    </div>
                    <Contact/>
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

export default ContactPage