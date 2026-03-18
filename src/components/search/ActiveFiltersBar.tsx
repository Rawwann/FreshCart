"use client";

import React from 'react';
import { FaFilter, FaXmark } from "react-icons/fa6";

interface ActiveFiltersBarProps {
    selectedCategories: string[];
    selectedBrands: string[];
    onCategoryToggle: (cat: string) => void;
    onBrandToggle: (brand: string) => void;
    onClearAll: () => void;
}

export default function ActiveFiltersBar({
    selectedCategories,
    selectedBrands,
    onCategoryToggle,
    onBrandToggle,
    onClearAll,
}: ActiveFiltersBarProps) {
    return (
        <div className="flex items-center gap-3 flex-wrap mb-2">
            <span className="text-sm text-gray-400 font-bold flex items-center gap-1">
                <FaFilter size={12} /> Active:
            </span>

            {selectedCategories.map((cat) => (
                <span
                    key={cat}
                    className="bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-xs font-black flex items-center gap-2 border border-green-100"
                >
                    {cat}
                    <button onClick={() => onCategoryToggle(cat)}>
                        <FaXmark size={14} />
                    </button>
                </span>
            ))}

            {selectedBrands.map((brand) => (
                <span
                    key={brand}
                    className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-black flex items-center gap-2 border border-blue-100"
                >
                    {brand}
                    <button onClick={() => onBrandToggle(brand)}>
                        <FaXmark size={14} />
                    </button>
                </span>
            ))}

            <button
                onClick={onClearAll}
                className="text-xs text-gray-400 underline font-bold ml-2"
            >
                Clear all
            </button>
        </div>
    );
}