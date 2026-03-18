
import React from 'react';
import { FaTruckFast, FaArrowRotateLeft, FaShieldHalved, FaCheck } from "react-icons/fa6";
import { SHIPPING_ITEMS, RETURN_ITEMS } from '@/constants/products/products.constants';

export default function ProductShippingTab() {
    return (
        <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {/* Shipping Card */}
                <div className="bg-green-100/50 p-4 rounded-xl border border-green-100">
                    <div className="flex items-start gap-4">
                        <div className="text-white bg-green-500 p-2 rounded-full shrink-0 mt-1">
                            <FaTruckFast size={20} />
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-900 mb-2">Shipping Information</h4>
                            <ul className="space-y-2">
                                {SHIPPING_ITEMS.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                                        <FaCheck className="text-green-500 mt-1 shrink-0" size={12} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Returns Card */}
                <div className="bg-green-100/50 p-4 rounded-xl border border-green-100">
                    <div className="flex items-start gap-4">
                        <div className="text-white bg-green-500 p-2 rounded-full shrink-0 mt-1">
                            <FaArrowRotateLeft size={20} />
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-900 mb-2">Return Policy</h4>
                            <ul className="space-y-2">
                                {RETURN_ITEMS.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                                        <FaCheck className="text-green-500 mt-1 shrink-0" size={12} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Buyer Protection */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                <div className="w-12 h-12 bg-white shadow-sm text-gray-600 rounded-full flex items-center justify-center shrink-0 mx-auto md:mx-0">
                    <FaShieldHalved size={24} />
                </div>
                <div>
                    <h4 className="font-medium text-gray-900 mb-1">Buyer Protection Guarantee</h4>
                    <p className="text-sm text-gray-500">
                        Get a full refund if your order doesn't arrive or isn't as described. We ensure your shopping experience is safe and secure.
                    </p>
                </div>
            </div>
        </div>
    );
}