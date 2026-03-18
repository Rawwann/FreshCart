"use client";

import React from 'react';
import Link from 'next/link';
import { FaCartShopping, FaUser, FaCheck } from "react-icons/fa6";
import { formatPrice } from '@/utils/formatters';
import { useCart } from '@/context/CartContext';
import { UNAUTHENTICATED_BENEFITS } from '@/constants/cart/cart.constants';

interface UnauthenticatedSummaryProps {
    totalPrice: number;
}

export const UnauthenticatedSummary: React.FC<UnauthenticatedSummaryProps> = ({ totalPrice }) => {
    const { cartItemsCount } = useCart();

    return (
        <div className="h-fit bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

            {/* Header */}
            <div className="w-full px-6 py-5 bg-[#121624] flex flex-col gap-1">
                <div className="flex items-center gap-2 text-white">
                    <FaCartShopping size={16} />
                    <span className="text-lg font-bold">Order Summary</span>
                </div>
            </div>

            <div className="p-6 flex flex-col gap-6">

                {/* Pricing Info */}
                <div className="flex flex-col gap-4 border-b border-gray-100 pb-5">
                    <div className="flex justify-between items-center">
                        <span className="text-slate-500 text-base font-medium">
                            Subtotal ({cartItemsCount} {cartItemsCount === 1 ? 'item' : 'items'})
                        </span>
                        <span className="text-gray-900 text-base font-bold">{formatPrice(totalPrice)}</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-slate-500 text-base font-medium">Shipping</span>
                        <span className="text-green-600 text-sm font-bold">Calculated at checkout</span>
                    </div>
                </div>

                {/* Estimated Total */}
                <div className="flex justify-between items-center">
                    <span className="text-gray-900 text-lg font-bold">Estimated Total</span>
                    <span className="text-green-600 text-2xl font-black">
                        {Math.round(totalPrice)} <span className="text-sm font-bold uppercase">EGP</span>
                    </span>
                </div>

                {/* Login Button */}
                <div className="flex flex-col gap-3">
                    <Link
                        href="/login"
                        className="w-full py-4 bg-[#16A34A] text-white rounded-xl flex items-center justify-center gap-2 hover:bg-green-700 transition-all shadow-md shadow-green-100 active:scale-[0.98]"
                    >
                        <FaUser size={14} />
                        <span className="font-bold text-base">Login to Checkout</span>
                    </Link>

                    <p className="text-center text-sm text-gray-400 font-medium">
                        Don't have an account?{" "}
                        <Link href="/signup" className="text-green-600 hover:underline">Sign up</Link>
                    </p>
                </div>

                {/* Benefits Checklist */}
                <div className="pt-5 border-t border-gray-50 flex flex-col gap-3">
                    {UNAUTHENTICATED_BENEFITS.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2 text-slate-400 text-xs font-medium">
                            <FaCheck className="text-slate-300 mt-0.5 shrink-0" size={10} />
                            <span>{benefit}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};