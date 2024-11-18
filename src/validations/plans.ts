import * as yup from 'yup';

export const plannerValidationSchema = yup.object().shape({
  origin: yup.object({
    city: yup.string().required('لطفا شهر مبدأ را وارد کنید'),
    province: yup.string().required('لطفا استان مبدأ را وارد کنید'),
  }),
  destination: yup.object({
    city: yup.string().required('لطفا شهر مقصد را وارد کنید'),
    province: yup.string().required('لطفا استان مقصد را وارد کنید'),
  }),
  startTime: yup.object({
    time: yup.string().required('لطفا زمان شروع را وارد کنید'),
    date: yup.string().required('لطفا تاریخ شروع را وارد کنید'),
  }),
  endTime: yup.object({
    time: yup.string().required('لطفا زمان پایان را وارد کنید'),
    date: yup.string().required('لطفا تاریخ پایان را وارد کنید'),
  }),
  isExpand: yup.boolean().required(), // Make sure this is always defined
  means_of_travel: yup.string().nullable().notRequired(),
  place_of_residence: yup.string().nullable().notRequired(),
  Type_of_tourist_place: yup.array().of(yup.number()).nullable().notRequired(),
  sortBy: yup.string().nullable().notRequired(),
  number_Of_Adult_Passengers: yup.string().nullable().notRequired(),
  number_Of_Child_Passengers: yup.string().nullable().notRequired(),
  number_Of_Minor_Passengers: yup.string().nullable().notRequired(),
  Type_Of_Passengers: yup.array().nullable().notRequired(),
});
