import React from 'react';
import Link from "next/link";
import { FaHeart, FaArrowRight } from "react-icons/fa6";

export const WishlistEmpty = () => (
    <div className="max-w-md w-full mx-auto text-center flex flex-col items-center bg-white p-10 rounded-3xl shadow-sm border border-gray-100 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
            <FaHeart className="w-10 h-10 text-gray-300" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Your wishlist is empty</h1>
        <p className="text-gray-500 mb-8 text-sm">Browse products and save your favorites here.</p>
        <Link href="/products" className="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 flex items-center justify-center gap-2 mb-3 transition-all active:scale-95">
            Browse Products <FaArrowRight size={14} />
        </Link>
    </div>
);