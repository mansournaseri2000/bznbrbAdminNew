export interface FilterStateOptions {
  page: number;
  departureDateStart: number | string;
  departureDateEnd: number | string;
  returnDateStart: number | string;
  returnDateEnd: number | string;
  dateStart: number | string;
  dateEnd: number | string;

  provinceId: number | string;
  cityId: number | string;
  originProvinceId: number | string;
  originCityId: number | string;
  destinationProvinceId: number | string;
  destinationCityId: number | string;
  pointTypes: number[];
  parentCategoryId: number | string;
  subCategoryId: number[];

  is_Published: boolean | string;
  status: boolean | string;
  mainPic: boolean | string;
  gallery: boolean | string;
  info: boolean | string;
  coordinates: boolean | string;
  description: boolean | string;
  features: boolean | string;
  analyse: boolean | string;
  seo: boolean | string;
  base: boolean | string;
  text: boolean | string;
  related: boolean | string;

  budgetStart: number | string;
  budgetEnd: number | string;
}
