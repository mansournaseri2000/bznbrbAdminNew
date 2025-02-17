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
  hasVector: boolean;
  hasPic: boolean;
  hasGallery: boolean;
  hasMedia: boolean;
}

export interface AllProvincesByIdResponse {
  id: number;
  name: string;
  hasIcon: true;
  icon: string;
  hasBanner: boolean;
  banner: string;
  hasMedia: boolean;
  children: ProvinceChildrenDetail[];
}
export interface ProvinceChildrenDetail {
  id: number;
  name: string;
  hasMedia: boolean;
  hasIcon: boolean;
  icon: string;
  hasBanner: boolean;
  banner: string;
  children: citiesDetailForProvince[];
}

export interface citiesDetailForProvince {
  id: number;
  name: string;
  hasIcon: boolean;
  icon: string;
  hasBanner: boolean;
  banner: string;
  hasMedia: boolean;
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

export interface CreateCityListBody {
  name: string;
  provinceId: number;
}

export interface AddTownToCityBody {
  name: string;
  citiesId: number;
}

export interface CitiesByProvinceIdResponse {
  id: number;
  name: string;
  children: citiesDetailForProvince[];
}

export interface ProvinceImagesResponse {
  id: number;
  name: string;
  pic: string;
  icon: string;
  gallery: GalleryDetail[];
}

export interface GalleryDetail {
  id: number;
  path: string;
  description: string;
  alt: string;
  slug: string;
  provincesId: number;
}

export interface ProvinceAboutResponse {
  name: string;
  titleOfDetail: string;
  infoDescription: string;
  famousPerson: string;
  AreaDetails: AreaDetail[];
}

export interface AreaDetail {
  id: number;
  titleItem: string;
  descriptionItem: string;
  pathItem: string;
  provincesId: number;
  type: 'PROVINCE';
}

export interface EditAreaBody {
  id: number;
  titleItem: string;
  descriptionItem: string;
}

export type CreateAreaBody = EditAreaBody & {
  type: 'PROVINCE';
};

export interface CreateAndEditAreaResponse {
  id: number;
  titleItem: string;
  descriptionItem: string;
  pathItem: string;
  provincesId: number;
  type: 'PROVINCE';
}

export interface UpdateProvinceBody {
  type: 'PROVINCE';
  id: number;
  titleOfDetail: string;
  famousPerson: string;
  infoDescription: string;
}
