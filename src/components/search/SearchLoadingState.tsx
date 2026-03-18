"use client";

import React from 'react';

export default function SearchLoadingState() {
    return (
        <div className="flex flex-col items-center justify-center py-32">
            <div className="w-12 h-12 border-4 border-gray-100 border-t-green-600 rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-400 font-bold animate-pulse tracking-widest uppercase text-xs">Fetching Products...</p>
        </div>
    );
}