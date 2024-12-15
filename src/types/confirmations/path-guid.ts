export interface TravelMethodsSuggestionsResponse {
  filteredSuggestions: FilteredSuggestionsDetail[];
  currentLimit: number;
  currentPage: number;
  allPages: number;
  CurrentPageCount: number;
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
