import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import ScrollToTop from '../../components/scroll to top/ScrollToTop'

function PageNotFoundModel({article}) {
    const {logo} = article.fields
    const navigate = useNavigate();
    return (
        <>
            <div className='flex flex-col items-center gap-10 h-screen pt-32 px-10'>
                <span className='flex items-center gap-5 worksans-800 text-[119px] sm:text-[149px]'>
                    4
                    <img src={'https:' + logo.fields.file.url} alt="" className="w-24 md:w-32"/>
                    4
                </span>
                <p className='worksans text-base md:text-[20px] text-center leading-7 -tracking-wide w-full md:w-1/2'>Waduh, Halaman ini tidak ada. Mungkin halaman ini sudah dihapus, dipindah, atau memang tidak ada!</p>
                <p onClick={() => navigate(-1)} className='bg-amber-500 worksans text-white text-center p-3 rounded-lg w-[300px]'>Kembali</p>
            </div>
            <ScrollToTop/>
            <Footer/>
        </>
    )
}

export default PageNotFoundModel