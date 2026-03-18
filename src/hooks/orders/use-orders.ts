import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { getUserOrders } from '@/services/order.service';

export function useOrders() {
    const { data: session, status } = useSession();
    const [orders, setOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

    useEffect(() => {
        const fetchOrders = async () => {
            if (status === "loading") return;
            if (status === "authenticated") {
                const userId = session?.userId || session?.user?.id;
                const data = await getUserOrders(userId);
                if (data && Array.isArray(data)) setOrders(data.reverse());
                setLoading(false);
            } else if (status === "unauthenticated") {
                setLoading(false);
            }
        };
        fetchOrders();
    }, [status, session]);

    const toggleOrder = (id: string) => setExpandedOrderId(expandedOrderId === id ? null : id);

    return { orders, loading, status, expandedOrderId, toggleOrder };
}

