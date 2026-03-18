"use client";

import React, { useState } from 'react';
import { useSearch } from '@/hooks/search/useSearch';
import SearchHeader from './SearchHeader';
import SearchToolbar from './SearchToolbar';
import SearchResults from './SearchResults';
import ProductSidebar from './ProductSidebar';
import ActiveFiltersBar from './ActiveFiltersBar';

export default function SearchPage({ initialQuery }: { initialQuery?: string }) {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const {
        sort, setSort, selectedCategories, selectedBrands, searchInput, setSearchInput,
        products, loading, metadata, handlePageChange, handleCategoryToggle, handleBrandToggle,
        updateURL, hasActiveFilters, pathname, router
    } = useSearch(initialQuery || '');

    return (
        <div className="min-h-screen bg-gray-50/50 pb-20">
            <SearchHeader
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                onSearch={(val) => updateURL({ q: val })}
            />

            <div className="container mx-auto px-4 py-10">
                <div className="flex gap-8 items-start">
                    <ProductSidebar
                        selectedCategories={selectedCategories}
                        selectedBrands={selectedBrands}
                        onCategoryChange={handleCategoryToggle}
                        onBrandChange={handleBrandToggle}
                        onClearAll={() => router.push(pathname)}
                    />

                    <div className="flex-1">
                        <div className="flex flex-col gap-4 mb-8">
                            <SearchToolbar
                                viewMode={viewMode}
                                setViewMode={setViewMode}
                                sort={sort}
                                onSort={(val) => { setSort(val); updateURL({ sort: val }); }}
                            />

                            {hasActiveFilters && (
                                <ActiveFiltersBar
                                    selectedCategories={selectedCategories}
                                    selectedBrands={selectedBrands}
                                    onCategoryToggle={handleCategoryToggle}
                                    onBrandToggle={handleBrandToggle}
                                    onClearAll={() => router.push(pathname)}
                                />
                            )}
                        </div>

                        <SearchResults
                            loading={loading}
                            products={products}
                            viewMode={viewMode}
                            metadata={metadata}
                            handlePageChange={handlePageChange}
                            onClear={() => router.push(pathname)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}