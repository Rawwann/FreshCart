"use client";

import React from 'react';
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { SORT_OPTIONS } from '@/constants/search/search.constants';

interface SearchToolbarProps {
    viewMode: 'grid' | 'list';
    setViewMode: (mode: 'grid' | 'list') => void;
    sort: string;
    onSort: (val: string) => void;
}

export default function SearchToolbar({ viewMode, setViewMode, sort, onSort }: SearchToolbarProps) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-xl border border-gray-100">
                <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-green-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-600'}`}
                >
                    <LuLayoutGrid size={20} />
                </button>
                <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-green-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-600'}`}
                >
                    <LuList size={20} />
                </button>
            </div>

            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 font-medium">Sort by:</span>
                <select
                    value={sort}
                    onChange={(e) => onSort(e.target.value)}
                    className="px-3 py-2 rounded-lg border border-gray-200 text-sm font-bold text-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none bg-white cursor-pointer"
                >
                    {SORT_OPTIONS.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}