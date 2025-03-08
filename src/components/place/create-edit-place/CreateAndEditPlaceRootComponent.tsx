'use client';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import dynamic from 'next/dynamic';
import Link from 'next/link';

import { useRouter } from '@bprogress/next';
import { Spinner } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createPlace, editPlace } from '@/api/place';
import { AnalysisRoot, FeaturesAndFacilities, GeographicalLocationRoot, ImageGallery, Navigation, PlaceInfo, SeoSettingsRoot } from '@/components/place';
import { fomrData, placeCategories, placeTripLimitations, placeTripSeasons, placeTripTypes } from '@/components/place/create-edit-place/defaultValues';
import { categoriesConstants, placeWorkTimeSchedule, seasons } from '@/constants/place';
import { Button, Grid, Text } from '@/libs/primitives';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { serializeCategories, serializeFeatures, serializePlaceWorkTimeSchedule, serializeTripLimitations, serializeTripSeasons } from '@/libs/utils';
import { Boxshadow } from '@/theme';
import { PlaceConstantResponse, PlaceResponse } from '@/types/place';

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

export function findByChildId(items: any, id: any) {
  for (const item of items) {
    if (item.id === id) {
      return item;
    }

    if (item.children && item.children.length > 0) {
      const found: any = findByChildId(item.children, id);
      if (found) {
        return found;
      }
    }
  }
  return null;
}

function serializeTripData(data: any[], tripsData: any[]) {
  return tripsData.map(trip => {
    const matchingData = data.find(d => d.id === trip.id);

    if (matchingData) {
      return {
        tripTypeId: trip.id,
        score: matchingData.score,
      };
    } else {
      return {
        tripTypeId: trip.id,
        score: 0,
      };
    }
  });
}

function serializeCategoryData(data: any[], categoryData: any[]) {
  return categoryData.map(trip => {
    const matchingData = data.find(d => d.id === trip.id);

    if (matchingData) {
      return {
        categoryId: trip.id,
        score: matchingData.score,
      };
    } else {
      return {
        categoryId: trip.id,
        score: 0,
      };
    }
  });
}

function serializeLimitaionData(data: any[], limitaionData: any[]) {
  return limitaionData.map(trip => {
    const matchingData = data.find(d => d.id === trip.id);

    if (matchingData) {
      return {
        tripLimitationId: trip.id,
        score: matchingData.score,
      };
    } else {
      return {
        tripLimitationId: trip.id,
        score: 0,
      };
    }
  });
}

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
            name: placeData?.name,
            category_id: findByChildId(placeConstant?.categories, placeData?.category_id)?.parent_id,
            sub_category_id: placeData?.category_id,
            website: placeData?.website,
            basicInfoDescription: placeData?.description,
            basicInfosummary: placeData?.summary,

            isLoading: false,
            uploadImage: null,
            pictures: [],

            provinceId: placeData?.Cities ? placeData?.Cities.Provinces.id : undefined,
            cityID: placeData?.Cities ? placeData?.Cities.id : undefined,
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

            features: serializeFeatures(placeData?.features),
            TripTypes: serializeTripData(placeData?.Place_TripType, placeConstant.tripDatas),
            PlaceCategories: serializeCategoryData(placeData?.Place_Category, categoriesConstants),
            PlaceTripSeasons: placeData?.Place_TripSeason.length > 0 ? serializeTripSeasons(placeData?.Place_TripSeason as any) : serializeTripSeasons(placeTripSeasons),
            tripLimitations: serializeLimitaionData(placeData?.Place_TripLimitation, placeConstant.tripLimitations),
            PlaceDetails: placeData?.PlaceDetails,
            PlaceWorkTimes: placeData?.PlaceWorkTime,
          }
        : {
            name: '',
            category_id: '',
            sub_category_id: '',
            website: '',
            basicInfoDescription: '',
            basicInfosummary: '',

            placeID: null,

            isLoading: false,
            uploadImage: null,
            pictures: [],

            provinceId: '',
            cityID: '',
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
  const { handleSubmit } = methods;

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
        <Grid
          height={'max-content'}
          overflow={'auto'}
          gap={'20px'}
          width={'100%'}
          maxWidth={'1500px'}
          m={'auto'}
          p={'36px'}
          style={{ boxShadow: Boxshadow.shadow1, borderRadius: '8px', border: '1px solid red' }}
        >
          <PlaceInfo categoris={placeConstant ? placeConstant.categories : []} />
          {status === 'edit' && <ImageGallery placeID={Number(placeID)} status={status} />}
          <GeographicalLocationRoot province={placeConstant ? placeConstant.provinces : []} constant={undefined} />
          <Navigation />
          <FeaturesAndFacilities featureItems={placeConstant ? placeConstant.features : []} />
          <AnalysisRoot
            constants={placeConstant}
            tripLimitations={placeConstant ? placeConstant.tripLimitations : []}
            seasons={placeConstant ? seasons : ([] as any)}
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
