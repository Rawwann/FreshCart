
import { WishlistResponse } from '../interfaces/api.interface';
import { Product } from '../interfaces/product.interface';

const BASE_URL = 'https://ecommerce.routemisr.com/api/v1/wishlist';

export const getWishlist = async (token: string): Promise<WishlistResponse> => {
    const res = await fetch(BASE_URL, {
        method: 'GET',
        headers: { 'token': token }
    });
    return await res.json();
};

export const addToWishlist = async (productId: string, token: string): Promise<any> => {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'token': token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productId })
    });
    return await res.json();
};

export const removeFromWishlist = async (productId: string, token: string): Promise<any> => {
    const res = await fetch(`${BASE_URL}/${productId}`, {
        method: 'DELETE',
        headers: { 'token': token }
    });
    return await res.json();
};