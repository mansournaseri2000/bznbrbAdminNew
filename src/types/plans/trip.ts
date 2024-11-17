export interface TripResponse {
  status: boolean;
  trip_id: string;
  days: Day[];
  input_payload: any;
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
