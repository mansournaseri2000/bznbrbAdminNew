'use client';

import React, { useState } from 'react';
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

import { yupResolver } from '@hookform/resolvers/yup';
import { Spinner } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as Yup from 'yup';

import { createPlace, editPlace } from '@/api/place';
import FilterCard from '@/components/develop/shared/filter-card/FilterCard';
import { AnalysisRoot, FeaturesAndFacilities, GeographicalLocationRoot, PlaceInfo, SeoSettingsRoot } from '@/components/place';
import CommentPoint from '@/components/place/create-edit-place/CommentPoint';
import { fomrData, placeTripSeasons } from '@/components/place/create-edit-place/defaultValues';
import ImageGallery from '@/components/place/create-edit-place/ImageGallery';
import ImageSentPoint from '@/components/place/create-edit-place/ImageSentPoint';
import ImproveContentPoint from '@/components/place/create-edit-place/ImproveContentPoint';
import PrimaryImage from '@/components/place/create-edit-place/PrimaryImage';
import RoutingGuid from '@/components/place/create-edit-place/routing-guid/RoutingGuid';
import { createPointTabsOptions, editPointTabsOptions, formPublishedOptions, formStatusOptions } from '@/constants/data-management';
import { placeWorkTimeSchedule } from '@/constants/place';
import { Button, Flex, Grid, SelectItem, SelectRoot, Text } from '@/libs/primitives';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import SimpleWrapper2 from '@/libs/shared/wrapper/SimpleWrapper2';
import { serializeCategories, serializeFeatures, serializePlaceWorkTimeSchedule, serializeTripLimitations, serializeTripSeasons } from '@/libs/utils';
import { serializeTripTypes } from '@/libs/utils/place/place-seryalizer';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { CreatePointButtonTypes, EditPointButtonTypes } from '@/types/data-management/point';
import { PlaceConstantResponse, PlaceResponse } from '@/types/place';

import RoutingGuideList from './RoutingGuideList';

const Description = dynamic(() => import('@/components/place/create-edit-place/description/Description'), {
  ssr: false,
});

const TravelTime = dynamic(() => import('@/components/place/create-edit-place/TravelTime'), {
  ssr: false,
});

