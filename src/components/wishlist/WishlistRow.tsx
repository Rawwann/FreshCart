"use client";

import React from 'react';
import { FaTrash, FaCartShopping, FaCheck } from "react-icons/fa6";
import { useWishlistRow } from '@/hooks/wishlist/useWishlistRow';

export const WishlistRow = ({ item, token, onRemove }: any) => {
    const { isDeleting, isAdding, isInCart, handleRemove, handleCartAction } = useWishlistRow(item, token, onRemove);

    return (
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:px-6 md:py-5 items-center hover:bg-gray-50/50 transition-colors border-b border-gray-100 ${isDeleting ? 'opacity-50' : ''}`}>

            {/* Product Info */}
            <div className="md:col-span-6 flex items-center gap-4">
                <div className="w-20 h-20 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden shrink-0">
                    <img src={item.imageCover} className="w-full h-full object-contain p-2" alt={item.title} />
                </div>
                <div className="min-w-0">
                    <h3 className="font-medium text-gray-900 line-clamp-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{item.category?.name}</p>
                </div>
            </div>

            {/* Price */}
            <div className="md:col-span-2 flex md:justify-center items-center gap-2">
                <span className="md:hidden text-sm text-gray-500">Price:</span>
                <div className="font-semibold text-gray-900">{item.price} EGP</div>
            </div>

            {/* Status */}
            <div className="md:col-span-2 flex md:justify-center">
                {isInCart ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                        <FaCartShopping size={10} /> In Cart
                    </span>
                ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> In Stock
                    </span>
                )}
            </div>

            {/* Actions */}
            <div className="md:col-span-2 flex items-center gap-2 md:justify-center">
                <button
                    onClick={handleCartAction}
                    disabled={isAdding}
                    className={isInCart
                        ? "flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
                        : "flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all bg-green-600 text-white hover:bg-green-700"
                    }
                >
                    {isInCart ? (
                        <>
                            <FaCheck className="text-xs text-green-600" />
                            <span className="md:hidden lg:inline">View Cart</span>
                        </>
                    ) : (
                        <>
                            <FaCartShopping className="text-xs" />
                            <span className="md:hidden lg:inline">{isAdding ? 'Adding...' : 'Add to Cart'}</span>
                        </>
                    )}
                </button>

                <button
                    onClick={handleRemove}
                    disabled={isDeleting}
                    className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all"
                >
                    <FaTrash className="text-sm" />
                </button>
            </div>
        </div>
    );
};