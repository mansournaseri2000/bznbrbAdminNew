import { ApiManager } from '@/libs/utils/axios.config';

import { ApiData } from './types';

export type ImageItem = {
  id: number;
  path: string;
  description: string;
  alt: string;
  status: boolean;
};

type ImageGalleryResponse = {
  gallery: ImageItem[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
};

export const getImageGalleryArticle = async (id: number, page: number) => {
  const res = await ApiManager.get<ApiData<ImageGalleryResponse>>(`article/gallery/${id}?page=${page}`);

  return res.data.data;
};
