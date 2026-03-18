
import React from 'react';
import { FaReceipt } from "react-icons/fa6";
import { formatPrice } from '@/utils/formatters';

interface OrderSummaryCardProps {
    totalOrderPrice: number;
}

export const OrderSummaryCard = ({ totalOrderPrice }: OrderSummaryCardProps) => {
    return (
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-100">
            <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-lg bg-amber-500 flex items-center justify-center text-white shrink-0">
                    <FaReceipt size={12} />
                </div>
                Order Summary
            </h4>
            <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-900">{formatPrice(totalOrderPrice)} EGP</span>
                </div>
                <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="font-medium text-gray-900">Free</span>
                </div>
                <hr className="border-gray-200/50 my-2" />
                <div className="flex justify-between items-center pt-1">
                    <span className="font-semibold text-gray-900">Total</span>
                    <span className="font-bold text-lg text-gray-900">{formatPrice(totalOrderPrice)} EGP</span>
                </div>
            </div>
        </div>
    );
};