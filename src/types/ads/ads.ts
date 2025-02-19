export type AdsListResponse = {
  id: string;
  pic: string;
  url: string;
  altText: string;
  description: string;
};

export interface AdsPageResponse {
  key: AdsPageKeyOptions;
  label: string;
  holdersCount: number;
  latestUpdatedAt: number;
}

export type AdsPageKeyOptions = 'main_page' | 'planner' | 'planner_trips' | 'tourmaker' | 'tours' | 'article' | 'articlelist' | 'maps' | 'place' | 'province' | 'city';

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
