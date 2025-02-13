export interface CommentListResponse {
  PlaceComments: PlaceCommentsDetail[];
  PlaceRating: number;
  currentPage: number;
  totalPages: number;
  totalCount: number;
}
export interface PlaceCommentsDetail {
  id: number;
  score: number;
  date: number;
  pic: string | null;
  fullName: string;
  content: string;
  likes: number;
  dislikes: number;
}

export interface PlaceResponse {
  id: number;
  city_id: number;
  name: string;
  slug: string;
  description: string;
  category_id: number;
  parentCategory_id: any;
  lat: string;
  lng: string;
  address: string;
  tell: any;
  website: any;
  email: any;
  summary: string;
  tags: string;
  keywords: string;
  meta_description: string;
  meta_title: string;
  price: string;
  entrance_fee: any;
  suggested_time: string;
  trip_value: number;
  rating: number;
  airplane: any;
  bus: any;
  car: any;
  hike: any;
  ship: any;
  subway: any;
  train: any;
  taxi: any;
  status: boolean;
  Cities: Cities;
  Place_Category: PlaceCategory[];
  Place_TripLimitation: PlaceTripLimitation[];
  Place_TripSeason: PlaceTripSeason[];
  Place_TripType: PlaceTripType[];
  pictures: Picture[];
  PlaceDetails: PlaceDetail[];
  PlaceWorkTime: PlaceWorkTime[];
  features: Feature[];
  area: string;

  cost: string;
  renown: string;
}

export interface Cities {
  id: number;
  name: string;
  en_name: string;
  Provinces: Provinces;
}

export interface Provinces {
  id: number;
  name: string;
  en_name: string;
}

export interface PlaceCategory {
  id: number;
  name: string;
  score: number;
}

export interface PlaceCategory {
  id: number;
  name: string;
  score: number;
}

export interface PlaceTripLimitation {
  id: number;
  name: string;
  score: number;
}

export interface PlaceTripSeason {
  id: number;
  name: string;
  score: number;
  timing: number;
}

export interface PlaceTripType {
  id: number;
  name: string;
  score: number;
}

export interface Picture {
  id: number;
  path: string;
  type: string;
}

export interface PlaceDetail {
  id: number;
  name: string;
  description: string;
}

export interface PlaceWorkTime {
  id: number;
  placeId: number;
  dayOfWeek: string;
  firstOpenTime: string;
  secondOpenTime: string;
  firstCloseTime: string;
  secondCloseTime: string;
}

export interface Feature {
  title: string;
  id: number;
  items: Item[];
}
export interface Item {
  id: number;
  name: string;
  en_name: any;
}
export interface PlaceImproveContentResponse {
  PlaceImproveContent: PlaceImproveContentDataDetail[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
}
export interface PlaceImproveContentDataDetail {
  id: number;
  name: string;
  phone: string;
  website: string;
  email: string;
  placeProvinceName: string;
  placeCityName: string;
  cityName: string;
  provinceName: string;
  address: string;
  placeId: number;
  placeName: string;
}

export type CreatePointButtonTypes = 'place-info' | 'geographical-location' | 'routing' | 'description' | 'features-facilities' | 'analysis' | 'travel-time' | 'seo-setting';

export type EditPointButtonTypes = CreatePointButtonTypes | 'images' | 'improve-content' | 'comments';

export interface PlaceUserUploadsResponse {
  filteredPics: FilteredPicsOptions[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
}

export interface FilteredPicsOptions {
  id: number;
  status: boolean;
  description: string;
  isTop: boolean;
  picture: string;
}
