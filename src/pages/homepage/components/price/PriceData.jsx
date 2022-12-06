import React from 'react'

const PriceData = () => {
    return (
        <>
            <div className='flex items-center justify-between w-[250px]'>
                <div>
                    <p className='text-[15px] worksans-500 text-slate-800 mb-1'>Price</p>
                    <p className='text-[13px] text-slate-500 worksans'>Rp. 1000 - Rp. 1.000.000</p>
                </div>
                <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#989898">
                    <path d="M16.154 7.154c-.949-.949-2.619-1.608-4.154-1.65m-4.154 10.65c.893 1.19 2.552 1.868 4.154 1.926m0-12.576c-1.826-.049-3.461.778-3.461 3.034 0 4.154 7.615 2.077 7.615 6.231 0 2.37-2.027 3.387-4.154 3.31m0-12.575V3m0 15.08V21" stroke="#989898" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </div>
        </>
    )
}

export default PriceData
