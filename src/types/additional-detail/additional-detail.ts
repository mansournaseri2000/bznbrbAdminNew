export interface CategoriesResponse {
  id: number;
  name: string;
  parent_id: number;
  children: ChildrenDetail[];
  isEditable: boolean;
}

export interface ChildrenDetail {
  id: number;
  name: string;
  parent_id: number;
  children: [];
  isEditable: boolean;
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
export interface CreateCategoryBody {
  name: string;
}

export interface SubCategoryBody {
  parent_id: number;
  subCategoryNames: string[];
}

export interface addFeatureItemBody {
  name: string;
  featureGroupid: number;
}
export interface FeatureGroupResponse {
  id: number;
  name: string;
  features: FeaturesDetail[];
}

export interface FeaturesDetail {
  id: number;
  name: string;
  deletable: boolean;
}
