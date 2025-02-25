import { AdminUploaderImage } from '@/libs/utils/axios.config';
import { DevApiManager } from '@/libs/utils/dev.client.axios.config';
import { AdsHoldersResponse, AdsListResponse, AdsPageResponse, CreateAdBody, DeleteAdBody, EditADsBody, ProvinceListByIdResponse, ProvinceListResponse } from '@/types/advertizement/advertizement';

import { ApiData } from './types';

export const getAdsPages = async () => {
  const res = await DevApiManager.get<ApiData<AdsPageResponse[]>>('/ads/page');
  return res.data.data;
};

export const getAdsHolders = async (holder: string, id?: number, type?: 'parent' | 'children') => {
  const res = await DevApiManager.get<ApiData<AdsHoldersResponse[]>>(`/ads/holder?holder=${holder}&id=${id}&type=${type}`);
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

export const createAd = async (params: CreateAdBody) => {
  const formData = new FormData();

  formData.append('type', params.type);
  formData.append('description', params.description);
  formData.append('page', params.page);
  formData.append('holder', params.holder);
  formData.append('alt', params.alt);
  formData.append('slug', params.slug);
  formData.append('summery', params.summery);
  formData.append('file', params.file);
  formData.append('website', params.website);
  formData.append('socialMedia', params.socialMedia);
  formData.append('sponsor', params.sponsor);
  formData.append('provinceId', params.provinceId ? params.provinceId.toString() : '');
  formData.append('cityId', params.cityId ? params.cityId.toString() : '');
  formData.append('townId', params.townId ? params.townId.toString() : '');
  formData.append('categoryId', params.categoryId ? params.categoryId.toString() : '');

  const res = await AdminUploaderImage.post<ApiData<{ data: string }>>('admin/uploads/image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const editAds = async (params: EditADsBody) => {
  const res = await DevApiManager.patch('/upload/edit', params);
  return res.data;
};

export const deleteAd = async (params: DeleteAdBody) => {
  const res = await DevApiManager.delete('/upload/', { data: params });
  return res.data;
};

export const getListByPageKey = async (pageKey: string) => {
  const res = await DevApiManager.get<ApiData<AdsListResponse[]>>(`/ads/page?pageKey=${pageKey}`);
  return res.data.data;
};

export const getCitiesList = async (id: number) => {
  const res = await DevApiManager.get<ApiData<AdsListResponse[]>>(`/ads/page?pageKey=province&id=${id}`);
  return res.data.data;
};
