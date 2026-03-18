import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Loader2 } from 'lucide-react';
import { FaTags } from "react-icons/fa6";
import { getBrands } from '@/services/brand.service';
import { Brand } from '@/interfaces/brand.interface';

export const metadata = {
    title: 'Top Brands | FreshCart',
    description: 'Shop from your favorite top brands at FreshCart.',
};

export default async function BrandsPage() {
    const response = await getBrands();
    const brands: Brand[] = response.data || [];

    return (
        <main className="w-full min-h-screen bg-white">

            <div
                className="relative w-full py-12 px-6 md:px-16 overflow-hidden text-white"
                style={{
                    background: 'linear-gradient(135deg, #7F22FE 0%, #8E51FF 50%, #C27AFF 100%)'
                }}
            >
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-black/5 blur-2xl pointer-events-none" />

                <div className="flex items-center gap-1.5 text-white/80 text-xs font-medium mb-4 relative z-10">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <span className="text-white/40">/</span>
                    <span className="text-white font-semibold">Brands</span>
                </div>

                <div className="flex items-center gap-4 relative z-10">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0">
                        <FaTags size={28} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                            Top Brands
                        </h1>
                        <p className="text-white/80 text-sm mt-0.5">
                            Shop from your favorite brands
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
                    {brands.map((brand) => (
                        <Link
                            key={brand._id}
                            href={`/products?brand=${brand._id}`}
                            className="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gray-50 mb-3">
                                <Image
                                    src={brand.image || '/images/placeholder-brand.png'}
                                    alt={brand.name || "brand"}
                                    fill
                                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                                />
                            </div>

                            <h3 className="font-semibold text-gray-900 text-center text-sm group-hover:text-violet-600 transition-colors truncate">
                                {brand.name}
                            </h3>

                            <div className="flex justify-center mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-xs text-violet-600 flex items-center gap-1">
                                    View Products <ArrowRight size={10} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </main>
    );
}