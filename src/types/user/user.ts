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

export interface RecentTripsResponse {
  userInfo: UserInfoDetail;
  recentUserTrips: '';
  totalUserTripsCount: number;
  totalPages: number;
}

export interface UserInfoDetail {
  status: boolean;
  name: string;
  last_name: string;
  birthday: string;
  mobile: string;
  gender: 'MALE' | 'FEMALE';
  email: string;
  id: number;
}
export interface RecentUserTripsDetail {
  tripId: string;
  sourceCityName: string;
  destinationCity: string;
  departureDate: number;
  returnDate: number;
  tripCreationDate: number;
}
