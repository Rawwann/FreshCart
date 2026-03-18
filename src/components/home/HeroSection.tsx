"use client";

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { SLIDES } from '@/constants/home/hero.constants';
import { HeroSlide } from '@/components/home/HeroSlide';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export const HeroSection = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] group overflow-hidden">
      <Swiper
        modules={[Pagination, Navigation, EffectFade]}
        effect="fade"
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-custom-bullet-active',
          bulletClass: 'swiper-custom-bullet'
        }}
        onBeforeInit={(swiper) => {
          if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        onInit={(swiper) => {
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        loop={true}
        speed={1000}
        className="w-full h-full relative"
      >
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <HeroSlide slide={slide} isActive={isActive} />
            )}
          </SwiperSlide>
        ))}

        <button
          ref={prevRef}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 cursor-pointer bg-white/90 hover:bg-white text-green-500 hover:text-green-600 rounded-full w-12 h-12 flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 border-none"
        >
          <FaChevronLeft className="w-6 h-6" />
        </button>

        <button
          ref={nextRef}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 cursor-pointer bg-white/90 hover:bg-white text-green-500 hover:text-green-600 rounded-full w-12 h-12 flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 border-none"
        >
          <FaChevronRight className="w-6 h-6" />
        </button>
      </Swiper>

      <style jsx global>{`
                .swiper-custom-bullet { width: 10px; height: 10px; background: rgba(255, 255, 255, 0.4); display: inline-block; border-radius: 50%; margin: 0 4px; cursor: pointer; }
                .swiper-custom-bullet-active { width: 32px; border-radius: 8px; background: #ffffff !important; }
            `}</style>
    </section>
  );
};