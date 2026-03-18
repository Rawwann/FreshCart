
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

export const DEFAULT_SLIDER_OPTIONS: SwiperOptions = {
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: { clickable: true },
    autoplay: { delay: 5000, disableOnInteraction: false },
    breakpoints: {
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
    },
};

export const MAIN_SLIDER_OPTIONS: SwiperOptions = {
    ...DEFAULT_SLIDER_OPTIONS,
    slidesPerView: 1,
    breakpoints: {},
};