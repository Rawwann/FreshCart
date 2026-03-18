
import React from 'react';
import { OrderItemsList } from './OrderItemsList';
import { OrderDeliveryAddress } from './OrderDeliveryAddress';
import { OrderSummaryCard } from './OrderSummaryCard';

interface OrderDetailsProps {
    order: any;
}

export const OrderDetails = ({ order }: OrderDetailsProps) => {
    return (
        <div className="border-t border-gray-100 bg-gray-50/30 animate-in slide-in-from-top-2 duration-300">
            <div className="p-6 space-y-8">

                <OrderItemsList cartItems={order.cartItems} />

                <div className="grid md:grid-cols-2 gap-6">
                    <OrderDeliveryAddress shippingAddress={order.shippingAddress} />
                    <OrderSummaryCard totalOrderPrice={order.totalOrderPrice} />
                </div>

            </div>
        </div>
    );
};