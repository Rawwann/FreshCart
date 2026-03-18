"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Eye, Heart } from 'lucide-react';
import { FaArrowsRotate } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { Product } from '@/interfaces/product.interface';
import { formatPrice } from '@/utils/formatters';
import { AddToCartButton } from '@/components/cart/AddToCartButton';
import { AddToWishlistButton } from '../wishlist/AddToWishlistButton';
import { useProductCardHover } from '@/hooks/products/useProductCardHover';
import { calculateDiscountPercentage } from '@/utils/products.utils';

export interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();
  const productId = product._id || product.id;
  const { handleMouseEnter, handleMouseLeave } = useProductCardHover();

  return (
    <div
      id="product-card"
      className="bg-white border border-gray-200 rounded-lg overflow-hidden group relative"
      style={{
        boxShadow: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px',
        transform: 'none',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Floating Action Icons */}
      <div className="absolute top-3 right-3 flex flex-col space-y-2 z-10">
        <button
          title="Add to Wishlist"
          className="w-8 h-8 rounded-full bg-white shadow text-gray-400 hover:text-red-500 flex items-center justify-center transition-colors duration-200 cursor-pointer"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
        >
          <Heart className="w-4 h-4" />
          <AddToWishlistButton productId={product._id} />
        </button>
        <button
          title="Compare"
          className="w-8 h-8 rounded-full bg-white shadow text-gray-400 hover:text-green-600 flex items-center justify-center transition-colors duration-200 cursor-pointer"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
        >
          <FaArrowsRotate className="w-4 h-4" />
        </button>
        <button
          title="Quick View"
          className="w-8 h-8 rounded-full bg-white shadow text-gray-400 hover:text-green-600 flex items-center justify-center transition-colors duration-200 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            router.push(`/products/${productId}`);
          }}
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      <Link href={`/products/${productId}`} className="block">
        {/* Product Image */}
        <div className="relative w-full h-60 bg-white">
          <Image
            src={product.imageCover || 'https://example.com/placeholder.jpg'}
            alt={product.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />

          {/* Discount Badge */}
          {product.priceAfterDiscount && (
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded z-10">
              -{calculateDiscountPercentage(product.price, product.priceAfterDiscount)}%
            </div>
          )}
        </div>
      </Link>

      {/* Product Details */}
      <div className="p-4">
        {/* Category */}
        <div className="text-xs text-gray-500 mb-1">
          {product.category?.name || 'Category'}
        </div>

        {/* Title */}
        <Link href={`/products/${productId}`}>
          <h3
            className="font-medium mb-1 cursor-pointer line-clamp-2 text-sm text-gray-800"
            title={product.title}
          >
            {product.title}
          </h3>
        </Link>

        {/* Ratings */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-3.5 h-3.5 ${star <= Math.round(product.ratingsAverage || 0)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-yellow-300'
                  }`}
              />
            ))}
          </div>
          <span className="text-[11px] font-bold text-gray-700 ml-1">
            {product.ratingsAverage ? product.ratingsAverage.toFixed(1) : "0.0"}
          </span>
          <span className="text-[11px] text-gray-400 font-normal ml-0.5">
            ({product.ratingsQuantity || product.sold || 0})
          </span>
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {product.priceAfterDiscount ? (
              <>
                <span className="text-green-600 font-bold text-base">
                  {formatPrice(product.priceAfterDiscount)} EGP
                </span>
                <span className="text-xs text-gray-400 line-through">
                  {formatPrice(product.price)} EGP
                </span>
              </>
            ) : (
              <span className="text-green-600 font-bold text-base">
                {formatPrice(product.price)} EGP
              </span>
            )}
          </div>

          <AddToCartButton
            productId={productId}
            showText={false}
            className="!bg-green-600 !text-white hover:!bg-green-800 cursor-pointer transition-colors duration-300"
          />
        </div>
      </div>
    </div>
  );
};