
import React from 'react';
import Image from 'next/image';
import { FaBox } from "react-icons/fa6";
import { formatPrice } from '@/utils/formatters';

interface OrderItemsListProps {
    cartItems: any[];
}

export const OrderItemsList = ({ cartItems }: OrderItemsListProps) => {
    return (
        <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                    <FaBox className="text-green-600" size={14} />
                </div>
                <span>Order Items</span>
            </h4>

            <div className="grid gap-3">
                {cartItems.map((item: any) => (
                    <div key={item._id} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100">
                        <div className="w-14 h-14 rounded-xl bg-gray-50 p-1 shrink-0">
                            <Image
                                src={item.product.imageCover}
                                alt={item.product.title}
                                width={60}
                                height={60}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-bold text-gray-900 truncate text-sm">{item.product.title}</p>
                            <p className="text-xs text-gray-500 mt-1">
                                <span className="font-semibold">{item.count}</span> x {formatPrice(item.price)} EGP
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="font-black text-gray-900">{formatPrice(item.count * item.price)}</p>
                            <span className="text-xs font-semibold text-gray-400 uppercase">EGP</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};