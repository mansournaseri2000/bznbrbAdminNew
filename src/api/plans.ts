// import { ApiManagerV2 } from '@/libs/utils/axios.config';
// import { clientApiManagerV2 } from '@/libs/utils/client-axios-config';
import { DevApiManager } from '@/libs/utils/dev.client.axios.config';
import { TripResponse } from '@/types/plans/trip';
import { RecentTripsResponse } from '@/types/user/user';

import { filterObject, generateSearchParam } from './data-management';
import { ApiData } from './types';

export const getTrips = async (id: string): Promise<ApiData<TripResponse> | null> => {
  try {
    const res = await DevApiManager.get<ApiData<TripResponse>>(`trips/id/${id}`);
    return res.data; // Return the response data on success
  } catch (error: any) {
    // Handle different types of errors
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Error:', error.response.data.message || 'Server Error');
      throw new Error(`Failed to fetch trip: ${error.response.statusText}`);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Network error:', error.message);
      throw new Error('Network error: Unable to fetch trip data');
    } else {
      // Something else happened in setting up the request
      console.error('Unexpected error:', error.message);
      throw new Error('Unexpected error: Please try again later');
    }
  }
};

export type UserRecentTripsParams = {
  page: number;
  searchQuery: string;
  originCityId: number;
  originProvinceId: number;
  destinationCityId: number;
  destinationProvinceId: number;
  targetDate: string;
  sortDate: string;
  departureDateStart: number;
  departureDateEnd: number;
  returnDateStart: number;
  returnDateEnd: number;
};

export const getRecentTrips = async (params: UserRecentTripsParams) => {
  const obj = filterObject(params);
  delete obj.sort;
  const searchParams = generateSearchParam(obj);
  const res = await DevApiManager.get<ApiData<RecentTripsResponse>>(`trips?limit=10&${searchParams}`);

  return res.data.data;
};
