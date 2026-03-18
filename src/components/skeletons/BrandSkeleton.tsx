import React from 'react';

export const BrandSkeleton = () => {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm overflow-hidden">
            <div className="aspect-square rounded-xl bg-gray-100 mb-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
            </div>
            <div className="h-4 bg-gray-100 rounded-md w-3/4 mx-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
            </div>
            <div className="mt-3 h-3 bg-gray-50 rounded w-1/2 mx-auto" />
        </div>
    );
};