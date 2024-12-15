import { DevApiManager } from '@/libs/utils/dev.client.axios.config';
import { ImageSentListResponse } from '@/types/confirmations/image-sent';
import { ImproveDataListResponse } from '@/types/confirmations/improve-data';
import { TravelMethodsSuggestionsResponse } from '@/types/confirmations/path-guid';
import { CommentItemDetail, TopCommentsForProvinceResponse } from '@/types/confirmations/top-comments';

import { ApiData } from './types';

export const getAllPicUserUploads = async () => {
  const res = await DevApiManager.get<ApiData<ImageSentListResponse>>('places/getAllPlacePicUserUploadsForAllPlaces');
  return res.data.data;
};

export const getAllImproveContent = async () => {
  const res = await DevApiManager.get<ApiData<ImproveDataListResponse>>('places/getAllPlaceImproveContent');
  return res.data.data;
};

export const getAllTravelMethodsSuggestions = async () => {
  const res = await DevApiManager.get<ApiData<TravelMethodsSuggestionsResponse>>('/places/getAllTravelMethodSuggestions', {
    headers: {
      limit: 10,
      page: 1,
    },
  });
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
