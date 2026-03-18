"use client";

import React from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";

interface SearchHeaderProps {
    searchInput: string;
    setSearchInput: (val: string) => void;
    onSearch: (val: string) => void;
}

export default function SearchHeader({ searchInput, setSearchInput, onSearch }: SearchHeaderProps) {
    return (
        <div className="bg-white border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 py-6">
                <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <a href="/" className="hover:text-green-600 transition-colors">Home</a>
                    <span className="text-gray-300">/</span>
                    <span className="text-gray-900 font-medium">Search Results</span>
                </nav>

                <div className="max-w-2xl relative group">
                    <FaMagnifyingGlass
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-600 transition-colors"
                        size={18}
                    />
                    <input
                        type="text"
                        placeholder="Search for products..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && onSearch(searchInput)}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all text-lg"
                    />
                </div>
            </div>
        </div>
    );
}