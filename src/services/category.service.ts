import { CategoryResponse, SubCategoryResponse } from '../interfaces/api.interface';
import { Category } from '../interfaces/category.interface';

const BASE_URL = "https://ecommerce.routemisr.com/api/v1";

export const getCategories = async (
  params?: { limit?: number; page?: number; keyword?: string }
): Promise<CategoryResponse> => {
  try {
    const url = new URL(`${BASE_URL}/categories`);
    if (params) {
      if (params.limit !== undefined) url.searchParams.append('limit', params.limit.toString());
      if (params.page !== undefined) url.searchParams.append('page', params.page.toString());
      if (params.keyword !== undefined) url.searchParams.append('keyword', params.keyword);
    }

    const res = await fetch(url.toString());

    if (!res.ok) {
      console.error(`API Error: getCategories failed with status ${res.status}`);
      throw new Error(`getCategories API failed: ${res.statusText}`);
    }

    const data: CategoryResponse = await res.json();
    return data;
  } catch (error) {
    console.error('API Error in getCategories:', error);
    throw error;
  }
};

export const getCategoryDetails = async (id: string): Promise<{ data: Category }> => {
  try {
    const res = await fetch(`${BASE_URL}/categories/${id}`);

    if (!res.ok) {
      console.error(`API Error: getCategoryDetails failed with status ${res.status}`);
      throw new Error(`getCategoryDetails API failed: ${res.statusText}`);
    }

    const data: { data: Category } = await res.json();
    return data;
  } catch (error) {
    console.error('API Error in getCategoryDetails:', error);
    throw error;
  }
};

export const getSubCategoriesOnCategory = async (categoryId: string): Promise<SubCategoryResponse> => {
  try {
    const res = await fetch(`${BASE_URL}/categories/${categoryId}/subcategories`);

    if (!res.ok) {
      console.error(`API Error: getSubCategoriesOnCategory failed with status ${res.status}`);
      throw new Error(`getSubCategoriesOnCategory API failed: ${res.statusText}`);
    }

    const data: SubCategoryResponse = await res.json();
    return data;
  } catch (error) {
    console.error('API Error in getSubCategoriesOnCategory:', error);
    throw error;
  }
};
