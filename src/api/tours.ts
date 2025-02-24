import { DevApiManager } from '@/libs/utils/dev.client.axios.config';
import { RecentToursParams, RecentToursResponse } from '@/types/tours/tours';

import { filterObject, generateSearchParam } from './data-management';
import { ApiData } from './types';

export const getRecentTours = async (params: RecentToursParams) => {
  const obj = filterObject(params);
  delete obj.sort;
  const searchParams = generateSearchParam(obj);
  const res = await DevApiManager.get<ApiData<RecentToursResponse>>(`/tour/recent?${searchParams}`);
  return res.data.data;
};
