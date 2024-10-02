'use client';

import { useCallback } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { RadioGroup, Slider } from '@radix-ui/themes';

import { categoriesConstants, cost, renownLevel } from '@/constants/place';
import { Flex, Grid, Text, TextField } from '@/libs/primitives';
import { Divider } from '@/libs/shared';
import { Category, Season, TripData, TripLimitation } from '@/types/place/place-constant';

import Container from '../Container';

/**
 * props
 * _______________________________________________________________________________
 */

type Props = {
  tripDatas: TripData[];
  Categories: Category[];
  seasons: Season[];
  tripLimitations: TripLimitation[];
};

const AnalysisRoot = ({ tripDatas, seasons, tripLimitations }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const { setValue, watch } = useFormContext();

  const TripTypesItems = useWatch({ name: 'TripTypes' });
  const placeCategoryItems = useWatch({ name: 'PlaceCategories' });
  const placeTripSeasonsItems = useWatch({ name: 'PlaceTripSeasons' });
  const tripLimitationsItems = useWatch({ name: 'tripLimitations' });
  const rating = useWatch({ name: 'rating' });
  const trip_value = useWatch({ name: 'trip_value' });
  const costValue = useWatch({ name: 'cost' });
  const renownValue = useWatch({ name: 'renown' });

  console.log(watch(), 'watch');

  /**
  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */
  const handleSliderChange = useCallback(
    (tripTypeId: number, value: number) => {
      setValue(
        'TripTypes',
        TripTypesItems.map((item: { id: number }) => (item.id === tripTypeId ? { ...item, score: value } : item)),
        { shouldDirty: true, shouldValidate: true }
      );
    },
    [TripTypesItems, setValue]
  );

  const handleCategorySliderChange = useCallback(
    (id: number, value: number) => {
      setValue(
        'PlaceCategories',
        placeCategoryItems.map((item: { categoryId: number }) => (item.categoryId === id ? { ...item, score: value } : item)),
        { shouldDirty: true, shouldValidate: true }
      );
    },
    [placeCategoryItems, setValue]
  );

  const handlePlaceTripSeasonsSliderChange = useCallback(
    (id: number, value: number) => {
      setValue(
        'PlaceTripSeasons',
        placeTripSeasonsItems.map((item: { tripSeasonId: number }) => (item.tripSeasonId === id ? { ...item, score: value } : item)),
        { shouldDirty: true, shouldValidate: true }
      );
    },
    [placeTripSeasonsItems, setValue]
  );

  const handlePlaceTripSeasonsTimingChange = useCallback(
    (id: number, value: number) => {
      setValue(
        'PlaceTripSeasons',
        placeTripSeasonsItems.map((item: { tripSeasonId: number }) => (item.tripSeasonId === id ? { ...item, timing: value } : item)),
        { shouldDirty: true, shouldValidate: true }
      );
    },
    [placeTripSeasonsItems, setValue]
  );

  const handleTripLimitationsSliderChange = useCallback(
    (id: number, value: number) => {
      setValue(
        'tripLimitations',
        tripLimitationsItems.map((item: { tripLimitationId: number }) => (item.tripLimitationId === id ? { ...item, score: value } : item)),
        { shouldDirty: true, shouldValidate: true }
      );
    },
    [tripLimitationsItems, setValue]
  );

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Container height='auto' title='تحلیل بزنیم بیرون'>
      <Grid pb={'24px'} gap={'24px'} height={'max-content'}>
        {/* AmountOfCashCost _______________________________________________________________________________*/}
        <Grid gap={'24px'} height={'max-content'}>
          <Text>میزان هزینه نقدی</Text>
          <RadioGroup.Root
            defaultValue={costValue}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '24px',
            }}
            name='cost'
            onValueChange={value => {
              setValue('cost', value);
            }}
          >
            {cost.map(item => {
              return (
                <RadioGroup.Item key={item.id} value={item.id} style={{ cursor: 'pointer' }}>
                  <Text>{item.name}</Text>
                </RadioGroup.Item>
              );
            })}
          </RadioGroup.Root>
          <Divider />
        </Grid>

        {/* DegreeOfFame _______________________________________________________________________________*/}
        <Grid gap={'24px'} height={'max-content'}>
          <Text>میزان شهرت</Text>
          <RadioGroup.Root
            defaultValue={renownValue}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '24px',
            }}
            name='renown'
            onValueChange={value => {
              setValue('renown', value);
            }}
          >
            {renownLevel.map(item => {
              return (
                <RadioGroup.Item key={item.id} value={String(item.id)} style={{ cursor: 'pointer' }}>
                  <Text>{item.name}</Text>
                </RadioGroup.Item>
              );
            })}
          </RadioGroup.Root>
          <Divider />
        </Grid>

        <Grid columns={'2'} gap={'24px'}>
          <Flex direction={'column'} gap={'16px'}>
            <Text>میزان اهمیت نقطه</Text>
            <Flex gap={'10px'} align={'center'}>
              <Text>{trip_value ?? 0}%</Text>
              <Slider defaultValue={[0]} value={[trip_value]} onValueChange={value => setValue('trip_value', value)} max={100} step={1} style={{ width: '100%' }} />
            </Flex>
          </Flex>
          <Flex direction={'column'} gap={'16px'}>
            <Text>رتبه بندی</Text>
            <Flex gap={'10px'} align={'center'}>
              <Text>{rating ?? 0}%</Text>
              <Slider defaultValue={[0]} value={[rating]} onValueChange={value => setValue('rating', value)} max={100} step={1} style={{ width: '100%' }} />
            </Flex>
          </Flex>
        </Grid>

        {/* TypeOfTrip _______________________________________________________________________________*/}
        <Grid gap={'16px'}>
          <Text>نوع سفر</Text>
          <Grid gap={'0px 30px'} columns={'2'}>
            {tripDatas.map(trip => {
              const tripType = TripTypesItems.find((item: { id: number }) => item.id === trip.id);
              return (
                <Grid gap={'8px'} key={trip.id} mb='20px'>
                  <Text as='label'>{trip.name}</Text>
                  <Flex gap={'10px'} align={'center'}>
                    <Text>{tripType?.score ?? 0}%</Text>
                    <Slider
                      defaultValue={[tripType?.score ?? 0]}
                      value={[tripType?.score ?? 0]}
                      onValueChange={value => handleSliderChange(trip.id, Number(value))}
                      max={100}
                      step={1}
                      style={{ width: '100%' }}
                      disabled={!tripType}
                    />
                  </Flex>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        {/* PlaceCategories _______________________________________________________________________________*/}
        <Grid gap={'16px'}>
          <Text>دسته‌بندی‌ها</Text>
          <Grid gap={'0px 30px'} columns={'2'}>
            {categoriesConstants.map(trip => {
              const category = placeCategoryItems?.find((item: { categoryId: number }) => item.categoryId === trip.id);
              return (
                <Grid gap={'8px'} key={trip.id} mb='20px'>
                  <Text as='label'>{trip.name}</Text>
                  <Flex gap={'10px'} align={'center'}>
                    <Text>{category?.score ?? 0}%</Text>
                    <Slider
                      defaultValue={[category?.score ?? 0]}
                      value={[category?.score ?? 0]}
                      onValueChange={value => handleCategorySliderChange(trip.id, Number(value))}
                      max={100}
                      step={1}
                      style={{ width: '100%' }}
                    />
                  </Flex>
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        {/* tripSeasond _______________________________________________________________________________*/}
        <Grid gap={'16px'}>
          <Text>بهترین فصل , زمان شروع و مدت اقامت در هر فصل</Text>
          <Grid columns={'1'}>
            <Grid gap={'0px 30px'} columns={'1'}>
              {seasons.map(trip => {
                const tripSeasond = placeTripSeasonsItems?.find((item: { tripSeasonId: number }) => item.tripSeasonId === trip.id);

                return (
                  <Grid columns={'2'} gap={'24px'} key={trip.id} mb='20px'>
                    <Grid>
                      <Text as='label'>{trip.name}</Text>
                      <Flex gap={'10px'} align={'center'}>
                        <Text>{tripSeasond?.score ?? 0}%</Text>
                        <Slider
                          defaultValue={[tripSeasond?.score ?? 0]}
                          value={[tripSeasond?.score ?? 0]}
                          onValueChange={value => handlePlaceTripSeasonsSliderChange(trip.id, Number(value))}
                          max={100}
                          step={1}
                          style={{ width: '100%' }}
                          disabled={!tripSeasond}
                        />
                      </Flex>
                    </Grid>
                    <Grid>
                      {
                        <TextField
                          type='number'
                          value={tripSeasond?.timing}
                          placeholder={'مدت اقامت پیشنهادی'}
                          onChange={e => handlePlaceTripSeasonsTimingChange(tripSeasond.tripSeasonId, Number(e.target.value))}
                        />
                      }
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>

        {/* tripLimitationsItem _______________________________________________________________________________*/}
        <Grid gap={'16px'}>
          <Text>محدودیت ها</Text>
          <Grid gap={'0px 30px'} columns={'2'}>
            {tripLimitations.map(trip => {
              const tripLimitationsItem = tripLimitationsItems?.find((item: { tripLimitationId: number }) => item.tripLimitationId === trip.id);
              return (
                <Grid gap={'8px'} key={trip.id} mb='20px'>
                  <Text as='label'>{trip.name}</Text>
                  <Flex gap={'10px'} align={'center'}>
                    <Text>{tripLimitationsItem?.score ?? 0}%</Text>
                    <Slider
                      defaultValue={[tripLimitationsItem?.score ?? 0]}
                      value={[tripLimitationsItem?.score ?? 0]}
                      onValueChange={value => handleTripLimitationsSliderChange(trip.id, Number(value))}
                      max={100}
                      step={1}
                      style={{ width: '100%' }}
                    />
                  </Flex>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AnalysisRoot;

/**
 * styled-component
 * _______________________________________________________________________________
 */
