/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiManagerV2 } from '@/libs/utils/axios.config';
// import { clientApiManagerV2 } from '@/libs/utils/client-axios-config';
import { DevApiManager } from '@/libs/utils/dev.client.axios.config';
import { ArticleListBody, ArticleListResponse, CreateAndEditArticleBody } from '@/types/data-management/article';
import { CommentListResponse, PlaceImproveContentResponse } from '@/types/data-management/point';
import { PlaceListResponse } from '@/types/place';

import { ApiData } from './types';

interface InputObject {
  [key: string]: any;
}
const filterObject = (obj: InputObject): InputObject => {
  const result: InputObject = {};
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    if (value !== null && value !== '' && value !== 0 && value !== 'none' && !(Array.isArray(value) && value.length === 0)) {
      result[key] = value;
    }
  });
  return result;
};

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
  const obj = {
    ...params,
    provinceId: Number(params.provinceId),
    cityId: Number(params.cityId),
    parentCategoryId: Number(params.parentCategoryId),
    isInfoCompleted: Boolean(params.isInfoCompleted),
    isPublished: Boolean(params.isPublished),
  };
  const body = filterObject(obj);
  const res = await DevApiManager.post<ApiData<PlaceListResponse>>('places/allPlacesWithFilter', body);
  return res.data.data;
};

export const getPlaceImproveContent = async (placeId: number) => {
  const res = await DevApiManager.get<ApiData<PlaceImproveContentResponse>>(`places/placeImproveContent/${placeId}`);
  return res.data.data;
};

export const removePlaceImproveContent = async (id: number) => {
  const res = await DevApiManager.delete(`/places/deletePlaceImproveContent/${id}`);
  return res.data;
};

export const publishTravelMethod = async (id: number) => {
  const res = await DevApiManager.patch(`/places/changeTravelMethodStatusById/${id}?status=true`);
  return res.data;
};

export const removeTravelMethod = async (id: number) => {
  const res = await DevApiManager.patch(`/places/changeTravelMethodStatusById/${id}?status=false`);
  return res.data;
};

export const removeCommentForPlace = async (id: number) => {
  const res = await DevApiManager.delete(`/comment/${id}`);
  return res.data;
};

export const getArticleList = async (page: number, params: ArticleListBody) => {
  const obj = {
    ...params,
    is_published: params.is_published === 'true' ? true : params.is_published === 'false' ? false : String(params.is_published),
  };
  const body = filterObject(obj);
  const res = await DevApiManager.post<ApiData<ArticleListResponse>>(`/article/filter?limit=10&page=${page}`, body);
  return res.data.data;
};

export const createArticle = async (params: CreateAndEditArticleBody) => {
  const res = await DevApiManager.post<ApiData<CreateAndEditArticleBody>>('/article', params);
  return res.data.data;
};

export const editArticle = async (id: number, params: CreateAndEditArticleBody) => {
  const res = await DevApiManager.patch(`/article/edit/${id}`, params);
  return res.data;
};

export interface AllPlacesBody {
  page: number;
  limit: number;
  provinceId: number;
  cityId: number;
  parentCategoryId: number;
  arrayCatIds: number[];
  isInfoCompleted: boolean;
  isPublished: boolean;
  searchQuery: string;
}
