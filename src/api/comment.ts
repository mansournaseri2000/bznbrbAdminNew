import { ApiManager } from '@/libs/utils/axios.config';
import { CommentListResponse } from '@/types/comment/comment-list';

import { ApiData } from './types';

/**
 * All comments services
 * _______________________________________________________________________________
 */
export const getAllComments = async (pageNumber: number) => {
  const res = await ApiManager.get<ApiData<CommentListResponse>>(`comment?page=${pageNumber}`);
  return res.data.data;
};
/**
 * Remove Comments services
 * _______________________________________________________________________________
 */
export const removeComment = async (id: number) => {
  const res = await ApiManager.delete(`comment/${id}`);

  return res.data;
};
/**
 * Update Comments services
 * _______________________________________________________________________________
 */
export const updateComment = async (id: number) => {
  const res = await ApiManager.put(`comment/${id}`);
  return res.data;
};
