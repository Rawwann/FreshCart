import React from 'react';

export const SearchSkeleton = () => {
    const skeletonCards = Array.from({ length: 10 });

    return (
        <div className="container mx-auto px-4 py-10 max-w-7xl animate-pulse">

            {/* 1. Search Bar & Info Placeholder */}
            <div className="mb-12 space-y-6">
                <div className="h-4 w-32 bg-gray-100 rounded" /> {/* Breadcrumb */}
                <div className="h-12 w-full max-w-2xl bg-gray-100 rounded-2xl" /> {/* Search Input Mock */}
                <div className="h-6 w-48 bg-gray-50 rounded" /> {/* "Showing results for..." */}
            </div>

            {/* 2. Products Grid Skeleton */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10 sm:gap-x-6">
                {skeletonCards.map((_, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-gray-100 p-3 sm:p-4 shadow-sm overflow-hidden relative">
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />

                        {/* Image Placeholder */}
                        <div className="aspect-square rounded-xl bg-gray-100 mb-4" />

                        {/* Content Placeholders */}
                        <div className="space-y-3">
                            <div className="h-4 bg-gray-100 rounded w-3/4 mx-auto" />
                            <div className="h-4 bg-gray-100 rounded w-1/2 mx-auto" />

                            <div className="flex justify-between items-center pt-3">
                                <div className="h-5 bg-gray-100 rounded w-16" />
                                <div className="h-8 w-8 bg-gray-100 rounded-lg" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};