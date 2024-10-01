export interface CreatePlaceResponse {
  name: string;
  slug: string;
  description: string;
  type: string;
  pic: string;
  banner: string;
  category_id: number;
  city_id: number;
  lat: string;
  lng: string;
  address: string;
  tell: string;
  website: string;
  email: string;
  summary: string;
  tags: string;
  keywords: string;
  meta_description: string;
  meta_title: string;
  beside: string;
  level: number;
  work_time: string;
  price: string;
  entrance_fee: string;
  suggested_time: string;
  is_free: string;
  rating: number;
  votes_count: number;
  trip_value: number;
  has_trip: string;
  top_banner: number;
  airplane: string;
  bus: string;
  car: string;
  hike: string;
  ship: any;
  subway: string;
  taxi: string;
  train: string;
  created_at: string;
  updated_at: string;
  Features: Feature[];
  PlaceDetails: PlaceDetail[];
  TripTypes: TripType[];
  PlaceWorkTimes: PlaceWorkTime[];
  PlaceCategories: PlaceCategory[];
  PlaceTripLimitations: PlaceTripLimitation[];
  PlaceTripSeasons: PlaceTripSeason[];
  area: string;

  cost: string;
  renown: string;
}

export interface Feature {
  featureId: number;
}

export interface PlaceDetail {
  detailId: number;
  descriptions: string;
}

export interface TripType {
  tripTypeId: number;
  score: number;
}

export interface PlaceWorkTime {
  dayOfWeek: string;
  firstOpenTime: string;
  secondOpenTime: string;
  firstCloseTime: string;
  secondCloseTime: string;
}

export interface PlaceCategory {
  categoryId: number;
  score: number;
}

export interface PlaceTripLimitation {
  tripLimitationId: number;
  score: number;
}

export interface PlaceTripSeason {
  tripSeasonId: number;
  score: number;
  timing: number;
}
