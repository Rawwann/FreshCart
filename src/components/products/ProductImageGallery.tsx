"use client";

import React from 'react';

interface ProductImageGalleryProps {
    uniqueImages: string[];
    mainImage: string;
    selectedImageIdx: number;
    onSelectImage: (index: number) => void;
    title: string;
}

export default function ProductImageGallery({
    uniqueImages,
    mainImage,
    selectedImageIdx,
    onSelectImage,
    title,
}: ProductImageGalleryProps) {
    return (
        <div id="product-images" className="lg:w-1/4">
            <div className="sticky top-6">
                <div className="bg-white rounded-2xl p-8 aspect-square overflow-hidden flex items-center justify-center">
                    <img
                        key={selectedImageIdx}
                        src={mainImage}
                        className="w-full h-full object-contain transition-all duration-500"
                        style={{ animation: "swipeIn 0.45s ease-out" }}
                        alt={title}
                    />
                </div>
                <div className="flex gap-3 mt-4 overflow-x-auto pb-2 custom-scrollbar">
                    {uniqueImages.map((img, index) => (
                        <button
                            key={index}
                            onClick={() => onSelectImage(index)}
                            className={`w-20 h-20 rounded-xl border-2 transition-all cursor-pointer overflow-hidden shrink-0 ${index === selectedImageIdx
                                ? 'border-green-600 shadow-md'
                                : 'border-transparent bg-gray-50'
                                }`}
                        >
                            <img src={img} className="w-full h-full object-cover" alt="thumbnail" />
                        </button>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                @keyframes swipeIn {
                    from { transform: translateX(20px); opacity: 0.5; }
                    to   { transform: translateX(0);    opacity: 1;   }
                }
                .custom-scrollbar::-webkit-scrollbar       { height: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #888; border-radius: 10px; }
            `}</style>
        </div>
    );
}