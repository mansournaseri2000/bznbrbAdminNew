import { DevApiManager } from '@/libs/utils/dev.client.axios.config';
import { UserListResponse } from '@/types/user/user';

import { ApiData } from './types';

export const getAllUsers = async (pageNumber: number) => {
  const res = await DevApiManager.get<ApiData<UserListResponse>>(`user?page=${pageNumber}&limit=10`);

  return res.data.data;
};

export const getAllUsersWithParams = async (params: UserBody) => {
  const res = await DevApiManager.post<ApiData<UserListResponse>>('user', params);
  return res.data.data;
};

export interface UserBody {
  page: number;
  limit: number;
  status: boolean;
  searchQuery: string;
}

// `user?${params.toString()}&limit=10`
// params: {
//   page: pageNumber,
//   status: status,
//   limit: 10,
// },

// const params = new URLSearchParams();
// params.append('page', pageNumber.toString());

// if (search && search.length > 0) {
//   params.append('search', search);
// }

// if (status !== undefined && status !== null) {
//   params.append('status', String(status));
// }
