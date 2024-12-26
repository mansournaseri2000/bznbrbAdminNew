import { DevApiManager } from '@/libs/utils/dev.client.axios.config';
import { AllProvincesByIdResponse, AllProvincesResponse, CategoriesResponse, CreateCategoryBody, FeaturesResponse, SubCategoryBody } from '@/types/additional-detail/additional-detail';

import { ApiData } from './types';
import { filterObject } from './user';

export const getCategories = async () => {
  const res = await DevApiManager.get<ApiData<CategoriesResponse[]>>('/category');
  return res.data.data;
};

export const getFeatures = async () => {
  const res = await DevApiManager.get<ApiData<FeaturesResponse[]>>('/features');
  return res.data.data;
};

export const getAllProvinces = async () => {
  const res = await DevApiManager.post<ApiData<AllProvincesResponse[]>>('/provinces/sorted/');
  return res.data.data;
};

export const getAllProvincesById = async (params: AllProvincesBody) => {
  const res = await DevApiManager.post<ApiData<AllProvincesByIdResponse>>('/provinces/sorted/', params);
  return res.data.data;
};

export const createCategory = async (params: CreateCategoryBody) => {
  const res = await DevApiManager.post<ApiData<{ id: number }>>('/category/create', {
    parent_id: 0,
    name: params.name,
  });
  return res.data;
};

export const createSubCategory = async (params: SubCategoryBody) => {
  const body = filterObject(params);
  const res = await DevApiManager.post('category/createSubcategories', body);
  return res.data;
};

export const editCategory = async (id: number, params: EditCategoryBody) => {
  const res = await DevApiManager.patch(`/category/editCategory/${id}`, {
    name: params,
  });
  return res.data;
};

export const deleteCategory = async (id: number) => {
  const res = await DevApiManager.delete(`/category/delete/${id}`);
  return res.data;
};

export const getSingleCategory = async (id: number) => {
  const res = await DevApiManager.get<ApiData<CategoriesResponse[]>>(`/category/id/${id}`);
  return res.data.data[0];
};

export const editCategoryBySubCategories = async (params: EditCategoryBySubCategoriesBody) => {
  const res = await DevApiManager.put('/category/editSubCategoriesArray', {
    subcategory: params,
  });
  return res.data;
};

interface EditCategoryBody {
  name: string;
}

interface EditCategoryBySubCategoriesBody {
  subcategory: {
    id: number;
    name: string;
  };
}

export interface AllProvincesBody {
  provinceId: number;
  sortProvincesBy: 'asc' | 'des' | '';
}
