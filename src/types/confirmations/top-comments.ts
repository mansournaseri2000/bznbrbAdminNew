import { PointDetail } from './path-guid';

export interface ProvinceTopCommentsResponse {
  allProvinceTopComments: ProvinceTopCommentsDetail[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
}
export interface ProvinceTopCommentsDetail {
  id: number;
  province: string;
  activeComments: number;
  lastEditDate: string;
}
export interface TopCommentsItemListResponse {
  allTopCommentsItem: TopCommentItemDetail[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
}
export interface TopCommentItemDetail {
  id: number;
  point: PointDetail;
  user: User;
  comment: string;
}
export interface User {
  pic: string;
  username: string;
  last_name: string;
  date: string;
}
export interface PointCommentsDetail {
  point: PointDetail;
  PointCommentItem: PointCommentItemDetail[];
}
export interface PointCommentItemDetail {
  user: User;
  comment: string;
}
