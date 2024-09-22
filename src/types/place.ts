export interface picture {
  id: number;
  path: string;
  type: string;
}

export interface PlaceDetail {
  id: number;
  name: string;
  city: string | null;
  province: string | null;
  pictures: picture[];
}

export interface PlacesDetailResponse {
  placesDetail: PlaceDetail[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
}

export interface Detail {
  id: number;
  name: string;
}

interface SubFeature {
  id: number;
  name: string;
}

export interface FeatureCategory {
  id: number;
  name: string;
  features: SubFeature[];
}

export interface TripData {
  id: number;
  name: string;
  status: boolean;
}

export type children = {
  id: number;
  name: string;
  parent_id: number;
};

export interface Category {
  id: number;
  name: string;
  parent_id: number;
  children: children[];
}

export interface TripLimitation {
  id: number;
  name: string;
  status: boolean;
}

export interface Season {
  id: number;
  name: string;
}

export type ProvinceCities = {
  id: number;
  name: string;
};

export type Province = {
  id: number;
  name: string;
  Cities: ProvinceCities[];
};

export interface City {
  id: number;
  name: string;
  lat: string;
  lng: string;
  trip_value: number;
  en_name: string;
  pic: string | null;
  banner: string | null;
  slug: string;
  keywords: string;
  tags: string;
  meta_description: string | null;
  status: boolean;
  position: number | null;
  places_count: number;
  provinceId: number;
  created_at: string | null;
  updated_at: string | null;
}

export type AllPlaceConstant = {
  details: Detail[];
  features: FeatureCategory[];
  tripDatas: TripData[];
  categories: Category[];
  tripLimitations: TripLimitation[];
  seasons: Season[];
  provinces: Province[];
  cities: City[];
};
