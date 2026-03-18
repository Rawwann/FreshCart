import React from 'react';

export const RelatedProductsSkeleton = () => {
    const skeletonCards = Array.from({ length: 5 });

    return (
        <div className="w-full mt-16 mb-20 animate-pulse">
            {/* 1. Header Skeleton */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-1.5 bg-gray-200 rounded-full" />
                    <div className="h-8 w-64 bg-gray-200 rounded-lg" />
                </div>

                {/* Navigation Buttons Placeholder */}
                <div className="flex space-x-2">
                    <div className="h-10 w-10 rounded-full bg-gray-100" />
                    <div className="h-10 w-10 rounded-full bg-gray-100" />
                </div>
            </div>

            {/* 2. Slider Grid Skeleton */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {skeletonCards.map((_, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm overflow-hidden relative">
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />

                        {/* Image Placeholder */}
                        <div className="aspect-square rounded-xl bg-gray-100 mb-4" />

                        {/* Content Placeholder */}
                        <div className="space-y-3 px-1">
                            <div className="h-4 bg-gray-100 rounded w-3/4" /> {/* Title line 1 */}
                            <div className="h-4 bg-gray-100 rounded w-1/2" /> {/* Title line 2 */}

                            <div className="flex justify-between items-center pt-2">
                                <div className="h-5 bg-gray-100 rounded w-16" /> {/* Price */}
                                <div className="h-8 w-8 bg-gray-100 rounded-lg" /> {/* Add button */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};