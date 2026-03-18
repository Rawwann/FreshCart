"use client";

import { useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from "next/navigation";
import { removeFromWishlist } from '@/services/wishlist.service';
import { useCart } from '@/context/CartContext';

export function useWishlistRow(item: any, token: string, onRemove: (id: string) => void) {
    const router = useRouter();
    const { addToCart, cartItems } = useCart();
    const [isDeleting, setIsDeleting] = useState(false);
    const [isAdding, setIsAdding] = useState(false);

    const productId = item._id || item.id;

    const isInCart = cartItems.some((cartItem: any) => cartItem.product._id === productId);

    const handleRemove = async () => {
        setIsDeleting(true);
        try {
            await removeFromWishlist(productId, token);
            toast.success("Removed from wishlist ❤️");
            onRemove(productId);
        } catch (error) {
            toast.error("Failed to remove");
        } finally {
            setIsDeleting(false);
        }
    };

    const handleCartAction = async () => {
        if (isInCart) {
            router.push('/cart');
        } else {
            setIsAdding(true);
            try {
                await addToCart(productId);
                toast.success("Added to cart! 🛒");
            } catch (error) {
                toast.error("Failed to add to cart");
            } finally {
                setIsAdding(false);
            }
        }
    };

    return { isDeleting, isAdding, isInCart, handleRemove, handleCartAction };
}