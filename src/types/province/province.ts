export interface AllProvincesResponse {
  id: number;
  name: string;
  citiesCount: number;
  lastUpdated: number;
}

export interface AllProvincesByIdResponse {
  id: number;
  name: string;
  Cities: Cities[];
}
export interface Cities {
  id: number;
  name: string;
}
