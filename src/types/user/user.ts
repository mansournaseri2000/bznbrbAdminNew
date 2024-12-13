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
  latestTrips: LatestTripsDetail[];
  currentPage: number;
  totalPages: number;
  totalCurrentPageCount: number;
  totalTripsCount: number;
}

export interface UserInfoResponse {
  userInfo: UserInfoDetail;
}

export interface UserInfoDetail {
  status: boolean;
  pic: string | null;
  name: string;
  last_name: string;
  birthday: number;
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
export interface LatestTripsDetail {
  tripId: string;
  fullName: string;
  sourceCityName: string;
  sourceCityId: number;
  sourceCityProvinceId: number;
  destinationCity: string;
  destinationCityId: number;
  destinationCityProvinceId: number;
  departureDate: number;
  returnDate: number;
}
