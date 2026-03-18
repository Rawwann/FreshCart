"use client";

import { useState } from 'react';
import { addToWishlist, removeFromWishlist } from '@/services/wishlist.service';
import { useSession } from "next-auth/react";
import { toast } from 'sonner';
import { useWishlist } from '@/context/WishlistContext';

export function useAddToWishlist(productId: string, initialInWishlist: boolean = false) {
    const { data: session } = useSession();
    const [isInWishlist, setIsInWishlist] = useState(initialInWishlist);
    const [isLoading, setIsLoading] = useState(false);
    const { getWishlist } = useWishlist();

    const handleToggleWishlist = async (e: React.MouseEvent) => {
        e.preventDefault();
        if (!session?.accessToken) return toast.error("Please login first!");

        setIsLoading(true);
        try {
            if (isInWishlist) {
                await removeFromWishlist(productId, session.accessToken as string);
                setIsInWishlist(false);
                toast.success("Removed from wishlist ❤️");
            } else {
                await addToWishlist(productId, session.accessToken as string);
                setIsInWishlist(true);
                toast.success("Added to wishlist 😍");
            }
            await getWishlist();
        } catch (error) {
            toast.error("Something went wrong!");
        } finally {
            setIsLoading(false);
        }
    };

    return { isInWishlist, isLoading, handleToggleWishlist };
}