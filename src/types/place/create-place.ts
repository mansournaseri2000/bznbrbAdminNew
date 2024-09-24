type Feature = {
  featureId: number;
};

type PlaceDetail = {
  detailId: number;
  descriptions: string;
};

type TripType = {
  tripTypeId: number;
  score: number;
};

type PlaceWorkTime = {
  dayOfWeek: string;
  firstOpenTime: string;
  secondOpenTime: string;
  firstCloseTime: string;
  secondCloseTime: string;
};

type PlaceCategorie = {
  categoryId: number;
  score: number;
};

type PlaceTripLimitation = {
  tripLimitationId: number;
  score: number;
};

type PlaceTripSeason = {
  tripSeasonId: number;
  score: number;
  timing: number;
};

export type CreatePlace = {
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
  ship: string | null;
  subway: string;
  taxi: string;
  train: string;
  created_at: string;
  updated_at: string;
  Features: Feature[];
  PlaceDetails: PlaceDetail[];
  TripTypes: TripType[];
  PlaceWorkTimes: PlaceWorkTime[];
  PlaceCategories: PlaceCategorie[];
  PlaceTripLimitations: PlaceTripLimitation[];
  PlaceTripSeasons: PlaceTripSeason[];
};
