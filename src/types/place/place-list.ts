export interface PlaceListResponse {
  placesDetail: PlacesDetail[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
}

export interface PlacesDetail {
  id: number;
  name: string;
  city?: string;
  province?: string;
  pictrues: Pictrue[];
}

export interface Pictrue {
  id: number;
  path: string;
  type: string;
}
