"use client";
import React from 'react';
import Link from "next/link";
import { FaSpinner } from "react-icons/fa6";
import { WishlistRow } from '@/components/wishlist/WishlistRow';
import { useWishlistPage } from '@/hooks/wishlist/useWishlistPage';
import { WishlistHeader } from '@/components/wishlist/WishlistHeader';
import { WishlistEmpty } from '@/components/wishlist/WishlistEmpty';

export default function WishlistPage() {
    const { items, loading, handleRemoveItem, session } = useWishlistPage();

    return (
        <main className="min-h-screen bg-gray-50/50 pb-20">
            <WishlistHeader count={items.length} loading={loading} />

            <div className="container mx-auto px-4 py-8">
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-24 bg-white rounded-2xl border border-gray-100 shadow-sm">
                        <FaSpinner className="animate-spin text-green-600 mb-4" size={32} />
                        <p className="text-gray-400 font-medium">Loading your favorites...</p>
                    </div>
                ) : items.length === 0 ? (
                    <WishlistEmpty />
                ) : (
                    <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                            {/* Table Header */}
                            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50/50 border-b border-gray-100 text-sm font-normal text-gray-400">
                                <div className="col-span-6">Product</div>
                                <div className="col-span-2 text-center">Price</div>
                                <div className="col-span-2 text-center">Status</div>
                                <div className="col-span-2 text-center">Actions</div>
                            </div>

                            {/* Table Rows */}
                            <div className="divide-y divide-gray-100">
                                {items.map(item => (
                                    <WishlistRow
                                        key={item._id}
                                        item={item}
                                        token={session?.accessToken}
                                        onRemove={handleRemoveItem}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="mt-8">
                            <Link href="/products" className="inline-flex items-center gap-2 text-gray-500 hover:text-green-600 font-semibold transition-colors text-sm group">
                                <span className="group-hover:-translate-x-1 transition-transform">←</span> Continue Shopping
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}