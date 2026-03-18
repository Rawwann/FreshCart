
import { Product } from '@/interfaces/product.interface';
import { Category } from '@/interfaces/category.interface';
import { Brand } from '@/interfaces/brand.interface';
import { SubCategory } from '@/interfaces/subcategory.interface';

// ─── Base Response Shape ──────────────────────────────────────────────────────

export interface ListingResponse<T> {
  results: number;
  metadata: {
    currentPage: number;
    numberOfPages: number;
    limit: number;
    [key: string]: any;
  };
  data: T[];
}

// ─── Domain-Specific Response Types ──────────────────────────────────────────

export type ProductResponse = ListingResponse<Product>;
export type CategoryResponse = ListingResponse<Category>;
export type BrandResponse = ListingResponse<Brand>;
export type SubCategoryResponse = ListingResponse<SubCategory>;
export type WishlistResponse = ListingResponse<Product>;