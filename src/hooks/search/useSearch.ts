"use client";

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { getProducts } from '@/services/product.service';
import { Product } from '@/interfaces/product.interface';

export function useSearch(initialQuery: string) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const [sort, setSort] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [searchInput, setSearchInput] = useState(initialQuery || '');
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [metadata, setMetadata] = useState<any>(null);

    const fetchResults = useCallback(async (
        query: string,
        page: number,
        sortVal: string,
        cats: string[],
        brands: string[]
    ) => {
        setLoading(true);
        try {
            const res = await getProducts({
                keyword: query,
                page,
                limit: 12,
                sort: sortVal,
                categories: cats,
                brand: brands
            });
            if (res.data && res.data.length >= 0) {
                setProducts(res.data);
                setMetadata(res.metadata);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const query = searchParams.get('q') || initialQuery || '';
        const page = parseInt(searchParams.get('page') || '1', 10);
        const currentSort = searchParams.get('sort') || '';
        const currentCats = searchParams.getAll('category');
        const currentBrands = searchParams.getAll('brand');

        setSearchInput(query);
        setSort(currentSort);
        setSelectedCategories(currentCats);
        setSelectedBrands(currentBrands);

        fetchResults(query, page, currentSort, currentCats, currentBrands);
    }, [searchParams, fetchResults, initialQuery]);

    const updateURL = (newParams: Record<string, string | string[] | null>) => {
        const params = new URLSearchParams(searchParams.toString());
        Object.entries(newParams).forEach(([key, value]) => {
            if (value === null || value === '' || (Array.isArray(value) && value.length === 0)) {
                params.delete(key);
            } else if (Array.isArray(value)) {
                params.delete(key);
                value.forEach(v => params.append(key, v));
            } else {
                params.set(key, value);
            }
        });
        params.set('page', '1');
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const handlePageChange = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', newPage.toString());
        router.push(`${pathname}?${params.toString()}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCategoryToggle = (cat: string) => {
        const next = selectedCategories.includes(cat) ? selectedCategories.filter(c => c !== cat) : [...selectedCategories, cat];
        updateURL({ category: next });
    };

    const handleBrandToggle = (brand: string) => {
        const next = selectedBrands.includes(brand) ? selectedBrands.filter(b => b !== brand) : [...selectedBrands, brand];
        updateURL({ brand: next });
    };

    return {
        sort, setSort, selectedCategories, selectedBrands, searchInput, setSearchInput,
        products, loading, metadata, updateURL, handlePageChange, handleCategoryToggle, handleBrandToggle,
        pathname, router, hasActiveFilters: selectedCategories.length > 0 || selectedBrands.length > 0 || searchInput
    };
}