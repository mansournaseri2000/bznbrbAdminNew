import { DevApiManager } from '@/libs/utils/dev.client.axios.config';
import { RecentTripsResponse, UserInfoResponse, UserListResponse } from '@/types/user/user';

import { ApiData } from './types';

interface InputObject {
  [key: string]: any;
}
export const filterObject = (obj: InputObject): InputObject => {
  const result: InputObject = {};
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    if (value !== null && value !== '' && !(Array.isArray(value) && value.length === 0) && value !== 0 && value !== 'null') {
      result[key] = value;
    }
  });
  return result;
};

export const getAllUsers = async (pageNumber: number) => {
  const res = await DevApiManager.get<ApiData<UserListResponse>>(`user?page=${pageNumber}&limit=10`);

  return res.data.data;
};

export const getAllUsersWithParams = async (params: UserBody) => {
  const obj = {
    ...params,
  };
  const body = filterObject(obj);
  const res = await DevApiManager.post<ApiData<UserListResponse>>('user', body);
  return res.data.data;
};

export const getRecentTrips = async (params: RecentTripsBody) => {
  const obj = {
    ...params,
    originCityId: Number(params.originCityId),
    originProvinceId: Number([params.originProvinceId]),
    destinationCityId: Number(params.destinationCityId),
    destinationProvinceId: Number(params.destinationProvinceId),
    departureDateStart: Boolean(new Date(params.departureDateStart).getTime()) ? new Date(params.departureDateStart).getTime() : null,
    departureDateEnd: Boolean(new Date(params.departureDateEnd).getTime()) ? new Date(params.departureDateEnd).getTime() : null,
    returnDateStart: Boolean(new Date(params.returnDateStart).getTime()) ? new Date(params.returnDateStart).getTime() : null,
    returnDateEnd: Boolean(new Date(params.returnDateEnd).getTime()) ? new Date(params.returnDateEnd).getTime() : null,
    createdAt: Boolean(new Date(params.createdAt).getTime()) ? new Date(params.returnDateEnd).getTime() : null,
    sort: null,
    userId: null,
  };
  const body = filterObject(obj);

  const res = await DevApiManager.post<ApiData<RecentTripsResponse>>('trips/recentTrips', body, {
    headers: {
      userId: params.userId,
    },
  });
  return res.data.data;
};

export const editUser = async (id: number, params: EditUserDetailResponse) => {
  const obj = {
    ...params,
    mobile: null,
    pic: null,
  };
  const body = filterObject(obj);
  const res = await DevApiManager.patch<ApiData<EditUserDetailResponse>>(`user/profile/partiallyEditUser/${id}`, body);
  return res.data;
};

export const getUserInfo = async (id: number) => {
  const res = await DevApiManager.get<ApiData<UserInfoResponse>>(`user/userInfoForUserTrips/${id}`);
  return res.data.data;
};

export type EditUserDetailResponse = Omit<UserInfoResponse, 'id'>;

export interface UserBody {
  page: number;
  limit: number;
  status: boolean | string;
  searchQuery: string;
}

export interface RecentTripsBody {
  page: number;
  userId: number;
  limit: number;
  targetDate: string;
  sortDate: string;
  searchQuery: string;
  originCityId: number | string;
  originProvinceId: number | string;
  destinationCityId: number | string;
  destinationProvinceId: number | string;
  departureDateStart: number | string;
  departureDateEnd: number | string;
  returnDateStart: number | string;
  returnDateEnd: number | string;
  createdAt: number | string;
}
