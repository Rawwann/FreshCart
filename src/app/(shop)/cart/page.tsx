import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { FaTrash, FaCartShopping } from "react-icons/fa6";
import { getCart } from '@/services/cart.service';
import { CartTableRow } from '@/components/cart/CartTableRow';
import { formatPrice } from '@/utils/formatters';
import { OrderSummary } from '@/components/cart/OrderSummary';
import { CartItem } from '@/interfaces/cart.interface';

export const metadata: Metadata = {
  title: 'Your Shopping Cart | FreshCart',
  description: 'Review your items and proceed to checkout.',
};

export default async function CartPage() {
  const res = await getCart();

  const cartData = res?.data?.data;
  const products: CartItem[] = cartData?.products || [];
  const isCartEmpty = !res?.success || products.length === 0;

  if (isCartEmpty) {
    return (
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto text-center flex flex-col items-center bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6">
            <FaCartShopping className="w-12 h-12 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
          <p className="text-gray-500 mb-8">
            Looks like you haven't added anything to your cart yet. Discover our amazing products!
          </p>
          <Link
            href="/products"
            className="w-full bg-green-600 text-white font-semibold py-4 rounded-full hover:bg-green-700 transition duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  const numOfCartItems = res.data?.numOfCartItems || 0;
  const totalCartPrice = cartData?.totalCartPrice || 0;

  return (
    <main className="container mx-auto px-4 py-8">

      {/* ─── Breadcrumb ─── */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <Link className="hover:text-green-600 transition" href="/">Home</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">Shopping Cart</span>
      </nav>

      {/* ─── Page Header ─── */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="bg-green-600 text-white w-12 h-12 rounded-xl flex items-center justify-center">
                <FaCartShopping size={24} />
              </span>
              Shopping Cart
            </h1>
            <p className="text-gray-500 mt-2 font-medium">
              You have{" "}
              <span className="font-semibold text-green-600">
                {numOfCartItems} {numOfCartItems === 1 ? 'item' : 'items'}
              </span>{" "}
              in your cart
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ─── Items List ─── */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {products.map((item: CartItem) => (
              <CartTableRow key={item._id} item={item} />
            ))}
          </div>

          {/* ─── Footer  ─── */}
          <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
            <Link href="/products" className="text-green-600 hover:text-green-700 font-bold text-sm flex items-center gap-2">
              <span>←</span> Continue Shopping
            </Link>
            <button className="group flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors font-medium">
              <FaTrash size={16} /> <span>Clear all items</span>
            </button>
          </div>
        </div>

        {/* ─── Order Summary ─── */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <OrderSummary totalPrice={totalCartPrice} />
          </div>
        </div>

      </div>
    </main>
  );
}