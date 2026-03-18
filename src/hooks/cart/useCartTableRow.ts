"use client";

import { useState } from 'react';
import { toast } from 'sonner';
import { updateCartQuantity, removeCartItem } from '@/services/cart.service';
import { useCart } from '@/context/CartContext';

export function useCartTableRow(productId: string) {
    const [isUpdating, setIsUpdating] = useState(false);
    const { updateCartCount } = useCart();

    const handleUpdateQuantity = async (newCount: number) => {
        if (newCount < 1) return;
        setIsUpdating(true);
        try {
            const res = await updateCartQuantity(productId, newCount);
            if (res.success && res.data?.numOfCartItems !== undefined) {
                updateCartCount(res.data.numOfCartItems);
            }
        } catch {
            toast.error('An error occurred');
        } finally {
            setIsUpdating(false);
        }
    };

    const handleRemoveItem = async () => {
        setIsUpdating(true);
        try {
            const res = await removeCartItem(productId);
            if (res.success && res.data?.numOfCartItems !== undefined) {
                updateCartCount(res.data.numOfCartItems);
                toast.success('Item removed');
            }
        } catch {
            toast.error('An error occurred');
        } finally {
            setIsUpdating(false);
        }
    };

    return { isUpdating, handleUpdateQuantity, handleRemoveItem };
}