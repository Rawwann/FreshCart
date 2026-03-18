const BASE_URL = "https://ecommerce.routemisr.com/api/v1/orders";

export const createCashOrder = async (cartId: string, shippingAddress: any, token: string) => {
    const res = await fetch(`${BASE_URL}/${cartId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': token
        },
        body: JSON.stringify({ shippingAddress })
    });
    return res.json();
};

export const createCheckoutSession = async (cartId: string, shippingAddress: any, token: string) => {
    const res = await fetch(
        `${BASE_URL}/checkout-session/${cartId}?url=${window.location.origin}/orders`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': token,
            },
            body: JSON.stringify({ shippingAddress }),
        }
    );
    return res.json();
};

export const getUserOrders = async (userId: string) => {
    try {
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`, {
            method: 'GET',
            cache: 'no-store'
        });
        const data = await res.json();
        console.log("API Response:", data);
        return data;
    } catch (error) {
        console.error("Error fetching orders:", error);
        return [];
    }
};