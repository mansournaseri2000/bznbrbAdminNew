export type AdsItemsDetail = {
  id: string;
  path: string;
  alt: string;
  position: string;
  slug: string;
  description: string;
};

export interface AdsPageResponse {
  key: AdsPageKeyOptions;
  label: string;
  holder: string;
  space: number;
  holders: string[];
  freeSpace: number;
  latestUpdatedAt: number;
}

export type AdsPageKeyOptions = 'main_page' | 'planner' | 'planner_trips' | 'tourmaker' | 'tours' | 'article' | 'article_list' | 'maps' | 'place' | 'province' | 'province_places' | 'category';

export interface AdsHoldersResponse {
  id: number;
  status: boolean;
  path: string;
  page: string;
  position: string;
  description: string;
  alt: string;
  slug: string;
  summery: string;
  website: string;
  socialMedia: string;
  sponsor: string;
  deletedAt: number;
  createdAt: number;
  updatedAt: number;
}

export interface ProvinceListResponse {
  provinces: ProvincesDetail[];
}
export interface ProvincesDetail {
  id: number;
  name: string;
  bannerCount: number;
  lastUpdated: number;
}

export interface ProvinceListByIdResponse {
  provinces: ProvinceDetailById[];
}

export interface ProvinceDetailById {
  provinceId: number;
  provinceName: string;
  cityId: number;
  cityName: string;
  lastUpdated: number;
  bannerCount: number;
}
