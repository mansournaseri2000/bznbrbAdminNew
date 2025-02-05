'use client';

import React, { useState } from 'react';
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createPlace, editPlace } from '@/api/place';
import FilterCard from '@/components/develop/shared/filter-card/FilterCard';
import { AnalysisRoot, FeaturesAndFacilities, GeographicalLocationRoot, PlaceInfo, SeoSettingsRoot } from '@/components/place';
import { fomrData, placeCategories, placeTripLimitations, placeTripSeasons, placeTripTypes } from '@/components/place/create-edit-place/defaultValues';
import ImageGallery from '@/components/place/create-edit-place/ImageGallery';
import PrimaryImage from '@/components/place/create-edit-place/PrimaryImage';
import RoutingGuid from '@/components/place/create-edit-place/routing-guid/RoutingGuid';
import { createPointTabsOptions, editPointTabsOptions, formPublishedOptions, formStatusOptions } from '@/constants/data-management';
import { categoriesConstants, placeWorkTimeSchedule, seasons } from '@/constants/place';
import { Button, Flex, Grid, SelectItem, SelectRoot, Text } from '@/libs/primitives';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import SimpleWrapper2 from '@/libs/shared/wrapper/SimpleWrapper2';
import { serializeCategories, serializeFeatures, serializePlaceWorkTimeSchedule, serializeTripLimitations, serializeTripSeasons } from '@/libs/utils';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { CreatePointButtonTypes, EditPointButtonTypes } from '@/types/data-management/point';
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

  const [buttonState, setButtonState] = useState<typeof status extends 'create-point' ? CreatePointButtonTypes : EditPointButtonTypes>(status === 'create-point' ? 'place-info' : 'place-info');

  console.log('DATA', placeData);
  const model = {
    taxi: placeData?.taxi,
    bus: placeData?.bus,
    subway: placeData?.subway,
    car: placeData?.car,
    train: placeData?.train,
    airplane: placeData?.airplane,
    hike: placeData?.hike,
    ship: placeData?.ship,
  };

  const queryClient = useQueryClient();
  const { push, back } = useRouter();
  const methods = useForm<fomrData | any>({
    defaultValues:
      status == 'edit-point'
        ? {
            placeCategory: '',
            name: placeData?.name,
            category_id: findByChildId(placeConstant?.categories, placeData?.category_id)?.parent_id,
            sub_category_id: placeData?.category_id,
            website: placeData?.website,
            basicInfoDescription: placeData?.description,
            basicInfosummary: placeData?.summary,
            isLoading: false,
            uploadImage: placeData?.UserSentPicturesForPlace,
            pictures: placeData?.pictures,
            provinceId: placeData?.Cities ? placeData?.Cities.Provinces.id : undefined,
            cityID: placeData?.Cities ? placeData?.Cities.id : undefined,
            tell: placeData?.tell,
            email: placeData?.email,
            address: placeData?.address,
            lat: placeData?.lat,
            lng: placeData?.lng,
            area: placeData?.area,
            vehicleOptions: serializeModelObject(model),
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
            keyword: placeData?.keywords,
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
            PlaceTripSeasons: placeData?.Place_TripSeason.length > 0 ? serializeTripSeasons(placeData?.Place_TripSeason) : serializeTripSeasons(placeTripSeasons),
            tripLimitations: serializeLimitaionData(placeData?.Place_TripLimitation, placeConstant.tripLimitations),
            PlaceDetails: placeData?.PlaceDetails,
            PlaceWorkTimes: placeData?.PlaceWorkTime,
            status: placeData?.status,
            type: placeData?.type,
            isPublished: placeData?.isPublished,
          }
        : {
            placeCategory: '',
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
            vehicleOptions: serializeModelObject(model),
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
            status: '',
            type: '',
            isPublished: '',
          },
  });
  /**
   * hooks and methods
   * _______________________________________________________________________________
   */
  const { handleSubmit, watch, control } = methods;

  const { mutate: editPlaceMutate } = useMutation({
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

  const { mutate: createPlaceMutate } = useMutation({
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
  };

  console.log('watch', watch());

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid width={'100%'} gapY={'5'}>
          <Grid width={'100%'} columns={'3'} gap={'5'}>
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

          <Flex width={'100%'} gap={'11px'} pb={'4'} align={'center'} style={{ overflowX: 'auto', borderBottom: `1px solid ${colorPalette.gray[6]}` }}>
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

          {buttonState === 'place-info' && (
            <SimpleWrapper2 type='changeAble' hero='اطلاعات نقطه'>
              <PlaceInfo categoris={placeConstant ? placeConstant.categories : []} />
            </SimpleWrapper2>
          )}

          {buttonState === 'geographical-location' && (
            <SimpleWrapper2 type='changeAble' hero='موقعیت جغرافیایی'>
              <GeographicalLocationRoot province={placeConstant ? placeConstant.provinces : []} />
            </SimpleWrapper2>
          )}

          {buttonState === 'routing' && (
            <SimpleWrapper2 type='changeAble' hero='چجوری برم'>
              <RoutingGuid />
            </SimpleWrapper2>
          )}

          {buttonState === 'description' && (
            <SimpleWrapper2 type='changeAble' hero='توضیحات'>
              <Description details={placeConstant ? placeConstant.details : []} key={'Description'} />
            </SimpleWrapper2>
          )}

          {buttonState === 'features-facilities' && (
            <SimpleWrapper2 type='changeAble' hero='ویژگی ها و امکانات'>
              <FeaturesAndFacilities featureItems={placeConstant ? placeConstant.features : []} />
            </SimpleWrapper2>
          )}

          {buttonState === 'analysis' && (
            <SimpleWrapper2 type='changeAble' hero='تحلیل بزنیم بیرون'>
              <AnalysisRoot
                tripLimitations={placeConstant ? placeConstant.tripLimitations : []}
                seasons={placeConstant ? seasons : []}
                tripDatas={placeConstant ? placeConstant.tripDatas : []}
                Categories={placeConstant?.categories ? placeConstant.categories : []}
              />
            </SimpleWrapper2>
          )}

          {buttonState === 'travel-time' && (
            <SimpleWrapper2 type='changeAble' hero='کی برم'>
              <TravelTime />
            </SimpleWrapper2>
          )}

          {buttonState === 'seo-setting' && (
            <SimpleWrapper2 type='changeAble' hero='تنظیمات سئو'>
              <SeoSettingsRoot />
            </SimpleWrapper2>
          )}

          {buttonState === 'images' && (
            <Flex direction={'column'} gap={'5'}>
              <SimpleWrapper2 type='changeAble' hero='تصویر شاخص'>
                <PrimaryImage status={status} picture={placeData?.pictures[0]} />
              </SimpleWrapper2>
              <SimpleWrapper2 type='changeAble' hero='گالری تصاویر'>
                <ImageGallery status={status} userPicUpload={placeData?.UserSentPicturesForPlace} />
              </SimpleWrapper2>
              <SimpleWrapper2 type='readOnly' hero='تصاویر ارسال شده'>
                تصاویر ارسال شده
              </SimpleWrapper2>
            </Flex>
          )}

          {buttonState === 'improve-content' && (
            <SimpleWrapper2 type='readOnly' hero='اصلاح اطلاعات ارسال شده'>
              اصلاح اطلاعات ارسال شده
            </SimpleWrapper2>
          )}

          {buttonState === 'comments' && (
            <SimpleWrapper2 type='readOnly' hero='نظرات'>
              نظرات
            </SimpleWrapper2>
          )}
          {/* 
          <AccordionWrapper hero='تصویر شاخص'>
            <PrimaryImage status={status} picture={placeData?.pictures[0]} />
          </AccordionWrapper>
          <AccordionWrapper hero='گالری تصاویر'>
            <ImageGallery status={status} userPicUpload={placeData?.UserSentPicturesForPlace} />
          </AccordionWrapper> */}

          <Flex width={'100%'} align={'center'} gap={'5'} p={'4'} style={{ border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8, backgroundColor: colorPalette.gray[2] }}>
            <Button size={'3'} variant='soft' style={{ paddingInline: 48.5 }}>
              <Text {...typoVariant.body1}>ثبت</Text>
            </Button>
            <Button size={'3'} colorVariant='PINK' style={{ paddingInline: 51 }} onClick={() => back}>
              <Text {...typoVariant.body1}>لغو</Text>
            </Button>
          </Flex>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default CreateAndEditPoint;
