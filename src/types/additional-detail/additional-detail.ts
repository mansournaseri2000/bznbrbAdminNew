export interface CategoriesResponse {
  id: number;
  name: string;
  parent_id: number;
  children: ChildrenDetail[];
}

export interface ChildrenDetail {
  id: number;
  name: string;
  parent_id: number;
  children: [];
}
export interface FeaturesResponse {
  id: number;
  name: string;
  features: FeatureDetail[];
}
export interface FeatureDetail {
  id: number;
  name: string;
}

export interface AllProvincesResponse {
  id: number;
  name: string;
  citiesCount: number;
  lastUpdated: number;
}

export interface AllProvincesByIdResponse {
  id: number;
  name: string;
  Cities: Cities[];
}
export interface Cities {
  id: number;
  name: string;
}
