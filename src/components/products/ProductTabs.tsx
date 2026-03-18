"use client";

import React, { useState } from 'react';
import { TabId } from '@/constants/products/products.constants';
import ProductTabHeader from './ProductTabHeader';
import ProductDetailsTab from './ProductDetailsTab';
import ProductReviewsTab from './ProductReviewsTab';
import ProductShippingTab from './ProductShippingTab';

export default function ProductTabs({ product }: { product: any }) {
  const [activeTab, setActiveTab] = useState<TabId>("details");

  return (
    <div className="container mx-auto px-4 mt-8">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <ProductTabHeader
          activeTab={activeTab}
          onTabChange={setActiveTab}
          ratingsQuantity={product.ratingsQuantity}
        />

        {activeTab === "details" && <ProductDetailsTab product={product} />}
        {activeTab === "reviews" && <ProductReviewsTab product={product} />}
        {activeTab === "shipping" && <ProductShippingTab />}
      </div>
    </div>
  );
}