"use client";

import { useCart } from '@/context/CartContext';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { SAVED_ADDRESS, EMPTY_ADDRESS } from '@/constants/cart/checkout.constants';

export function useCheckoutForm(
    setFormData: (data: typeof SAVED_ADDRESS | typeof EMPTY_ADDRESS) => void,
    setAddressType: (type: string) => void,
) {
    const { cartId, refreshCart } = useCart();
    const { data: session }: any = useSession();
    const router = useRouter();

    const handleSelectSaved = () => {
        setAddressType('saved');
        setFormData({
            city: 'Nasr City',
            details: 'Nasr City, Cairo, Egypt',
            phone: '01097514862',
        });
    };

    const handleSelectManual = () => {
        setAddressType('manual');
        setFormData({ city: '', details: '', phone: '' });
    };

    return {
        cartId,
        refreshCart,
        session,
        router,
        handleSelectSaved,
        handleSelectManual,
    };
}