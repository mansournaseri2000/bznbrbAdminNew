import { DevApiManager } from '@/libs/utils/dev.client.axios.config';
import { AllProvincesByIdResponse, AllProvincesResponse } from '@/types/province/province';

import { ApiData } from './types';

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
  sortProvincesBy: 'asc' | 'des';
}
