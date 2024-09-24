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

type Place_Category = {
  name: string;
  score: number;
};
type Place_TripLimitation = {
  name: string;
  score: number;
};

type Place_TripSeason = {
  name: string;
  score: number;
  timing: number;
};

type Place_TripType = {
  name: string;
  score: number;
};

type PlaceDetails = {
  name: string;
  description: string;
};

export type details = {
  id: number;
  name: string;
};

type PlaceWorkTime = {
  id: number;
  placeId: number;
  dayOfWeek: string;
  firstOpenTime: string;
  secondOpenTime: string;
  firstCloseTime: string;
  secondCloseTime: string;
};

export type PlaceResponse = {
  id: number;
  city_id: number;
  name: string;
  slug: string;
  description: string;
  category_id: number;
  lat: string;
  lng: string;
  address: string;
  tell: string | null;
  website: string | null;
  email: string | null;
  summary: string;
  tags: string;
  keywords: string;
  meta_description: string;
  meta_title: string;
  price: string;
  entrance_fee: string | null;
  suggested_time: string | null;
  trip_value: number;
  airplane: string | null;
  bus: string | null;
  car: string | null;
  hike: string | null;
  ship: string | null;
  subway: string | null;
  train: string | null;
  taxi: string | null;
  status: boolean;
  Place_Category: Place_Category[];
  Place_TripLimitation: Place_TripLimitation[];
  Place_TripSeason: Place_TripSeason[];
  Place_TripType: Place_TripType[];
  pictures: picture[];
  PlaceDetails: PlaceDetails[];
  PlaceWorkTime: PlaceWorkTime[];
  features: any;
};
