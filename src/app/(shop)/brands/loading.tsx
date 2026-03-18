import React from 'react';
import { BrandSkeleton } from '@/components/skeletons/BrandSkeleton';

export default function Loading() {
    return (
        <main className="w-full min-h-screen bg-white font-exo">
            <div className="relative w-full py-12 px-6 md:px-16 overflow-hidden bg-gray-200 animate-pulse">
                <div className="flex items-center gap-1.5 mb-4 opacity-50">
                    <div className="w-10 h-3 bg-gray-300 rounded" />
                    <div className="w-4 h-3 bg-gray-300 rounded" />
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gray-300 rounded-2xl" />
                    <div className="flex flex-col gap-2">
                        <div className="w-40 h-8 bg-gray-300 rounded-lg" />
                        <div className="w-56 h-4 bg-gray-300 rounded" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <BrandSkeleton key={i} />
                    ))}
                </div>
            </div>
        </main>
    );
}