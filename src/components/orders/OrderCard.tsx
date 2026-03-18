
import React from 'react';
import Image from 'next/image';
import { FaChevronDown, FaCalendarDays, FaBox, FaLocationDot } from "react-icons/fa6";
import { formatPrice, formatDate } from '@/utils/formatters';
import { OrderDetails } from './OrderDetails';
import { getStatusDetails } from '@/utils/orders.utils';

interface OrderCardProps {
    order: any;
    isExpanded: boolean;
    onToggle: () => void;
}

export const OrderCard = ({ order, isExpanded, onToggle }: OrderCardProps) => {
    const status = getStatusDetails(order.paymentMethodType);

    return (
        <div className={`bg-white border transition-all duration-300 overflow-hidden ${isExpanded ? 'rounded-2xl border-green-200 shadow-lg' : 'rounded-2xl border-gray-100 shadow-sm'}`}>
            <div className="p-6">
                <div className="flex flex-col lg:flex-row justify-between gap-6">
                    <div className="flex gap-5 flex-1">
                        <div className="relative shrink-0">
                            <div className="w-24 h-24 rounded-2xl bg-gray-50 border border-gray-100 p-2 flex items-center justify-center">
                                <Image
                                    src={order.cartItems[0]?.product.imageCover}
                                    alt="Order"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            {order.cartItems.length > 1 && (
                                <div className="absolute -top-2 -right-2 w-7 h-7 bg-gray-900 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                                    +{order.cartItems.length - 1}
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col justify-between py-1">
                            <div>
                                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg mb-2 ${status.bg} ${status.color}`}>
                                    <span>{status.statusIcon}</span>
                                    <span className="text-xs font-semibold">{status.label}</span>
                                </div>
                                <h3 className="font-bold text-gray-900 text-xl">
                                    <span className="text-gray-300 font-medium">#</span>{order.id}
                                </h3>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mt-2 font-medium">
                                    <span className="flex items-center gap-1.5"><FaCalendarDays size={12} /> {formatDate(order.createdAt)}</span>
                                    <span className="flex items-center gap-1.5"><FaBox size={12} /> {order.cartItems.length} Items</span>
                                    <span className="flex items-center gap-1.5"><FaLocationDot size={12} /> {order.shippingAddress.city}</span>
                                </div>
                            </div>
                            <div className="flex items-baseline gap-1 mt-4">
                                <span className="text-2xl font-black text-gray-900">{formatPrice(order.totalOrderPrice)}</span>
                                <span className="text-xs font-semibold text-gray-400">EGP</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row lg:flex-col justify-between items-end">
                        <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${status.paymentBg} ${status.paymentText}`}>
                            {status.paymentIcon}
                        </div>
                        <button
                            onClick={onToggle}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${isExpanded ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                        >
                            {isExpanded ? 'Hide' : 'Details'}
                            <FaChevronDown className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} size={12} />
                        </button>
                    </div>
                </div>
            </div>

            {isExpanded && <OrderDetails order={order} />}
        </div>
    );
};