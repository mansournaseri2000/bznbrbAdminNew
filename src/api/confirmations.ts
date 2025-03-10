import { DevApiManager } from '@/libs/utils/dev.client.axios.config';
import { ImageSentListResponse } from '@/types/confirmations/image-sent';
import { ImproveDataListResponse } from '@/types/confirmations/improve-data';
import { TravelMethodsSuggestionsResponse } from '@/types/confirmations/path-guid';
import { AllPendingCommentsResponse } from '@/types/confirmations/pending-comments';
import { CommentItemDetail, CreateCommentBody, TopCommentsForProvinceResponse, UpdateCommentBody } from '@/types/confirmations/top-comments';

import { ApiData } from './types';

export const getAllPicUserUploads = async (page: number) => {
  const res = await DevApiManager.get<ApiData<ImageSentListResponse>>(`places/getAllPlacePicUserUploadsForAllPlaces?page=${page}&limit=10`);
  return res.data.data;
};

export const getAllImproveContent = async (page: number) => {
  const res = await DevApiManager.get<ApiData<ImproveDataListResponse>>(`places/getAllPlaceImproveContent?page=${page}&limit=10`);
  return res.data.data;
};

export const getAllTravelMethodsSuggestions = async (page: number) => {
  const res = await DevApiManager.get<ApiData<TravelMethodsSuggestionsResponse>>(`/places/getAllTravelMethodSuggestions?page=${page}&limit=10`);
  return res.data.data;
};

export const getAllTopCommentsForProvince = async () => {
  const res = await DevApiManager.get<ApiData<TopCommentsForProvinceResponse[]>>('ads');
  return res.data.data;
};

export const getCommentsByProvinceId = async (provinceId: number) => {
  const res = await DevApiManager.get<ApiData<CommentItemDetail>>(`/ads/comments/${provinceId}`);
  return res.data.data;
};

export const getAllPendingComments = async (page: number) => {
  const res = await DevApiManager.get<ApiData<AllPendingCommentsResponse>>(`/comment/all?page=${page}&limit=10`);
  return res.data.data;
};

export const publishTravelSuggestion = async (id: number) => {
  const res = await DevApiManager.patch(`/places/changeTravelMethodStatusById/${id}?status=true`);
  return res.data;
};

export const removeTravelSuggestion = async (id: number) => {
  const res = await DevApiManager.patch(`/places/changeTravelMethodStatusById/${id}?status=false`);
  return res.data;
};

export const acceptPicUserUpload = async (id: number) => {
  const res = await DevApiManager.patch(`/places/acceptPlacePicUserUploads/${id}`);
  return res.data;
};

export const deletePicUserUpload = async (id: number) => {
  const res = await DevApiManager.delete(`/places/deletePlacePicUserUploads/${id}`);
  return res.data;
};

export const makeTopPicUserUpload = async (id: number) => {
  const res = await DevApiManager.patch(`/places/makeTopPlacePicUserUploads/${id}`);
  return res.data;
};

export const acceptPlaceImproveContent = async (id: number) => {
  const res = await DevApiManager.patch(`/places/acceptPlaceImproveContent/${id}`);
  return res.data;
};

export const deletePlaceImproveContent = async (id: number) => {
  const res = await DevApiManager.delete(`/places/deletePlaceImproveContent/${id}`);
  return res.data;
};

export const updateCommentById = async (id: number, params: UpdateCommentBody) => {
  const res = await DevApiManager.put<ApiData<UpdateCommentBody>>(`/ads/comments/${id}`, params);
  return res.data;
};

export const deleteCommentById = async (id: number) => {
  const res = await DevApiManager.delete(`/ads/comments/${id}`);
  return res.data;
};

export const createComment = async (params: CreateCommentBody) => {
  const res = await DevApiManager.post('/ads', params);
  return res.data;
};

export const deleteTravelMethid = async (id: number) => {
  const res = await DevApiManager.delete(`places/tarvelMethod/${id}`);
  return res.data;
};

export const removePlace = async (id: number) => {
  const res = await DevApiManager.delete(`places/${id}`);
  return res.data;
};
