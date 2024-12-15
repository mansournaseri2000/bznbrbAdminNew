
export interface ImageSentListResponse {
  filteredPics: FilteredPicsDetail[];
  currentLimit: number;
  currentPage: number;
  allPicsCount: number;
  allPicsPages: number;
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
  content?:string
}
