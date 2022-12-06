import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const GalleryModel = ({article}) => {
    const {gallery} = article.fields
    return (
        <>
            <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                effect={"fade"}
                slidesPerView={1}
                autoplay={{ delay: 2000 }}
                allowTouchMove={false}
            >
                {
                    gallery.map((item, index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                            <img src={"https:" + gallery[index].fields.file.url} alt="" className='w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] image rounded-2xl'/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}

export default GalleryModel