export interface PlaceListResponse {
  allFilteredPlaces: AllFilteredPlacesDetail[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
}

export interface AllFilteredPlacesDetail {
  id: number;
  name: string;
  city?: string;
  province?: string;
  category?: string;
  parentCategory?: string;
  isPlaceInfoComplete: boolean;
  isPublished?: boolean;
  // pictrues: Pictrue[];
}

export interface Pictrue {
  id: number;
  path: string;
  type: string;
}
