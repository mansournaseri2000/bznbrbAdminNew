export interface ImproveDataListResponse {
  PlaceImproveContent: PlaceImproveContentDetail[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
}
export interface PlaceImproveContentDetail {
  id: number;
  name: string;
  phone: string;
  website: string;
  email: string;
  provinceName: string;
  cityName: string;
  address: string;
  placeName: string;
  placeId: number;
  status: boolean;
  content: string;
}
