
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Category } from '@/interfaces/category.interface';
import { ChevronRight } from 'lucide-react';

interface CategoryGridProps {
    categories: Category[];
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
    if (!categories || categories.length === 0) return null;

    return (
        <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen py-12 bg-white">
            <div className="max-w-[1920px] mx-auto px-4 md:px-10 xl:px-32">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-1.5 bg-gradient-to-b from-green-500 to-green-700 rounded-full"></div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Shop By <span className="text-green-600">Category</span>
                        </h2>
                    </div>
                    <Link
                        href="/categories"
                        className="flex items-center gap-1 text-green-600 font-medium hover:text-green-700 transition-colors duration-300"
                    >
                        View All Categories <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {categories.slice(0, 11).map((category) => (
                        <CategoryGridItem key={category.id} category={category} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// ─── Private Sub-Component ───────────────────────────────────────────────────

function CategoryGridItem({ category }: { category: Category }) {
    return (
        <Link
            href={`/categories/${category.id}`}
            className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 group cursor-pointer"
        >
            <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full overflow-hidden bg-gray-50 mb-4 border border-gray-50">
                <Image
                    src={category.image || 'https://placehold.co/150x150?text=Category'}
                    alt={category.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80px, 96px"
                />
            </div>
            <span className="text-sm md:text-base font-bold text-gray-800">
                {category.name}
            </span>
        </Link>
    );
}