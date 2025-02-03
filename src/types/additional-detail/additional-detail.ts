export interface CategoriesResponse {
  id: number;
  name: string;
  parent_id: number;
  children: ChildrenDetail[];
  isEditable: boolean;
  hasIcon: boolean;
  icon: string;
  hasBanner: boolean;
  banner: string;
  hasMedia: boolean;
}

export interface ChildrenDetail {
  id: number;
  name: string;
  parent_id: number;
  children: [];
  isEditable: boolean;
  hasIcon: boolean;
  icon: string;
  hasBanner: boolean;
  banner: string;
  hasMedia: boolean;
}
export interface FeaturesResponse {
  id: number;
  name: string;
  features: FeatureDetail[];
  banner: string;
  hasBanner: boolean;
  hasIcon: boolean;
  hasMedia: boolean;
  icon: string;
}
export interface FeatureDetail {
  id: number;
  name: string;
  banner: string;
  hasBanner: boolean;
  hasIcon: boolean;
  hasMedia: boolean;
  icon: string;
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
export interface CreateCategoryBody {
  name: string;
  parent_id: number;
}

export interface SubCategoryBody {
  parent_id: number;
  name: string;
}

export interface addFeatureItemBody {
  name: string;
  featureGroupid: number;
}
export interface FeatureGroupResponse {
  id: number;
  name: string;
  features: FeaturesDetail[];
  banner: string;
  hasBanner: boolean;
  hasIcon: boolean;
  hasMedia: boolean;
  icon: string;
}

export interface FeaturesDetail {
  id: number;
  name: string;
  deletable: boolean;
  banner: string;
  hasBanner: boolean;
  hasIcon: boolean;
  hasMedia: boolean;
  icon: string;
}
export interface CreateFeatureGroupArrayBody {
  name: string;
  featureGroupid: number;
}
