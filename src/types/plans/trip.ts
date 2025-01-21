export interface TripResponse {
  // status: boolean;
  // trip_id: string;
  // days: Day[];
  // input_payload: any;
  trip: TripsDetail;
  user: UserDetail;
}

export interface TripsDetail {
  _id: number;
  data: TripsDataDetail;
}

export interface TripsDataDetail {
  status: boolean;
  is_saved: boolean;
  input_payload: any;
  trip_id: string;
  days: Day[];
}

export interface UserDetail {
  id: number;
  profile: string;
  name: string;
  last_name: string;
  birthday: number;
  mobile: string;
  email: string;
  gender: 'MALE' | 'FEMALE';
  status: boolean;
  isAdmin: boolean;
  fullName?: string;
  createTime?: number;
}

export interface Day {
  day_id: number;
  date: string;
  commonView: CommonView[];
  mapView: MapView[];
}
export interface CommonView {
  point_id: number;
  type: string;
  startTime: string;
  endTime: string;
  title: string;
  description: string;
  comment: string;
  distance: number;
  path: string;
  slug: string;
  ads: { path: string; slug: string }[];
}
export interface MapView {
  point_id: number;
  lat: number;
  lng: number;
  priority: number;
  description: string;
  pic: any;
  title: string;
}
