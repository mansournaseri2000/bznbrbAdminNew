'use client';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';


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

import { defaultValues, featuresItems, fomrData, placeTripTypes } from '@/components/place/create-edit-place/defaultValues';
import { serializeFeatures, serializeTripType } from '@/libs/utils';



const PlacePage = ({ params }: { params: { slug: string } }) => {
  const status = params.slug[0];
  const { data, isLoading } = useGetAllPlacesConstants();

  

  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const methods = useForm<fomrData>({
    defaultValues: status === "eidt"?defaultValues:{
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

      features:serializeFeatures(featuresItems),
      TripTypes:serializeTripType(placeTripTypes)

    }
  });

  const { handleSubmit, watch } = methods;
  console.log(watch(), 'watch');

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


