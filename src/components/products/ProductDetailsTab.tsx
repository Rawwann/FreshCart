
import React from 'react';
import { FaCheck } from "react-icons/fa6";
import { KEY_FEATURES } from '@/constants/products/products.constants';

export default function ProductDetailsTab({ product }: { product: any }) {
    return (
        <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">About this Product</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
                {product.description || "Discover the perfect blend of style and functionality. This product is designed to meet your daily needs with exceptional quality."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-3">Specifications</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex justify-between">
                            <span>Category</span>
                            <span className="font-medium text-gray-900">{product.category?.name || "N/A"}</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Brand</span>
                            <span className="font-medium text-gray-900">{product.brand?.name || "N/A"}</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Stock Status</span>
                            <span className="font-medium text-gray-900">{product.quantity > 0 ? "In Stock" : "Out of Stock"}</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                        {KEY_FEATURES.map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                                <FaCheck className="text-green-500 mt-1 shrink-0" size={12} />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}