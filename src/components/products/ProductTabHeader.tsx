"use client";

import React from 'react';
import { TAB_DEFINITIONS, TabId } from '@/constants/products/products.constants';

interface ProductTabHeaderProps {
    activeTab: TabId;
    onTabChange: (tab: TabId) => void;
    ratingsQuantity?: number;
}

export default function ProductTabHeader({ activeTab, onTabChange, ratingsQuantity }: ProductTabHeaderProps) {
    return (
        <div className="border-b border-gray-200">
            <div className="flex items-center overflow-x-auto scrollbar-hide">
                {TAB_DEFINITIONS.map(({ id, icon: Icon, label }) => (
                    <button
                        key={id}
                        onClick={() => onTabChange(id)}
                        className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${activeTab === id
                            ? "text-green-600 border-b-2 border-green-600 bg-green-50/50"
                            : "text-gray-600 hover:text-green-600 hover:bg-gray-50"
                            }`}
                    >
                        <Icon />
                        {label}{id === "reviews" ? ` (${ratingsQuantity || 12})` : ""}
                    </button>
                ))}
            </div>
        </div>
    );
}