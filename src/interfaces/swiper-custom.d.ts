import { HTMLAttributes } from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'swiper-container': HTMLAttributes<HTMLElement> & {
                'slides-per-view'?: string | number;
                'space-between'?: string | number;
                'navigation'?: string | boolean;
                'pagination'?: string | boolean;
                'scrollbar'?: string | boolean;
                'loop'?: string | boolean;
            };
            'swiper-slide': HTMLAttributes<HTMLElement>;
        }
    }
}