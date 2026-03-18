"use server";

import { revalidateTag } from "next/cache";
import { getUserToken } from "@/utils/server.utils";
import { CartResponse } from "@/interfaces/cart.interface";

const BASE_URL = "https://ecommerce.routemisr.com/api/v2";

export interface ServerActionResponse<T = any> {
  success: boolean;
  message?: string;
  error?: string;
  data?: T;
}


async function buildHeaders(): Promise<{ headers: HeadersInit; token: string | null }> {
  const token = await getUserToken();
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["token"] = token;
  }

  return { headers, token };
}

export async function getCart(): Promise<ServerActionResponse<CartResponse>> {
  try {
    const { headers, token } = await buildHeaders();
    if (!token) {
      return { success: false, error: "Please login to perform this action" };
    }

    const res = await fetch(`${BASE_URL}/cart`, {
      method: "GET",
      headers,
      next: { tags: ["cartDetails"] },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      return {
        success: false,
        error: errorData.message || `Failed to fetch cart: ${res.statusText}`
      };
    }

    const data: CartResponse = await res.json();
    return { success: true, data };
  } catch (error: any) {
    return { success: false, error: error.message || "An unexpected error occurred" };
  }
}

export async function addToCart(productId: string): Promise<ServerActionResponse> {
  try {
    const { headers, token } = await buildHeaders();
    if (!token) {
      return { success: false, error: "Please login to perform this action" };
    }

    const res = await fetch(`${BASE_URL}/cart`, {
      method: "POST",
      headers,
      body: JSON.stringify({ productId }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      return {
        success: false,
        error: errorData.message || `Failed to add product to cart: ${res.statusText}`
      };
    }

    (revalidateTag as (tag: string) => void)("cartDetails");
    const data = await res.json();
    return { success: true, message: "Product added successfully", data };
  } catch (error: any) {
    return { success: false, error: error.message || "An unexpected error occurred" };
  }
}

export async function updateCartQuantity(productId: string, count: number): Promise<ServerActionResponse> {
  try {
    const { headers, token } = await buildHeaders();
    if (!token) {
      return { success: false, error: "Please login to perform this action" };
    }

    const res = await fetch(`${BASE_URL}/cart/${productId}`, {
      method: "PUT",
      headers,
      body: JSON.stringify({ count }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      return {
        success: false,
        error: errorData.message || `Failed to update cart quantity: ${res.statusText}`
      };
    }

    (revalidateTag as (tag: string) => void)("cartDetails");
    const data = await res.json();
    return { success: true, message: "Cart quantity updated", data };
  } catch (error: any) {
    return { success: false, error: error.message || "An unexpected error occurred" };
  }
}

export async function removeCartItem(productId: string): Promise<ServerActionResponse> {
  try {
    const { headers, token } = await buildHeaders();
    if (!token) {
      return { success: false, error: "Please login to perform this action" };
    }

    const res = await fetch(`${BASE_URL}/cart/${productId}`, {
      method: "DELETE",
      headers,
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      return {
        success: false,
        error: errorData.message || `Failed to remove cart item: ${res.statusText}`
      };
    }

    (revalidateTag as (tag: string) => void)("cartDetails");
    const data = await res.json();
    return { success: true, message: "Item removed from cart", data };
  } catch (error: any) {
    return { success: false, error: error.message || "An unexpected error occurred" };
  }
}

export async function clearCart(): Promise<ServerActionResponse> {
  try {
    const { headers, token } = await buildHeaders();
    if (!token) {
      return { success: false, error: "Please login to perform this action" };
    }

    const res = await fetch(`${BASE_URL}/cart`, {
      method: "DELETE",
      headers,
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      return {
        success: false,
        error: errorData.message || `Failed to clear cart: ${res.statusText}`
      };
    }

    (revalidateTag as (tag: string) => void)("cartDetails");

    let data;
    try {
      data = await res.json();
    } catch {
      data = null;
    }

    return { success: true, message: "Cart cleared successfully", data };
  } catch (error: any) {
    return { success: false, error: error.message || "An unexpected error occurred" };
  }
}
