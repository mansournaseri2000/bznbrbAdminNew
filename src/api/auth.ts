import { ApiManager } from '@/libs/utils/axios.config';
import { PlacesDetailResponse } from '@/types/point';

import { ApiData } from './types';

export const mobileRegister = async (params: { mobile: string }) => {
  const res = await ApiManager.post<ApiData<{ token: string }>>('auth/login', params);

  return res.data;
};

export const checkOtp = async (params: { mobile: string; otp: string }) => {
  const res = await ApiManager.post<ApiData<{ data: string }>>('auth/check/otp', params);

  return res.data;
};

export const getAllPlces = async (pageNumber: number) => {
  const res = await ApiManager.get<ApiData<PlacesDetailResponse>>(`places?page=${pageNumber}`);

  return res.data.data;
};
