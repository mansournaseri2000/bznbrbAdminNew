export interface CommentListResponse {
  allComments: CommentsDetail[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
}

export interface CommentsDetail {
  id: number;
  content: string;
  score?: number;
  createdAt: string;
  status?: boolean;
  suggest?: boolean;
  service_quality?: number;
  value_vs_price?: number;
  food_and_service_quality?: number;
  location_accessibility?: number;
  staff_satisfaction?: number;
  TripType?: TripSeason;
  users: UserDetail;
}

export interface TripSeason {
  id: number;
  name: 'بهار' | 'تابستان' | 'پاییز' | 'زمستان';
}

export interface UserDetail {
  id: number;
  name: string;
  last_name: string;
  mobile: string;
  pic: string | null;
}

export interface Places {
  id: number;
  name: string;
  Cities: CitesDetail;
}

export interface CitesDetail {
  id: number;
  name: string;
  Provinces: ProvincesDetail;
}

export interface ProvincesDetail {
  id: number;
  name: string;
}
