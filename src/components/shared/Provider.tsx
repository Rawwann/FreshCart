"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'

import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <CartProvider>
                <WishlistProvider>
                    {children}
                </WishlistProvider>
            </CartProvider>
        </SessionProvider>
    )
}
