import { redirect } from 'next/navigation';

import { useMutation, useQuery } from '@tanstack/react-query';

import { fomrData } from '@/components/place/create-edit-place/defaultValues';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { ApiManager, ApiManagerV2 } from '@/libs/utils/axios.config';
import { clientApiManagerV2 } from '@/libs/utils/client-axios-config';
import { detailsSerializerForEdit, flattenPlaceWorkTime } from '@/libs/utils/place/place-seryalizer';
import { PlaceListResponse, PlaceResponse, RemovePlaceResponse, SearchPlaceResponse } from '@/types/place';
import { addRoutingGuidBody } from '@/types/place/place';
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

export const getAllPlacesWithParams = async (pageNumber: number, categoryId: string, provinceId: string) => {
  try {
    // Create query parameters using URLSearchParams
    const params = new URLSearchParams();

    // Add the page number to the params
    params.append('page', pageNumber.toString());

    // Conditionally add categoryId and provinceId if they exist
    if (categoryId && categoryId.length > 0) {
      params.append('cat', categoryId);
    }

    if (provinceId && provinceId.length > 0) {
      params.append('pro', provinceId);
    }

    // Make the API request
    const res = await ApiManagerV2.get<ApiData<PlaceListResponse>>(`places/search?${params.toString()}`);

    // Return the data if the request was successful
    return res.data.data;
  } catch (error) {
    // Handle the error, log it, or display it to the userd
    console.error('Error fetching places:', error);
    throw new Error('Failed to fetch places data.');
  }
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
  const res = await ApiManager.get<ApiData<SearchPlaceResponse>>(`cities/search?page=${pageNumber}&id=${cityID}&limit=10`);

  return res.data.data;
};

/**
 * search all-places by provinceID services
 * _______________________________________________________________________________
 */
export const getAllPlacesByProvinceID = async (pageNumber: number, ProvniceID: number) => {
  const res = await ApiManager.get<ApiData<SearchPlaceResponse>>(`provinces/search?page=${pageNumber}&id=${ProvniceID}&limit=10`);

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
  return [];
};

/**
 * create-place services
 * _______________________________________________________________________________
 */
export const createPlace = async (params: fomrData | any) => {
  const {
    name,
    basicInfoDescription,
    cityID,
    lat,
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
    PlaceDetails,
    TripTypes,
    PlaceTripSeasons,
    PlaceCategories,
    tripLimitations,
    cost,
    renown,
    PlaceWorkTimes,
    area,
    trip_value,
    rating,
    suggested_time,
    status,
    type,
    isPublished,
    vehicleOptions,
    category_id,
  } = params;

  const res = await ApiManager.post<ApiData<PlaceResponse>>('places/create', {
    name: name,
    description: basicInfoDescription,
    category_id: Number(category_id) === 0 ? undefined : Number(category_id),
    city_id: Number(cityID) === 0 ? undefined : Number(cityID),
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
    airplane: vehicleOptions.filter((item: any) => item.key === 'airplane')[0].content,
    bus: vehicleOptions.filter((item: any) => item.key === 'bus')[0].content,
    car: vehicleOptions.filter((item: any) => item.key === 'car')[0].content,
    hike: vehicleOptions.filter((item: any) => item.key === 'hike')[0].content,
    ship: vehicleOptions.filter((item: any) => item.key === 'ship')[0].content,
    subway: vehicleOptions.filter((item: any) => item.key === 'subway')[0].content,
    taxi: vehicleOptions.filter((item: any) => item.key === 'subway')[0].content,
    train: vehicleOptions.filter((item: any) => item.key === 'train')[0].content,
    PlaceFeatures: features,
    PlaceDetails: PlaceDetails,
    TripTypes: TripTypes,
    PlaceWorkTimes: flattenPlaceWorkTime(PlaceWorkTimes as any),
    PlaceCategories: PlaceCategories,
    PlaceTripLimitations: tripLimitations,
    PlaceTripSeasons: PlaceTripSeasons,
    cost: cost,
    renown: renown,
    area: area,
    rating: Number(rating),
    trip_value: Number(trip_value),
    suggested_time: String(suggested_time),
    type: type,
    isPublished: isPublished === 'true' || isPublished === true ? true : isPublished === 'false' || isPublished === false ? false : String(isPublished),
    status: status === 'true' || status === true ? true : status === 'false' || status === false ? false : String(status),
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
    suggested_time,
    status,
    type,
    isPublished,
  } = params;

  const res = await ApiManager.put<ApiData<PlaceResponse>>(`places/update/${id}`, {
    name: name,
    description: basicInfoDescription,
    category_id: String(sub_category_id).length !== 0 ? Number(sub_category_id) : undefined,
    city_id: String(cityID).length !== 0 ? Number(cityID) : undefined,
    parentCategory_id: String(category_id).length !== 0 ? Number(category_id) : undefined,
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
    TripTypes: TripTypes,
    PlaceWorkTimes: flattenPlaceWorkTime(PlaceWorkTimes as any),
    PlaceCategories: PlaceCategories,
    PlaceTripLimitations: tripLimitations,
    PlaceTripSeasons: PlaceTripSeasons,
    cost: cost,
    renown: renown,
    area: area,
    rating: Number(rating),
    trip_value: Number(trip_value),
    suggested_time: suggested_time,
    type: type,
    isPublished: isPublished === 'true' ? true : isPublished === 'false' ? false : String(isPublished),
    status: status === 'true' ? true : status === 'false' ? false : String(status),
  });

  return res.data;
};

export const addRoutingGuid = async (params: addRoutingGuidBody) => {
  const res = await clientApiManagerV2.post<ApiData<{ data: string }>>('places/user-edit', params);

  return res.data;
};

export type ImageItem = {
  id: number;
  path: string;
  description: string;
  alt: string;
  status: boolean;
};

type ImageGalleryResponse = {
  gallery: ImageItem[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
};

export const getImageGallery = async (id: number) => {
  const res = await ApiManager.get<ApiData<ImageGalleryResponse>>(`places/gallery/${id}`);

  return res.data.data;
};
