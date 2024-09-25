'use client';

import { useFormContext } from 'react-hook-form';

import { Slider } from '@radix-ui/themes';

import { Flex, Grid, Text } from '@/libs/primitives';
import { Category, Season, TripData, TripLimitation } from '@/types/place';

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

const AnalysisRoot = ({ tripDatas, Categories, seasons, tripLimitations }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const { setValue, watch } = useFormContext();
  const TripTypesItems = watch('TripTypes');
  const placeCategoryItems = watch('PlaceCategories');
  const placeTripSeasonsItems = watch('PlaceTripSeasons');
  const tripLimitationsItems = watch('tripLimitations');

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */
  const handleSliderChange = (tripTypeId: number, value: number) => {
    const tripTypes = watch('TripTypes');

    setValue(
      'TripTypes',
      tripTypes.map((item: { tripTypeId: number }) =>
        item.tripTypeId === tripTypeId ? { ...item, score: value } : item
      )
    );
  };

  const handleCategorySliderChange = (id: number, value: number) => {
    const categoryTypes = watch('PlaceCategories');

    setValue(
      'PlaceCategories',
      categoryTypes.map((item: { categoryId: number }) =>
        item.categoryId === id ? { ...item, score: value } : item
      )
    );
  };

  const handlePlaceTripSeasonsSliderChange = (id: number, value: number) => {
    const PlaceTripSeasons = watch('PlaceTripSeasons');

    setValue(
      'PlaceTripSeasons',
      PlaceTripSeasons.map((item: { tripSeasonId: number }) =>
        item.tripSeasonId === id ? { ...item, score: value } : item
      )
    );
  };

  const handleTripLimitationsSliderChange = (id: number, value: number) => {
    const tripLimitationsItems = watch('tripLimitations');

    setValue(
      'tripLimitations',
      tripLimitationsItems.map((item: { tripLimitationId: number }) =>
        item.tripLimitationId === id ? { ...item, score: value } : item
      )
    );
  };

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Container height='auto' title='تحلیل بزنیم بیرون'>
      <Grid pb={'24px'} gap={'24px'} height={'max-content'}>
        {/* AmountOfCashCost _______________________________________________________________________________*/}

        {/* DegreeOfFame _______________________________________________________________________________*/}

        {/* TypeOfTrip _______________________________________________________________________________*/}
        <Grid gap={'16px'}>
          <Text>نوع سفر</Text>
          <Grid gap={'0px 100px'} columns={'2'}>
            {tripDatas.map(trip => {
              const tripType = TripTypesItems.find(
                (item: { tripTypeId: number }) => item.tripTypeId === trip.id
              );
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
                    />
                  </Flex>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        {/* Categories _______________________________________________________________________________*/}

        <Grid gap={'16px'}>
          <Text>دسته‌بندی‌ها</Text>
          <Grid gap={'0px 100px'} columns={'2'}>
            {Categories.map(trip => {
              const category = placeCategoryItems.find(
                (item: { categoryId: number }) => item.categoryId === trip.id
              );

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

        {/* Categories _______________________________________________________________________________*/}

        <Grid gap={'16px'}>
          <Text>بهترین فصل , زمان شروع و مدت اقامت در هر فصل</Text>
          <Grid columns={'2'}>
            <Grid gap={'0px 100px'} columns={'2'}>
              {seasons.map(trip => {
                const tripSeasond = placeTripSeasonsItems.find(
                  (item: { tripSeasonId: number }) => item.tripSeasonId === trip.id
                );

                return (
                  <Grid gap={'8px'} key={trip.id} mb='20px'>
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
                      />
                    </Flex>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>

        {/* Categories _______________________________________________________________________________*/}
        <Grid gap={'16px'}>
          <Text>محدودیت ها</Text>
          <Grid columns={'2'}>
            <Grid gap={'0px 100px'} columns={'2'}>
              {tripLimitations.map(trip => {
                const tripLimitationsItem = tripLimitationsItems.find(
                  (item: { tripLimitationId: number }) => item.tripLimitationId === trip.id
                );

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
      </Grid>
    </Container>
  );
};

export default AnalysisRoot;

/**
 * styled-component
 * _______________________________________________________________________________
 */

{
  /* <Grid gap={'24px'}>
          <Text>بهترین فصل , زمان شروع و مدت اقامت در هر فصل</Text>
          <Grid columns={'2'} gap={'24px 100px'}>
            <Grid gap={'24px'}>
              {BestSeason.map(item => {
                return <CustomSlider key={item.id} lable={item.lable} />;
              })}
            </Grid>
            <Grid align={'center'} columns={'2'} gap={'16px'}>
              <Grid gap={'20px'}>
                <Select errorText={''} items={LengthOfStay} placeholder={'دسته بندی'} store='province' />
                <Select errorText={''} items={LengthOfStay} placeholder={'دسته بندی'} store='province' />
                <Select errorText={''} items={LengthOfStay} placeholder={'دسته بندی'} store='province' />
                <Select errorText={''} items={LengthOfStay} placeholder={'دسته بندی'} store='province' />
              </Grid>
              <Grid>
                <TimePicker errorText={''} name='startTime' inputMode='none' placeholder='ساعت شروع' />
                <TimePicker errorText={''} name='startTime' inputMode='none' placeholder='ساعت شروع' />
                <TimePicker errorText={''} name='startTime' inputMode='none' placeholder='ساعت شروع' />
                <TimePicker errorText={''} name='startTime' inputMode='none' placeholder='ساعت شروع' />
              </Grid>
            </Grid>
          </Grid>
          <Divider />
        </Grid> */
}

{
  /* <Grid gap={'24px'} height={'max-content'}>
          <Text>میزان هزینه نقدی</Text>
          <RadioGroup.Root
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '24px',
            }}
            defaultValue='1'
            name='example'
          >
            {AmountOfCashCost.map(item => {
              return (
                <RadioGroup.Item key={item.id} value={String(item.id)} style={{ cursor: 'pointer' }}>
                  <Text>{item.name}</Text>
                </RadioGroup.Item>
              );
            })}
          </RadioGroup.Root>
          <Divider />
        </Grid> */
}

{
  /* <Grid gap={'24px'} height={'max-content'}>
          <Text>میزان هزینه نقدی</Text>
          <RadioGroup.Root
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '24px',
            }}
            defaultValue='1'
            name='example'
          >
            {DegreeOfFame.map(item => {
              return (
                <RadioGroup.Item key={item.id} value={String(item.id)} style={{ cursor: 'pointer' }}>
                  <Text>{item.name}</Text>
                </RadioGroup.Item>
              );
            })}
          </RadioGroup.Root>
          <Divider />
        </Grid> */
}
