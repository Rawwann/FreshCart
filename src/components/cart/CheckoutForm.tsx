"use client";

import React from 'react';
import ShippingAddressSection from '@/components/cart/ShippingAddressSection';
import PaymentMethodSection from '@/components/cart/PaymentMethodSection';

type PaymentMethod = "cash" | "online";
type AddressType = "saved" | "manual";

interface CheckoutFormProps {
    formData: any;
    setFormData: any;

    paymentMethod: PaymentMethod;
    setPaymentMethod: (method: PaymentMethod) => void;

    addressType: AddressType;
    setAddressType: (type: AddressType) => void;

    onSelectSaved: () => void;
    onSelectManual: () => void;
}

export default function CheckoutForm({
    formData,
    setFormData,
    paymentMethod,
    setPaymentMethod,
    addressType,
    onSelectSaved,
    onSelectManual,
}: CheckoutFormProps) {
    return (
        <div className="lg:col-span-2 space-y-6">
            <ShippingAddressSection
                formData={formData}
                setFormData={setFormData}
                addressType={addressType}
                onSelectSaved={onSelectSaved}
                onSelectManual={onSelectManual}
            />
            <PaymentMethodSection
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
            />
        </div>
    );
}