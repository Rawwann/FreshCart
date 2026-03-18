import React from 'react';
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";

export const WishlistHeader = ({ count, loading }: { count: number; loading: boolean }) => (
    <div className="bg-white border-b border-gray-100 py-8">
        <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <Link href="/" className="hover:text-green-600 transition">Home</Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Wishlist</span>
            </nav>
            <div className="flex items-center gap-4">
                <div className="bg-red-50 text-red-600 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <FaHeart size={24} />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold text-gray-900 leading-none">My Wishlist</h1>
                    <p className="text-gray-400 text-sm mt-1 font-medium">
                        {loading ? "Checking saved items..." : `${count} ${count === 1 ? 'item' : 'items'} saved`}
                    </p>
                </div>
            </div>
        </div>
    </div>
);