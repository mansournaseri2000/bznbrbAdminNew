'use client';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { StaticImageData } from 'next/image';

import { Spinner } from '@radix-ui/themes';

import { useGetAllPlacesConstants } from '@/api/place';
import {
  AnalysisRoot,
  Description,
  FeaturesAndFacilities,
  GeographicalLocationRoot,
  ImageGallery,
  Navigation,
  PlaceInfo,
  SeoSettingsRoot,
  TravelTime,
} from '@/components/place';
import { Button, Grid, Heading } from '@/libs/primitives';

import image1 from '../../../public/image/popup-image.png';

type fomrData = {
  name: string;
  description: string;
  website: string;
  summary: string;
  categoryId: number;
  subCategoryId: number;
  province: number;
  city: number;
  tell: string;
  email: string;
  address: string;
  lat: string;
  lng: string;
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
  cityID: null | number;
  isLoading: boolean;

  pointName: string;
  description_of_the_point: string;
  summary_of_the_description: string;
  rait: number[];
  images: { path: string | StaticImageData; id: number }[];
  uploadImage: File | null;
};

const PlacePage = ({ params }: { params: { slug: string } }) => {
  const status = params.slug[0];
  const { data, isLoading } = useGetAllPlacesConstants();
  console.log(status, 'status');

  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const methods = useForm<fomrData>({
    defaultValues: {
      cityID: null,
      name: 'مرحله تست',
      description: 'توضیحات اضافه',
      website: 'www.bzn.com',
      summary: 'خلاصه توضیحات',
      categoryId: 2,
      subCategoryId: 57,
      province: 2,
      city: 31,
      tell: '021-77268350',
      email: 'nftdafsf@gmail.com',
      address: 'خیابان ساحلی- جنب اداره امور اتباع و مهاجرین خارجی- عمارت طاهری',
      lat: '35.6892',
      lng: '51.389',
      airplane: '',
      bus: '',
      car: '',
      hike: '',
      ship: '',
      subway: '',
      taxi: '',
      keywords: 'Central Park, New York City, recreation',
      metakeywords: 'Central Park, New York City, recreation',
      keyword: '',
      meta_description: '',
      meta_title: '',
      metakeyword: '',
      isLoading: false,

      train: null,
      features: [
        { featureId: 1, value: 5 },
        { featureId: 2, value: 30 },
        { featureId: 3, value: 21 },
        { featureId: 4, value: 23 },
        { featureId: 5, value: 38 },
        { featureId: 6, value: 10 },
        { featureId: 7, value: 37 },
      ],
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

      pointName: '',
      description_of_the_point: '',
      summary_of_the_description: '',
      rait: [0],
      images: [
        {
          path: image1,
          id: 2450,
        },
        {
          path: image1,
          id: 1560,
        },
        {
          path: image1,
          id: 2650,
        },
      ],
      uploadImage: null,
    },
  });

  const { handleSubmit, watch } = methods;
  console.log(watch(), 'adfad');

  const onSubmit: SubmitHandler<fomrData> = data => {
    console.log(data);
  };

  /**
   * template
   * _______________________________________________________________________________
   */

  if (isLoading) return <Spinner style={{ margin: 'auto', scale: 2 }} />;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid height={'max-content'} gap={'20px'} width={'100%'} maxWidth={'1500px'} m={'auto'} px={'16px'}>
          <Heading>ساخت نقطه</Heading>
          <PlaceInfo categoris={data ? data.categories : []} />
          <ImageGallery />
          <GeographicalLocationRoot province={data ? data.provinces : []} />
          <Navigation />
          <FeaturesAndFacilities featureItems={data ? data.features : []} />
          <AnalysisRoot
            tripLimitations={data ? data.tripLimitations : []}
            seasons={data ? data.seasons : []}
            tripDatas={data ? data.tripDatas : []}
            Categories={data?.categories ? data.categories : []}
          />
          <SeoSettingsRoot />
          <Description details={data ? data.details : []} key={'Description'} />
          <TravelTime />
          <Button size={'4'} variant='outline'>
            ثبت تغییرات
          </Button>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default PlacePage;

{
  /* <Flex gap={'20px'}>
              <Controller
                name='rait'
                control={control}
                defaultValue={[0]} // Initialize with an array if the slider expects an array
                render={({ field }) => (
                  <Slider
                    {...field}
                    min={0}
                    max={5}
                    value={Array.isArray(field.value) ? field.value : [field.value]} // Ensure the value is an array
                    onValueChange={value => field.onChange(value)}
                    aria-label='Overall Rating'
                  />
                )}
              />
              <Controller
                name='rait'
                control={control}
                defaultValue={[0]} // Initialize with an array if the slider expects an array
                render={({ field }) => (
                  <Slider
                    {...field}
                    min={0}
                    max={5}
                    value={Array.isArray(field.value) ? field.value : [field.value]} // Ensure the value is an array
                    onValueChange={value => field.onChange(value)}
                    aria-label='Overall Rating'
                  />
                )}
              />
            </Flex> */
}
