export interface UserListResponse {
  latestUsers: LatestUsersDetail[];
  currentPage: number;
  totalPages: number;
  totalCurrentPageCount: number;
  totalUsersCount: number;
}

export interface LatestUsersDetail {
  id: number;
  fullName: string;
  email: string;
  mobileNumber: string;
  status: boolean;
}
