"use client";

import { useState } from 'react';
import { toast } from 'sonner';
import { addToCart } from '@/services/cart.service';
import { useCart } from '@/context/CartContext';

export function useAddToCart(productId: string) {
    const [isLoading, setIsLoading] = useState(false);
    const { updateCartCount } = useCart();

    const handleAddToCart = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsLoading(true);
        try {
            const res = await addToCart(productId);

            if (res.success) {
                toast.success(res.message || 'Product added to cart');

                const updatedCount = res.data?.numOfCartItems || res.data?.data?.products?.length;
                if (updatedCount !== undefined) {
                    updateCartCount(updatedCount);
                }
            } else {
                toast.error(res.error || 'Failed to add to cart');
            }
        } catch (error) {
            toast.error('An unexpected error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, handleAddToCart };
}