import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { getProductDetails, getProducts } from '@/services/product.service';
import { notFound } from 'next/navigation';
import ProductClient from '@/components/products/ProductClient';
import { Product } from '@/interfaces/product.interface';
import RelatedProductsSection from '@/components/products/RelatedProductsSection';
import { RelatedProductsSkeleton } from '@/components/skeletons/RelatedProductsSkeleton';

interface ProductDetailsPageProps {
  params: Promise<{ productId: string }>;
}

export async function generateMetadata({ params }: ProductDetailsPageProps): Promise<Metadata> {
  const { productId } = await params;
  const product = await getProductDetails(productId);
  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.title} | FreshCart`,
    description: product.description,
    openGraph: {
      images: [product.imageCover],
      title: product.title,
      description: product.description,
    },
  };
}

export async function generateStaticParams() {
  const res = await getProducts({ limit: 20 });
  return res.data.map((product: Product) => ({
    productId: product._id,
  }));
}

export default async function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const { productId } = await params;
  const product = await getProductDetails(productId);

  if (!product) return notFound();

  return (
    <main className="min-h-screen bg-white">
      <ProductClient product={product} />

      <div className="container mx-auto px-4">
        <Suspense fallback={<RelatedProductsSkeleton />}>
          <RelatedProductsSection
            categoryId={product.category._id}
            currentProductId={productId}
          />
        </Suspense>
      </div>
    </main>
  );
}