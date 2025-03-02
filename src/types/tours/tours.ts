export interface RecentToursResponse {
  tours: ToursDetail[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
}

export interface ToursDetail {
  id: number;
  userMobile: string;
  type: string;
  created_at: number;
  updated_at: number;
  departureDate: number;
  returnDate: number;
  budget: string;
  cityId: number;
  cityName: string;
  provinceId: number;
  provinceName: string;
}

export interface RecentToursParams {
  page: number;
  limit: number;
  searchQuery: string;
  citiesId: number;
  provincesId: number;
  targetDate: string;
  departureDateStart: string;
  departureDateEnd: string;
  returnDateStart: string;
  returnDateEnd: string;
  budgetStart: string;
  budgetEnd: string;
}
