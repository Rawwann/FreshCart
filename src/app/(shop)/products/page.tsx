import React from 'react';
import { Metadata } from 'next';
import { Package } from 'lucide-react';
import { ProductCard } from '@/components/products/ProductCard';
import { getProducts } from '@/services/product.service';
import { Product } from '@/interfaces/product.interface';

export const metadata: Metadata = {
  title: 'Shop All Products | FreshCart',
  description: 'Browse our extensive collection of high-quality products at the best prices.',
};

export default async function ProductsPage() {
  let products: Product[] = [];
  try {
    const productsRes = await getProducts({ limit: 40 });
    products = productsRes.data || [];
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <main className="w-full min-h-screen bg-white">
      {/* ─── Header ─── */}
      <div className="relative w-full py-12 px-6 md:px-16 overflow-hidden bg-gradient-to-br from-green-600 via-green-500 to-green-400 text-white">
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-black/5 blur-2xl pointer-events-none" />

        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-white/80 text-xs font-medium mb-4 relative z-10">
          <span>Home</span>
          <span className="text-white/40">/</span>
          <span className="text-white font-semibold">All Products</span>
        </div>

        {/* Title */}
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0">
            <Package size={28} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              All Products
            </h1>
            <p className="text-white/80 text-sm mt-0.5">
              Explore our complete product collection
            </p>
          </div>
        </div>
      </div>

      {/* ─── Products Section ─── */}
      <div className="container mx-auto px-4 py-10 max-w-7xl">
        {products.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-500 font-medium">
                Showing <span className="text-green-600 font-bold">{products.length}</span> products
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <EmptyProductsState />
        )}

      </div>
    </main>
  );
}

{/* Empty State */ }
function EmptyProductsState() {
  return (
    <div className="text-center py-32 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
      <Package className="w-16 h-16 text-gray-200 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-gray-900">No products found</h3>
      <p className="text-gray-500 mt-2">Try checking back later for new arrivals.</p>
    </div>
  );
}