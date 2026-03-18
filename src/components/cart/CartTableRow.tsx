"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus } from 'lucide-react';
import { FaTrash } from "react-icons/fa6";
import { CartItem } from '@/interfaces/cart.interface';
import { formatPrice } from '@/utils/formatters';
import { useCartTableRow } from '@/hooks/cart/useCartTableRow';

interface CartTableRowProps {
  item: CartItem;
}

export const CartTableRow: React.FC<CartTableRowProps> = ({ item }) => {
  const { product, count, price } = item;
  const { isUpdating, handleUpdateQuantity, handleRemoveItem } = useCartTableRow(product._id);

  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5 transition-all ${isUpdating ? 'opacity-50 pointer-events-none' : ''}`}>
      <div className="flex gap-4 sm:gap-6">

        {/* Image Section */}
        <Link href={`/products/${product._id}`} className="relative group shrink-0">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-gray-50 p-3 border border-gray-100 overflow-hidden">
            <Image
              src={product.imageCover}
              alt={product.title}
              width={128} height={128}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </Link>

        {/* Details Section */}
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="mb-3">
            <Link href={`/products/${product._id}`} className="group/title">
              <h3 className="font-semibold text-gray-900 group-hover/title:text-green-600 transition-colors leading-relaxed text-base sm:text-lg line-clamp-1">
                {product.title}
              </h3>
            </Link>
            <div className="flex items-center gap-2 mt-1">
              <span className="inline-block px-2.5 py-1 bg-green-50 text-green-700 text-[10px] font-medium rounded-full uppercase">
                {product.category?.name || 'Category'}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <span className="text-green-600 font-bold text-lg">{formatPrice(price)} EGP</span>
          </div>

          {/* Bottom Controls Row */}
          <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
            {/* Quantity Controls */}
            <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
              <button
                onClick={() => handleUpdateQuantity(count - 1)}
                disabled={count <= 1 || isUpdating}
                className="h-8 w-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-700 disabled:opacity-40 transition-all cursor-pointer"
              >
                <Minus size={14} />
              </button>
              <span className="w-12 text-center font-bold text-gray-900">{count}</span>
              <button
                onClick={() => handleUpdateQuantity(count + 1)}
                disabled={isUpdating}
                className="h-8 w-8 rounded-lg bg-green-600 shadow-sm flex items-center justify-center text-white hover:bg-green-700 transition-all cursor-pointer"
              >
                <Plus size={14} />
              </button>
            </div>

            {/* Subtotal & Delete */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-[10px] text-gray-400 font-bold mb-0">Total</p>
                <p className="text-xl font-black font-semibold text-gray-900 leading-tight">
                  {Math.round(price * count)}
                  <span className="text-xs font-bold text-gray-400 ml-0.5 uppercase">EGP</span>
                </p>
              </div>
              <button
                onClick={handleRemoveItem}
                className="h-10 w-10 rounded-xl border border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 flex items-center justify-center transition-all duration-200"
              >
                <FaTrash size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};