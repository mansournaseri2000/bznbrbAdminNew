export interface ImageSentListResponse {
  filteredPics: FilteredPicsDetail[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
}
export interface FilteredPicsDetail {
  id: number;
  status: boolean;
  isTop: boolean;
  picture: string;
  placeId: number;
  placeName: string;
  placeCity: string;
  placeProvince: string;
  description: string;
}
