import { PointDetail } from './path-guid';

export interface ImageSentListResponse {
  allPathGuides: ImageSentDetail[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
}
export interface ImageSentDetail {
  id: number;
  point: PointDetail;
  image: string;
  content: string;
  //   isRead: boolean;
}
