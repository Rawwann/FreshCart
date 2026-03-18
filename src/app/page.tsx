import React from 'react';
import Link from 'next/link';
import { ProductCard } from '@/components/products/ProductCard';
import { getCategories } from '@/services/category.service';
import { getProducts } from '@/services/product.service';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { CategoryGrid } from '@/components/categories/CategoryGrid';
import { PromoCards } from '@/components/home/PromoCards';
import { NewsletterAppSection } from '@/components/home/NewsletterAppSection';
import { Category } from '@/interfaces/category.interface';
import { Product } from '@/interfaces/product.interface';

export default async function HomePage() {
  let categories: Category[] = [];
  let products: Product[] = [];

  try {
    const [categoriesRes, productsRes] = await Promise.all([
      getCategories(),
      getProducts({ limit: 40 })
    ]);
    categories = categoriesRes.data || [];
    products = productsRes.data || [];
  } catch (error) {
    console.error("Error fetching homepage data:", error);
  }

  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />

      <FeaturesSection />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <CategoryGrid categories={categories} />
      </div>

      <PromoCards />

      {/* Featured Products */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-[1920px] mx-auto px-4 md:px-10 xl:px-32">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
            <div className="flex items-center gap-3 mb-4 sm:mb-0">
              <div className="h-8 w-1.5 bg-gradient-to-b from-green-500 to-green-700 rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Featured <span className="text-green-600">Products</span>
              </h2>
            </div>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {products.slice(0, 40).map(product => (
                <ProductCard key={product._id || product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-500 font-medium">No featured products found.</p>
            </div>
          )}
        </div>
      </section>

      <NewsletterAppSection />
    </main >
  );
}
