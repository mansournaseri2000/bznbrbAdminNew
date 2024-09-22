import { useMutation, useQuery } from '@tanstack/react-query';

import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { ApiManager } from '@/libs/utils/axios.config';
import { AllPlaceConstant, PlacesDetailResponse } from '@/types/place';

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
