"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface WishlistContextType {
    wishlistCount: number;
    setWishlistCount: (count: number) => void;
    getWishlist: () => Promise<void>;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const WishlistContext = createContext<WishlistContextType | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────

export function WishlistProvider({ children }: { children: React.ReactNode }) {
    const [wishlistCount, setWishlistCount] = useState(0);
    const { data: session } = useSession();

    const getWishlist = async () => {
        if (!session?.accessToken) return;
        try {
            const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
                headers: { token: (session as any).accessToken },
            });
            const data = await res.json();
            if (data.status === "success") {
                setWishlistCount(data.count || data.data.length);
            }
        } catch (err) {
        }
    };

    useEffect(() => {
        getWishlist();
    }, [session]);

    return (
        <WishlistContext.Provider value={{ wishlistCount, setWishlistCount, getWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useWishlist(): WishlistContextType {
    const context = useContext(WishlistContext);
    if (!context) throw new Error("useWishlist must be used within a WishlistProvider");
    return context;
}