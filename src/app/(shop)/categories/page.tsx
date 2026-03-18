import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { FaLayerGroup } from "react-icons/fa";
import { getCategories } from '@/services/category.service';
import { Category } from '@/interfaces/category.interface';
import { CategoryCard } from '@/components/categories/CategoryCard';

export const metadata: Metadata = {
    title: 'All Categories | FreshCart',
    description: 'Explore our wide range of product categories and find what you need.',
};

export default async function CategoriesPage() {
    const res = await getCategories();
    const categories: Category[] = res.data || [];

    return (
        <main className="w-full min-h-screen bg-white">

            <div
                className="relative w-full py-12 px-6 md:px-16 overflow-hidden text-white"
                style={{
                    background: 'linear-gradient(135deg, #16A34A 0%, #22C55E 50%, #4ADE80 100%)'
                }}
            >
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-black/5 blur-2xl pointer-events-none" />

                <div className="flex items-center gap-1.5 text-white/80 text-xs font-medium mb-4 relative z-10">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <span className="text-white/40">/</span>
                    <span className="text-white font-semibold">Categories</span>
                </div>

                <div className="flex items-center gap-4 relative z-10">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0">
                        <FaLayerGroup size={28} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                            All Categories
                        </h1>
                        <p className="text-white/80 text-sm mt-0.5">
                            Explore our wide range of product categories
                        </p>
                    </div>
                </div>
            </div>

            <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen py-16 bg-white overflow-hidden">
                <div className="max-w-[1920px] mx-auto px-4 md:px-10 xl:px-32">

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
                        {categories.map((cat) => (<CategoryCard key={cat.id} category={cat} />))}
                    </div>

                </div>
            </section>
        </main>
    );
}