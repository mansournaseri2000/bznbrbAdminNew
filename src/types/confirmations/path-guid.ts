export interface PathGuidListResponse {
  allPathGuides: PathGuidDetail[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
}
export interface PathGuidDetail {
  id: number;
  point: PointDetail;
  content: string;
  //   isRead: boolean;
}
export interface PointDetail {
  id: number;
  name: string;
  Province: string;
  city: string;
}
