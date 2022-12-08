import React from 'react'

export const TestimonyData = ({testimonial}) => {
    const resultsRender = []
    for (var i = 0; i < testimonial.length; i += 4) {
        resultsRender.push(
            <div className="flex-[100%] max-w-[100%] md:flex-[50%] md:max-w-[50%] lg:flex-[33%] lg:max-w-[33%] px-2">
                {
                    testimonial.slice(i, i + 4).map((article, index) => (
                        <div className='flex flex-col items-start gap-5 bg-white shadow-[0_25px_50px_-25px_rgba(148,163,184,0.5)] hover:shadow-[0_25px_50px_-15px_rgba(148,163,184,0.5)] hover:scale-105 duration-200 text-left rounded-2xl p-6 mt-4 align-middle w-full' key={index}>
                            <div className='flex items-center gap-3'>
                                <span className='bg-amber-100 text-amber-500 text-center leading-[40px] w-10 h-10 rounded-lg worksans-500 text-[20px]'>{article.fields.reviewerName.match(/\b(\w)/g).join('')}</span>
                                <div>
                                    <p className='worksans-600'>{article.fields.reviewerName}</p>
                                    <p className='worksans text-[13px] text-gray-500'>{article.fields.status}</p>
                                </div>
                            </div>
                            <p className='worksans text-gray-600 text-[14px] sm:text-[16px] text-left'>{article.fields.testimony}</p>
                        </div>
                    ))
                }
            </div>
            );
    }
    return (
        <>
            <div className='flex flex-wrap'>
                {
                    resultsRender
                }
            </div>
        </>
    )
}

export default TestimonyData