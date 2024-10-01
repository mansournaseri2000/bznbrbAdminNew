import { redirect } from 'next/navigation';

import { useMutation, useQuery } from '@tanstack/react-query';

import { fomrData, placeCategories, placeTripLimitations, placeTripSeasons, placeTripTypes } from '@/components/place/create-edit-place/defaultValues';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { serializeTripType } from '@/libs/utils';
import { ApiManager } from '@/libs/utils/axios.config';
import { detailsSerializerForEdit, flattenPlaceWorkTime } from '@/libs/utils/place/place-seryalizer';
import { PlaceListResponse, PlaceResponse, RemovePlaceResponse, SearchPlaceResponse } from '@/types/place';
import { PlaceConstantResponse } from '@/types/place/place-constant';

import { ApiData } from './types';

/**
 * place-list services
 * _______________________________________________________________________________
 */
export const getAllPlaces = async (pageNumber: number) => {
  const res = await ApiManager.get<ApiData<PlaceListResponse>>(`places?page=${pageNumber}`);

  return res.data.data;
};

export const useGetAllPlaces = ({ page }: { page: number }) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['all-places', page],
    queryFn: async () => getAllPlaces(page),
  });

  return { data, isError, isLoading };
};

/**
 * search all-places services
 * _______________________________________________________________________________
 */

export const getAllPlacesByName = async (pageNumber: number, searchText: string) => {
  const res = await ApiManager.get<ApiData<SearchPlaceResponse>>(`places/search?page=${pageNumber}&name=${searchText}&limit=30`);

  return res.data.data;
};

/**
 * search all-places by cityID services
 * _______________________________________________________________________________
 */

export const getAllPlacesByCityID = async (pageNumber: number, cityID: number) => {
  const res = await ApiManager.get<ApiData<SearchPlaceResponse>>(`cities/search?page=${pageNumber}&id=${cityID}&limit=30`);

  return res.data.data;
};

/**
 * remove-place services
 * _______________________________________________________________________________
 */
export const removePlace = async (id: number) => {
  const res = await ApiManager.delete<ApiData<RemovePlaceResponse>>(`places/${id}`);

  return res.data;
};

export const useRemovePlace = ({ id }: { id: number }) => {
  const { mutate: removePlaceMutate, isPending: removePlaceIsPending } = useMutation({
    mutationFn: async () => removePlace(id),
    onSuccess: async data => {
      if (data.status === true) {
        ToastSuccess('مکان مورد نظر با موفقیت حذف شد');
      } else {
        ToastError('لطفا دوباره امتحان نمایید');
      }
    },
    onError: err => {
      console.log(err, 'useRemovePlace');
    },
  });

  return { removePlaceMutate, removePlaceIsPending };
};

/**
 * all-constants services
 * _______________________________________________________________________________
 */
export const getAllPlacesConstants = async () => {
  const res = await ApiManager.get<ApiData<PlaceConstantResponse>>(`places/create-data`);

  return res.data.data;
};

export const useGetAllPlacesConstants = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['place-constant'],
    queryFn: async () => getAllPlacesConstants(),
  });

  return { data, isError, isLoading };
};

export type UploadImageParams = {
  type: string;
  placeId: number;
  files: File;
};

/**
 * upload-image services
 * _______________________________________________________________________________
 */
