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
