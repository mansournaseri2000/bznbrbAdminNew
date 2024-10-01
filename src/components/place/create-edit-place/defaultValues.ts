import { serializeFeatures } from '@/libs/utils';

// Example data
export const placeCategories = [
  { id: 3, name: 'هنرگردی', score: 0 },
  { id: 5, name: 'تاریخ‌گردی', score: 0 },
  { id: 7, name: 'شهرگردی', score: 0 },
  { id: 4, name: 'گردشگری تفریحی', score: 0 },
  { id: 1, name: 'طبیعت‌گردی', score: 0 },
  { id: 2, name: 'گردشگری ورزشی', score: 0 },
  { id: 191, name: 'فروشگاه', score: 0 },
  { id: 8, name: 'گردشگری سلامت', score: 0 },
  { id: 169, name: 'اطلاعات توریستی', score: 0 },
  { id: 184, name: 'صنایع دستی', score: 0 },
  { id: 192, name: 'دنیای ناشناخته', score: 0 },
  { id: 10, name: 'از کجا بخریم؟', score: 0 },
  { id: 6, name: 'گردشگری مذهبی', score: 0 },
];

export const placeTripLimitations = [
  { id: 4, name: 'معلولین', score: 0 },
  { id: 1, name: 'بانوان', score: 0 },
  { id: 2, name: 'کودک و نوزاد', score: 0 },
  { id: 3, name: 'سالمندان', score: 0 },
  { id: 5, name: '"دارای بیماری خاص"', score: 0 },
];

// Example data
export const placeTripTypes = [
  { id: 1, name: 'خانوادگی (همراه کودک )', score: 0 },
  { id: 2, name: 'خانوادگی (همراه افراد مسن )', score: 0 },
  { id: 3, name: 'خانوادگی (بدون شرایط سنی)', score: 0 },
  { id: 4, name: 'مجردی', score: 0 },
  { id: 5, name: 'کاری و تفریحی', score: 0 },
  { id: 6, name: 'متفرقه', score: 0 },
  { id: 7, name: 'ماجراجویانه', score: 0 },
  { id: 9, name: 'سفر کوله گردی', score: 0 },
  { id: 8, name: 'سفر دوستانه', score: 0 },
];

export const placeTripSeasons = [
  { id: 1, name: 'بهار', score: 0, timing: 0 },
  { id: 2, name: 'تابستان', score: 0, timing: 0 },
  { id: 4, name: 'زمستان', score: 0, timing: 0 },
  { id: 3, name: 'پاییز', score: 0, timing: 0 },
];

export const featuresItems = [
  {
    title: 'امکانات کلی',
    id: 1,
    items: [
      { id: 1, name: 'مناسب برای بانوان', en_name: null },
      { id: 2, name: 'کارتخوان', en_name: null },
      { id: 4, name: 'نمازخانه', en_name: null },
      { id: 7, name: 'تلفن عمومی', en_name: null },
      { id: 8, name: 'پارکینگ/ جای پارک', en_name: null },
      { id: 12, name: 'مناسب برای کهنسالان', en_name: null },
      { id: 14, name: 'سرویس بهداشتی', en_name: null },
      { id: 15, name: 'سرپوشیده', en_name: null },
      { id: 17, name: 'محل استراحت', en_name: null },
      { id: 18, name: 'مناسب برای کودکان', en_name: null },
      { id: 33, name: 'آنتن‌دهی تلفن همراه', en_name: null },
    ],
  },
  {
    title: 'تفریحات',
    id: 5,
    items: [
      { id: 24, name: 'عکاسی', en_name: null },
      { id: 26, name: 'پیاده‌روی', en_name: null },
    ],
  },
  {
    title: 'سختی مسیر',
    id: 7,
    items: [{ id: 34, name: 'آسان (راهپیمایی)', en_name: null }],
  },
];

export type placeWorkTimes = {
  dayOfWeek: string;
  type: string;
  isTimed: boolean;
  timing: { time: string; key: string; faKey: string }[];
};

export type fomrData = {
  name: string;
  category_id: number;
  sub_category_id: number;
  website: string;
  basicInfoDescription: string;
  basicInfosummary: string;
  placeID: number | null;

  isLoading: boolean;
  uploadImage: File | null;
  pictures: { path: string; type: string; id: number }[];

  provinceId: number;
  cityID: number;
  tell: string;
  email: string;
  address: string;
  lat: string;
  lng: string;
  area: string;

  airplane: string | null;
  bus: string | null;
  car: string | null;
  hike: string | null;
  ship: string | null;
  subway: string | null;
  taxi: string | null;
  train: string | null;

  features: { featureId: number; value: number }[];
  TripTypes: { tripTypeId: number; score: number }[];

  cost: string;
  renown: string;
  rating: number;
  trip_value: number;

  PlaceCategories: { categoryId: number; score: number }[];
  PlaceTripSeasons: { tripSeasonId: number; score: number; timing: number }[];
  tripLimitations: { tripLimitationId: number; score: number }[];
  keywords: string;
  keyword: string;
  meta_description: string;
  meta_title: string;
  metakeywords: string;
  metakeyword: string;

  PlaceDetails: { detailId: number; descriptions: string }[];
  PlaceWorkTimes: placeWorkTimes[];
};
