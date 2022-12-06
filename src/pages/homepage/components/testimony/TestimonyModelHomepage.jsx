import React from 'react'

const TestimonyModelHomepage = ({article}) => {
    const {testimony, reviewerName, status} = article.fields
    return (
        <>
            <div className='flex flex-col items-center justify-between bg-white rounded-2xl p-8 mx-5 text-center gap-5 :w-[550px] h-[300px] sm:h-[275px] cursor-grab'>
                <p className='flex worksans text-gray-600 text-[13px] sm:text-[16px] m-auto'>{testimony}</p>
                <div className='flex flex-col items-center gap-5'>
                    <div className='bg-amber-500 w-12 h-1.5 rounded-full'></div>
                    <div>
                        <p className='worksans-500'>{reviewerName}</p>
                        <p className='worksans text-[13px] text-gray-500'>{status}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonyModelHomepage