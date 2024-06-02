import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

const Carousel = () => {
  useEffect(() => {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.custom-swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: '[data-carousel-next]',
        prevEl: '[data-carousel-prev]',
      },
    });
  }, []);

  return (
    <div id="default-carousel" className="relative w-full h-screen overflow-hidden">
      <div id="swiperContainer" className="relative swiper-container h-full">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              src="https://via.placeholder.com/1920x1080"
              className="w-full h-full object-cover object-center"
              alt="Placeholder Image 1"
            />
          </div>
          <div className="swiper-slide">
            <img
              src="https://via.placeholder.com/1920x1080"
              className="w-full h-full object-cover object-center"
              alt="Placeholder Image 2"
            />
          </div>
          <div className="swiper-slide">
            <img
              src="https://via.placeholder.com/1920x1080"
              className="w-full h-full object-cover object-center"
              alt="Placeholder Image 3"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 flex space-x-2">
        <div className="custom-swiper-pagination"></div>
      </div>
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
