"use client";

import { useEffect, useState, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { getWishlist } from '@/services/wishlist.service';

export function useWishlistPage() {
    const { data: session } = useSession();
    const [items, setItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchWishlist = useCallback(async () => {
        if (session?.accessToken) {
            try {
                const res = await getWishlist(session.accessToken as string);
                setItems(res.data || []);
            } finally {
                setLoading(false);
            }
        }
    }, [session]);

    useEffect(() => { fetchWishlist(); }, [fetchWishlist]);

    const handleRemoveItem = (id: string) => {
        setItems(prev => prev.filter(item => item._id !== id));
    };

    return { items, loading, handleRemoveItem, session };
}