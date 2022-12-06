import React from 'react'
import { Link } from 'react-router-dom'
import Ripples from 'react-ripples'

function MarketingBox() {
    return (
        <>
            <div className='bg-amber-50 rounded-3xl px-5 sm:px-14 py-20'>
                <div className='flex flex-col items-center text-center gap-7 w-full'>
                    <p className='worksans-500 text-amber-500 text-[21px] uppercase tracking-wider'>get service</p>
                    <p className='worksans-700 text-neutral-800 text-[25px] sm:text-[31px] md:text-[45px] w-full md:w-3/4'>Servis kendaraan favoritmu dengan GaragePlus62</p>
                    <p className='worksans text-gray-600 w-full md:w-2/3 lg:w-2/5'>Tentukan servis yang tepat untuk kendaraan favoritmu dan dapatkan produk terbaik.</p>
                    <Link to="/service">
                        <Ripples color="rgba(244,244,244,.3)" during={1200} className='worksans bg-amber-500 hover:bg-amber-400 text-white capitalize px-10 py-5 rounded-full duration-200 w-max cursor-pointer'>
                            Servis sekarang
                        </Ripples>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MarketingBox