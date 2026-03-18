
import React from 'react';
import { FaLocationDot, FaPhone } from "react-icons/fa6";

interface OrderDeliveryAddressProps {
    shippingAddress: {
        city: string;
        details: string;
        phone: string;
    };
}

export const OrderDeliveryAddress = ({ shippingAddress }: OrderDeliveryAddressProps) => {
    return (
        <div className="p-5 bg-white rounded-2xl border border-gray-100">
            <h4 className="text-sm font-semibold text-gray-900 flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <FaLocationDot className="text-blue-600" size={14} />
                </div>
                <span>Delivery Address</span>
            </h4>
            <div className="space-y-1">
                <p className="font-bold text-gray-900">{shippingAddress.city}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{shippingAddress.details}</p>
                <p className="text-sm text-gray-900 font-medium flex items-center gap-2 pt-2">
                    <FaPhone size={12} className="text-gray-400" /> {shippingAddress.phone}
                </p>
            </div>
        </div>
    );
};