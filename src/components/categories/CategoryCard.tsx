import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Category } from '@/interfaces/category.interface';

export const CategoryCard = ({ category }: { category: Category }) => {
    return (
        <Link
            href={`/products?category=${category.id}`}
            className="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1"
        >
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 mb-4">
                <Image
                    src={category.image || '/images/placeholder.png'}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            <h3 className="font-bold text-gray-900 text-center group-hover:text-green-600 transition-colors text-base md:text-lg">
                {category.name}
            </h3>
            <div className="flex justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-green-600 flex items-center gap-1 font-semibold">
                    View Products <ArrowRight className="w-2.5 h-2.5" />
                </span>
            </div>
        </Link>
    );
};