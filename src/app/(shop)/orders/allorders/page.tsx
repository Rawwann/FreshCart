"use client";

import React from 'react';
import Link from 'next/link';
import { FaBagShopping, FaBoxOpen } from "react-icons/fa6";
import { useOrders } from '@/hooks/orders/use-orders';
import { OrderCard } from '@/components/orders/OrderCard';
import { OrderSkeleton } from '@/components/skeletons/OrderSkeleton';
import { EmptyOrdersState } from '@/components/orders/EmptyOrdersState';

export default function OrdersPage() {
    const { orders, loading, status, expandedOrderId, toggleOrder } = useOrders();

    if (status === "loading" || loading) return <OrderSkeleton />;

    return (
        <div className="min-h-screen bg-gray-50/50 py-12">
            <div className="w-full mb-2">
                <div className="container mx-auto px-4 pb-2">

                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
                        <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/orders/allorders" className="hover:text-green-600 transition-colors">Orders</Link>
                    </nav>

                    {/* Main Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                        {/* Left Side */}
                        <div className="flex items-center gap-5 mb-12">
                            <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-green-100 shrink-0">
                                <FaBoxOpen size={28} />
                            </div>
                            <div>
                                <h1 className="text-3xl font-black text-gray-900 tracking-tight">My <span className="text-green-600">Orders</span></h1>
                                <p className="text-gray-500 text-sm font-medium mt-1">Track and manage your {orders.length} orders</p>
                            </div>
                        </div>

                        {/* Link */}
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-green-600 font-bold text-sm hover:text-green-700 transition-all group"
                        >
                            <FaBagShopping className="group-hover:-translate-x-1 transition-transform" />
                            <span>Continue Shopping</span>
                        </Link>

                    </div>
                </div>
            </div>

            {/* Orders List */}
            <div className="w-full">
                <div className="container mx-auto px-4 pb-2">
                    <div className="space-y-6 mt-8">
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <OrderCard
                                    key={order._id}
                                    order={order}
                                    isExpanded={expandedOrderId === order._id}
                                    onToggle={() => toggleOrder(order._id)}
                                />
                            ))
                        ) : (
                            <EmptyOrdersState />
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
}