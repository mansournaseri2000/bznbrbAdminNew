import { DevApiManager, UploaderApiManager } from '@/libs/utils/dev.client.axios.config';
import {
  addFeatureItemBody,
  AddTownToCityBody,
  AllProvincesByIdResponse,
  AllProvincesResponse,
  CategoriesResponse,
  CitiesByProvinceIdResponse,
  CreateAndEditAreaResponse,
  CreateAreaBody,
  CreateCategoryBody,
  CreateCityListBody,
  CreateFeatureGroupArrayBody,
  EditAreaBody,
  FeatureDetail,
  FeatureGroupResponse,
  FeaturesResponse,
  ProvinceAboutResponse,
  ProvinceImagesResponse,
  SubCategoryBody,
  UpdateProvinceBody,
} from '@/types/additional-detail/additional-detail';

import { ApiData } from './types';
import { filterObject } from './user';

//   /**
//    * Category Services
//    * _______________________________________________________________________________
//    */

export const getCategories = async () => {
  const res = await DevApiManager.get<ApiData<CategoriesResponse[]>>('/category?sort=asc');
  return res.data.data;
};

export const createCategory = async (params: CreateCategoryBody) => {
  const res = await DevApiManager.post<ApiData<{ id: number }>>('/category/create', {
    parent_id: 0,
    name: params.name,
  });
  return res.data;
};

export const createCategoryList = async (params: CreateCategoryBody[]) => {
  const res = await DevApiManager.post('/category/array', {
    categories: params,
  });
  return res.data;
};

export const createSubCategory = async (params: SubCategoryBody) => {
  const body = filterObject(params);
  const res = await DevApiManager.post('category/createSubcategories', body);
  return res.data;
};

export const editCategory = async (id: number, params: EditCategoryBody) => {
  const res = await DevApiManager.patch(`/category/editCategory/${id}`, {
    name: params,
  });
  return res.data;
};

export const deleteCategory = async (id: number) => {
  const res = await DevApiManager.delete(`/category/delete/${id}`);
  return res.data;
};

export const getSingleCategory = async (id: number) => {
  const res = await DevApiManager.get<ApiData<CategoriesResponse[]>>(`/category/id/${id}`);
  return res.data.data[0];
};

export const editSubCategory = async (id: number, params: EditSubCategoryBody[]) => {
  const res = await DevApiManager.patch(`/category/editSubCategory/${id}`, {
    subcategory: params,
  });
  return res.data;
};

//   /**
//    * Feature Services
//    * _______________________________________________________________________________
//    */

export const getFeatures = async () => {
  const res = await DevApiManager.get<ApiData<FeaturesResponse[]>>('/features');
  return res.data.data;
};

export const getFeatureGroupById = async (id: number) => {
  const res = await DevApiManager.get<ApiData<FeatureGroupResponse>>(`/features/getFeatureGroup/${id}`);
  return res.data.data;
};

export const getFeatureItemById = async (id: number) => {
  const res = await DevApiManager.get<ApiData<FeatureDetail>>(`/features/getFeature/${id}`);
  return res.data.data;
};

export const addFeatureGroup = async (params: { name: string }[]) => {
  const res = await DevApiManager.post('/features/addFeatureGroup', params);
  return res.data;
};

export const createFeatureGroupArray = async (params: CreateFeatureGroupArrayBody[]) => {
  const res = await DevApiManager.post('/features/array', {
    features: params,
  });
  return res.data;
};

export const addFeatureItem = async (params: addFeatureItemBody) => {
  const res = await DevApiManager.post('/features/addFeature', params);
  return res.data;
};

export const editFeatureGroup = async (id: number, params: { name: string }) => {
  const res = await DevApiManager.patch(`/features/editFeatureGroup/${id}`, {
    name: params,
  });
  return res.data;
};

export const editFeatureItem = async (id: number, params: { name: string }) => {
  const res = await DevApiManager.patch(`/features/editFeature/${id}`, {
    name: params,
  });
  return res.data;
};

