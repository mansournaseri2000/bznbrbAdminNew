import { PointDetail } from './path-guid';

export interface TopCommentsForProvinceResponse {
  id: number;
  name: string;
  countOfAds: number;
  latestUpdatedAt: number;
}

export interface ProvinceDetailCardDetail {
  id?: number;
  title: string;
  firstLabel: string;
  secondLabel: string;
  firstValue: number | string;
  secondValue: number | string;
  path: string;
  buttonText: string;
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

export interface CommentItemDetail {
  provinceName: string;
  comments: CommentsDetail[];
}
export interface CommentsDetail {
  commentId: number;
  commentContent: string;
  commentName: string;
  commentUpdateTime: number;
}

export interface UpdateCommentBody {
  name: string;
  content: string;
  type: 'COMMENT';
}
export interface CreateCommentBody {
  name: string;
  content: string;
  type: 'COMMENT';
  provincesId: number;
}
