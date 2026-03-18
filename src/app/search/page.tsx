import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { SearchSkeleton } from '@/components/skeletons/SearchSkeleton';
import SearchPage from '@/components/search/SearchPage';


export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { q } = await searchParams;
  return {
    title: q ? `Search results for "${q}" | FreshCart` : 'Search Products | FreshCart',
    description: `Browse search results for ${q} and find the best deals.`,
  };
}

interface Props {
  searchParams: Promise<{ q?: string }>;
}

export default async function Page({ searchParams }: Props) {
  const { q: searchQuery } = await searchParams;
  return (
    <main className="min-h-screen bg-white">
      <Suspense key={searchQuery} fallback={<SearchSkeleton />}>
        <SearchPage initialQuery={searchQuery} />
      </Suspense>
    </main>
  );
}