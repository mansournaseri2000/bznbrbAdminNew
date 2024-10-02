'use client';

import { useEffect } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createPlace, editPlace } from '@/api/place';
import { AnalysisRoot, FeaturesAndFacilities, GeographicalLocationRoot, ImageGallery, Navigation, PlaceInfo, SeoSettingsRoot } from '@/components/place';
import { fomrData, placeCategories, placeTripLimitations, placeTripSeasons, placeTripTypes } from '@/components/place/create-edit-place/defaultValues';
import { placeWorkTimeSchedule, seasons } from '@/constants/place';
import { Button, Grid, Heading, Text } from '@/libs/primitives';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { serializeCategories, serializeFeatures, serializePlaceWorkTimeSchedule, serializeTripLimitations, serializeTripSeasons } from '@/libs/utils';
import { serializePlaceWorkTime } from '@/libs/utils/place/place-seryalizer';
import { Boxshadow } from '@/theme';
import { PlaceConstantResponse, PlaceResponse } from '@/types/place';
import { PlaceCategory } from '@/types/place/create-place';

const Description = dynamic(() => import('@/components/place/create-edit-place/description/Description'), {
  ssr: false,
});
const TravelTime = dynamic(() => import('@/components/place/create-edit-place/TravelTime'), {
  ssr: false,
});

/**
 * props
 * _______________________________________________________________________________
 */

type Props = {
  placeConstant: PlaceConstantResponse;
  status: string;
  placeID: number;
  placeData: PlaceResponse;
};

