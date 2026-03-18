"use client";

import React from 'react';
import { Heart } from 'lucide-react';
import { useAddToWishlist } from '@/hooks/wishlist/useAddToWishlist';
import { getWishlistDetailsClasses, getWishlistIconClasses } from '@/constants/wishlist/wishlist.constants';

interface Props {
    productId: string;
    initialInWishlist?: boolean;
    variant?: 'icon' | 'details';
    className?: string;
}

export const AddToWishlistButton: React.FC<Props> = ({
    productId,
    initialInWishlist = false,
    variant = 'icon',
    className = "",
}) => {
    const { isInWishlist, isLoading, handleToggleWishlist } = useAddToWishlist(productId, initialInWishlist);

    return (
        <button
            onClick={handleToggleWishlist}
            disabled={isLoading}
            className={variant === 'details'
                ? getWishlistDetailsClasses(isInWishlist, className)
                : getWishlistIconClasses(isInWishlist)
            }
        >
            <Heart className={isInWishlist ? "fill-current" : ""} size={variant === 'details' ? 18 : 20} />
            {variant === 'details' && (
                <span>{isInWishlist ? "In Wishlist" : "Add to Wishlist"}</span>
            )}
        </button>
    );
};