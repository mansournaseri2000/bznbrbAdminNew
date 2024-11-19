'use client';

import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { yupResolver } from '@hookform/resolvers/yup';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { Popover } from '@radix-ui/themes';
import { Checkbox as RadixCheckbox } from '@radix-ui/themes';
import styled from 'styled-components';

import { means_of_travelItems, Number_Of_Passengers, place_of_residence, Type_Of_Passengers, Type_of_tourist_place } from '@/constants/plans';
import { Button, Flex, Grid, SelectItem, SelectRoot, Text } from '@/libs/primitives';
import { useProvince } from '@/libs/providers/PlansProvider';
import CustomDatePicker from '@/libs/shared/CustomDatePicker';
import CustomTimePicker from '@/libs/shared/CustomTimePicker';
import BoxWrapper from '@/libs/shared/wrapper/BoxWrapper';
import { areDatesSameOrCurrent } from '@/libs/utils/areDatesSame';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { Province } from '@/types/place/place-constant';
import { defaultFormValues, TripFormData } from '@/types/plans/create-plan';
import { plannerValidationSchema } from '@/validations/plans';

import Checkbox from '../../../libs/shared/CheckboxGroup';

type Props = {
  provinces: Province[];
  plannerData?: any;
};

const CreatePlan = ({ provinces }: Props) => {
  /**
   * variables and constants
   * _______________________________________________________________________________
   */
  const { setProvinceID } = useProvince();
  const router = useRouter();
  /**
   * hooks and methods
   * _______________________________________________________________________________
   */
  const methods = useForm<TripFormData>({
    defaultValues: defaultFormValues,
    resolver: yupResolver(plannerValidationSchema) as any,
  });

  const {
    watch,
    control,
    // handleSubmit,
    setValue,
    formState: { errors },
  } = methods;

  const provinceCity = provinces?.filter(item => item.id === Number(watch('origin.province')))[0]?.Cities;
  const destinationCity = provinces?.filter(item => item.id === Number(watch('destination.province')))[0]?.Cities;
  /**
   * functions
   * _______________________________________________________________________________
   */

  const getTouristPlaceKeysByIds = (data: any, ids: number[]): string => {
    return data
      .filter((place: { id: number }) => ids?.includes(place.id))
      .map((place: { key: any }) => place.key)
      .join(',');
  };

  const getType_Of_Passengers = (data: any, keys: string[]): string => {
    return data
      .filter((item: { value: string }) => keys?.includes(item.value))
      .map((item: { key: any }) => item.key)
      .join(',');
  };

  const maxDate = function add14DaysAndReturnTimestamp(date: any) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 13);
    return newDate.getTime();
  };

  function reduceOneHour(): Date {
    const now = new Date();

    now.setHours(now.getHours() - 1);

    return now;
  }

  const sample = (date: Date) => {
    const currentDate = new Date(date);
    currentDate.setDate(date.getDate() + 1); // Add one day

    return new Date(currentDate);
  };
  return (
    <>
      <FormProvider {...methods}>
        {/* TODO:define onSubmit */}
        <form>
          <Flex direction={'column'} gap={'32px'} style={{ flex: 1 }} height={'100%'} p={'24px 24px 24px 40px'}>
            <BoxWrapper hero='از کجا به کجا بریم ؟'>
              <Grid gap={'4'}>
                <Text {...typoVariant.paragraph2} style={{ color: colorPalette.gray[11] }}>
                  لطفا آدرس مبدا و مقصد سفر خود را وارد کنید
                </Text>
                <Grid gap={'2'}>
                  <Text {...typoVariant.title2} style={{ color: colorPalette.gray[12], paddingRight: '12px' }}>
                    مبدا
                  </Text>
                  <Container>
                    <Controller
                      name='origin.province'
                      control={control}
                      render={({ field }) => (
                        <SelectRoot
                          // isFill={Boolean(String(watch('origin.province')))}
                          {...field}
                          value={String(watch('origin.province'))}
                          onValueChange={val => {
                            field.onChange(val);
                            setValue('origin.city', '');
                          }}
                          placeholder={'استان'}
                          errorText={errors.origin?.province?.message}
                          // lable='استان'
                        >
                          {provinces?.map(item => {
                            return (
                              <SelectItem key={item.id} value={String(item.id)}>
                                {item.name}
                              </SelectItem>
                            );
                          })}
                        </SelectRoot>
                      )}
                    />

                    <Controller
                      name='origin.city'
                      control={control}
                      render={({ field }) => (
                        <SelectRoot
                          {...field}
                          disabled={!Boolean(provinceCity)}
                          value={String(watch('origin.city'))}
                          // isFill={Boolean(String(watch('origin.city')))}
                          onValueChange={val => {
                            field.onChange(val);
                          }}
                          placeholder={'شهرستان'}
                          errorText={errors.origin?.city?.message}

                          // lable='شهر'
                        >
                          {provinceCity?.map(item => {
                            return (
                              <SelectItem key={item.id} value={String(item.id)}>
                                {item.name}
                              </SelectItem>
                            );
                          })}
                        </SelectRoot>
                      )}
                    />
                  </Container>
                </Grid>
                <Grid gap={'8px'}>
                  <Text {...typoVariant.title2} style={{ color: colorPalette.gray[12], paddingRight: '12px' }}>
                    مقصد
                  </Text>
                  <Container>
                    <Controller
                      name='destination.province'
                      control={control}
                      render={({ field }) => (
                        <SelectRoot
                          {...field}
                          value={String(watch('destination.province'))}
                          // isFill={Boolean(String(watch('destination.province')))}
                          onValueChange={val => {
                            field.onChange(val);
                            setValue('destination.city', '');
                            setProvinceID(Number(val));
                          }}
                          placeholder={'استان'}
                          errorText={errors.destination?.province?.message}
                        >
                          {provinces?.map(item => {
                            return (
                              <SelectItem key={item.id} value={String(item.id)}>
                                {item.name}
                              </SelectItem>
                            );
                          })}
                        </SelectRoot>
                      )}
                    />

                    <Controller
                      name='destination.city'
                      control={control}
                      render={({ field }) => (
                        <SelectRoot
                          {...field}
                          disabled={!Boolean(destinationCity)}
                          value={String(watch('destination.city'))}
                          // isFill={Boolean(String(watch('destination.city')))}
                          onValueChange={val => {
                            field.onChange(val);
                          }}
                          placeholder={'شهرستان'}
                          errorText={errors.destination?.city?.message}
                        >
                          {destinationCity?.map(item => {
                            return (
                              <SelectItem key={item.id} value={String(item.id)}>
                                {item.name}
                              </SelectItem>
                            );
                          })}
                        </SelectRoot>
                      )}
                    />
                  </Container>
                </Grid>
              </Grid>
            </BoxWrapper>

            {/* TIME AND DATE _______________________________________________________________________________ */}
            <BoxWrapper hero='کی بریم کی بیایم ؟'>
              <Grid columns={'2'} gap={'4'}>
                <Flex direction={'column'} gap={'2'}>
                  <Text style={{ paddingRight: '10px' }}>تاریخ و ساعت رفت</Text>
                  <Grid columns={'2'} gap={'24px'}>
                    <Controller
                      name={'startTime.date'}
                      control={control}
                      render={item => (
                        <CustomDatePicker
                          minDate={new Date().setHours(0, 0, 0, 0)}
                          inputMode='none'
                          placeholder='تاریخ'
                          value={item.field.value as any}
                          onChangeValue={(val: any) => {
                            setValue('startTime.date', new Date(val));
                            setValue('endTime.date', sample(new Date(val)));
                            setValue('startTime.time', new Date());
                          }}
                        />
                      )}
                    />
                    <Controller
                      name={'startTime.time'}
                      control={control}
                      render={item => (
                        <CustomTimePicker
                          defaultValue={''}
                          value={item.field.value as any}
                          minDate={areDatesSameOrCurrent(new Date().getTime(), new Date(watch('startTime.date') as any).getTime()) ? new Date(reduceOneHour()) : ''}
                          disabled={!watch('startTime.date')}
                          inputMode='none'
                          placeholder='ساعت'
                          onChangeValue={(val: any) => {
                            setValue('startTime.time', new Date(val));
                          }}
                        />
                      )}
                    />
                  </Grid>
                </Flex>
                <Flex direction={'column'} gap={'2'}>
                  <Text style={{ paddingRight: '10px' }}>تاریخ و ساعت برگشت</Text>
                  <Grid columns={'2'} gap={'24px'}>
                    <Controller
                      name={'endTime.date'}
                      control={control}
                      render={item => (
                        <CustomDatePicker
                          value={item.field.value as any}
                          disabled={!Boolean(watch('startTime.date'))}
                          minDate={sample(new Date(watch('startTime.date') as any))}
                          maxDate={maxDate(watch('startTime.date'))}
                          inputMode='none'
                          placeholder='تاریخ'
                          onChangeValue={(val: any) => {
                            setValue('endTime.date', new Date(val));
                          }}
                        />
                      )}
                    />
                    <Controller
                      name={'endTime.time'}
                      control={control}
                      render={item => (
                        <CustomTimePicker
                          value={item.field.value as any}
                          disabled={!Boolean(watch('endTime.date'))}
                          inputMode='none'
                          placeholder='تاریخ'
                          onChangeValue={(val: any) => {
                            setValue('endTime.time', new Date(val));
                          }}
                        />
                      )}
                    />
                  </Grid>
                </Flex>
              </Grid>
            </BoxWrapper>
            {/* MEANS OF TRAVEL _______________________________________________________________________________ */}

            <BoxWrapper hero='تنظیمات اضافه'>
              <Grid gap={'5'}>
                <Grid gap={'2'}>
                  <Text {...typoVariant.title2} style={{ color: colorPalette.gray[12], paddingRight: '12px' }}>
                    وسیله و اسکان
                  </Text>
                  <Container>
                    <Controller
                      name='means_of_travel'
                      control={control}
                      render={({ field }) => (
                        <SelectRoot
                          {...field}
                          value={String(watch('means_of_travel'))}
                          // isFill={Boolean(String(watch('means_of_travel')))}
                          onValueChange={val => {
                            field.onChange(val);
                          }}
                          placeholder={'وسیله سفر'}
                          errorText={errors.means_of_travel?.message}
                        >
                          {means_of_travelItems?.map(item => {
                            return (
                              <SelectItem disabled={item.disable} key={item.id} value={String(item.id)}>
                                {item.name}
                              </SelectItem>
                            );
                          })}
                        </SelectRoot>
                      )}
                    />
                    <Controller
                      name='place_of_residence'
                      control={control}
                      render={({ field }) => (
                        <SelectRoot
                          {...field}
                          value={String(watch('place_of_residence'))}
                          // isFill={Boolean(String(watch('place_of_residence')))}
                          onValueChange={val => {
                            field.onChange(val);
                          }}
                          placeholder={'محل اسکان'}
                          errorText={errors.place_of_residence?.message}
                        >
                          {place_of_residence?.map(item => {
                            return (
                              <SelectItem key={item.id} value={String(item.id)}>
                                {item.name}
                              </SelectItem>
                            );
                          })}
                        </SelectRoot>
                      )}
                    />
                  </Container>
                </Grid>
                {/* Type_of_tourist_place _______________________________________________________________________________ */}

                <Grid gap={'2'}>
                  <Text {...typoVariant.title2} style={{ color: colorPalette.gray[12], paddingRight: '12px' }}>
                    گردشگری
                  </Text>
                  <Grid columns={'2'} gapX={'5'}>
                    <Popover.Root>
                      <Popover.Trigger>
                        <Button
                          style={{
                            minHeight: '48px',
                            paddingInline: '15px',
                            borderRadius: '8px',
                            border: `1px solid ${colorPalette.gray[7]}`,
                            color: colorPalette.gray[9],
                            backgroundColor: colorPalette.gray[2],
                          }}
                          variant='solid'
                          size={'4'}
                        >
                          <Flex align={'center'} width={'100%'} justify={'between'}>
                            <Text
                              {...typoVariant.body3}
                              style={{
                                color: watch('Type_of_tourist_place').length > 0 ? colorPalette.gray[11] : colorPalette.gray[9],
                              }}
                            >
                              {watch('Type_of_tourist_place')?.length === 0 ? 'نوع مکان گردشگری' : getTouristPlaceKeysByIds(Type_of_tourist_place, watch('Type_of_tourist_place'))}
                            </Text>
                            <CaretDownIcon style={{ scale: 1.6 }} color={colorPalette.gray[11]} />
                          </Flex>
                        </Button>
                      </Popover.Trigger>
                      <Popover.Content width='360px' style={{ backgroundColor: colorPalette.gray[2] }}>
                        <Flex gap='3'>
                          <Checkbox isRow={false} items={Type_of_tourist_place} store={'Type_of_tourist_place'} />
                        </Flex>
                      </Popover.Content>
                    </Popover.Root>

                    <Popover.Root>
                      <Popover.Trigger>
                        <Button
                          style={{
                            minHeight: '48px',
                            paddingInline: '15px 10px',
                            borderRadius: '8px',
                            border: `1px solid ${colorPalette.gray[7]}`,
                            color: colorPalette.gray[9],
                            backgroundColor: colorPalette.gray[2],
                          }}
                          variant='solid'
                          size={'4'}
                        >
                          <Flex align={'center'} width={'100%'} justify={'between'} pl={'3px'}>
                            <Text
                              {...typoVariant.body3}
                              style={{
                                color: watch('Type_Of_Passengers').length > 0 ? colorPalette.gray[11] : colorPalette.gray[9],
                              }}
                            >
                              {watch('Type_Of_Passengers')?.length === 0 ? 'نوع مسافران' : getType_Of_Passengers(Type_Of_Passengers, watch('Type_Of_Passengers'))}
                            </Text>
                            <CaretDownIcon style={{ scale: 1.6 }} color={colorPalette.gray[11]} />
                          </Flex>
                        </Button>
                      </Popover.Trigger>
                      <Popover.Content width='360px'>
                        <Flex gap='3'>
                          <Checkbox isRow={false} items={Type_Of_Passengers} store='Type_Of_Passengers' />
                        </Flex>
                      </Popover.Content>
                    </Popover.Root>
                  </Grid>

                  {/* Type_Of_Passengers  _______________________________________________________________________________*/}
                </Grid>
                <Grid width={'max-content'}>
                  <Text as='label' size='2'>
                    <Flex gap='2'>
                      <Controller name='justInside' control={control} render={({ field }) => <RadixCheckbox checked={field.value} onCheckedChange={checked => field.onChange(checked)} />} />
                      <Flex gap={'8px'} align={'center'}>
                        <Text {...typoVariant.body3}>شهرگردی</Text>
                        <Text {...typoVariant.description2} style={{ color: colorPalette.gray[9] }}>
                          (با انتخاب این گزینه فقط جاذبه های شهرستان مقصد بهتون پیشنهاد میشه.){' '}
                        </Text>
                      </Flex>
                    </Flex>
                  </Text>
                </Grid>

                <Grid gap={'5'}>
                  <Text {...typoVariant.title2} style={{ color: colorPalette.gray[12], paddingRight: '12px' }}>
                    مسافران
                  </Text>
                  <Grid width={'100%'} columns={'2'} gap={'5'}>
                    <Controller
                      name='number_Of_Adult_Passengers'
                      control={control}
                      render={({ field }) => (
                        <SelectRoot
                          {...field}
                          value={String(watch('number_Of_Adult_Passengers'))}
                          // isFill={Boolean(String(watch('number_Of_Adult_Passengers')))}
                          onValueChange={val => {
                            field.onChange(val);
                          }}
                          placeholder={'تعداد مسافرین بزرگسال'}
                          errorText={errors.number_Of_Adult_Passengers?.message}
                        >
                          {Number_Of_Passengers?.map(item => {
                            return (
                              <SelectItem key={item.id} value={String(item.id)}>
                                {item.name}
                              </SelectItem>
                            );
                          })}
                        </SelectRoot>
                      )}
                    />
                    <Controller
                      name='number_Of_Child_Passengers'
                      control={control}
                      render={({ field }) => (
                        <SelectRoot
                          {...field}
                          value={String(watch('number_Of_Child_Passengers'))}
                          // isFill={Boolean(String(watch('number_Of_Child_Passengers')))}
                          onValueChange={val => {
                            field.onChange(val);
                          }}
                          placeholder={'تعداد مسافرین کودک'}
                          errorText={errors.number_Of_Child_Passengers?.message}
                        >
                          {Number_Of_Passengers?.map(item => {
                            return (
                              <SelectItem key={item.id} value={String(item.id)}>
                                {item.name}
                              </SelectItem>
                            );
                          })}
                        </SelectRoot>
                      )}
                    />
                  </Grid>

                  <Grid width={'100%'} columns={'2'} gap={'5'}>
                    <Controller
                      name='number_Of_Minor_Passengers'
                      control={control}
                      render={({ field }) => (
                        <SelectRoot
                          {...field}
                          value={String(watch('number_Of_Minor_Passengers'))}
                          // isFill={Boolean(String(watch('number_Of_Minor_Passengers')))}
                          onValueChange={val => {
                            field.onChange(val);
                          }}
                          placeholder={'تعداد مسافرین خردسال'}
                          errorText={errors.number_Of_Minor_Passengers?.message}
                        >
                          {Number_Of_Passengers?.map(item => {
                            return (
                              <SelectItem key={item.id} value={String(item.id)}>
                                {item.name}
                              </SelectItem>
                            );
                          })}
                        </SelectRoot>
                      )}
                    />

                    <PopoverRoot>
                      <Popover.Trigger>
                        <Button
                          style={{
                            minHeight: '48px',
                            paddingInline: '15px 10px',
                            borderRadius: '8px',
                            border: `1px solid ${colorPalette.gray[7]}`,
                            color: colorPalette.gray[9],
                            backgroundColor: colorPalette.gray[2],
                          }}
                          variant='solid'
                          size={'4'}
                        >
                          <Flex align={'center'} width={'100%'} justify={'between'} pl={'3px'}>
                            <Text
                              {...typoVariant.body3}
                              style={{
                                color: watch('Type_Of_Passengers').length > 0 ? colorPalette.gray[11] : colorPalette.gray[9],
                              }}
                            >
                              {watch('Type_Of_Passengers')?.length === 0 ? 'نوع مسافران' : getType_Of_Passengers(Type_Of_Passengers, watch('Type_Of_Passengers'))}
                            </Text>
                            <CaretDownIcon style={{ scale: 1.6 }} color={colorPalette.gray[11]} />
                          </Flex>
                        </Button>
                      </Popover.Trigger>
                      <Popover.Content width='360px'>
                        <Flex gap='3'>
                          <Checkbox isRow={false} items={Type_Of_Passengers} store='Type_Of_Passengers' />
                        </Flex>
                      </Popover.Content>
                    </PopoverRoot>
                  </Grid>
                </Grid>
              </Grid>
            </BoxWrapper>
            <Flex width={'100%'} align={'center'} justify={'between'} p={'4'} style={{ backgroundColor: colorPalette.gray[2], border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
              <Button size={'3'} variant='soft'>
                <Text {...typoVariant.body1}>ساخت برنامه</Text>
              </Button>
              <Button size={'3'} type='button' colorVariant='PINK' onClick={() => router.back()}>
                <Text {...typoVariant.body1}>لغو و بازگشت</Text>
              </Button>
            </Flex>
          </Flex>
        </form>
      </FormProvider>
    </>
  );
};

export default CreatePlan;

const Container = styled(Flex)`
  width: 100%;
  gap: 24px;
`;

const PopoverRoot = styled(Popover.Root)`
  width: 100% !important;
`;
