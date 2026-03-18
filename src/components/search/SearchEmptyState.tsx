"use client";

import React from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";

interface SearchEmptyStateProps {
    onClear: () => void;
}

export default function SearchEmptyState({ onClear }: SearchEmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-8 border border-gray-100">
                <FaMagnifyingGlass className="text-gray-300" size={32} />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-3">No Products Found</h3>
            <p className="text-gray-500 max-w-md mb-10 leading-relaxed font-medium">Try adjusting your search or filters.</p>
            <button onClick={onClear} className="bg-green-600 text-white px-10 py-3.5 rounded-xl font-black">
                Clear Filters
            </button>
        </div>
    );
}