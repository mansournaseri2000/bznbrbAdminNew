/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiManagerV2 } from '@/libs/utils/axios.config';
// import { clientApiManagerV2 } from '@/libs/utils/client-axios-config';
import { DevApiManager } from '@/libs/utils/dev.client.axios.config';
import { CommentListResponse, PlaceImproveContentResponse } from '@/types/data-management/point';
import { PlaceListResponse } from '@/types/place';

import { ApiData } from './types';

export const getPointByParams = async (obj: Record<string, any>) => {
  console.log(handleQueryParams(obj), 'DATA');
  try {
    const queryString = handleQueryParams(obj);
    const res = await ApiManagerV2.get<ApiData<PlaceListResponse>>(`places/search?${queryString.toString()}`);
    return res.data.data;
  } catch (error) {
    console.error('Error fetching places:', error);
    throw new Error('Failed to fetch places data.');
  }
};

const handleQueryParams = (obj: Record<string, any>) => {
  const queryParams = Object.entries(obj)
    .filter(([_, value]) => value !== '' && value !== null && value !== undefined)
    .map(([key, value]) => `${key}=${value}`);

  return queryParams.length ? `${queryParams.join('&')}` : '';
};

export const getPlaceComments = async (placeId: number) => {
  const res = await DevApiManager.get<ApiData<CommentListResponse>>(`comment/placeComments/${placeId}`);

  return res.data.data;
};

export const getAllPlacesFiltered = async (params: AllPlacesBody) => {
  
  const res = await DevApiManager.post<ApiData<PlaceListResponse>>('places/allPlacesWithFilter', params);
  return res.data.data;
};

export const getPlaceImproveContent = async (placeId: number) => {
  const res = await DevApiManager.get<ApiData<PlaceImproveContentResponse>>(`places/placeImproveContent/${placeId}`);
  return res.data.data;
};

export interface AllPlacesBody {
  page: number;
  limit: number;
  provinceId: number;
  parentCategoryId: number;
  arrayCatIds: number[];
  isInfoCompleted: boolean;
  isPublished: boolean;
  searchQuery: string;
}
