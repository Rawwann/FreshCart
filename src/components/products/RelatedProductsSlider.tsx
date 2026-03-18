"use client";

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { ProductCard } from '@/components/products/ProductCard';
import { Product } from '@/interfaces/product.interface';

export default function RelatedProductsSlider({ products }: { products: Product[] }) {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    return (
        <div className="w-full mt-0 mb-8 animate-in fade-in duration-700">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-1.5 bg-gradient-to-b from-green-500 to-green-700 rounded-full" />
                    <h2 className="text-2xl font-bold text-gray-800">
                        You May Also <span className="text-green-600">like</span>
                    </h2>
                </div>

                {/* Navigation Buttons */}
                <div className="flex space-x-2">
                    <button
                        ref={prevRef}
                        className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green-100 hover:text-green-600 transition-all cursor-pointer disabled:opacity-30"
                    >
                        <FaChevronLeft size={14} />
                    </button>
                    <button
                        ref={nextRef}
                        className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green-100 hover:text-green-600 transition-all cursor-pointer disabled:opacity-30"
                    >
                        <FaChevronRight size={14} />
                    </button>
                </div>
            </div>

            <Swiper
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                    // @ts-ignore
                    swiper.params.navigation.prevEl = prevRef.current;
                    // @ts-ignore
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                spaceBetween={20}
                breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 10 },
                    640: { slidesPerView: 2, spaceBetween: 15 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 }
                }}
                className="related-products-swiper"
            >
                {products.map((p) => (
                    <SwiperSlide key={p._id} className="py-2">
                        <ProductCard product={p} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}