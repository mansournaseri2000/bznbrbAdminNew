export interface AllPendingCommentsResponse {
  AllComments: AllCommentsDetail[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
}

export interface AllCommentsDetail {
  id: number;
  fullName: string;
  commentDate: number;
  content: string;
  type: 'ARTICLE' | 'PLACE';
  pic?: string;
  placeName?: string;
  placeCity?: string;
  placeProvince?: string;
  placeId?: number;
  articleId?: number;
  articleTitle?: string;
  articleCity?: string;
  articleProvince?: string;
  articlePlaceId?: string;
}
