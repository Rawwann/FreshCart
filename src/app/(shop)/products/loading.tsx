import { ProductsSkeleton } from '@/components/skeletons/ProductsSkeleton';

export default function Loading() {
    return (
        <main className="w-full min-h-screen bg-white">
            <div className="w-full py-12 px-6 md:px-16 bg-gray-50 border-b border-gray-100">
                <div className="flex items-center gap-4 animate-pulse">
                    <div className="w-14 h-14 bg-gray-200 rounded-2xl" />
                    <div className="space-y-2">
                        <div className="h-8 w-48 bg-gray-200 rounded-lg" />
                        <div className="h-4 w-64 bg-gray-200 rounded" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-10 max-w-7xl">
                <ProductsSkeleton />
            </div>
        </main>
    );
}