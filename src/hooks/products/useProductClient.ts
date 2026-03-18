"use client";

import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export function useProductClient(product: any) {
    const [selectedImageIdx, setSelectedImageIdx] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [isAdding, setIsAdding] = useState(false);

    const { addToCart } = useCart();

    const images = [product.imageCover, ...(product.images || [])].filter(Boolean);
    const uniqueImages = Array.from(new Set(images));
    const mainImage = uniqueImages[selectedImageIdx] || product.imageCover;
    const stock = product.quantity || 0;
    const currentTotalPrice = product.price * quantity;

    const handleIncrement = () => {
        if (quantity < stock) setQuantity((q) => q + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) setQuantity((q) => q - 1);
    };

    const handleAddToCart = async () => {
        setIsAdding(true);
        try {
            await addToCart(product._id);
        } catch (error) {
            console.error(error);
        } finally {
            setIsAdding(false);
        }
    };

    return {
        selectedImageIdx,
        setSelectedImageIdx,
        quantity,
        isAdding,
        uniqueImages,
        mainImage,
        stock,
        currentTotalPrice,
        handleIncrement,
        handleDecrement,
        handleAddToCart,
    };
}