"use client";

import React from 'react';
import Image from 'next/image';
import {
    FaTruck,
    FaLock,
    FaShieldHalved,
    FaArrowLeft,
    FaBagShopping,
    FaRotateLeft,
    FaCartShopping,
    FaTag,
} from "react-icons/fa6";
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/utils/formatters';
import { useSession } from "next-auth/react";
import Link from 'next/link';
import { UnauthenticatedSummary } from '@/components/cart/UnauthenticatedSummary';

interface OrderSummaryProps {
    totalPrice: number;
    type?: 'cart' | 'checkout';
    onPlaceOrder?: () => void;
    isLoading?: boolean;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ totalPrice, type = 'cart', onPlaceOrder, isLoading }) => {
    const { cartItemsCount, cartItems } = useCart();
    const { status } = useSession();

    const isCheckout = type === 'checkout';

    // Unauthenticated
    if (status !== "authenticated") {
        return <UnauthenticatedSummary totalPrice={totalPrice} />;
    }

    return (
        <div className="h-fit bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

            {/* Header Section */}
            <div className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-green-500 flex flex-col gap-0.5">
                <div className="flex items-center gap-2 text-white">
                    <FaCartShopping size={16} />
                    <span className="text-base font-bold">Order Summary</span>
                </div>
                <div className="text-green-50 text-xs font-medium">
                    {cartItemsCount} {cartItemsCount === 1 ? 'item' : 'items'} in your cart
                </div>
            </div>

            <div className="p-5 flex flex-col gap-5">

                {/* Free Shipping Alert */}
                {!isCheckout && (
                    <div className="p-3.5 bg-green-50 rounded-xl flex items-center gap-3 border border-green-100/30">
                        <div className="w-9 h-9 bg-green-200/50 rounded-full flex justify-center items-center shadow-sm shrink-0">
                            <FaTruck className="text-green-600" size={16} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-green-700 text-sm font-semibold">Free Shipping!</span>
                            <span className="text-green-600/80 text-xs font-medium">You qualify for free delivery</span>
                        </div>
                    </div>
                )}

                {/* Checkout Items List */}
                {isCheckout && (
                    <div className="max-h-[240px] overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-3 border-b border-gray-100 pb-5">
                        {cartItems?.map((item: any) => (
                            <div key={item.product._id} className="p-3 bg-gray-50/50 rounded-2xl border border-gray-100 flex items-center gap-4">
                                <div className="w-14 h-14 bg-white rounded-xl border border-gray-100 overflow-hidden p-1 shrink-0">
                                    <Image
                                        src={item.product.imageCover}
                                        alt={item.product.title}
                                        width={60} height={60}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="flex flex-col flex-1 min-w-0">
                                    <h4 className="text-sm font-bold text-gray-900 truncate">{item.product.title}</h4>
                                    <span className="text-xs text-gray-500 font-medium">
                                        {item.count} × {item.price} <span className="text-[10px]">EGP</span>
                                    </span>
                                </div>
                                <div className="text-sm font-black text-gray-900">
                                    {item.count * item.price}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Price Calculations */}
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500 font-medium">Subtotal</span>
                        <span className="text-gray-900 font-bold">{formatPrice(totalPrice)}</span>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500 font-medium">Shipping</span>
                        <span className="text-green-600 font-bold uppercase">Free</span>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
                        <span className="text-gray-900 text-base font-bold">Total</span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-gray-900 text-xl font-black">{Math.round(totalPrice)}</span>
                            <span className="text-slate-400 text-xs font-bold uppercase">EGP</span>
                        </div>
                    </div>
                </div>

                {/* Promo Code Button */}
                {!isCheckout && (
                    <button className="w-full py-2.5 rounded-xl border border-dashed border-slate-200 text-slate-500 flex items-center justify-center gap-2 hover:bg-slate-50 transition-all font-medium text-xs">
                        <FaTag size={12} />
                        Apply Promo Code
                    </button>
                )}

                {/* Checkout / Place Order Button */}
                {isCheckout ? (
                    <button
                        onClick={onPlaceOrder}
                        disabled={isLoading}
                        className="w-full py-3.5 bg-green-600 text-white rounded-xl flex items-center justify-center gap-2 hover:bg-green-700 transition-all shadow-md shadow-green-100 active:scale-[0.98] disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            <>
                                <FaBagShopping size={16} />
                                <span className="font-bold text-sm">Place Order</span>
                            </>
                        )}
                    </button>
                ) : (
                    <Link
                        href="/checkout"
                        className="w-full py-3.5 bg-green-600 text-white rounded-xl flex items-center justify-center gap-2 hover:bg-green-700 transition-all shadow-md shadow-green-100 active:scale-[0.98]"
                    >
                        <FaLock size={14} />
                        <span className="font-bold text-sm">Secure Checkout</span>
                    </Link>
                )}

                {/* Trust Badges */}
                <div className="flex justify-center items-center gap-4 py-1.5">
                    <div className="flex items-center gap-1.5 text-slate-400">
                        <FaShieldHalved size={12} className="text-green-500" />
                        <span className="text-[10px] font-medium">Secure Payment</span>
                    </div>
                    <div className="w-px h-3 bg-gray-200" />
                    <div className="flex items-center gap-1.5 text-slate-400">
                        <FaTruck size={12} className="text-blue-500" />
                        <span className="text-[10px] font-medium">Fast Delivery</span>
                    </div>
                    {isCheckout && (
                        <>
                            <div className="w-px h-3 bg-gray-200" />
                            <div className="flex items-center gap-1.5 text-gray-400">
                                <FaRotateLeft size={12} className="text-orange-500" />
                                <span className="text-[10px] font-bold">Easy Returns</span>
                            </div>
                        </>
                    )}
                </div>

                {/* Continue Shopping */}
                {!isCheckout && (
                    <Link
                        href="/products"
                        className="text-center text-green-600 text-sm font-bold hover:text-green-700 transition-colors flex items-center justify-center gap-1 pb-1"
                    >
                        <FaArrowLeft size={12} /> Continue Shopping
                    </Link>
                )}
            </div>
        </div>
    );
};