export const UploadImage = async (params: UploadImageParams) => {
  const formData = new FormData();

  formData.append('type', params.type);
  formData.append('placeId', params.placeId.toString());
  formData.append('files', params.files);

  const res = await ApiManager.post<ApiData<{ data: string }>>('upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res.data;
};

/**
 * get-place services
 * _______________________________________________________________________________
 */
export const getPlace = async (id: number) => {
  const res = await ApiManager.get<ApiData<PlaceResponse>>(`places/id/${id}`);

  return res.data.data;
};

export const getPlaceSSR = async (id: number, status: string) => {
  if (status === 'edit' && id) {
    try {
      const res = await ApiManager.get<ApiData<PlaceResponse>>(`places/id/${id}`);

      return res.data.data;
    } catch (error) {
      console.error('Error fetching place data:', error);
      redirect('/error');
    }
  }
  return []; // Return default data if status is not 'edit'
};

/**
 * create-place services
 * _______________________________________________________________________________
 */
export const createPlace = async (params: fomrData) => {
  const {
    name,
    basicInfoDescription,
    sub_category_id,
    cityID,
    lat,
    airplane,
    car,
    bus,
    subway,
    ship,
    taxi,
    train,
    pictures,
    lng,
    address,
    tell,
    website,
    email,
    basicInfosummary,
    meta_description,
    meta_title,
    metakeywords,
    keywords,
    features,
    hike,
    PlaceDetails,
    TripTypes,
    PlaceTripSeasons,
    PlaceCategories,
    tripLimitations,
    category_id,
    cost,
    renown,
    PlaceWorkTimes,
    area,
    trip_value,
    rating,
  } = params;
  const res = await ApiManager.post<ApiData<PlaceResponse>>('places/create', {
    name: name,
    description: basicInfoDescription,
    category_id: sub_category_id,
    city_id: cityID,
    parentCategory_id: category_id,
    lat: lat,
    lng: lng,
    address: address,
    tell: tell,
    website: website,
    email: email,
    summary: basicInfosummary,
    tags: metakeywords,
    keywords: keywords,
    meta_description: meta_description,
    meta_title: meta_title,
    airplane: airplane,
    bus: bus,
    car: car,
    hike: hike,
    ship: ship,
    subway: subway,
    taxi: taxi,
    train: train,
    PlaceFeatures: features,
    PlaceDetails: PlaceDetails,
    TripTypes: serializeTripType(TripTypes as any),
    PlaceWorkTimes: PlaceWorkTimes,
    PlaceCategories: PlaceCategories,
    PlaceTripLimitations: tripLimitations,
    PlaceTripSeasons: PlaceTripSeasons,
    pictures: pictures,
    cost: cost,
    renown: renown,
    area: area,
    rating: Number(rating),
    trip_value: Number(trip_value),
  });
  return res.data;
};

/**
 * remove-image services
 * _______________________________________________________________________________
 */
export const removeImage = async (id: number) => {
  const res = await ApiManager.delete<ApiData<{ message: string }>>(`upload/${id}`);

  return res.data;
};

/**
 * edit-place services
 * _______________________________________________________________________________
 */

export const editPlace = async (params: fomrData, id: number) => {
  const {
    name,
    basicInfoDescription,
    sub_category_id,
    cityID,
    lat,
    airplane,
    car,
    bus,
    subway,
    ship,
    taxi,
    train,
    pictures,
    lng,
    address,
    tell,
    website,
    email,
    basicInfosummary,
    meta_description,
    meta_title,
    metakeywords,
    keywords,
    features,
    hike,
    PlaceDetails,
    PlaceTripSeasons,
    PlaceCategories,
    category_id,
    TripTypes,
    PlaceWorkTimes,
    tripLimitations,
    renown,
    cost,
    area,
    rating,
    trip_value,
  } = params;

  const res = await ApiManager.put<ApiData<PlaceResponse>>(`places/update/${id}`, {
    name: name,
    description: basicInfoDescription,
    category_id: sub_category_id,
    city_id: cityID,
    parentCategory_id: category_id,
    lat: lat,
    lng: lng,
    address: address,
    tell: tell,
    website: website,
    email: email,
    summary: basicInfosummary,
    tags: metakeywords,
    keywords: keywords,
    meta_description: meta_description,
    meta_title: meta_title,
    airplane: airplane,
    bus: bus,
    car: car,
    hike: hike,
    ship: ship,
    subway: subway,
    taxi: taxi,
    train: train,
    PlaceFeatures: features,
    PlaceDetails: detailsSerializerForEdit(PlaceDetails as any),
    TripTypes: serializeTripType(TripTypes as any),
    PlaceWorkTimes: flattenPlaceWorkTime(PlaceWorkTimes as any),
    PlaceCategories: PlaceCategories,
    PlaceTripLimitations: tripLimitations,
    PlaceTripSeasons: PlaceTripSeasons,
    pictures: pictures,
    cost: cost,
    renown: renown,
    area: area,
    rating: Number(rating),
    trip_value: Number(trip_value),
  });

  return res.data;
};
