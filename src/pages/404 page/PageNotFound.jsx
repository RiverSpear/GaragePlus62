import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import ScrollToTop from '../../components/scroll to top/ScrollToTop'

function PageNotFound() {
    const navigate = useNavigate();
    return (
        <>
            <div className='flex flex-col items-center gap-10 h-screen pt-56 px-10'>
                <div className='flex flex-col items-center gap-3 text-center'>
                    <p className='worksans-600 text-[25px] md:text-[39px]'>Waduh, Halaman ini tidak ada</p>
                    <p className='worksans text-base md:text-[20px] -tracking-wide'>Mungkin halaman ini sudah dihapus, dipindah, atau memang tidak ada!</p>
                </div>
                <p onClick={() => navigate(-1)} className='bg-amber-500 worksans text-white text-center p-3 rounded-lg w-[300px]'>Kembali</p>
            </div>
            <ScrollToTop/>
            <Footer/>
        </>
    )
}

export default PageNotFound