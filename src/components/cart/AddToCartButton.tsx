"use client";

import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { useAddToCart } from '@/hooks/cart/useAddToCart';

interface AddToCartButtonProps {
  productId: string;
  className?: string;
  showText?: boolean;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({ productId, className, showText = true }) => {
  const { isLoading, handleAddToCart } = useAddToCart(productId);

  return (
    <button
      onClick={handleAddToCart}
      disabled={isLoading}
      className={`flex items-center justify-center gap-2 bg-green-600 text-white font-semibold transition duration-300 shadow-md hover:shadow-lg active:scale-[0.95] disabled:opacity-70 disabled:cursor-not-allowed ${showText ? 'py-4 px-8 rounded-full' : 'w-10 h-10 rounded-full p-0'} ${className || ''}`}
      aria-label="Add to cart"
      title="Add to cart"
    >
      {isLoading ? (
        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      ) : (
        <FaPlus className="w-5 h-5" />
      )}
      {showText && (
        <span className="hidden sm:inline">
          {isLoading ? 'Adding...' : 'Add to Cart'}
        </span>
      )}
    </button>
  );
};