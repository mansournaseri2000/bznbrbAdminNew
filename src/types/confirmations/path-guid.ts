export interface TravelMethodsSuggestionsResponse {
  filteredSuggestions: FilteredSuggestionsDetail[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
}
export interface FilteredSuggestionsDetail {
  id: number;
  status: number;
  travelMode: 'HIKE' | 'AIRPLANE' | 'BUS' | 'CAR' | 'SHIP' | 'TRAIN' | 'TAXI';
  description: string;
  placeId: number;
  placeName: string;
  placeCity: string;
  placeProvince: string;
}

export interface PointDetail {
  id: number;
  name: string;
  Province: string;
  city: string;
}
