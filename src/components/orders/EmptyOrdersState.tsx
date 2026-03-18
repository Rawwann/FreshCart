
import React from 'react';
import Link from 'next/link';
import { FaBoxOpen, FaArrowRight } from "react-icons/fa6";

export const EmptyOrdersState = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white rounded-3xl border border-gray-100 shadow-sm animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-300">
                <FaBoxOpen size={48} />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">No orders found</h2>
            <p className="text-gray-500 max-w-xs mx-auto mb-8 font-medium">
                Looks like you haven't placed any orders yet. Let's find something amazing for you!
            </p>

            <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-100 active:scale-95"
            >
                Start Shopping <FaArrowRight size={14} />
            </Link>
        </div>
    );
};