/* eslint-disable @typescript-eslint/no-unused-vars */
import { AdminUploaderImage, ApiManager, ApiManagerV2 } from '@/libs/utils/axios.config';
import { DevApiManager } from '@/libs/utils/dev.client.axios.config';
import { ArticleListBody, ArticleListResponse, CreateAndEditArticleBody } from '@/types/data-management/article';
import { CommentListResponse, PlaceImproveContentResponse, PlaceUserUploadsResponse } from '@/types/data-management/point';
import { PlaceListResponse } from '@/types/place';

import { ApiData } from './types';

interface InputObject {
  [key: string]: any;
}
export const filterObject = (obj: InputObject | null | undefined, isEmptyString?: boolean): InputObject => {
  const result: InputObject = {};

  if (!obj || typeof obj !== 'object') {
    return result; // Return empty object if obj is null or undefined
  }

  const filterCondition = (value: any) => value !== undefined && value !== null && value !== 'null' && value !== 0 && value !== 'none' && !(Array.isArray(value) && value.length === 0);

  Object.keys(obj).forEach(key => {
    const value = obj[key];
    if (isEmptyString === false ? filterCondition(value) : filterCondition(value) && value !== '') {
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
  const res = await DevApiManager.get<ApiData<CommentListResponse>>(`comment/placeComments/${placeId}?page=${page}&limit=4`, {});

  return res.data.data;
};

export const getAllPlacesFiltered = async (params: AllPlacesBody) => {
  const obj = {
    ...params,
    provinceId: Number(params.provinceId),
    cityId: Number(params.cityId),
    parentCategoryId: Number(params.parentCategoryId),
    isPublished: params.isPublished === 'true' || params.isPublished === true ? true : params.isPublished === 'false' || params.isPublished === false ? false : String(params.isPublished),
    status: params.status === 'true' || params.status === true ? true : params.status === 'false' || params.status === false ? false : String(params.status),
    mainPic: params.mainPic === 'true' || params.mainPic === true ? true : params.mainPic === 'false' || params.mainPic === false ? false : String(params.mainPic),
    gallery: params.gallery === 'true' || params.gallery === true ? true : params.gallery === 'false' || params.gallery === false ? false : String(params.gallery),
    info: params.info === 'true' || params.info === true ? true : params.info === 'false' || params.info === false ? false : String(params.info),
    coordinates: params.coordinates === 'true' || params.coordinates === true ? true : params.coordinates === 'false' || params.coordinates === false ? false : String(params.coordinates),
    description: params.description === 'true' || params.description === true ? true : params.description === 'false' || params.description === false ? false : String(params.description),
    features: params.features === 'true' || params.features === true ? true : params.features === 'false' || params.features === false ? false : String(params.features),
    analyse: params.analyse === 'true' || params.analyse === true ? true : params.analyse === 'false' || params.analyse === false ? false : String(params.analyse),
    seo: params.seo === 'true' || params.seo === true ? true : params.seo === 'false' || params.seo === false ? false : String(params.seo),
    startDate: Boolean(new Date(params.startDate).getTime()) ? new Date(params.startDate).getTime() : null,
    endDate: Boolean(new Date(params.endDate).getTime()) ? new Date(params.endDate).getTime() : null,
  };
  const body = filterObject(obj, true);
  const res = await DevApiManager.post<ApiData<PlaceListResponse>>('places/allPlacesWithFilter', body);
  return res.data.data;
};

function generateSearchParams<T extends Record<string, any>>(obj: T): string {
  const searchParams = new URLSearchParams();

  Object.entries(obj).forEach(([key, value]) => {
    searchParams.append(key, String(value));
  });

  return searchParams.toString();
}

export type PlaceListParams = {
  page: number;
  cityId: number;
  provinceId: number;
  parentCategoryId: number;
  arrayCatIds: string;
  arrayTypes: string;
  searchQuery: string;
  isPublished: boolean;
  status: boolean;
  mainPic: boolean;
  gallery: boolean;
  description: boolean;
  info: boolean;
  coordinates: boolean;
  features: boolean;
  analyse: boolean;
  seo: boolean;
  workTime: boolean;
  startDate: number;
  endDate: number;
};

export function generateSearchParam<T extends Record<string, any>>(obj: T): string {
  return Object.entries(obj)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return `${encodeURIComponent(key)}=${value.map(encodeURIComponent).join(',')}`;
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join('&');
}

/**
 * place-lsit
 * _______________________________________________________________________________
 */
export const getPlaceList = async (params: PlaceListParams) => {
  const obj = filterObject(params, true);
  const searchParams = generateSearchParam(obj);
  const res = await DevApiManager.get<ApiData<PlaceListResponse>>(`places/allPlacesWithFilter?${searchParams}`);
  return res.data.data;
};

export const getPlaceImproveContent = async (placeId: number, page: number, limit: number) => {
  const res = await DevApiManager.get<ApiData<PlaceImproveContentResponse>>(`places/placeImproveContent/${placeId}?page=${page}&limit=4`, {});
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
    is_published: params.is_published === 'true' || params.is_published === true ? true : params.is_published === 'false' || params.is_published === false ? false : null,
    status: params.status === 'true' || params.status === true ? true : params.status === 'false' || params.status === false ? false : null,
    // base: params.base === 'true' ? true : params.base === 'false' ? false : String(params.base),
    text: params.text === 'true' ? true : params.text === 'false' ? false : String(params.text),
    seo: params.seo === 'true' ? true : params.seo === 'false' ? false : String(params.seo),
    mainPic: params.mainPic === 'true' ? true : params.mainPic === 'false' ? false : String(params.mainPic),
    related: params.related === 'true' ? true : params.related === 'false' ? false : String(params.related),
    created_atStart: Boolean(new Date(params.created_atStart).getTime()) ? new Date(params.created_atStart).getTime() : null,
    created_atEnd: Boolean(new Date(params.created_atEnd).getTime()) ? new Date(params.created_atEnd).getTime() : null,
  };
  const body = filterObject(obj, true);
  delete body.page;

  const res = await DevApiManager.post<ApiData<ArticleListResponse>>(`/article/filter?limit=10&page=${page}`, body);
  return res.data.data;
};

type PlaceRelation = {
  placeId: number;
  placeRelationType: 'MAIN' | 'RELATION';
};

function generatePlaceRelations(mainPoint?: number, placeRelationType?: number[]): PlaceRelation[] {
  // Check if mainPoint is undefined or placeRelationType is empty/undefined
  if (mainPoint === undefined || !Array.isArray(placeRelationType) || placeRelationType.length === 0) {
    return [];
  }

  return [{ placeId: mainPoint, placeRelationType: 'MAIN' }, ...placeRelationType.map(id => ({ placeId: id, placeRelationType: 'RELATION' as const }))];
}

export const createArticle = async (params: CreateAndEditArticleBody) => {
  const obj = {
    parentCategoryId: Number(params.parentCategoryId),
    categoryId: Number(params.categoryId),
    provincesId: Number(params.provincesId),
    citiesId: Number(params.citiesId),
    is_published: params.is_published === 'true' || params.is_published === true ? true : params.is_published === 'false' || params.is_published === false ? false : String(params.is_published),
    status: params.status === 'true' || params.status === true ? true : params.status === 'false' || params.status === false ? false : String(params.status),
    title: params.title,
    writer: params.writer,
    tableOfContent: params.articleDetail[0].descriptions,
    content: params.articleDetail[1].descriptions,
    on_titile: params.on_titile,
    source: params.source,
    summery: params.summery,
    brief: params.brief,
    slug: params.slug,
    inMain: params.inMain,
    inTop: params.inTop,
    tags: String(params.metakeywords).split(','),
    keywords: String(params.keywords).split(','),
    meta_title: params.meta_title,
    meta_description: params.meta_description,
    source_link: params.source_link,
    isSlider: params.isSlider,
    type: params.type,
    places: generatePlaceRelations(Number(params.mainPoint), params.placeRelationType),
  };

  const body = filterObject(obj);
  const res = await DevApiManager.post<ApiData<CreateAndEditArticleBody>>('/article', body);
  return res.data;
};

export const editArticle = async (id: number, params: CreateAndEditArticleBody) => {
  console.log('run', params.articleDetail);

  const obj = {
    parentCategoryId: Number(params.parentCategoryId),
    categoryId: Number(params.categoryId),
    provincesId: Number(params.provincesId),
    citiesId: Number(params.citiesId),
    is_published: params.is_published === 'true' || params.is_published === true ? true : params.is_published === 'false' || params.is_published === false ? false : String(params.is_published),
    status: params.status === 'true' || params.status === true ? true : params.status === 'false' || params.status === false ? false : String(params.status),
    title: params.title,
    writer: params.writer,
    isSlider: params.isSlider,
    on_titile: params.on_titile,
    source: params.source,
    summery: params.summery,
    brief: params.brief,
    slug: params.slug,
    tableOfContent: params.articleDetail[0].descriptions,
    content: params.articleDetail[1].descriptions,
    inMain: params.inMain,
    inTop: params.inTop,
    tags: String(params.metakeywords).split(','),
    keywords: String(params.keywords).split(','),
    meta_title: params.meta_title,
    meta_description: params.meta_description,
    source_link: params.source_link,
    type: params.type,
    places: generatePlaceRelations(Number(params.mainPoint), params.placeRelationType),
  };

  const body = filterObject(obj, false);
  const res = await DevApiManager.patch(`/article/id/${id}`, body);
  return res.data;
};

export const getArticleById = async (id: number) => {
  const res = await DevApiManager.get<ApiData<CreateAndEditArticleBody>>(`/article/id/${id}`);
  return res.data;
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

export type UploadMainImageParams = {
  type: string;
  articleId: number;
  file: File;
  summery: string;
  slug: string;
  alt: string;
  description: string;
  townId: number;
};

export const UploadMainImageArticle = async (params: UploadMainImageParams) => {
  const formData = new FormData();

  formData.append('type', params.type);
  formData.append('placeId', params.articleId.toString());
  formData.append('file', params.file);
  formData.append('summery', params.summery);
  formData.append('slug', params.slug);
  formData.append('alt', params.alt);
  formData.append('description', params.description);
  formData.append('townId', params.townId.toString());

  const res = await AdminUploaderImage.post<ApiData<{ data: string }>>('admin/uploads/image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res.data;
};

export type updateMainImageInfoBody = {
  id: number;
  type: string;
  alt: string;
  description: string;
  summery: string;
  townId: number;
};

export const updateMainImageInfo = async (params: updateMainImageInfoBody) => {
  const res = await ApiManager.patch<ApiData<{ data: string }>>('upload/edit', params);

  return res.data;
};

export type UploadImageArticleBody = {
  type: string;
  articleId: number;
  file: File;
  summery: string;
  slug: string;
  alt: string;
  description: string;
  townId: number;
  articleImageType: string;
};

export const UploadImageArticle = async (body: UploadImageArticleBody) => {
  const formData = new FormData();

  formData.append('type', body.type);
  formData.append('articleImageType', body.articleImageType);
  formData.append('articleId', body.articleId.toString());
  formData.append('file', body.file);
  formData.append('summery', body.summery);
  formData.append('slug', body.slug);
  formData.append('alt', body.alt);
  formData.append('description', body.description);
  formData.append('townId', body.townId.toString());

  const res = await AdminUploaderImage.post<ApiData<{ data: string }>>('admin/uploads/image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res;
};

export const removeMainImageArticle = async (id: number) => {
  const res = await ApiManager.delete<ApiData<any>>(`places/deletePlacePicUserUploads/${id}`);

  return res.data;
};

export const removeImageGalleryArticle = async (id: number) => {
  const res = await ApiManager.delete<ApiData<any>>(`places/deletePlacePicUserUploads/${id}`);

  return res.data;
};
