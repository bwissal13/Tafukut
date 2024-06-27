import React, { useState } from 'react';
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Nav from './nav';

export default function Home() {
    const [autoplayEnabled, setAutoplayEnabled] = useState(true);

    const handleSwiper = (swiper) => {
        swiper.on('slideChange', () => {
            if (swiper.activeIndex === 2) {
                setAutoplayEnabled(false); 
                swiper.autoplay.stop(); 
            } else {
                setAutoplayEnabled(true); 
                swiper.autoplay.start(); 
            }
        });
    };

    return (
        <>
            <Nav />
            <Swiper
                modules={[Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1} 
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                onSwiper={handleSwiper} 
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><Slide1 /></SwiperSlide>
                <SwiperSlide><Slide2 /></SwiperSlide>
                <SwiperSlide><Slide3 /></SwiperSlide>
            </Swiper>
        </>
    );
}
