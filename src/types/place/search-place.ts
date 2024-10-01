export interface SearchPlaceResponse {
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
  pictures: Picture[];
}

export interface Picture {
  id: number;
  path: string;
  type: string;
}
