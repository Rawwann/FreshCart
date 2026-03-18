"use client";

import React from 'react';
import { useProductSidebar } from '@/hooks/search/useProductSidebar';
import { CATEGORIES, BRANDS, PRICE_PRESETS } from '@/constants/search/search.constants';

export default function ProductSidebar({
    selectedCategories = [],
    selectedBrands = [],
    onCategoryChange,
    onBrandChange,
    onClearAll,
    onPriceChange,
}: any) {
    const {
        minPrice, setMinPrice,
        maxPrice, setMaxPrice,
        handlePreset,
        handleManualPrice,
        handleClearAll,
    } = useProductSidebar(onPriceChange, onClearAll);

    return (
        <aside
            className="w-[256px] h-[818px] bg-white border border-gray-100 rounded-[16px] p-[24px] shadow-sm flex flex-col sticky top-24 overflow-hidden"
            style={{ opacity: 1 }}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900 text-lg">Categories</h3>
                {selectedCategories.length > 0 && (
                    <span className="text-xs text-green-600 font-medium tracking-tight">
                        {selectedCategories.length} selected
                    </span>
                )}
            </div>

            {/* List Section */}
            <div className="max-h-[160px] overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-3">
                {CATEGORIES.map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(cat)}
                            onChange={() => onCategoryChange(cat)}
                            className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
                        />
                        <span className={`text-sm transition-colors ${selectedCategories.includes(cat) ? 'text-green-600 font-bold' : 'text-gray-600 group-hover:text-green-600'}`}>
                            {cat}
                        </span>
                    </label>
                ))}
            </div>

            <hr className="border-gray-50 mb-6" />

            {/* Price Range Section */}
            <div className="flex flex-col gap-4 mb-6">
                <h3 className="font-bold text-gray-900 text-lg">Price Range</h3>
                <div className="flex gap-2">
                    <div className="flex-1">
                        <label className="text-[10px] text-gray-400 uppercase font-bold mb-1 block">Min (EGP)</label>
                        <input
                            type="number"
                            placeholder="0"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            onBlur={handleManualPrice}
                            className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="text-[10px] text-gray-400 uppercase font-bold mb-1 block">Max (EGP)</label>
                        <input
                            type="number"
                            placeholder="No limit"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            onBlur={handleManualPrice}
                            className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-2">
                    {PRICE_PRESETS.map(({ label, min, max }) => (
                        <button
                            key={label}
                            onClick={() => handlePreset(min, max)}
                            className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-colors border ${maxPrice === max.toString() && minPrice === min.toString()
                                ? 'bg-green-50 text-green-600 border-green-200'
                                : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600 border-transparent hover:border-green-100'
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            <hr className="border-gray-50 mb-6" />

            {/* Brands Section */}
            <div className="flex flex-col gap-4 flex-1 min-h-0">
                <h3 className="font-bold text-gray-900 text-lg">Brands</h3>
                <div className="overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-3 min-h-0">
                    {BRANDS.map((cat) => (
                        <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={selectedBrands.includes(cat)}
                                onChange={() => onBrandChange(cat)}
                                className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
                            />
                            <span className={`text-sm transition-colors ${selectedBrands.includes(cat) ? 'text-green-600 font-bold' : 'text-gray-600 group-hover:text-green-600'}`}>
                                {cat}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Clear All */}
            <div className="mt-auto pt-6">
                <button
                    onClick={handleClearAll}
                    className="w-full py-2.5 rounded-lg border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors flex items-center justify-center gap-2"
                >
                    Clear All Filters
                </button>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 5px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f9fafb;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #d1d5db;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #9ca3af;
                }
            `}</style>
        </aside>
    );
}