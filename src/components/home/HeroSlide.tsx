"use client";

import React from 'react';
import Link from 'next/link';
import { Slide } from '@/constants/home/hero.constants';

interface HeroSlideProps {
    slide: Slide;
    isActive: boolean;
}

export const HeroSlide: React.FC<HeroSlideProps> = ({ slide, isActive }) => {
    return (
        <div
            className="w-full h-full relative flex items-center bg-no-repeat bg-center bg-[length:100%_100%]"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00C950]/90 to-[#05DF72]/50"></div>

            <div className="relative z-10 w-full pl-6 md:pl-16 lg:pl-32">
                <div className="max-w-2xl text-white space-y-6">
                    <h1
                        className={`font-bold leading-[1.1] text-3xl md:text-4xl lg:text-5xl ${slide.id === 1
                            ? `transition-all duration-1000 ease-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
                            : 'opacity-100 translate-y-0 transition-none'
                            } ${slide.titleWidth}`}
                    >
                        {slide.headline}
                    </h1>

                    <p
                        className={`text-lg md:text-2xl font-medium text-white/95 ${slide.id === 1
                            ? `transition-all duration-1000 delay-300 ease-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`
                            : 'opacity-100 translate-y-0 transition-none'
                            }`}
                    >
                        {slide.subtext}
                    </p>

                    <div className={`flex flex-wrap gap-4 pt-4 ${slide.id === 1
                        ? `transition-all duration-1000 delay-500 ease-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`
                        : 'opacity-100 translate-y-0 transition-none'
                        }`}>
                        <Link
                            href={slide.button1.link}
                            className={`btn bg-white border-2 border-white/50 ${slide.button1.textColor} inline-block px-8 py-2.5 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg`}
                        >
                            {slide.button1.text}
                        </Link>

                        <Link
                            href={slide.button2.link}
                            className="btn bg-transparent border-2 border-white/50 text-white inline-block px-8 py-2.5 rounded-lg font-semibold hover:scale-105 transition-transform backdrop-blur-sm"
                        >
                            {slide.button2.text}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};