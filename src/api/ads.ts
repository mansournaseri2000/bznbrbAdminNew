import { DevApiManager } from '@/libs/utils/dev.client.axios.config';
import { AdsPageResponse, ProvinceListByIdResponse, ProvinceListResponse } from '@/types/ads/ads';

import { ApiData } from './types';

export const getAdsPages = async () => {
  const res = await DevApiManager.get<ApiData<AdsPageResponse[]>>('/ads/page');
  return res.data.data;
};

export const getProvinceListForAdvertizement = async () => {
  const res = await DevApiManager.get<ApiData<ProvinceListResponse>>('/ads/banners');
  return res.data.data;
};

export const getCityListById = async (id: number) => {
  const res = await DevApiManager.get<ApiData<ProvinceListByIdResponse>>(`/ads/banners?provinceId=${id}`);
  return res.data.data;
};
