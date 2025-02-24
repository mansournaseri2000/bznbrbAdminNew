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

export interface CreateAdBody {
  type: 'ADS';
  description: string;
  page: string;
  holder: string;
  alt: string;
  slug: string;
  file: File;
  website: string;
  socialMedia: string;
  sponsor: string;
  townId: number | null;
  provinceId: number | null;
  cityId: number | null;
}

export interface EditADsBody {
  id: number;
  type: 'ADS';
  alt: string;
  description: string;
  summery: string;
  townId: number | null;
  website: string;
  socialMedia: string;
  sponsor: string;
}

export interface DeleteAdBody {
  id: number;
  type: 'ADS';
}
