export interface PlaceConstantResponse {
  details: Detail[];
  features: Feature[];
  tripDatas: TripData[];
  categories: Category[];
  tripLimitations: TripLimitation[];
  seasons: Season[];
  provinces: Province[];
  cities: CityItems[];
  PlaceType: PlaceType[];
}

export interface Detail {
  id: number;
  name: string;
}

export interface Feature {
  id: number;
  name: string;
  features: FeatureItems[];
}

export interface FeatureItems {
  id: number;
  name: string;
}

export interface TripData {
  id: number;
  name: string;
  status: boolean;
}

export interface Category {
  id: number;
  name: string;
  parent_id: number;
  children: Children[];
}

export interface Children {
  id: number;
  name: string;
  parent_id: number;
  children: any[];
}

export interface TripLimitation {
  id: number;
  name: string;
  status: boolean;
}

export interface Season {
  id: number;
  name: string;
  timing: number | undefined;
}

export interface Province {
  id: number;
  name: string;
  Cities: City[];
}

export interface City {
  id: number;
  name: string;
}

export interface CityItems {
  id: number;
  name: string;
}

export interface PlaceType {
  id: string;
  name: string;
}
