import { BrandResponse } from '../interfaces/api.interface';
import { Brand } from '../interfaces/brand.interface';

const BASE_URL = "https://ecommerce.routemisr.com/api/v1";

export const getBrands = async (
  params?: { limit?: number; keyword?: string }
): Promise<BrandResponse> => {
  try {
    const url = new URL(`${BASE_URL}/brands`);
    if (params) {
      if (params.limit !== undefined) url.searchParams.append('limit', params.limit.toString());
      if (params.keyword !== undefined) url.searchParams.append('keyword', params.keyword);
    }

    const res = await fetch(url.toString());

    if (!res.ok) {
      console.error(`API Error: getBrands failed with status ${res.status}`);
      throw new Error(`getBrands API failed: ${res.statusText}`);
    }

    const data: BrandResponse = await res.json();
    return data;
  } catch (error) {
    console.error('API Error in getBrands:', error);
    throw error;
  }
};

export const getBrandDetails = async (id: string): Promise<{ data: Brand }> => {
  try {
    const res = await fetch(`${BASE_URL}/brands/${id}`);

    if (!res.ok) {
      console.error(`API Error: getBrandDetails failed with status ${res.status}`);
      throw new Error(`getBrandDetails API failed: ${res.statusText}`);
    }

    const data: { data: Brand } = await res.json();
    return data;
  } catch (error) {
    console.error('API Error in getBrandDetails:', error);
    throw error;
  }
};
