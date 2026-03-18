"use client";

import React from 'react';
import { ProductCard } from '@/components/products/ProductCard';
import { Product } from '@/interfaces/product.interface';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import SearchLoadingState from './SearchLoadingState';
import SearchEmptyState from './SearchEmptyState';

interface SearchResultsProps {
    loading: boolean;
    products: Product[];
    viewMode: 'grid' | 'list';
    metadata: any;
    handlePageChange: (page: number) => void;
    onClear: () => void;
}

export default function SearchResults({
    loading,
    products,
    viewMode,
    metadata,
    handlePageChange,
    onClear,
}: SearchResultsProps) {
    if (loading) return <SearchLoadingState />;
    if (products.length === 0) return <SearchEmptyState onClear={onClear} />;

    return (
        <>
            <div className={viewMode === 'grid'
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "flex flex-col gap-6"
            }>
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>

            {metadata?.numberOfPages > 1 && (
                <Pagination className="mt-20">
                    <PaginationContent className="gap-2">
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (metadata.currentPage > 1) handlePageChange(metadata.currentPage - 1);
                                }}
                            />
                        </PaginationItem>

                        {[...Array(metadata.numberOfPages)].map((_, i) => (
                            <PaginationItem key={i}>
                                <PaginationLink
                                    href="#"
                                    isActive={metadata.currentPage === i + 1}
                                    onClick={(e) => { e.preventDefault(); handlePageChange(i + 1); }}
                                    className={`rounded-xl w-12 h-12 ${metadata.currentPage === i + 1 ? 'bg-green-600 text-white' : ''}`}
                                >
                                    {i + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}

                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (metadata.currentPage < metadata.numberOfPages) handlePageChange(metadata.currentPage + 1);
                                }}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}
        </>
    );
}