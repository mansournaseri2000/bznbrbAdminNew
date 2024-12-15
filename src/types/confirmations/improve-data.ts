export interface ImproveDataListResponse {
  PlaceImproveContent: PlaceImproveContentDetail[];
  PlaceImproveContentCount: number;
  CurrentShowingPlaceImproveContent: number;
  CurrentShowingPlaceImproveContentLimit: number;
  CurrentShowingPlaceImproveContentPage: number;
  AllPlaceImprovementContentPages: number;
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
