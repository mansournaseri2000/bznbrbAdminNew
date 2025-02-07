/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiManagerV2 } from '@/libs/utils/axios.config';
import { DevApiManager } from '@/libs/utils/dev.client.axios.config';
import { ArticleListBody, ArticleListResponse, CreateAndEditArticleBody } from '@/types/data-management/article';
import { CommentListResponse, PlaceImproveContentResponse, PlaceUserUploadsResponse } from '@/types/data-management/point';
import { PlaceListResponse } from '@/types/place';

import { ApiData } from './types';

interface InputObject {
  [key: string]: any;
}
const filterObject = (obj: InputObject): InputObject => {
  const result: InputObject = {};
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    if (value !== null && value !== 'null' && value !== '' && value !== 0 && value !== 'none' && !(Array.isArray(value) && value.length === 0)) {
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

export const getPlaceComments = async (placeId: number, page: number, limit: number) => {
  const res = await DevApiManager.get<ApiData<CommentListResponse>>(`comment/placeComments/${placeId}`, {
    headers: {
      page: page,
      limit: limit,
    },
  });

  return res.data.data;
};

export const getAllPlacesFiltered = async (params: AllPlacesBody) => {
  const obj = {
    ...params,
    provinceId: Number(params.provinceId),
    cityId: Number(params.cityId),
    parentCategoryId: Number(params.parentCategoryId),
    isPublished: params.isPublished === 'true' ? true : params.isPublished === 'false' ? false : String(params.isPublished),
    status: params.status === 'true' ? true : params.status === 'false' ? false : String(params.status),
    mainPic: params.mainPic === 'true' ? true : params.mainPic === 'false' ? false : String(params.mainPic),
    gallery: params.gallery === 'true' ? true : params.gallery === 'false' ? false : String(params.gallery),
    info: params.info === 'true' ? true : params.info === 'false' ? false : String(params.info),
    coordinates: params.coordinates === 'true' ? true : params.coordinates === 'false' ? false : String(params.coordinates),
    description: params.description === 'true' ? true : params.description === 'false' ? false : String(params.description),
    features: params.features === 'true' ? true : params.features === 'false' ? false : String(params.features),
    analyse: params.analyse === 'true' ? true : params.analyse === 'false' ? false : String(params.analyse),
    seo: params.seo === 'true' ? true : params.seo === 'false' ? false : String(params.seo),
    startDate: Boolean(new Date(params.startDate).getTime()) ? new Date(params.startDate).getTime() : null,
    endDate: Boolean(new Date(params.endDate).getTime()) ? new Date(params.endDate).getTime() : null,
  };
  const body = filterObject(obj);
  const res = await DevApiManager.post<ApiData<PlaceListResponse>>('places/allPlacesWithFilter', body);
  return res.data.data;
};

export const getPlaceImproveContent = async (placeId: number, page: number, limit: number) => {
  const res = await DevApiManager.get<ApiData<PlaceImproveContentResponse>>(`places/placeImproveContent/${placeId}`, {
    headers: {
      limit: limit,
      page: page,
    },
  });
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

export const getPlaceUserUploads = async (id: number, page: number, limit: number) => {
  const res = await DevApiManager.get<ApiData<PlaceUserUploadsResponse>>(`/places/getPlaceUserUploads/${id}?page=${page}&limit=6`, {
    headers: {
      limit: limit,
    },
  });
  return res.data.data;
};

export const getArticleList = async (page: number, params: ArticleListBody) => {
  const obj = {
    ...params,
    provincesId: Number(params.provincesId),
    citiesId: Number(params.citiesId),
    parentCategoryId: Number(params.parentCategoryId),
    is_published: params.is_published === 'true' ? true : params.is_published === 'false' ? false : String(params.is_published),
    status: params.status === 'true' ? true : params.status === 'false' ? false : String(params.status),
    base: params.base === 'true' ? true : params.base === 'false' ? false : String(params.base),
    text: params.text === 'true' ? true : params.text === 'false' ? false : String(params.text),
    seo: params.seo === 'true' ? true : params.seo === 'false' ? false : String(params.seo),
    mainPic: params.mainPic === 'true' ? true : params.mainPic === 'false' ? false : String(params.mainPic),
    related: params.related === 'true' ? true : params.related === 'false' ? false : String(params.related),
  };
  const body = filterObject(obj);
  const res = await DevApiManager.post<ApiData<ArticleListResponse>>(`/article/filter?limit=10&page=${page}`, body);
  return res.data.data;
};

export const createArticle = async (params: CreateAndEditArticleBody) => {
  const obj = {
    ...params,
    parentCategoryId: Number(params.parentCategoryId),
    categoryId: Number(params.categoryId),
    provincesId: Number(params.provincesId),
    citiesId: Number(params.citiesId),
    is_published: params.is_published === 'true' ? true : params.is_published === 'false' ? false : String(params.is_published),
    status: params.status === 'true' ? true : params.status === 'false' ? false : String(params.status),
  };
  const body = filterObject(obj);
  const res = await DevApiManager.post<ApiData<CreateAndEditArticleBody>>('/article', body);
  return res.data.data;
};

export const editArticle = async (id: number, params: CreateAndEditArticleBody) => {
  const obj = {
    ...params,
    parentCategoryId: Number(params.parentCategoryId),
    categoryId: Number(params.categoryId),
    provincesId: Number(params.provincesId),
    citiesId: Number(params.citiesId),
    is_published: params.is_published === 'true' ? true : params.is_published === 'false' ? false : String(params.is_published),
    status: params.status === 'true' ? true : params.status === 'false' ? false : String(params.status),
  };
  const body = filterObject(obj);
  const res = await DevApiManager.patch(`/article/edit/${id}`, body);
  return res.data;
};

export const getArticleById = async (id: number) => {
  const res = await DevApiManager.get<ApiData<CreateAndEditArticleBody>>(`/article/id/${id}`);
  return res.data.data;
};

export interface AllPlacesBody {
  page: number;
  limit: number;
  provinceId: number | string;
  cityId: number | string;
  parentCategoryId: number | string;
  arrayCatIds: number[];
  arrayTypes: string[];
  status: boolean | string;
  isPublished: boolean | string;
  searchQuery: string;
  startDate: string | number;
  endDate: string | number;
  mainPic: boolean | string;
  gallery: boolean | string;
  info: boolean | string;
  coordinates: boolean | string;
  description: boolean | string;
  features: boolean | string;
  analyse: boolean | string;
  seo: boolean | string;
  workTime: boolean | string;
}
