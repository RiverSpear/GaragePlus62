import React from 'react'

function MarketingBox() {
    return (
        <>
            <div className='bg-amber-50 rounded-3xl px-5 sm:px-14 py-20'>
                <div className='flex flex-col items-center text-center gap-7 w-full'>
                    <p className='worksans-500 text-amber-500 text-[21px] uppercase tracking-wider'>get service</p>
                    <p className='worksans-700 text-neutral-800 text-[25px] sm:text-[31px] md:text-[45px] w-full md:w-3/4'>Servis kendaraan favoritmu dengan GaragePlus62</p>
                    <p className='worksans text-gray-600 w-full md:w-2/3 lg:w-2/5'>Tentukan servis yang tepat untuk kendaraan favoritmu dan dapatkan produk terbaik.</p>
                </div>
            </div>
        </>
    )
}

export default MarketingBox