
import React from 'react';
import { FaStar } from "react-icons/fa6";
import { RATING_BARS } from '@/constants/products/products.constants';

export default function ProductReviewsTab({ product }: { product: any }) {
    return (
        <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left side */}
                <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-6">
                    <span className="text-5xl font-bold text-gray-900">{product.ratingsAverage || "4.2"}</span>
                    <div className="flex text-yellow-400 my-3 gap-1">
                        {[...Array(5)].map((_, i) => (
                            <FaStar
                                key={i}
                                className={i < Math.floor(product.ratingsAverage || 4) ? "fill-current" : "text-gray-200"}
                                size={20}
                            />
                        ))}
                    </div>
                    <span className="text-sm text-gray-500">Based on {product.ratingsQuantity || 12} reviews</span>
                </div>

                {/* Right side */}
                <div className="lg:col-span-2 space-y-3 flex flex-col justify-center">
                    {RATING_BARS.map((bar) => (
                        <div key={bar.stars} className="flex items-center gap-4">
                            <span className="text-sm text-gray-600 w-16 whitespace-nowrap">{bar.stars} stars</span>
                            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-yellow-400 rounded-full"
                                    style={{ width: `${bar.pct}%` }}
                                ></div>
                            </div>
                            <span className="text-sm text-gray-500 w-10 text-right">{bar.pct}%</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center py-8 border-t border-gray-100 mt-8">
                <FaStar className="text-4xl text-gray-300 mb-3 mx-auto" />
                <p className="text-gray-500">Customer reviews will be displayed here.</p>
                <button className="mt-4 text-primary-600 hover:text-primary-700 font-medium cursor-pointer transition-colors">
                    Write a Review
                </button>
            </div>
        </div>
    );
}