import { SubCategoryResponse } from '../interfaces/api.interface';
import { SubCategory } from '../interfaces/subcategory.interface';

const BASE_URL = "https://ecommerce.routemisr.com/api/v1";

export const getSubCategories = async (params?: { limit?: number }): Promise<SubCategoryResponse> => {
  try {
    const url = new URL(`${BASE_URL}/subcategories`);
    if (params) {
      if (params.limit !== undefined) url.searchParams.append('limit', params.limit.toString());
    }

    const res = await fetch(url.toString());

    if (!res.ok) {
      console.error(`API Error: getSubCategories failed with status ${res.status}`);
      throw new Error(`getSubCategories API failed: ${res.statusText}`);
    }

    const data: SubCategoryResponse = await res.json();
    return data;
  } catch (error) {
    console.error('API Error in getSubCategories:', error);
    throw error;
  }
};

export const getSubCategoryDetails = async (id: string): Promise<{ data: SubCategory }> => {
  try {
    const res = await fetch(`${BASE_URL}/subcategories/${id}`);

    if (!res.ok) {
      console.error(`API Error: getSubCategoryDetails failed with status ${res.status}`);
      throw new Error(`getSubCategoryDetails API failed: ${res.statusText}`);
    }

    const data: { data: SubCategory } = await res.json();
    return data;
  } catch (error) {
    console.error('API Error in getSubCategoryDetails:', error);
    throw error;
  }
};
