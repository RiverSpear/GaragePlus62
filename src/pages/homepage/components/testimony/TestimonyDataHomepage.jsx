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
                    "zIndex" : "10"
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
                pagination={{
                    clickable: true,
                }}
            >
                {
                    testimonial.map((article, index) => (
                            <SwiperSlide key={index} className='flex justify-center mt-14'>
                                <TestimonyModelHomepage article={article}/>
                            </SwiperSlide>
                        )
                    )
                }
            </Swiper>
        </>
    )
}

export default TestimonyDataHomepage