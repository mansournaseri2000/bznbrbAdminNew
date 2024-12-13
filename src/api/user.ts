import { DevApiManager } from '@/libs/utils/dev.client.axios.config';
import { RecentTripsResponse, UserInfoResponse, UserListResponse } from '@/types/user/user';

import { ApiData } from './types';

export const getAllUsers = async (pageNumber: number) => {
  const res = await DevApiManager.get<ApiData<UserListResponse>>(`user?page=${pageNumber}&limit=10`);

  return res.data.data;
};

export const getAllUsersWithParams = async (params: UserBody) => {
  const res = await DevApiManager.post<ApiData<UserListResponse>>('user', params);
  return res.data.data;
};

export const getRecentTrips = async (params: RecentTripsBody) => {
  const res = await DevApiManager.post<ApiData<RecentTripsResponse>>('trips/recentTrips', params, {
    headers: {
      userId: params.userId,
    },
  });
  return res.data.data;
};

export const editUser = async (id: number, params: EditUserDetailResponse) => {
  const res = await DevApiManager.patch<ApiData<EditUserDetailResponse>>(`user/profile/partiallyEditUser/${id}`, params);
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
  status: boolean;
  searchQuery: string;
}

export interface RecentTripsBody {
  page: number;
  userId: number;
  limit: number;
  targetDate: string;
  sortDate: string;
  originCityId: number;
  originProvinceId: number;
  destinationCityId: number;
  destinationProvinceId: number;
  departureDateStart: number;
  departureDateEnd: number;
  returnDateStart: number;
  returnDateEnd: number;
}
