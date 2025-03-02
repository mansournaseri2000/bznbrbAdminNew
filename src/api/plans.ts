// import { ApiManagerV2 } from '@/libs/utils/axios.config';
// import { clientApiManagerV2 } from '@/libs/utils/client-axios-config';
import moment from 'moment-timezone';
import Cookies from 'universal-cookie';

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

export function modifyTimeOfTimestamp(timestamp1: number, timestamp2: number) {
  const baseDate = moment.tz(timestamp1, 'Asia/Tehran');
  const timeSource = moment.tz(timestamp2, 'Asia/Tehran');

  // Modify the time of baseDate using the hour, minute, second, and millisecond from timeSource
  baseDate.set({
    hour: timeSource.hour(),
    minute: timeSource.minute(),
    second: timeSource.second(),
    millisecond: timeSource.millisecond(),
  });

  // Adjust for the Tehran timezone offset before converting to UTC
  const adjustedUtcDate = baseDate.clone().tz('UTC', true);

  // Return the modified date as an ISO string in UTC
  return adjustedUtcDate.toISOString();
}

export function modifyTimestamp(date: number) {
  const baseDate = moment.tz(date, 'Asia/Tehran');

  const adjustedUtcDate = baseDate.clone().tz('UTC', true);

  return adjustedUtcDate.toISOString();
}

export interface TripFormData {
  origin: {
    city: string;
    province: string;
  };
  destination: {
    city: string;
    province: string;
  };
  startTime: {
    time: null | Date;
    date: null | Date;
  };
  endTime: {
    time: null | Date;
    date: null | Date;
  };
  means_of_travel: string;
  place_of_residence: string;
  Type_of_tourist_place: number[];
  sortBy: string;
  number_Of_Adult_Passengers: string;
  number_Of_Child_Passengers: string;
  number_Of_Minor_Passengers: string;
  Type_Of_Passengers: string[];
  isExpand: boolean;
  max_date: null | Date;
  min_Date: null | Date;
  minTime: boolean;
  secondDate: Date | null;
  firstDate: Date | null;
  arrDateSame: null | boolean;

  sourceProvinceId: string | number;
  sourceCityId: string | number;
  destinationProvinceId: string | number;
  destinationCityId: string | number[];
  departureDate: number | string;
  departureTime: number | string;
  returnTime: number | string;
  returnDate: number | string;
  travelMode: string; // or bacpacking / car / taxi / train / plain
  accommodationType: string; //or villa / cottage
  companions: string[]; // or child / elderly / disabled / specific_lines
  popularity: string;
  placeCategoryId: number[];
  adultCount: number | string;
  childCount: number | string;
  infantCount: number | string;
  justInside: boolean;
}

export const createTrip = async (params: TripFormData) => {
  const cookie = new Cookies();

  const tripData = {
    departureDateTime: modifyTimeOfTimestamp(new Date(params.departureDate as any).getTime(), new Date(params.departureTime as any).getTime()),
    returnDateTime: modifyTimeOfTimestamp(new Date(params.returnDate as any).getTime(), new Date(params.returnTime as any).getTime()),
    travelMode: params.isExpand ? params.travelMode : undefined,
    accommodationType: params.isExpand ? params.accommodationType : undefined,
    companions: params.isExpand ? params.companions : undefined,
    popularity: params.isExpand ? [params.popularity] : undefined,
    placeCategoryId: params.isExpand ? params.placeCategoryId : undefined,
    adultCount: params.isExpand ? Number(params.adultCount) : 1,
    childCount: params.isExpand ? Number(params.childCount) : 0,
    infantCount: params.isExpand ? Number(params.infantCount) : undefined,
    destinationProvinceId: Number(params.destinationProvinceId),
    destinationCityId: [Number(params.destinationCityId)],
    sourceProvinceId: Number(params.sourceProvinceId),
    sourceCityId: Number(params.sourceCityId),
    justInside: params.justInside,
  };

  const cleanedData = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(tripData).filter(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([_, value]) =>
        value !== undefined &&
        value !== '' &&
        value !== 'none' &&
        value !== null &&
        !(Array.isArray(value) && value.length === 0) &&
        !(Array.isArray(value) && value.every(item => item === '')) &&
        !(Array.isArray(value) && value.every(item => item === 'none')) &&
        !(typeof value === 'object' && value !== null && Object.keys(value).length === 0)
    )
  );

  cookie.set('ticketData', cleanedData);

  const res = await DevApiManager.post<ApiData<TripResponse>>('trips', cleanedData);
  return res.data.data;
};
