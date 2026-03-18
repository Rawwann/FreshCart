"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperOptions } from 'swiper/types';
import Image from 'next/image';
import { DEFAULT_SLIDER_OPTIONS, MAIN_SLIDER_OPTIONS } from '@/constants/home/slider.constants';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export interface CommonSliderProps {
  items: Array<{
    id: string;
    image: string;
    title?: string;
    [key: string]: any;
  }>;
  swiperOptions?: SwiperOptions;
  isMainSlider?: boolean;
}

export const CommonSlider: React.FC<CommonSliderProps> = ({
  items,
  swiperOptions = {},
  isMainSlider = false,
}) => {
  const options = isMainSlider
    ? { ...MAIN_SLIDER_OPTIONS, ...swiperOptions }
    : { ...DEFAULT_SLIDER_OPTIONS, ...swiperOptions };

  return (
    <div className={`w-full ${isMainSlider ? 'h-[400px] md:h-[500px]' : ''}`}>
      <Swiper {...options} className="w-full h-full rounded-2xl overflow-hidden">
        {items.map((item) => (
          <SwiperSlide key={item.id} className="relative w-full h-full">
            <div
              className={`relative w-full overflow-hidden ${isMainSlider ? 'h-full' : 'h-48 rounded-xl shadow-sm'
                }`}
            >
              <Image
                src={item.image || 'https://example.com/placeholder.jpg'}
                alt={item.title || 'Slider image'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {!isMainSlider && item.title && (
              <h3 className="mt-3 text-center text-sm font-medium text-gray-800 truncate px-2">
                {item.title}
              </h3>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};