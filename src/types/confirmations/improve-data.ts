import { PointDetail } from './path-guid';

export interface ImproveDataListResponse {
  allPathGuides: ImproveDataDetail[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
}
export interface ImproveDataDetail {
  id: number;
  point: PointDetail;
  mobile: string;
  website: string;
  email: string;
  province: string;
  city: string;
  content: string;
  //   isRead: boolean;
}
