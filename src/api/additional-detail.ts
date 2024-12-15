import { DevApiManager } from '@/libs/utils/dev.client.axios.config';
import { CategoriesResponse, FeaturesResponse } from '@/types/additional-detail/additional-detail';

import { ApiData } from './types';

export const getCategories = async () => {
  const res = await DevApiManager.get<ApiData<CategoriesResponse[]>>('/category');
  return res.data.data;
};

export const getFeatures = async () => {
  const res = await DevApiManager.get<ApiData<FeaturesResponse[]>>('/features');
  return res.data.data;
};
