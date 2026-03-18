"use client";

import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { useSession } from "next-auth/react";
import { getCart, addToCart as addToCartAction } from "@/services/cart.service";
import { CartItem } from "@/interfaces/cart.interface";
import { toast } from "sonner";

export interface CartContextType {
  cartItemsCount: number;
  cartItems: CartItem[];
  cartTotal: number;
  cartId: string;
  updateCartCount: (count: number) => void;
  addToCart: (productId: string) => Promise<void>;
  refreshCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data: session, status } = useSession();
  const [cartItemsCount, setCartItemsCount] = useState<number>(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartId, setCartId] = useState<string>("");

  const cartTotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + (item.price * item.count), 0);
  }, [cartItems]);

  const refreshCart = async () => {
    if (status !== "authenticated") return;
    const res = await getCart();
    if (res.success && res.data) {
      setCartItemsCount(res.data.numOfCartItems || 0);
      setCartItems(res.data.data.products || []);
      setCartId(res.data.data._id);
    }
  };

  const addToCart = async (productId: string) => {
    const res = await addToCartAction(productId);

    if (res.success) {
      if (res.data && res.data.numOfCartItems !== undefined) {
        console.log("Updating Navbar Count to:", res.data.numOfCartItems);
        setCartItemsCount(res.data.numOfCartItems);
        setCartItems(res.data.data.products || []);
      } else {
        await refreshCart();
      }

      toast.success("Added to cart! 🛒");
    } else {
      toast.error(res.error || "Failed to add product");
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      refreshCart();
    } else {
      setCartItemsCount(0);
      setCartItems([]);
    }
  }, [status]);

  return (
    <CartContext.Provider value={{
      cartItemsCount,
      cartItems,
      cartTotal,
      cartId,
      updateCartCount: setCartItemsCount,
      addToCart,
      refreshCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};