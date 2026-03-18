"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useCart } from '@/context/CartContext';
import { createCashOrder, createCheckoutSession } from '@/services/order.service';
import { SAVED_ADDRESS, EMPTY_ADDRESS } from '@/constants/cart/checkout.constants';

interface AddressData {
    city: string;
    details: string;
    phone: string;
}

export function useCheckout(session: any) {
    const router = useRouter();
    const { cartId, refreshCart, cartTotal } = useCart();

    const [loading, setLoading] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState<'cash' | 'online'>('cash');
    const [addressType, setAddressType] = useState<'saved' | 'manual'>('saved');
    const [formData, setFormData] = useState<AddressData>({ ...SAVED_ADDRESS });

    // ─── Address Selection Handlers ───────────────────────────────────────────

    const handleSelectSaved = () => {
        setAddressType('saved');
        setFormData({ ...SAVED_ADDRESS });
    };

    const handleSelectManual = () => {
        setAddressType('manual');
        setFormData({ ...EMPTY_ADDRESS });
    };

    // ─── Validation ───────────────────────────────────────────────────────────

    const validateForm = () => {
        if (!formData.city || !formData.details || !formData.phone) {
            toast.error("Please fill all required fields!");
            return false;
        }
        if (!/^01[0125][0-9]{8}$/.test(formData.phone)) {
            toast.error("Please enter a valid Egyptian phone number! 🇪🇬");
            return false;
        }
        return true;
    };

    // ─── Order Submission ─────────────────────────────────────────────────────

    const handlePlaceOrder = async () => {
        const token = session?.accessToken;
        if (!token) return toast.error("Session expired, please login again.");
        if (!cartId) return toast.error("Cart not found, please try again.");
        if (!validateForm()) return;

        setLoading(true);
        try {
            if (paymentMethod === 'cash') {
                const res = await createCashOrder(cartId, formData, token);
                if (res.status === "success") {
                    toast.success("Order Placed! 🚚");
                    await refreshCart();
                    router.push('/orders/allorders');
                }
            } else {
                const res = await createCheckoutSession(cartId, formData, token);
                if (res.status === "success") {
                    window.location.href = res.session.url;
                }
            }
        } catch (error) {
            toast.error("Something went wrong, please try again.");
        } finally {
            setLoading(false);
        }
    };

    return {
        formData, setFormData,
        paymentMethod, setPaymentMethod,
        addressType, setAddressType,
        loading, cartTotal,
        handlePlaceOrder,
        handleSelectSaved,
        handleSelectManual,
    };
}