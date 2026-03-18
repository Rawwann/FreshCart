"use client";

import React from 'react';
import Link from 'next/link';
import {
  FaPlus, FaMinus, FaHouse, FaChevronRight,
  FaCartShopping, FaBolt, FaShareNodes, FaStar
} from "react-icons/fa6";
import { AddToWishlistButton } from '@/components/wishlist/AddToWishlistButton';
import ProductTabs from '@/components/products/ProductTabs';
import RelatedProductsSlider from '@/components/products/RelatedProductsSlider';
import { useProductClient } from '@/hooks/products/useProductClient';
import ProductImageGallery from '@/components/products/ProductImageGallery';
import ProductTrustBadges from '@/components/products/ProductTrustBadges';


interface ProductClientProps {
  product: any;
  relatedProducts?: any[];
}

export default function ProductClient({ product, relatedProducts = [] }: ProductClientProps) {
  const {
    selectedImageIdx,
    setSelectedImageIdx,
    quantity,
    isAdding,
    uniqueImages,
    mainImage,
    stock,
    currentTotalPrice,
    handleIncrement,
    handleDecrement,
    handleAddToCart,
  } = useProductClient(product);

  return (
    <div className="min-h-screen bg-white pb-0">
      <div className="container mx-auto px-4">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="py-6 border-b border-gray-50 mb-8">
          <ol className="flex items-center flex-wrap gap-1 text-sm">
            <li className="flex items-center">
              <Link href="/" className="text-gray-500 hover:text-green-600 transition flex items-center gap-1.5">
                <FaHouse className="text-xs" />
                <span>Home</span>
              </Link>
              <FaChevronRight className="text-gray-400 text-[10px] mx-2" />
            </li>
            <li className="flex items-center">
              <Link
                href={`/categories/${product.category?._id}`}
                className="text-gray-500 hover:text-green-600 transition font-medium"
              >
                {product.category?.name || "Category"}
              </Link>
              <FaChevronRight className="text-gray-400 text-[10px] mx-2" />
            </li>
            <li className="flex items-center">
              <span className="text-gray-900 font-bold truncate max-w-[200px]">
                {product.title}
              </span>
            </li>
          </ol>
        </nav>

        {/* Product Main Section */}
        <section id="product-detail" className="mb-16">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Left Column: Image Gallery */}
            <ProductImageGallery
              uniqueImages={uniqueImages}
              mainImage={mainImage}
              selectedImageIdx={selectedImageIdx}
              onSelectImage={setSelectedImageIdx}
              title={product.title}
            />

            {/* Right Column: Product Info */}
            <div id="product-info" className="lg:w-3/4 space-y-6">
              <div className="flex flex-wrap gap-2">
                <Link
                  href={`/categories/${product.category?._id}`}
                  className="bg-green-50 text-green-700 text-xs px-3 py-1.5 rounded-full hover:bg-green-100 transition"
                >
                  {product.category?.name || "Category"}
                </Link>
                {product.brand && (
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full font-medium">
                    {product.brand.name}
                  </span>
                )}
              </div>

              <h1 className="text-3xl font-black text-gray-900 tracking-tight">
                {product.title}
              </h1>

              <div className="flex items-center gap-3">
                <div className="text-yellow-400 flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={16}
                      className={i < Math.floor(product.ratingsAverage || 0) ? "fill-current" : "text-gray-200"}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 font-bold">
                  {product.ratingsAverage} ({product.ratingsQuantity} reviews)
                </span>
              </div>

              <div className="text-2xl font-bold text-green-600">
                {product.price}.00 EGP
              </div>

              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-full bg-green-50 text-green-700">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  {product.quantity > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-6">
                {product.description}
              </p>

              <div className="flex flex-col space-y-4">
                <label className="text-xs text-gray-700 mb-2 tracking-widest mb-2">Quantity</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center h-12 border-2 border-gray-100 rounded-lg overflow-hidden bg-white">
                    <button
                      onClick={handleDecrement}
                      className="px-5 py-3 text-gray-400 hover:text-green-600 transition cursor-pointer"
                    >
                      <FaMinus size={14} />
                    </button>
                    <span className="w-10 text-center text-lg">{quantity}</span>
                    <button
                      onClick={handleIncrement}
                      className="px-5 py-3 text-gray-400 hover:text-green-600 transition cursor-pointer"
                    >
                      <FaPlus size={14} />
                    </button>
                  </div>
                  <span className="text-sm text-gray-400 font-semibold">{stock} units available</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6 flex justify-between items-center border border-gray-100">
                <span className="text-gray-500 font-semibold text-xs tracking-widest">Total Price</span>
                <span className="text-2xl font-bold text-green-600">{currentTotalPrice.toFixed(2)} EGP</span>
              </div>

              {/* Action Buttons Grid */}
              <div className="space-y-4 pt-4">
                {/* Row 1: Add to Cart & Buy Now */}
                <div className="flex gap-4">
                  <button
                    onClick={handleAddToCart}
                    disabled={isAdding}
                    className="flex-1 bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition cursor-pointer shadow-lg shadow-green-600/20 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    <FaCartShopping /> {isAdding ? 'Adding...' : 'Add to Cart'}
                  </button>
                  <button className="flex-1 bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition cursor-pointer flex items-center justify-center gap-2">
                    <FaBolt /> Buy Now
                  </button>
                </div>

                {/* Row 2: Wishlist & Share */}
                <div className="flex gap-4">
                  <AddToWishlistButton
                    productId={product._id}
                    variant="details"
                    className="flex-1"
                  />
                  <button className="w-14 h-14 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-green-300 hover:text-green-600 transition flex items-center justify-center shrink-0 cursor-pointer">
                    <FaShareNodes size={20} />
                  </button>
                </div>

                {/* Trust Badges */}
                <ProductTrustBadges />
              </div>
            </div>
          </div>
        </section>

        {/* Product Tabs Section */}
        <div className="mb-20">
          <ProductTabs product={product} />
        </div>

        {/* Related Products Section */}
        <div className="mb-20">
          {relatedProducts.length > 0 && (
            <RelatedProductsSlider products={relatedProducts} />
          )}
        </div>

      </div>
    </div>
  );
}