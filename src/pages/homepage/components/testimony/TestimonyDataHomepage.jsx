import React from 'react'
import TestimonyModelHomepage from './TestimonyModelHomepage'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const TestimonyDataHomepage = ({testimonial}) => {
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-size": "16px",
                    "zIndex" : "10",
                    "padding" : "0 56px"
                }}
                modules={[Pagination, Navigation]}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    1080: {
                        slidesPerView: 2,
                    }
                }}
                navigation={{
                    clickable: true,
                }}
                spaceBetween={32}
            >
                {
                    testimonial.slice(0, 5).map((article, index) => {
                        return (article.fields.showOnHomepage === true) ? (
                            <SwiperSlide key={index} className='flex justify-center mt-14'>
                                <TestimonyModelHomepage article={article}/>
                            </SwiperSlide>
                        ) : null 
                    })
                }
            </Swiper>
        </>
    )
}

export default TestimonyDataHomepage