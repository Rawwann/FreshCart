import React from 'react';

export const OrderSkeleton = () => {
    const skeletons = Array.from({ length: 3 });

    return (
        <div className="min-h-screen bg-gray-50/50 py-12 animate-pulse">
            <div className="container mx-auto px-4">

                {/* 1. Header Skeleton */}
                <div className="mb-12">
                    <div className="h-4 w-32 bg-gray-200 rounded mb-6" /> {/* Breadcrumb */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 bg-gray-200 rounded-2xl shrink-0" /> {/* Icon */}
                            <div className="space-y-2">
                                <div className="h-8 w-48 bg-gray-200 rounded-lg" /> {/* Title */}
                                <div className="h-4 w-64 bg-gray-200 rounded" /> {/* Subtitle */}
                            </div>
                        </div>
                        <div className="h-6 w-32 bg-gray-200 rounded" /> {/* Link */}
                    </div>
                </div>

                {/* 2. Orders List Skeleton */}
                <div className="space-y-6">
                    {skeletons.map((_, i) => (
                        <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />

                            <div className="flex flex-col lg:flex-row justify-between gap-6">
                                <div className="flex gap-5 flex-1">
                                    <div className="w-24 h-24 rounded-2xl bg-gray-100 shrink-0" /> {/* Image placeholder */}

                                    <div className="flex flex-col justify-between py-1 flex-1">
                                        <div className="space-y-3">
                                            <div className="h-6 w-24 bg-gray-100 rounded-lg" /> {/* Status badge */}
                                            <div className="h-7 w-40 bg-gray-100 rounded" /> {/* Order ID */}
                                            <div className="flex gap-4">
                                                <div className="h-4 w-20 bg-gray-50 rounded" /> {/* Date */}
                                                <div className="h-4 w-20 bg-gray-50 rounded" /> {/* Items count */}
                                                <div className="h-4 w-20 bg-gray-50 rounded" /> {/* Location */}
                                            </div>
                                        </div>
                                        <div className="h-8 w-32 bg-gray-100 rounded-lg mt-4" /> {/* Price */}
                                    </div>
                                </div>

                                <div className="flex flex-row lg:flex-col justify-between items-end">
                                    <div className="w-10 h-10 rounded-xl bg-gray-100" /> {/* Payment icon */}
                                    <div className="w-28 h-10 rounded-xl bg-gray-100" /> {/* Button */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};