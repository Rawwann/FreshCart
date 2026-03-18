"use client";

import React from 'react';
import CheckoutForm from '@/components/cart/CheckoutForm';
import { OrderSummary } from '@/components/cart/OrderSummary';
import { FaArrowLeftLong, FaReceipt } from 'react-icons/fa6';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useCheckout } from '@/hooks/cart/use-checkout';


export default function CheckoutPage() {
    const { data: session } = useSession();
    const {
        formData, setFormData,
        paymentMethod, setPaymentMethod,
        addressType, setAddressType,
        loading, cartTotal,
        handlePlaceOrder,
        handleSelectSaved,
        handleSelectManual,
    } = useCheckout(session);

    return (
        <div className="min-h-screen bg-gray-50/50">

            <div className="w-full mb-4">
                <div className="container mx-auto px-4 py-6">

                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
                        <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/cart" className="hover:text-green-600 transition-colors">Cart</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-bold">Checkout</span>
                    </nav>

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                        {/* Left Side */}
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-100 shrink-0">
                                <FaReceipt size={28} />
                            </div>

                            <div className="flex flex-col">
                                <h1 className="text-3xl font-black text-gray-900 tracking-tight">
                                    Complete Your <span className="text-green-600">Order</span>
                                </h1>
                                <p className="text-gray-500 text-sm font-medium mt-1">
                                    Review your items and complete your purchase
                                </p>
                            </div>
                        </div>

                        {/* Right Side */}
                        <Link
                            href="/cart"
                            className="flex items-center gap-2 text-green-600 font-bold text-sm hover:text-green-700 transition-all group"
                        >
                            <FaArrowLeftLong className="group-hover:-translate-x-1 transition-transform" />
                            <span>Back to Cart</span>
                        </Link>

                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <CheckoutForm
                        formData={formData}
                        setFormData={setFormData}
                        paymentMethod={paymentMethod}
                        setPaymentMethod={setPaymentMethod}
                        addressType={addressType}
                        setAddressType={setAddressType}
                        onSelectSaved={handleSelectSaved}
                        onSelectManual={handleSelectManual}
                    />
                </div>
                <div className="lg:col-span-1">
                    <OrderSummary
                        type="checkout"
                        totalPrice={cartTotal}
                        onPlaceOrder={handlePlaceOrder}
                        isLoading={loading}
                    />
                </div>
            </div>
        </div>
    );
}