export const deleteFeatureItem = async (id: number) => {
  const res = await DevApiManager.delete(`/features/deleteFeature/${id}`);
  return res.data;
};

export const deleteFeatureGroup = async (id: number) => {
  const res = await DevApiManager.delete(`/features/deleteFeatureGroup/${id}`);
  return res.data;
};

//   /**
//    * Province Services
//    * _______________________________________________________________________________
//    */

export type provinceUploderBody = {
  provinceId: number;
  file: File;
  position: 'vector' | 'picture' | 'gallery';
};

export const provinceUploder = async (params: provinceUploderBody) => {
  const formData = new FormData();

  formData.append('type', 'PROVINCE');
  formData.append('position', params.position.toString());
  formData.append('file', params.file);
  formData.append('provinceId', params.provinceId.toString());

  const res = await UploaderApiManager.post<ApiData<{ data: string }>>('image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res.data;
};

export const getAllProvinces = async () => {
  const res = await DevApiManager.get<ApiData<AllProvincesResponse[]>>('/provinces/sorted/');
  return res.data.data;
};

export const getAllProvincesById = async (id: number) => {
  const res = await DevApiManager.get<ApiData<AllProvincesByIdResponse>>(`/provinces/sorted/${id}`);
  return res.data.data;
};

export const getCitiesByProvinceId = async (id: number) => {
  const res = await DevApiManager.get<ApiData<CitiesByProvinceIdResponse>>(`/cities/id/${id}`);
  return res.data.data;
};

export const createCityList = async (params: CreateCityListBody[]) => {
  const res = await DevApiManager.post('/cities/array', {
    cities: params,
  });
  return res.data;
};

export const addTownToCity = async (params: AddTownToCityBody) => {
  const res = await DevApiManager.post('/town/create', params);
  return res.data;
};

export const getProvinceImages = async (id: number) => {
  const res = await DevApiManager.get<ApiData<ProvinceImagesResponse>>(`/provinces/map/${id}`);
  return res.data.data;
};

export const deleteProvinceItems = async (params: DeleteProvinceItemsParams) => {
  const res = await DevApiManager.delete('/provinces/map', { data: params });
  return res.data;
};

export const getProvinceAbout = async (id: number) => {
  const res = await DevApiManager.get<ApiData<ProvinceAboutResponse>>(`/provinces/about/${id}`);
  return res.data.data;
};

export const createAreaDetail = async (params: CreateAreaBody) => {
  const res = await DevApiManager.post<ApiData<CreateAndEditAreaResponse>>('/provinces/detail', params);
  return res.data;
};

export const editAreaDetails = async (params: EditAreaBody) => {
  const res = await DevApiManager.patch<ApiData<CreateAndEditAreaResponse>>('/provinces/detail', params);
  return res.data;
};

export const updateProvinceAbout = async (params: UpdateProvinceBody) => {
  const res = await DevApiManager.post('/provinces/about', params);
  return res.data;
};

export const updateCity = async (id: number, params: { name: string }) => {
  const res = await DevApiManager.patch(`/cities/update/${id}`, {
    name: params,
  });
  return res.data;
};

export const deleteCity = async (id: number) => {
  const res = await DevApiManager.delete(`/cities/id/${id}`);
  return res.data;
};

//   /**
//    * Uploader Services
//    * _______________________________________________________________________________
//    */

// ******* Category ********

export const UploadImage = async (params: Param) => {
  const formData = new FormData();

  formData.append('type', params.type);
  formData.append('categoryId', params.categoryId.toString());
  formData.append('file', params.file);

  const res = await UploaderApiManager.post<ApiData<{ data: string }>>('image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res.data;
};

export const UploadIcon = async (params: Param) => {
  const formData = new FormData();

  formData.append('type', params.type);
  formData.append('categoryId', params.categoryId.toString());
  formData.append('file', params.file);

  const res = await UploaderApiManager.post<ApiData<{ data: string }>>('svg', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res.data;
};

// ******* Feature ********

export const UploadImageForFeature = async (params: FeatureUploaderParams) => {
  const formData = new FormData();

  formData.append('type', params.type);
  formData.append('featureId', params.featureId.toString());
  formData.append('file', params.file);

  const res = await UploaderApiManager.post<ApiData<{ data: string }>>('image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res.data;
};

export const UploadIconForFeature = async (params: FeatureUploaderParams) => {
  const formData = new FormData();

  formData.append('type', params.type);
  formData.append('featureId', params.featureId.toString());
  formData.append('file', params.file);

  const res = await UploaderApiManager.post<ApiData<{ data: string }>>('svg', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res.data;
};

// ******* Province ********

export const UploadImageForProvince = async (params: ProvinceUploaderParams) => {
  const formData = new FormData();

  formData.append('type', params.type);
  formData.append('provinceId', params.provinceId.toString());
  formData.append('file', params.file);
  formData.append('position', params.position);

  const res = await UploaderApiManager.post<ApiData<{ data: string }>>('image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const UploadIconForProvince = async (params: ProvinceUploaderParams) => {
  const formData = new FormData();

  formData.append('type', params.type);
  formData.append('provinceId', params.provinceId.toString());
  formData.append('file', params.file);
  formData.append('position', params.position);

  const res = await UploaderApiManager.post<ApiData<{ data: string }>>('svg', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const UploadSvgFroAreaDetail = async (params: UploadAreaSvgParams) => {
  const formData = new FormData();

  formData.append('type', params.type);
  formData.append('aboutId', params.aboutId.toString());
  formData.append('file', params.file);

  const res = await UploaderApiManager.post<ApiData<{ data: string }>>('svg', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

// ******* City ********

export const CityUploader = async (params: CityUploaderParams) => {
  const formData = new FormData();

  formData.append('type', params.type);
  formData.append('cityId', params.cityId.toString());
  formData.append('file', params.file);
  formData.append('position', params.position);

  const res = await UploaderApiManager.post<ApiData<{ data: string }>>('image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

// ******* Town ********

export const UploadImageForTown = async (params: TownUploaderParams) => {
  const formData = new FormData();

  formData.append('type', params.type);
  formData.append('townId', params.townId.toString());
  formData.append('file', params.file);
  formData.append('position', params.position);

  const res = await UploaderApiManager.post<ApiData<{ data: string }>>('image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const UploadIconForTown = async (params: TownUploaderParams) => {
  const formData = new FormData();

  formData.append('type', params.type);
  formData.append('townId', params.townId.toString());
  formData.append('file', params.file);
  formData.append('position', params.position);

  const res = await UploaderApiManager.post<ApiData<{ data: string }>>('svg', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

//   /**
//    * Body Types
//    * _______________________________________________________________________________
//    */
interface EditCategoryBody {
  name: string;
}

export type EditSubCategoryBody = {
  id: number;
  name: string;
};

export interface AllProvincesBody {
  provinceId: number;
  sortProvincesBy: 'asc' | 'des' | '';
}

export type Param = {
  type: 'CATEGORY';
  categoryId: number | string;
  file: File;
};

export type FeatureUploaderParams = {
  type: 'FEATURE';
  featureId: number | string;
  file: File;
};

export type ProvinceUploaderParams = {
  type: 'PROVINCE';
  provinceId: number | string;
  file: File;
  position: 'vector' | 'picture' | 'gallery';
};

export type CityUploaderParams = {
  type: 'CITY';
  cityId: number | string;
  file: File;
  position: 'vector' | 'picture';
};

export type TownUploaderParams = {
  type: 'TOWN';
  townId: number | string;
  file: File;
  position: 'vector' | 'picture';
};

export type DeleteProvinceItemsParams = {
  id: number;
  type: 'ICON' | 'PIC';
};

export type UploadAreaSvgParams = {
  file: File;
  aboutId: number;
  type: 'AREA_DETAIL';
};
