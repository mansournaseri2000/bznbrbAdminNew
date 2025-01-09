import { DevApiManager } from '@/libs/utils/dev.client.axios.config';
import {
  addFeatureItemBody,
  AllProvincesByIdResponse,
  AllProvincesResponse,
  CategoriesResponse,
  CreateCategoryBody,
  FeatureDetail,
  FeatureGroupResponse,
  FeaturesResponse,
  SubCategoryBody,
} from '@/types/additional-detail/additional-detail';

import { ApiData } from './types';
import { filterObject } from './user';

export const getCategories = async (sort: string) => {
  const res = await DevApiManager.get<ApiData<CategoriesResponse[]>>(`/category?sort=${sort}`);
  return res.data.data;
};

export const getFeatures = async () => {
  const res = await DevApiManager.get<ApiData<FeaturesResponse[]>>('/features');
  return res.data.data;
};

export const getFeatureGroupById = async (id: number) => {
  const res = await DevApiManager.get<ApiData<FeatureGroupResponse>>(`/features/getFeatureGroup/${id}`);
  return res.data.data;
};

export const getFeatureItemById = async (id: number) => {
  const res = await DevApiManager.get<ApiData<FeatureDetail>>(`/features/getFeature/${id}`);
  return res.data.data;
};

export const addFeatureGroup = async (params: { name: string }) => {
  const res = await DevApiManager.post('/features/addFeatureGroup', params);
  return res.data;
};

export const addFeatureItem = async (params: addFeatureItemBody) => {
  const res = await DevApiManager.post('/features/addFeature', params);
  return res.data;
};

export const editFeatureGroup = async (id: number, params: { name: string }) => {
  const res = await DevApiManager.patch(`/features/editFeatureGroup/${id}`, params);
  return res.data;
};

export const editFeatureItem = async (id: number, params: { name: string }) => {
  const res = await DevApiManager.patch(`/features/editFeature/${id}`, params);
  return res.data;
};

export const deleteFeatureItem = async (id: number) => {
  const res = await DevApiManager.delete(`/features/deleteFeature/${id}`);
  return res.data;
};

export const deleteFeatureGroup = async (id: number) => {
  const res = await DevApiManager.delete(`/features/deleteFeatureGroup/${id}`);
  return res.data;
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
