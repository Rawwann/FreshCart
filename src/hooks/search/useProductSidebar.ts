"use client";

import { useState } from 'react';

export function useProductSidebar(
    onPriceChange: (min: number, max: number | undefined) => void,
    onClearAll: () => void,
) {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handlePreset = (min: number, max: number) => {
        setMinPrice(min.toString());
        setMaxPrice(max.toString());
        onPriceChange(min, max);
    };

    const handleManualPrice = () => {
        const min = minPrice ? parseInt(minPrice) : 0;
        const max = maxPrice ? parseInt(maxPrice) : undefined;
        onPriceChange(min, max);
    };

    const handleClearAll = () => {
        setMinPrice('');
        setMaxPrice('');
        onClearAll();
    };

    return {
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        handlePreset,
        handleManualPrice,
        handleClearAll,
    };
}