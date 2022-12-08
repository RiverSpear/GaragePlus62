import React from 'react'

const TestimonyModelHomepage = ({article}) => {
    return (
        <>
            <div className='flex flex-col gap-5 bg-white text-left rounded-2xl p-6 w-full cursor-grab'>
                <div className='flex items-center gap-3'>
                    <span className='bg-amber-100 text-amber-500 text-center leading-[40px] w-10 h-10 rounded-lg worksans-500 text-[20px]'>{article.fields.reviewerName.match(/\b(\w)/g).join('')}</span>
                    <div>
                        <p className='worksans-600'>{article.fields.reviewerName}</p>
                        <p className='worksans text-[13px] text-gray-500'>{article.fields.status}</p>
                    </div>
                </div>
                <p className='worksans text-gray-600 text-[14px] sm:text-[16px] text-left'>{article.fields.testimony}</p>
            </div>
        </>
    )
}

export default TestimonyModelHomepage