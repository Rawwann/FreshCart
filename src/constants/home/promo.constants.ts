
export const PROMO_CARDS = [
    {
        id: 1,
        badge: '🔥',
        badgeText: 'Deal of the Day',
        headline: 'Fresh Organic Fruits',
        description: 'Get up to 40% off on selected organic fruits',
        discount: '40% OFF',
        code: 'ORGANIC40',
        buttonText: 'Shop Now',
        buttonColor: 'text-green-700',
        gradient: 'bg-gradient-to-br from-green-500 to-green-700',
        animationX: -50,
        href: '/products',
    },
    {
        id: 2,
        badge: '✨',
        badgeText: 'New Arrivals',
        headline: 'Exotic Vegetables',
        description: 'Discover our latest collection of premium vegetables',
        discount: '25% OFF',
        code: 'FRESH25',
        buttonText: 'Explore Now',
        buttonColor: 'text-rose-500',
        gradient: 'bg-gradient-to-br from-orange-400 to-rose-500',
        animationX: 50,
        href: '/products',
    },
] as const;

export type PromoCardData = typeof PROMO_CARDS[number];