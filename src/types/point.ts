export interface Picture {
  id: number;
  path: string;
  type: string; // If there are specific types like "MAIN", consider using an enum
}

// Define the type for place details
export interface PlaceDetail {
  id: number;
  name: string;
  city: string | null;
  province: string | null;
  pictrues: Picture[]; // Note the spelling correction from "pictrues" to "pictures"
}

// Define the main type for the response containing placesDetail and pagination info
export interface PlacesDetailResponse {
  placesDetail: PlaceDetail[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
}
