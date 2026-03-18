import React from 'react';

export const WishlistSkeleton = () => {
    return (
        <div className="min-h-screen bg-gray-50/50 pb-20 animate-pulse">
            {/* 1. Header Skeleton Simulation */}
            <div className="bg-white border-b border-gray-100 py-10">
                <div className="container mx-auto px-4">
                    <div className="h-8 w-48 bg-gray-200 rounded-lg mb-2"></div>
                    <div className="h-4 w-32 bg-gray-100 rounded"></div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

                    {/* 2. Table Header Skeleton (Desktop Only) */}
                    <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50/50 border-b border-gray-100">
                        <div className="col-span-6 h-4 w-20 bg-gray-200 rounded"></div>
                        <div className="col-span-2 h-4 w-12 bg-gray-200 rounded mx-auto"></div>
                        <div className="col-span-2 h-4 w-12 bg-gray-200 rounded mx-auto"></div>
                        <div className="col-span-2 h-4 w-12 bg-gray-200 rounded mx-auto"></div>
                    </div>

                    {/* 3. Skeleton Rows (Rendering 4 rows) */}
                    <div className="divide-y divide-gray-100">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:px-6 md:py-5 items-center">

                                {/* Product Info Block */}
                                <div className="md:col-span-6 flex items-center gap-4">
                                    <div className="w-20 h-20 rounded-xl bg-gray-100 shrink-0"></div>
                                    <div className="flex-1">
                                        <div className="h-5 w-3/4 bg-gray-200 rounded mb-2"></div>
                                        <div className="h-4 w-1/4 bg-gray-100 rounded"></div>
                                    </div>
                                </div>

                                {/* Price Block */}
                                <div className="md:col-span-2 flex md:justify-center items-center gap-2">
                                    <div className="h-5 w-20 bg-gray-200 rounded"></div>
                                </div>

                                {/* Status Block */}
                                <div className="md:col-span-2 flex md:justify-center">
                                    <div className="h-6 w-16 bg-green-50 rounded-full"></div>
                                </div>

                                {/* Actions Block */}
                                <div className="md:col-span-2 flex items-center gap-2 md:justify-center">
                                    <div className="flex-1 md:flex-none h-10 w-28 bg-gray-100 rounded-lg"></div>
                                    <div className="w-10 h-10 bg-gray-100 rounded-lg"></div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

                {/* Continue Shopping Link Skeleton */}
                <div className="mt-8 h-5 w-40 bg-gray-200 rounded"></div>
            </div>
        </div>
    );
};