import React from 'react';

export const ProductsSkeleton = () => {
    const skeletonCards = Array.from({ length: 10 });

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10 sm:gap-x-6">
            {skeletonCards.map((_, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 p-3 sm:p-4 shadow-sm animate-pulse">
                    {/* Image Placeholder */}
                    <div className="relative aspect-square rounded-xl bg-gray-100 mb-4 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                    </div>

                    {/* Content Placeholders */}
                    <div className="space-y-3">
                        <div className="h-4 bg-gray-100 rounded w-3/4 mx-auto" /> {/* Title Line 1 */}
                        <div className="h-4 bg-gray-100 rounded w-1/2 mx-auto" /> {/* Title Line 2 */}

                        <div className="flex justify-between items-center pt-3">
                            <div className="h-5 bg-gray-100 rounded w-16" /> {/* Price */}
                            <div className="h-8 w-8 bg-gray-100 rounded-lg" /> {/* Add Button */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};