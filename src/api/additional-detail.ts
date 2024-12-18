import { DevApiManager } from '@/libs/utils/dev.client.axios.config';
import { AllProvincesByIdResponse, AllProvincesResponse, CategoriesResponse, FeaturesResponse } from '@/types/additional-detail/additional-detail';

import { ApiData } from './types';

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

export interface AllProvincesBody {
  provinceId: number;
  sortProvincesBy: 'asc' | 'des' | '';
}
