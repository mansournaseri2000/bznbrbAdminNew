import { useMutation, useQuery } from '@tanstack/react-query';

import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { ApiManager } from '@/libs/utils/axios.config';
import { AllPlaceConstant, PlaceResponse, PlacesDetailResponse } from '@/types/place';
import { CreatePlace } from '@/types/place/create-place';

import { ApiData } from './types';

/**
 * all-places services
 * _______________________________________________________________________________
 */
export const getAllPlaces = async (pageNumber: number) => {
  const res = await ApiManager.get<ApiData<PlacesDetailResponse>>(`places?page=${pageNumber}`);

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
  const res = await ApiManager.get<ApiData<PlacesDetailResponse>>(
    `places/search?page=${pageNumber}&name=${searchText}&limit=30`
  );

  return res.data.data;
};

/**
 * remove-place services
 * _______________________________________________________________________________
 */
export const removePlace = async (id: number) => {
  const res = await ApiManager.delete<ApiData<PlacesDetailResponse>>(`places/${id}`);

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
  const res = await ApiManager.get<ApiData<AllPlaceConstant>>(`places/create-data`);

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

export const getPlace = async (id: number) => {
  const res = await ApiManager.get<ApiData<PlaceResponse>>(`places/id/${id}`);

  return res.data.data;
};

export const createPlace = async (params: CreatePlace) => {
  const res = await ApiManager.post<ApiData<PlaceResponse>>('places/create', params);

  return res.data;
};

export const removeImage = async (id: number) => {
  const res = await ApiManager.delete<ApiData<{ message: string }>>(`upload/${id}`);

  return res.data;
};
