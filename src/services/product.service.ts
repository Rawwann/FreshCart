import { ProductResponse } from '../interfaces/api.interface';
import { Product } from '../interfaces/product.interface';

const BASE_URL = "https://ecommerce.routemisr.com/api/v1";

export interface ProductQueryParams {
  limit?: number;
  page?: number;
  sort?: string;
  keyword?: string;
  brand?: string | string[];
  priceGte?: number;
  priceLte?: number;
  categories?: string[];
}

export const getProducts = async (params?: ProductQueryParams): Promise<ProductResponse> => {
  try {
    const url = new URL(`${BASE_URL}/products`);

    if (params) {
      if (params.limit !== undefined) url.searchParams.append('limit', params.limit.toString());
      if (params.page !== undefined) url.searchParams.append('page', params.page.toString());
      if (params.sort && params.sort.trim().length > 0) {
        url.searchParams.append('sort', params.sort);
      } if (params.keyword && params.keyword.trim().length > 0) {
        url.searchParams.append('keyword', params.keyword.trim());
      } if (params.brand !== undefined) {
        if (Array.isArray(params.brand)) { params.brand.forEach(b => url.searchParams.append('brand', b)); }
        else { url.searchParams.append('brand', params.brand); }
      } if (params.priceGte !== undefined) url.searchParams.append('price[gte]', params.priceGte.toString());
      if (params.priceLte !== undefined) url.searchParams.append('price[lte]', params.priceLte.toString());

      if (params.categories && params.categories.length > 0) {
        params.categories.forEach(categoryId => {
          url.searchParams.append('category[in]', categoryId);
        });
      }
    }

    const res = await fetch(url.toString());

    if (!res.ok) {
      console.error(`API Error: getProducts failed with status ${res.status}`);
      throw new Error(`getProducts API failed: ${res.statusText}`);
    }

    const data: ProductResponse = await res.json();
    return data;
  } catch (error) {
    console.error('API Error in getProducts:', error);
    throw error;
  }
};

export async function getProductDetails(id: string) {
  if (!id || id === 'undefined' || id.length < 10) {
    console.error("Invalid Product ID provided to getProductDetails");
    return null;
  }

  const res = await fetch(`${BASE_URL}/products/${id}`);

  if (!res.ok) {
    throw new Error(`Product API failed: ${res.statusText}`);
  }

  const data = await res.json();
  return data.data;
}
