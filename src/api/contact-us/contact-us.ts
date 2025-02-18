import { DevApiManager } from '@/libs/utils/dev.client.axios.config';
import { ContactUsResponse, ReplayItemBody } from '@/types/contact-us/contact-us';

import { ApiData } from '../types';

export const getContactUsItems = async (limit: number, page: number) => {
  const res = await DevApiManager.get<ApiData<ContactUsResponse>>(`/contact?limit=${limit}&page=${page}`);
  return res.data.data;
};

export const deleteContactUsItem = async (id: number) => {
  const res = await DevApiManager.delete(`/contact/${id}`);
  return res.data;
};

export const replayItem = async (params: ReplayItemBody) => {
  const res = await DevApiManager.post('/contact/', params);
  return res.data;
};
