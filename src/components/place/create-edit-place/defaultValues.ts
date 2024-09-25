import { serializeFeatures, serializeTripType } from '@/libs/utils';
import { StaticImageData } from 'next/image';

 // Example data
 export const placeTripTypes = [
    { id: 5, name: "کاری و تفریحی", score: 50 },
    { id: 7, name: "ماجراجویانه", score: 10 },
    { id: 4, name: "مجردی", score: 100 },
    { id: 9, name: "سفر کوله گردی", score: 100 },
    { id: 1, name: "خانوادگی (همراه کودک )", score: 100 },
    { id: 3, name: "خانوادگی (بدون شرایط سنی)", score: 100 },
    { id: 2, name: "خانوادگی (همراه افراد مسن )", score: 100 },
    { id: 8, name: "سفر دوستانه", score: 100 },
    { id: 6, name: "متفرقه", score: 50 }
  ];

export const featuresItems =[
    {
        title: "امکانات کلی",
        id: 1,
        items: [
          { id: 1, name: "مناسب برای بانوان", en_name: null },
          { id: 2, name: "کارتخوان", en_name: null },
          { id: 4, name: "نمازخانه", en_name: null },
          { id: 7, name: "تلفن عمومی", en_name: null },
          { id: 8, name: "پارکینگ/ جای پارک", en_name: null },
          { id: 12, name: "مناسب برای کهنسالان", en_name: null },
          { id: 14, name: "سرویس بهداشتی", en_name: null },
          { id: 15, name: "سرپوشیده", en_name: null },
          { id: 17, name: "محل استراحت", en_name: null },
          { id: 18, name: "مناسب برای کودکان", en_name: null },
          { id: 33, name: "آنتن‌دهی تلفن همراه", en_name: null }
        ]
      },
      {
        title: "تفریحات",
        id: 5,
        items: [
          { id: 24, name: "عکاسی", en_name: null },
          { id: 26, name: "پیاده‌روی", en_name: null }
        ]
      },
      {
        title: "سختی مسیر",
        id: 7,
        items: [{ id: 34, name: "آسان (راهپیمایی)", en_name: null }]
      }
    
]


export type fomrData = {
    name: string;
    categoryId: number;
    subCategoryId: number;
    website: string;
    basicInfoDescription:string,
    basicInfosummary: string,

    isLoading: boolean;
    uploadImage: File |null;

    provinceId:number;
    cityID: number;
    tell: string;
    email: string;
    address: string;
    lat: string;
    lng: string;
    area:string;

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
    
    PlaceCategories: { categoryId: number; score: number }[];
    PlaceTripSeasons: { tripSeasonId: number; score: number; timing: number }[];
    tripLimitations: { tripLimitationId: number; score: number }[];
    keywords: string;
    keyword: string;
    meta_description: string;
    meta_title: string;
    metakeywords: string;
    metakeyword: string;
  
    pointName: string;
    description_of_the_point: string;
    summary_of_the_description: string;
    rait: number[];
    images: { path: string | StaticImageData; id: number }[];
  };

export const defaultValues = {
    name: 'مرحله تست',
    categoryId: 2,
    subCategoryId: 57,
    website: 'www.bzn.com',
    basicInfoDescription: 'توضیحات اضافه',
    basicInfosummary: 'خلاصه توضیحات',

    isLoading: false,
    uploadImage: null,

    provinceId:2,
    cityID: 31,
    tell: '021-77268350',
    email: 'nftdafsf@gmail.com',
    address: 'خیابان ساحلی- جنب اداره امور اتباع و مهاجرین خارجی- عمارت طاهری',
    lat: '35.6892',
    lng: '51.389',
    area:"کرمان جنوبی",

    airplane: 'airplane',
    bus: 'bus',
    car: 'car',
    hike: 'hike',
    ship: 'ship',
    subway: 'subway',
    taxi: 'taxi',
    train: 'train',


    defaultFeature:serializeFeatures(featuresItems),
  
        features: [
            {featureId: 2},
            {featureId: 3},
            {featureId: 36},
            {featureId: 37},
            {featureId: 35},
            {featureId: 21},
            {featureId: 32},
            {featureId: 30},
            {featureId: 10},
            {featureId: 25},
            {featureId: 38},
            {featureId: 23},
        ],

        defaultTripTypes:serializeTripType(placeTripTypes),
        TripTypes: [
          { tripTypeId: 1, score: 10 },
          { tripTypeId: 2, score: 10 },
          { tripTypeId: 3, score: 10 },
          { tripTypeId: 4, score: 10 },
          { tripTypeId: 5, score: 10 },
          { tripTypeId: 6, score: 10 },
          { tripTypeId: 7, score: 10 },
          { tripTypeId: 8, score: 10 },
          { tripTypeId: 9, score: 10 },
        ],
  
        PlaceCategories: [
          { categoryId: 1, score: 10 },
          { categoryId: 2, score: 10 },
          { categoryId: 3, score: 10 },
          { categoryId: 4, score: 10 },
          { categoryId: 5, score: 10 },
          { categoryId: 6, score: 10 },
          { categoryId: 7, score: 10 },
          { categoryId: 8, score: 10 },
          { categoryId: 9, score: 10 },
        ],
        PlaceTripSeasons: [
          { tripSeasonId: 1, score: 85, timing: 3 },
          { tripSeasonId: 2, score: 90, timing: 2 },
          { tripSeasonId: 3, score: 90, timing: 2 },
          { tripSeasonId: 4, score: 90, timing: 2 },
        ],
        tripLimitations: [
          { tripLimitationId: 1, score: 80 },
          { tripLimitationId: 2, score: 80 },
          { tripLimitationId: 3, score: 80 },
          { tripLimitationId: 4, score: 80 },
          { tripLimitationId: 4, score: 80 },
        ],


        keywords: 'Central Park, New York City, recreation',
        metakeywords: 'Central Park, New York City, recreation',
        keyword: '',
        meta_description: '',
        meta_title: '',
        metakeyword: '',
  
        pointName: '',
        description_of_the_point: '',
        summary_of_the_description: '',
        rait: [0],
}