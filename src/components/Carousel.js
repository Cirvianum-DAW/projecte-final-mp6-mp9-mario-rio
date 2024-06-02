import React, { useEffect } from 'react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Carousel = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="h-full"
      >
        <SwiperSlide>
          <img
            src="https://backiee.com/static/wallpapers/1000x563/159194.jpg"
            className="w-full h-full object-cover object-center"
            alt="Placeholder Image 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://backiee.com/static/wallpapers/1000x563/172449.jpg"
            className="w-full h-full object-cover object-center"
            alt="Placeholder Image 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://backiee.com/static/wallpapers/1000x563/382040.jpg"
            className="w-full h-full object-cover object-center"
            alt="Placeholder Image 3"
          />
        </SwiperSlide>
      </Swiper>
      <button
        id="scrollDownBtn"
        type="button"
        className="absolute bottom-16 inset-x-0 mx-auto z-50 w-12 h-12 bg-white rounded-full border border-gray-300 focus:outline-none"
        onClick={() => document.getElementById('content').scrollIntoView({ behavior: 'smooth' })}
      >
        <svg
          className="w-6 h-6 text-gray-600 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