// Your schema definition
const validationSchema = Yup.object().shape({
  category_id: Yup.string().required('لطفاً دسته بندی را وارد کنید'),
  sub_category_id: Yup.string().required('لطفاً زیر دسته بندی را وارد کنید'), // Sub-category is required in Persian
  name: Yup.string().required('لطفاً نام را وارد کنید'), // Name is required in Persian
  provinceId: Yup.string().required('لطفاً استان را وارد کنید'), // Province is required in Persian
  cityID: Yup.string().required('لطفاً شهرستان را وارد کنید'), // City is required in Persian
  townId: Yup.string().required('لطفاً شهر را وارد کنید'),
  // Add other fields as necessary, using .nullable(), .optional() for non-required ones
  type: Yup.string(),
  status: Yup.string(),
  isPublished: Yup.boolean(),
  slug: Yup.string(),
  basicInfoDescription: Yup.string(),
  basicInfosummary: Yup.string(),
  area: Yup.string(),
  tell: Yup.string(),
  website: Yup.string(),
  email: Yup.string(),
  address: Yup.string(),
  vehicleOptions: Yup.array(),
  PlaceDetails: Yup.array(),
  features: Yup.array(),
  trip_value: Yup.number(),
  rating: Yup.number(),
  TripTypes: Yup.array(),
  PlaceCategories: Yup.array(),
  PlaceTripSeasons: Yup.array(),
  tripLimitations: Yup.array(),
  gender: Yup.string(),
  PlaceWorkTimes: Yup.array(),
  meta_description: Yup.string(),
  meta_title: Yup.string(),
  metakeyword: Yup.string(),
  uploadImage: Yup.array(),
  pictures: Yup.array(),
  suggested_time: Yup.string(),
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
    const matchingData = data?.find(d => d.id === trip.id);

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
    const matchingData = data?.find(d => d.id === trip.id);

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
    const matchingData = data?.find(d => d.id === trip.id);

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

function serializeModelObject(model: any) {
  return Object.entries(model).map(([key, content]) => ({
    key,
    content,
  }));
}

const CreateAndEditPoint = ({ placeConstant, status, placeID, placeData }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */

  const placeDetailsSerializer = (data: { id: number; description: string }[]) => {
    if (data?.length > 0) {
      return data.map(item => ({
        detailId: item.id,
        descriptions: item.description,
      }));
    }
    return [];
  };

  const [buttonState, setButtonState] = useState<typeof status extends 'create-point' ? CreatePointButtonTypes : EditPointButtonTypes>(status === 'create-point' ? 'place-info' : 'place-info');

  const model = {
    taxi: Boolean(placeData?.taxi) ? placeData?.taxi : '',
    bus: Boolean(placeData?.bus) ? placeData?.bus : '',
    subway: Boolean(placeData?.subway) ? placeData?.subway : '',
    car: Boolean(placeData?.car) ? placeData?.car : '',
    train: Boolean(placeData?.train) ? placeData?.train : '',
    airplane: Boolean(placeData?.airplane) ? placeData?.airplane : '',
    hike: Boolean(placeData?.hike) ? placeData?.hike : '',
    ship: Boolean(placeData?.ship) ? placeData?.ship : '',
  };

  const queryClient = useQueryClient();
  const { push, back } = useRouter();
  const methods = useForm<fomrData | any>({
    resolver: yupResolver(validationSchema),
    defaultValues:
      status == 'edit-point'
        ? {
            type: placeData?.type,
            status: placeData?.status,
            isPublished: placeData?.isPublished ? placeData?.isPublished : false,
            name: placeData?.name,
            category_id: Boolean(placeData?.category_id) ? findByChildId(placeConstant.categories, placeData.category_id).parent_id : '',
            sub_category_id: Boolean(placeData?.category_id) ? placeData?.category_id : '',
            slug: placeData?.slug,
            basicInfoDescription: placeData?.description,
            basicInfosummary: placeData?.summary,

            provinceId: placeData?.Cities ? placeData?.Cities.Provinces.id : '',
            cityID: placeData?.Cities ? placeData?.Cities.id : '',
            area: placeData?.area,
            townId: placeData?.Town?.id,
            tell: placeData?.tell,
            website: placeData?.website,
            email: placeData?.email,
            address: placeData?.address,
            lat: placeData?.lat,
            lng: placeData?.lng,

            vehicleOptions: serializeModelObject(model),

            PlaceDetails: placeDetailsSerializer(placeData?.PlaceDetails),

            features: serializeFeatures(placeData?.features),

            cost: placeData?.cost,
            trip_value: placeData?.trip_value,
            renown: placeData?.renown,
            rating: placeData?.rating,
            TripTypes: serializeTripData(placeData?.Place_TripType, placeConstant.tripDatas),
            PlaceCategories: serializeCategoryData(placeData?.Place_Category, placeConstant.categories),
            PlaceTripSeasons: placeData?.Place_TripSeason.length > 0 ? serializeTripSeasons(placeData.Place_TripSeason as any) : serializeTripSeasons(placeTripSeasons),
            tripLimitations: serializeLimitaionData(placeData?.Place_TripLimitation, placeConstant.tripLimitations),
            gender: placeData.gender,

            PlaceWorkTimes: placeData?.PlaceWorkTime,

            keywords: placeData?.keywords,
            metakeywords: placeData?.tags,
            keyword: placeData?.keywords,
            meta_description: placeData?.meta_description,
            meta_title: placeData?.meta_title,
            metakeyword: '',

            uploadImage: placeData?.UserSentPicturesForPlace,
            pictures: placeData?.pictures,
            suggested_time: placeData?.suggested_time,
          }
        : {
            type: 'PLACE',
            isPublished: false,
            status: false,

            name: '',
            category_id: '',
            sub_category_id: '',
            slug: '',
            basicInfoDescription: '',
            basicInfosummary: '',

            cityID: '',
            provinceId: '',
            townId: '',
            tell: '',
            website: '',
            email: '',
            address: '',
            lat: '',
            lng: '',

            vehicleOptions: serializeModelObject(model),

            PlaceDetails: [],

            features: [],

            cost: 'LOW',
            renown: 'LOW',
            rating: 0,
            trip_value: 0,

            TripTypes: serializeTripTypes(placeConstant?.tripDatas),
            PlaceCategories: serializeCategories(placeConstant?.categories),
            PlaceTripSeasons: serializeTripSeasons(placeConstant?.seasons as any),
            tripLimitations: serializeTripLimitations(placeConstant?.tripLimitations as any),
            gender: 'UNKNOWN',

            PlaceWorkTimes: serializePlaceWorkTimeSchedule(placeWorkTimeSchedule),

            keywords: '',
            metakeywords: '',
            keyword: '',
            meta_description: '',
            meta_title: '',
            metakeyword: '',

            pictures: [],
            suggested_time: 0,
          },
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */
  const { mutate: editPlaceMutate, isPending: editPlaceLoading } = useMutation({
    mutationFn: async (params: fomrData) => editPlace(params, placeID),
    onSuccess: async data => {
      if (data.status === true) {
        ToastSuccess('اطلاعات شما با موفقیت ویرایش شد');
        queryClient.invalidateQueries({ queryKey: ['place'] });
        queryClient.invalidateQueries({ queryKey: ['all-places'] });
        push('/data-management/point-management');
      } else {
        ToastError('لطفا دوباره امتحان نمایید');
      }
    },
    onError: err => {
      console.log(err, 'useRemovePlace');
    },
    gcTime: 0,
  });
  const { mutate: createPlaceMutate, isPending: createPlaceIsLoading } = useMutation({
    mutationFn: async (params: fomrData) => createPlace(params),
    onSuccess: async data => {
      if (data.statusCode === 201) {
        ToastSuccess('اطلاعات شما با موفقیت ثبت شد');
        queryClient.invalidateQueries({ queryKey: ['all-places'] });
        push('/data-management/point-management');
      } else {
        ToastError(String(data.message));
      }
    },
    onError: err => {
      console.log(err, 'createPlaceMutatecreatePlaceMutatecreatePlaceMutate');
    },
  });
  const onSubmit: SubmitHandler<fomrData> = data => {
    if (status === 'edit-point') {
      editPlaceMutate(data);
    } else {
      createPlaceMutate(data);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid width={'100%'} gapY={'5'}>
          <Grid width={'100%'} columns={'3'} gap={'5'}>
            {/* first _______________________________________________________________________________ */}
            <FilterCard label='نوع نقطه'>
              <Controller
                name='type'
                control={control}
                render={({ field }) => (
                  <SelectRoot
                    {...field}
                    placeholder='نقطه'
                    value={String(field.value)}
                    onValueChange={val => {
                      field.onChange(val);
                    }}
                  >
                    {placeConstant.PlaceType.map((item, index) => (
                      <SelectItem key={index} value={item.id}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectRoot>
                )}
              />
            </FilterCard>
            {/* second _______________________________________________________________________________ */}
            <FilterCard label='انتشار'>
              <Controller
                name='isPublished'
                control={control}
                render={({ field }) => (
                  <SelectRoot
                    {...field}
                    placeholder='انتشار'
                    value={String(field.value)}
                    onValueChange={val => {
                      field.onChange(val);
                    }}
                  >
                    {formPublishedOptions.map(item => (
                      <SelectItem key={item.id} value={String(item.value)}>
                        {item.key}
                      </SelectItem>
                    ))}
                  </SelectRoot>
                )}
              />
            </FilterCard>
            {/* third _______________________________________________________________________________ */}
            <FilterCard label='وضعیت'>
              <Controller
                name='status'
                control={control}
                render={({ field }) => (
                  <SelectRoot
                    {...field}
                    placeholder='وضعیت'
                    value={String(field.value)}
                    onValueChange={val => {
                      field.onChange(val);
                    }}
                  >
                    {formStatusOptions.map(item => (
                      <SelectItem key={item.id} value={String(item.value)}>
                        {item.key}
                      </SelectItem>
                    ))}
                  </SelectRoot>
                )}
              />
            </FilterCard>
          </Grid>

          {/* tab-hero-button _______________________________________________________________________________ */}
          <Flex
            width={'100%'}
            gap={'11px'}
            p={'4'}
            align={'center'}
            style={{ overflowX: 'auto', backgroundColor: colorPalette.gray[1], border: `1px solid ${colorPalette.gray[6]}`, borderRadius: '8px', zIndex: '10' }}
            position={'sticky'}
            top={'70px'}
          >
            {status === 'create-point' ? (
              <>
                {createPointTabsOptions.map((item, index) => (
                  <Button size={'3'} type='button' variant={buttonState === item.key ? 'soft' : 'solid'} key={index} onClick={() => setButtonState(item.key)}>
                    <Text {...typoVariant.body1}>{item.label}</Text>
                  </Button>
                ))}
              </>
            ) : (
              status === 'edit-point' && (
                <>
                  {editPointTabsOptions.map((item, index) => (
                    <Button size={'3'} type='button' variant={buttonState === item.key ? 'soft' : 'solid'} key={index} onClick={() => setButtonState(item.key)}>
                      <Text {...typoVariant.body1}>{item.label}</Text>
                    </Button>
                  ))}
                </>
              )
            )}
          </Flex>

          {/* place-info _______________________________________________________________________________ */}
          {buttonState === 'place-info' && (
            <SimpleWrapper2 type='changeAble' hero='اطلاعات نقطه'>
              <PlaceInfo categoris={placeConstant ? placeConstant.categories : []} />
            </SimpleWrapper2>
          )}

          {/* geographical-location _______________________________________________________________________________ */}
          {buttonState === 'geographical-location' && (
            <SimpleWrapper2 type='changeAble' hero='موقعیت جغرافیایی'>
              <GeographicalLocationRoot constant={placeConstant} province={placeConstant ? placeConstant.provinces : []} />
            </SimpleWrapper2>
          )}

          {/* routing  _______________________________________________________________________________ */}
          {buttonState === 'routing' && (
            <SimpleWrapper2 type='changeAble' hero='چجوری برم'>
              <RoutingGuid />
            </SimpleWrapper2>
          )}

          {buttonState === 'routing' && status === 'edit-point' && (
            <SimpleWrapper2 type='readOnly' hero='چجوری برم'>
              <RoutingGuideList id={placeData.id} />
            </SimpleWrapper2>
          )}

          {/* Detail  _______________________________________________________________________________ */}
          {buttonState === 'description' && (
            <SimpleWrapper2 type='changeAble' hero='توضیحات'>
              <Description details={placeConstant ? placeConstant.details : []} key={'Description'} />
            </SimpleWrapper2>
          )}

          {/* features-facilities  _______________________________________________________________________________ */}
          {buttonState === 'features-facilities' && (
            <SimpleWrapper2 type='changeAble' hero='ویژگی ها و امکانات'>
              <FeaturesAndFacilities featureItems={placeConstant ? placeConstant.features : []} />
            </SimpleWrapper2>
          )}

          {/* AnalysisRoot  _______________________________________________________________________________ */}
          {buttonState === 'analysis' && (
            <SimpleWrapper2 type='changeAble' hero='تحلیل بزنیم بیرون'>
              <AnalysisRoot
                constants={placeConstant}
                tripLimitations={placeConstant ? placeConstant.tripLimitations : []}
                seasons={placeConstant ? placeConstant.seasons : []}
                tripDatas={placeConstant ? placeConstant.tripDatas : []}
                Categories={placeConstant?.categories ? placeConstant.categories : []}
              />
            </SimpleWrapper2>
          )}

          {/* travel-time  _______________________________________________________________________________ */}
          {buttonState === 'travel-time' && (
            <SimpleWrapper2 type='changeAble' hero='کی برم'>
              <TravelTime />
            </SimpleWrapper2>
          )}

          {/* seo-setting  _______________________________________________________________________________ */}
          {buttonState === 'seo-setting' && (
            <SimpleWrapper2 type='changeAble' hero='تنظیمات سئو'>
              <SeoSettingsRoot />
            </SimpleWrapper2>
          )}

          {/* images  _______________________________________________________________________________ */}
          {buttonState === 'images' && (
            <Flex direction={'column'} gap={'5'}>
              <SimpleWrapper2 type='changeAble' hero='تصویر شاخص'>
                <PrimaryImage constant={placeConstant} picture={placeData?.pictures.filter(item => item.type === 'MAIN')[0]} placeData={placeData} />
              </SimpleWrapper2>
              <SimpleWrapper2 type='changeAble' hero='گالری تصاویر'>
                <ImageGallery constant={placeConstant} placeId={placeData.id} />
              </SimpleWrapper2>
              <SimpleWrapper2 type='readOnly' hero='تصاویر ارسال شده'>
                <ImageSentPoint id={placeID} />
              </SimpleWrapper2>
            </Flex>
          )}

          {buttonState === 'improve-content' && (
            <SimpleWrapper2 type='readOnly' hero='اصلاح اطلاعات ارسال شده'>
              <ImproveContentPoint id={placeID} />
            </SimpleWrapper2>
          )}

          {buttonState === 'comments' && (
            <SimpleWrapper2 type='readOnly' hero='نظرات'>
              <CommentPoint id={placeID} />
            </SimpleWrapper2>
          )}

          <Flex width={'100%'} align={'center'} gap={'5'} p={'4'} style={{ border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8, backgroundColor: colorPalette.gray[2] }}>
            <Button size={'3'} variant='soft' style={{ paddingInline: 48.5 }}>
              {createPlaceIsLoading || editPlaceLoading ? <Spinner /> : <Text {...typoVariant.body1}>ثبت</Text>}
            </Button>
            <Button size={'3'} colorVariant='PINK' style={{ paddingInline: 51 }} onClick={() => back}>
              <Text {...typoVariant.body1}>لغو</Text>
            </Button>
            <Flex gap={'8px'}>
              {Object.entries(errors).map(([key, value], index, array) => (
                <div key={key} style={{ color: colorPalette.pink[9] }}>
                  <span>
                    {value?.message as any}
                    {array.length - 1 === index ? '.' : '-'}
                  </span>
                </div>
              ))}
            </Flex>
          </Flex>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default CreateAndEditPoint;
