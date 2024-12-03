export interface PlaceListResponse {
  allFilteredPlaces: AllFilteredPlacesDetail[];
  currentPage: number;
  currentLimit: number;
  totalPages: number;
  placesCountBasedOnFilter: number;
}

export interface AllFilteredPlacesDetail {
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
