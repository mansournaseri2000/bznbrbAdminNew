'use client';

import { useCallback } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import { RadioGroup, Slider } from '@radix-ui/themes';
import styled from 'styled-components';

import { cost, renownLevel } from '@/constants/place';
import { Flex, Grid, IconButton, Text, TextField } from '@/libs/primitives';
import { Divider } from '@/libs/shared';
import { colorPalette } from '@/theme';
import { Category, Season, TripData, TripLimitation } from '@/types/place/place-constant';

/**
 * props
 * _______________________________________________________________________________
 */

type Props = {
  tripDatas: TripData[];
  Categories: Category[];
  seasons: Season[];
  tripLimitations: TripLimitation[];
  constants: any;
};

const AnalysisRoot = ({ tripDatas, seasons, constants }: Props) => {
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
        TripTypesItems.map((item: { tripTypeId: number }) => (item.tripTypeId === tripTypeId ? { ...item, score: value } : item)),
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
      const clampedValue = Math.max(0, value); // Ensures the value is at least 0, but has no upper limit

      setValue(
        'PlaceTripSeasons',
        placeTripSeasonsItems.map((item: { tripSeasonId: number }) => (item.tripSeasonId === id ? { ...item, timing: clampedValue } : item)),
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

  const handleTripLimitationsUntillChange = useCallback(
    (id: number, value: any) => {
      setValue(
        'PlaceTripSeasons',
        placeTripSeasonsItems.map(
          (item: { tripSeasonId: number }) => (item.tripSeasonId === id ? { ...item, until: value } : item) // No unnecessary object spreading
        ),
        { shouldDirty: true, shouldValidate: true }
      );
    },
    [placeTripSeasonsItems, setValue] // Ensure dependencies are correct
  );

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
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
        <Divider style={{ color: colorPalette.gray[6] }} />
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
        <Divider style={{ color: colorPalette.gray[6] }} />
      </Grid>

      <Grid columns={'2'} gap={'24px'}>
        <Flex direction={'column'} gap={'16px'}>
          <Text>میزان اهمیت نقطه</Text>
          <Flex width={'50%'} gap={'10px'} align={'center'}>
            <CustomSlider defaultValue={[0]} value={[trip_value]} onValueChange={value => setValue('trip_value', value)} max={100} step={1} style={{ width: '50%' }} />
            <Text>{trip_value ?? 0}%</Text>
          </Flex>
        </Flex>
        <Flex direction={'column'} gap={'16px'}>
          <Text>رتبه بندی</Text>
          <Flex width={'50%'} gap={'10px'} align={'center'}>
            <CustomSlider defaultValue={[0]} value={[rating]} onValueChange={value => setValue('rating', value)} max={100} step={1} style={{ width: '100%' }} />
            <Text>{rating ?? 0}%</Text>
          </Flex>
        </Flex>
      </Grid>

      {/* TypeOfTrip _______________________________________________________________________________*/}
      <Grid gap={'16px'}>
        <Text>نوع سفر</Text>
        <Grid gap={'0px 30px'} columns={'2'}>
          {tripDatas.map(trip => {
            const tripType = TripTypesItems.find((item: { tripTypeId: number }) => item.tripTypeId === trip.id);

            return (
              <Grid gap={'8px'} key={trip.id} mb='20px'>
                <Text as='label'>{trip.name}</Text>
                <Flex width={'50%'} gap={'10px'} align={'center'}>
                  <CustomSlider
                    defaultValue={[tripType?.score ?? 0]}
                    value={[tripType?.score ?? 0]}
                    onValueChange={value => handleSliderChange(trip.id, Number(value))}
                    max={100}
                    step={1}
                    style={{ width: '100%' }}
                  />
                  <Text>{tripType?.score ?? 0}%</Text>
                </Flex>
              </Grid>
            );
          })}
        </Grid>
      </Grid>

      {/* PlaceCategories _______________________________________________________________________________*/}
      <Divider style={{ color: colorPalette.gray[6] }} />
      <Grid gap={'16px'}>
        <Text>دسته‌بندی‌ها</Text>
        <Grid gap={'0px 30px'} columns={'2'}>
          {constants.categories.map((trip: any) => {
            const category = placeCategoryItems?.find((item: { categoryId: number }) => item.categoryId === trip.id);

            return (
              <Grid gap={'8px'} key={trip.id} mb='20px'>
                <Text as='label'>{trip.name}</Text>
                <Flex width={'50%'} gap={'10px'} align={'center'}>
                  <CustomSlider
                    defaultValue={Boolean(category) ? [category?.score ?? 0] : [0, 0]}
                    value={[category?.score ?? 0]}
                    onValueChange={value => handleCategorySliderChange(trip.id, Number(value))}
                    max={100}
                    step={1}
                    style={{ width: '100%' }}
                  />
                  <Text>{category?.score ?? 0}%</Text>
                </Flex>
              </Grid>
            );
          })}
        </Grid>
      </Grid>

      {/* <Grid gap={'16px'} maxWidth={'50%'}>
        <Text>مدت زمان بازدید از این جا‌ذبه</Text>
        <Controller name='suggested_time' control={control} render={({ field }) => <TextField {...field} placeholder='مدت زمان بازدید از این جا‌ذبه' aria-label='' />} />
      </Grid> */}

      {/* tripSeason_______________________________________________________________________________*/}
      <Grid gap={'16px'}>
        <Text>بهترین فصل , زمان شروع و مدت اقامت در هر فصل</Text>
        <Grid columns={'1'}>
          <Grid gap={'0px 30px'} columns={'1'}>
            {seasons.map(trip => {
              const tripSeason = placeTripSeasonsItems?.find((item: { tripSeasonId: number }) => item.tripSeasonId === trip.id);

              return (
                <Grid columns={'2'} gap={'24px'} key={trip.id} mb='20px'>
                  <Grid>
                    <Text as='label'>{trip.name}</Text>
                    <Flex width={'50%'} gap={'10px'} align={'center'}>
                      <CustomSlider
                        defaultValue={[tripSeason?.score ?? 0]}
                        value={[tripSeason?.score ?? 0]}
                        onValueChange={value => handlePlaceTripSeasonsSliderChange(trip.id, Number(value))}
                        max={100}
                        step={1}
                        style={{ width: '100%' }}
                      />
                      <Text>{tripSeason?.score ?? 0}%</Text>
                    </Flex>
                  </Grid>
                  <Grid gap={'40px'} columns={'2'}>
                    <Flex gap={'16px'} align={'center'}>
                      <IconButton
                        size={'3'}
                        variant='surface'
                        type='button'
                        onClick={() => handlePlaceTripSeasonsTimingChange(tripSeason.tripSeasonId, (tripSeason?.timing || 0) - 1)}
                        disabled={tripSeason?.timing <= 0}
                      >
                        <MinusIcon style={{ scale: '1.6' }} stroke={colorPalette.blue[9]} strokeWidth={'0.5px'} />
                      </IconButton>

                      <TextField
                        type='number'
                        value={tripSeason?.timing}
                        placeholder={'زمان مناسب'}
                        onChange={e => handlePlaceTripSeasonsTimingChange(tripSeason.tripSeasonId, Number(e.target.value))}
                      />

                      <IconButton
                        size={'3'}
                        variant='surface'
                        type='button'
                        onClick={() => handlePlaceTripSeasonsTimingChange(tripSeason.tripSeasonId, (tripSeason?.timing || 0) + 1)}
                        disabled={tripSeason?.timing >= 24}
                      >
                        <PlusIcon style={{ scale: '1.6' }} stroke={colorPalette.blue[9]} strokeWidth={'0.5px'} />
                      </IconButton>
                    </Flex>

                    <Flex align={'center'} position={'relative'}>
                      <TextField
                        maxLength={5}
                        value={tripSeason.until}
                        onChange={e => {
                          console.log(tripSeason.tripSeasonId, 'tripSeason.tripSeasonId');
                          let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters

                          if (value.length > 4) value = value.slice(0, 4); // Ensure a max of 4 digits (HHMM)

                          if (value.length >= 3) {
                            value = `${value.slice(0, 2)}:${value.slice(2, 4)}`; // Format to HH:MM
                          }

                          handleTripLimitationsUntillChange(tripSeason.tripSeasonId, value);
                        }}
                        placeholder='تا ساعت'
                      />
                    </Flex>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <Divider style={{ color: colorPalette.gray[6] }} />
      {/* tripLimitationsItem _______________________________________________________________________________*/}

      <Grid gap={'16px'}>
        <Text>محدودیت ها</Text>
        <Grid gap={'0px 30px'} columns={'2'}>
          {constants.tripLimitations.map((trip: any) => {
            const tripLimitationsItem = tripLimitationsItems?.find((item: { tripLimitationId: number }) => item.tripLimitationId === trip.id);
            return (
              <Grid gap={'8px'} key={trip.id} mb='20px'>
                <Text as='label'>{trip.name}</Text>
                <Flex width={'50%'} gap={'10px'} align={'center'}>
                  <CustomSlider
                    defaultValue={[tripLimitationsItem?.score ?? 0]}
                    value={[tripLimitationsItem?.score ?? 0]}
                    onValueChange={value => handleTripLimitationsSliderChange(trip.id, Number(value))}
                    max={100}
                    step={1}
                    style={{ width: '100%' }}
                  />
                  <Text>{tripLimitationsItem?.score ?? 0}%</Text>
                </Flex>
              </Grid>
            );
          })}
        </Grid>

        <RadioGroup.Root
          defaultValue={watch('gender')}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '24px',
          }}
          name='gender'
          onValueChange={value => {
            setValue('gender', value);
          }}
        >
          {constants?.gender.map((item: any) => {
            return (
              <RadioGroup.Item key={item.id} value={item.name} style={{ cursor: 'pointer' }}>
                <Text>{item.name === 'MALE' ? 'ورود آقایان ممنوع' : item.name === 'FEMALE' ? 'ورود بانوان ممنوع' : 'هیچکدام'}</Text>
              </RadioGroup.Item>
            );
          })}
        </RadioGroup.Root>
      </Grid>
    </Grid>
  );
};

export default AnalysisRoot;

/**
 * styled-component
 * _______________________________________________________________________________
 */

const CustomSlider = styled(Slider)`
  .rt-SliderThumb::after {
    background-color: ${colorPalette.pink[6]};
  }
`;
