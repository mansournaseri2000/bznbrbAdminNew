import { ApiManager } from '@/libs/utils/axios.config';
import { CommentListResponse } from '@/types/comment/comment-list';

import { ApiData } from './types';

/**
 * All comments services
 * _______________________________________________________________________________
 */
export const GetAllComments = async (pageNumber: number) => {
  const res = await ApiManager.get<ApiData<CommentListResponse>>(`comment?page=${pageNumber}`);
  return res.data.data;
};
