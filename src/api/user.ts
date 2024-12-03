import { DevApiManager } from '@/libs/utils/dev.client.axios.config';
import { RecentTripsResponse, UserListResponse } from '@/types/user/user';

import { ApiData } from './types';

export const getAllUsers = async (pageNumber: number) => {
  const res = await DevApiManager.get<ApiData<UserListResponse>>(`user?page=${pageNumber}&limit=10`);

  return res.data.data;
};

export const getAllUsersWithParams = async (params: UserBody) => {
  const res = await DevApiManager.post<ApiData<UserListResponse>>('user', params);
  return res.data.data;
};

export const getRecentTripsByUserId = async (id: number, pageNumber: number) => {
  const res = await DevApiManager.get<ApiData<RecentTripsResponse>>(`trips/${id}?page=${pageNumber}&limit=10`);
  return res.data.data;
};

export interface UserBody {
  page: number;
  limit: number;
  status: boolean;
  searchQuery: string;
}
