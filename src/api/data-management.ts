import { ApiManagerV2 } from '@/libs/utils/axios.config';
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
  // const queryParams = new URLSearchParams(
  //   Object.entries(obj).reduce((acc, [key, value]) => {
  //     if (value !== '' && value !== null && value !== undefined) {
  //       acc[key] = value;
  //     }
  //     return acc;
  //   }, {})
  // );
  // return queryParams.toString();
};