const CreateAndEditPlaceRootComponent = ({ placeConstant, status, placeID, placeData }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const queryClient = useQueryClient();
  const { push } = useRouter();
  const methods = useForm<fomrData | any>({
    defaultValues:
      status == 'edit'
        ? {
            name: placeData.name,
            category_id: placeData.parentCategory_id,
            sub_category_id: placeData.category_id,
            website: placeData.website,
            basicInfoDescription: placeData.description,
            basicInfosummary: placeData.summary,

            isLoading: false,
            uploadImage: null,
            pictures: [],

            provinceId: placeData.Cities ? placeData?.Cities.Provinces.id : undefined,
            cityID: placeData.Cities ? placeData?.Cities.id : undefined,
            tell: placeData?.tell,
            email: placeData?.email,
            address: placeData?.address,
            lat: placeData?.lat,
            lng: placeData?.lng,
            area: placeData?.area,

            airplane: placeData?.airplane,
            bus: placeData?.bus,
            car: placeData?.car,
            hike: placeData?.hike,
            ship: placeData?.ship,
            subway: placeData?.subway,
            taxi: placeData?.taxi,
            train: placeData?.train,

            keywords: placeData?.keywords,
            metakeywords: placeData?.tags,
            keyword: '',
            meta_description: placeData?.meta_description,
            meta_title: placeData?.meta_title,
            metakeyword: '',

            cost: placeData?.cost,
            renown: placeData?.renown,
            rating: placeData?.rating,
            trip_value: placeData?.trip_value,
            suggested_time: placeData?.suggested_time,

            features: serializeFeatures(placeData.features),
            TripTypes: placeData.Place_TripType,
            PlaceCategories: serializeCategories(placeData?.Place_Category) as PlaceCategory[],
            PlaceTripSeasons: placeData.Place_TripSeason.length > 0 ? serializeTripSeasons(placeData?.Place_TripSeason) : serializeTripSeasons(placeTripSeasons),
            tripLimitations: serializeTripLimitations(placeData?.Place_TripLimitation),
            PlaceDetails: placeData?.PlaceDetails,
            PlaceWorkTimes: placeData.PlaceWorkTime,
          }
        : {
            name: '',
            category_id: undefined,
            sub_category_id: undefined,
            website: '',
            basicInfoDescription: '',
            basicInfosummary: '',

            placeID: null,

            isLoading: false,
            uploadImage: null,
            pictures: [],

            provinceId: undefined,
            cityID: undefined,
            tell: '',
            email: '',
            address: '',
            lat: '',
            lng: '',
            area: '',

            cost: 'LOW',
            renown: 'LOW',
            rating: 0,
            trip_value: 0,
            suggested_time: 0,

            airplane: null,
            bus: null,
            car: null,
            hike: null,
            ship: null,
            subway: null,
            taxi: null,
            train: null,

            keywords: '',
            metakeywords: '',
            keyword: '',
            meta_description: '',
            meta_title: '',
            metakeyword: '',

            features: [],
            TripTypes: placeTripTypes,
            PlaceCategories: serializeCategories(placeCategories),
            PlaceTripSeasons: serializeTripSeasons(placeTripSeasons),
            tripLimitations: serializeTripLimitations(placeTripLimitations),
            PlaceDetails: [],
            PlaceWorkTimes: serializePlaceWorkTimeSchedule(placeWorkTimeSchedule),
          },
  });

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */
  const { handleSubmit, reset, watch, setValue } = methods;

  const { mutate: editPlaceMutate, isPending: editPlaceIspending } = useMutation({
    mutationFn: async (params: fomrData) => editPlace(params, placeID),
    onSuccess: async data => {
      if (data.status === true) {
        ToastSuccess('اطلاعات شما با موفقیت ویرایش شد');
        queryClient.invalidateQueries({ queryKey: ['place'] });
        queryClient.invalidateQueries({ queryKey: ['all-places'] });
        push('/');
      } else {
        ToastError('لطفا دوباره امتحان نمایید');
      }
    },
    onError: err => {
      console.log(err, 'useRemovePlace');
    },
    gcTime: 0,
  });

  const { mutate: createPlaceMutate, isPending: createPlaceIspending } = useMutation({
    mutationFn: async (params: fomrData) => createPlace(params),
    onSuccess: async data => {
      if (data.status === true) {
        ToastSuccess('اطلاعات شما با موفقیت ثبت شد');
        queryClient.invalidateQueries({ queryKey: ['all-places'] });
        push('/');
      } else {
        ToastError('لطفا دوباره امتحان نمایید');
      }
    },
    onError: err => {
      console.log(err, 'createPlaceMutatecreatePlaceMutatecreatePlaceMutate');
    },
  });

  const onSubmit: SubmitHandler<fomrData> = data => {
    if (status === 'edit') {
      editPlaceMutate(data);
    } else {
      createPlaceMutate(data);
    }
    // console.log(data, 'datadata');
  };

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid height={'max-content'} overflow={'auto'} gap={'20px'} width={'100%'} maxWidth={'1500px'} m={'auto'} p={'36px'} style={{ boxShadow: Boxshadow.shadow1, borderRadius: '8px' }}>
          {status === 'edit' ? <Heading>ویرایش نقطه</Heading> : <Heading>ساخت نقطه</Heading>}
          <PlaceInfo categoris={placeConstant ? placeConstant.categories : []} />
          {status === 'edit' && <ImageGallery placeID={Number(placeID)} status={status} />}
          <GeographicalLocationRoot province={placeConstant ? placeConstant.provinces : []} />
          <Navigation />
          <FeaturesAndFacilities featureItems={placeConstant ? placeConstant.features : []} />
          <AnalysisRoot
            tripLimitations={placeConstant ? placeConstant.tripLimitations : []}
            seasons={placeConstant ? seasons : []}
            tripDatas={placeConstant ? placeConstant.tripDatas : []}
            Categories={placeConstant?.categories ? placeConstant.categories : []}
          />
          <SeoSettingsRoot />
          <Description details={placeConstant ? placeConstant.details : []} key={'Description'} />
          <TravelTime />
          <Grid columns={'2'} maxWidth={'300px'} gap={'16px'}>
            <Button type='submit' size={'4'} variant='soft'>
              {editPlaceIspending || createPlaceIspending ? <Spinner /> : <Text> ثبت تغییرات</Text>}
            </Button>
            <Link href={'/'}>
              <Button style={{ width: '100%' }} type='button' size={'4'} variant='solid'>
                <Text>لغو</Text>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default CreateAndEditPlaceRootComponent;

/**
 * styled-component
 * _______________________________________________________________________________
 */
