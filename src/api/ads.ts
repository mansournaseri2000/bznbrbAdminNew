import { DevApiManager } from '@/libs/utils/dev.client.axios.config';
import { AdsPageResponse, BannerPageByIdResponse, BannerPageResponse } from '@/types/ads/ads';

import { ApiData } from './types';

export const getAdsPages = async () => {
  const res = await DevApiManager.get<ApiData<AdsPageResponse[]>>('/ads/page');
  return res.data.data;
};

export const getBannerPage = async () => {
  const res = await DevApiManager.get<ApiData<BannerPageResponse>>('/ads/banners');
  return res.data.data;
};

export const getBannerPageById = async (id: number) => {
  const res = await DevApiManager.get<ApiData<BannerPageByIdResponse>>(`/ads/banners?provinceId=${id}`);
  return res.data.data;
};
