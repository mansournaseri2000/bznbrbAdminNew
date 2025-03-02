'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useSearchParams } from 'next/navigation';

import PriceField from '@/components/tours/PriceField';
import { booleanFilterOptions, isPublishedOptions, StatusFilterOption } from '@/constants/data-management';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { Category, PlaceType, Province } from '@/types/place/place-constant';

import { CheckboxGroup, Grid, PopoverRoot, SelectItem, SelectRoot, Text } from '../../primitives';
import CustomDatePicker from '../CustomDatePicker';
import ModalAction from '../ModalAction';
import { FilterStateOptions } from './type';

type FilterTypes =
  | 'point_position'
  | 'origin_point_position'
  | 'destination_point_position'
  | 'departure_date'
  | 'return_date'
  | 'budget'
  | 'point_type'
  | 'categories'
  | 'point_status'
  | 'article_status'
  | 'date';

type Props = {
  type: FilterTypes[];
  province: Province[];
  categories: Category[];
  PlaceType?: PlaceType[];
  onAddFilter?: () => void;
  onRemoveFilter?: () => void;
};

export function serializeSubCategoriesData(category: any) {
  if (category) {
    const test = category.map((item: any) => {
      return { key: item.name, value: item.id, id: item.id, disable: false };
    });

    return test;
  }
}

const CustomFilter = ({ type, province, categories, PlaceType }: Props) => {
  /**
   * variables and constant
   * _______________________________________________________________________________
   */
  const searchParams = useSearchParams();
  const getParam = (key: string) => searchParams.get(key);
  const methods = useForm<FilterStateOptions>({
    defaultValues: {
      page: getParam('page') ? Number(getParam('page')) : 1,
      departureDateStart: getParam('departureDateStart') ? Number(getParam('departureDateStart')) : '',
      dateStart: getParam('dateStart') ? Number(getParam('dateStart')) : '',
      dateEnd: getParam('dateEnd') ? Number(getParam('dateEnd')) : '',
      departureDateEnd: getParam('departureDateEnd') ? Number(getParam('departureDateEnd')) : '',
      returnDateStart: getParam('returnDateStart') ? Number(getParam('returnDateStart')) : '',
      returnDateEnd: getParam('returnDateEnd') ? Number(getParam('returnDateEnd')) : '',
      provinceId: getParam('provinceId') ? Number(getParam('provinceId')) : '',
      cityId: getParam('cityId') ? Number(getParam('cityId')) : '',
      originProvinceId: getParam('originProvinceId') ? Number(getParam('originProvinceId')) : '',
      originCityId: getParam('originCityId') ? Number(getParam('originCityId')) : '',
      destinationProvinceId: getParam('destinationProvinceId') ? Number(getParam('destinationProvinceId')) : '',
      destinationCityId: getParam('destinationCityId') ? Number(getParam('destinationCityId')) : '',
      pointTypes: getParam('pointTypes') ? getParam('pointTypes')?.split(',').map(Number) : [],
      parentCategoryId: getParam('parentCategoryId') ? Number(getParam('parentCategoryId')) : '',
      subCategoryId: getParam('subCategoryId') ? getParam('subCategoryId')?.split(',').map(Number) : [],
      is_Published: getParam('is_Published') ? Boolean(getParam('is_Published')) : '',
      status: getParam('status') ? Boolean(getParam('status')) : '',
      mainPic: getParam('mainPic') ? Boolean(getParam('mainPic')) : '',
      gallery: getParam('gallery') ? Boolean(getParam('gallery')) : '',
      info: getParam('info') ? Boolean(getParam('info')) : '',
      coordinates: getParam('coordinates') ? Boolean(getParam('coordinates')) : '',
      description: getParam('description') ? Boolean(getParam('description')) : '',
      features: getParam('features') ? Boolean(getParam('features')) : '',
      analyse: getParam('analyse') ? Boolean(getParam('analyse')) : '',
      seo: getParam('seo') ? Boolean(getParam('seo')) : '',
      base: getParam('base') ? Boolean(getParam('base')) : '',
      text: getParam('text') ? Boolean(getParam('text')) : '',
      related: getParam('related') ? Boolean(getParam('related')) : '',
      budgetStart: getParam('budgetStart') ? Number(getParam('budgetStart')) : '',
      budgetEnd: getParam('budgetEnd') ? Number(getParam('budgetEnd')) : '',
    },
  });
  const { control, setValue, watch } = methods;
  const city = province.filter(item => item.id === Number(watch('provinceId')))[0]?.Cities;
  const originCity = province.filter(item => item.id === Number(watch('originProvinceId')))[0]?.Cities;
  const destinationCity = province.filter(item => item.id === Number(watch('destinationProvinceId')))[0]?.Cities;
  const subCategory = categories.filter(item => item.id === Number(watch('parentCategoryId')))[0]?.children;

  console.log('watch', watch());

  /**
   * Hooks and Methods
   * _______________________________________________________________________________
   */
  // const removeFilter = ()=>{
  //   reset({
  //     page:1,

  //   })
  // }

  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <>
      <Grid width={'100%'} p={'4'} gapY={'4'}>
        {type.map((item, index) => (
          <React.Fragment key={index}>
            {/* 
            
            * When have a date picker for TIME FRAME 
            * _______________________________________________________________________________
            */}
            {item === 'date' && (
              <Grid width={'100%'} gapY={'2'}>
                <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
                  بازه زمانی
                </Text>
                <Grid gap={'4'} columns={'2'}>
                  <Controller
                    name={'dateStart'}
                    control={control}
                    render={item => (
                      <CustomDatePicker
                        {...item}
                        inputMode='none'
                        placeholder='از تاریخ'
                        value={Boolean(item.field.value) ? new Date(item.field.value).toISOString() : ''}
                        onChangeValue={(val: any) => {
                          const newDate = new Date(val);
                          newDate.setHours(0, 0, 0, 0);
                          setValue('dateStart', newDate.getTime());
                          setValue('page', 1);
                        }}
                      />
                    )}
                  />

                  <Controller
                    name={'dateEnd'}
                    control={control}
                    render={item => (
                      <CustomDatePicker
                        {...item}
                        value={Boolean(item.field.value) ? new Date(item.field.value).toISOString() : ''}
                        minDate={watch('dateStart')}
                        inputMode='none'
                        placeholder='تا تاریخ'
                        onChangeValue={(val: any) => {
                          const newDate = new Date(val);
                          newDate.setHours(23, 59, 0, 0);
                          setValue('dateEnd', newDate.getTime());
                          setValue('page', 1);
                        }}
                      />
                    )}
                  />
                </Grid>
              </Grid>
            )}
            {/* 
            
            * When have a date picker for DATE GONE
            * _______________________________________________________________________________
            */}
            {item === 'departure_date' && (
              <Grid width={'100%'} gapY={'2'}>
                <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
                  تاریخ رفت
                </Text>
                <Grid gap={'4'} columns={'2'}>
                  <Controller
                    name={'departureDateStart'}
                    control={control}
                    render={item => (
                      <CustomDatePicker
                        {...item}
                        inputMode='none'
                        placeholder='از تاریخ'
                        value={Boolean(item.field.value) ? new Date(item.field.value).toISOString() : ''}
                        onChangeValue={(val: any) => {
                          const newDate = new Date(val);
                          newDate.setHours(0, 0, 0, 0);
                          setValue('departureDateStart', newDate.getTime());
                          setValue('page', 1);
                        }}
                      />
                    )}
                  />

                  <Controller
                    name={'departureDateEnd'}
                    control={control}
                    render={item => (
                      <CustomDatePicker
                        {...item}
                        value={Boolean(item.field.value) ? new Date(item.field.value).toISOString() : ''}
                        minDate={watch('departureDateStart')}
                        inputMode='none'
                        placeholder='تا تاریخ'
                        onChangeValue={(val: any) => {
                          const newDate = new Date(val);
                          newDate.setHours(23, 59, 0, 0);
                          setValue('departureDateEnd', newDate.getTime());
                          setValue('page', 1);
                        }}
                      />
                    )}
                  />
                </Grid>
              </Grid>
            )}
            {/* 
            
            * When have a date picker for RETURN DATE
            * _______________________________________________________________________________
            */}
            {item === 'return_date' && (
              <Grid width={'100%'} gapY={'2'}>
                <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
                  تاریخ برگشت
                </Text>
                <Grid gap={'4'} columns={'2'}>
                  <Controller
                    name={'returnDateStart'}
                    control={control}
                    render={item => (
                      <CustomDatePicker
                        {...item}
                        inputMode='none'
                        placeholder='از تاریخ'
                        value={Boolean(item.field.value) ? new Date(item.field.value).toISOString() : ''}
                        onChangeValue={(val: any) => {
                          const newDate = new Date(val);
                          newDate.setHours(0, 0, 0, 0);
                          setValue('returnDateStart', newDate.getTime());
                          setValue('page', 1);
                        }}
                      />
                    )}
                  />

                  <Controller
                    name={'returnDateEnd'}
                    control={control}
                    render={item => (
                      <CustomDatePicker
                        {...item}
                        value={Boolean(item.field.value) ? new Date(item.field.value).toISOString() : ''}
                        minDate={watch('returnDateStart')}
                        inputMode='none'
                        placeholder='تا تاریخ'
                        onChangeValue={(val: any) => {
                          const newDate = new Date(val);
                          newDate.setHours(23, 59, 0, 0);
                          setValue('returnDateEnd', newDate.getTime());
                          setValue('page', 1);
                        }}
                      />
                    )}
                  />
                </Grid>
              </Grid>
            )}
            {/* 
            
            * When have a single Select for POINT POSITION
            * _______________________________________________________________________________
            */}
            {item === 'point_position' && (
              <Grid width={'100%'} gapY={'5'}>
                <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
                  موقعیت
                </Text>
                {/* ***** Select for province *****  */}
                <Controller
                  name='provinceId'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      placeholder='استان'
                      lable='استان'
                      value={String(field.value)}
                      onValueChange={val => {
                        field.onChange(Number(val));
                        setValue('cityId', '');
                        setValue('page', 1);
                      }}
                    >
                      {province.map(item => (
                        <SelectItem key={item.id} value={String(item.id)}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectRoot>
                  )}
                />
                {/* ***** Select for city *****  */}
                <Controller
                  name='cityId'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      placeholder='شهرستان'
                      lable='شهرستان'
                      disabled={!Boolean(city)}
                      value={String(field.value)}
                      onValueChange={val => {
                        field.onChange(Number(val));
                        setValue('page', 1);
                      }}
                    >
                      {city?.map(item => (
                        <SelectItem key={item.id} value={String(item.id)}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectRoot>
                  )}
                />
              </Grid>
            )}
            {/* 
            
            * When have a Select for ORIGIN PROVINCE and CITY 
            * _______________________________________________________________________________
            */}
            {item === 'origin_point_position' && (
              <Grid width={'100%'} gapY={'5'}>
                <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
                  مبدا
                </Text>
                {/* ***** Select for province *****  */}
                <Controller
                  name='originProvinceId'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      placeholder='استان'
                      lable='استان'
                      value={String(field.value)}
                      onValueChange={val => {
                        field.onChange(Number(val));
                        setValue('originCityId', '');
                        setValue('page', 1);
                      }}
                    >
                      {province.map(item => (
                        <SelectItem key={item.id} value={String(item.id)}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectRoot>
                  )}
                />
                {/* ***** Select for city *****  */}
                <Controller
                  name='originCityId'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      placeholder='شهرستان'
                      lable='شهرستان'
                      disabled={!Boolean(originCity)}
                      value={String(field.value)}
                      onValueChange={val => {
                        field.onChange(Number(val));
                        setValue('page', 1);
                      }}
                    >
                      {originCity?.map(item => (
                        <SelectItem key={item.id} value={String(item.id)}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectRoot>
                  )}
                />
              </Grid>
            )}
            {/* 
            
            * When have a Select for Destination PROVINCE and CITY Select 
            * _______________________________________________________________________________
            */}
            {item === 'destination_point_position' && (
              <Grid width={'100%'} gapY={'5'}>
                <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
                  مقصد
                </Text>
                {/* ***** Select for province *****  */}
                <Controller
                  name='destinationProvinceId'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      placeholder='استان'
                      lable='استان'
                      value={String(field.value)}
                      onValueChange={val => {
                        field.onChange(Number(val));
                        setValue('destinationCityId', '');
                        setValue('page', 1);
                      }}
                    >
                      {province.map(item => (
                        <SelectItem key={item.id} value={String(item.id)}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectRoot>
                  )}
                />
                {/* ***** Select for city *****  */}
                <Controller
                  name='destinationCityId'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      placeholder='شهرستان'
                      lable='شهرستان'
                      disabled={!Boolean(destinationCity)}
                      value={String(field.value)}
                      onValueChange={val => {
                        field.onChange(Number(val));
                        setValue('page', 1);
                      }}
                    >
                      {destinationCity?.map(item => (
                        <SelectItem key={item.id} value={String(item.id)}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectRoot>
                  )}
                />
              </Grid>
            )}
            {/* 
            
            * When have a Popover for POINT TYPE
            * _______________________________________________________________________________
            */}
            {item === 'point_type' && (
              <PopoverRoot lable='نوع نقطه' placeholder='نوع نقطه'>
                <CheckboxGroup isRow={false} items={serializeSubCategoriesData(PlaceType)} store='arrayTypes' />
              </PopoverRoot>
            )}
            {/* 
            
            * When have a Select for CATEGORIES
            * _______________________________________________________________________________
            */}
            {item === 'categories' && (
              <Grid gapY={'2'}>
                <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
                  دسته بندی
                </Text>
                <Controller
                  name='parentCategoryId'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      placeholder='دسته بندی اصلی'
                      lable='دسته بندی اصلی'
                      value={String(field.value)}
                      onValueChange={val => {
                        field.onChange(val);
                        setValue('subCategoryId', []);
                        setValue('page', 1);
                      }}
                    >
                      {categories.map(item => (
                        <SelectItem key={item.id} value={String(item.id)}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectRoot>
                  )}
                />

                <PopoverRoot placeholder='زیردسته بندی' disabled={!Boolean(subCategory)}>
                  <CheckboxGroup isRow={false} items={serializeSubCategoriesData(subCategory)} store='arrayCatIds' />
                </PopoverRoot>
              </Grid>
            )}
            {/* 
            
            * When have a Select for POINT STATUS
            * _______________________________________________________________________________
            */}
            {item === 'point_status' && (
              <Grid gapY={'14px'}>
                <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12], marginBlockEnd: 4 }}>
                  وضعیت
                </Text>
                <Controller
                  name='is_Published'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      placeholder='انتشار'
                      lable='انتشار'
                      value={String(field.value)}
                      onValueChange={val => {
                        field.onChange(val);
                        setValue('page', 1);
                      }}
                    >
                      {isPublishedOptions.map(item => (
                        <SelectItem key={item.id} value={String(item.value)}>
                          {item.key}
                        </SelectItem>
                      ))}
                    </SelectRoot>
                  )}
                />
                <Controller
                  name='status'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      placeholder='وضعیت'
                      lable='وضعیت'
                      value={String(field.value)}
                      onValueChange={val => {
                        field.onChange(val);
                        setValue('page', 1);
                      }}
                    >
                      {StatusFilterOption.map(item => (
                        <SelectItem key={item.id} value={String(item.value)}>
                          {item.key}
                        </SelectItem>
                      ))}
                    </SelectRoot>
                  )}
                />
                <Controller
                  name='mainPic'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      placeholder='تصویر اصلی'
                      lable='تصویر اصلی'
                      value={String(field.value)}
                      onValueChange={val => {
                        field.onChange(val);
                        setValue('page', 1);
                      }}
                    >
                      {booleanFilterOptions.map(item => (
                        <SelectItem key={item.id} value={String(item.value)}>
                          {item.key}
                        </SelectItem>
                      ))}
                    </SelectRoot>
                  )}
                />
                <Controller
                  name='gallery'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      placeholder='تصویر گالری'
                      lable='تصویر گالری'
                      value={String(field.value)}
                      onValueChange={val => {
                        field.onChange(val);
                        setValue('page', 1);
                      }}
                    >
                      {booleanFilterOptions.map(item => (
                        <SelectItem key={item.id} value={String(item.value)}>
                          {item.key}
                        </SelectItem>
                      ))}
                    </SelectRoot>
                  )}
                />
                <Controller
                  name='info'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      placeholder='اطلاعات'
                      lable='اطلاعات'
                      value={String(field.value)}
                      onValueChange={val => {
                        field.onChange(val);
                        setValue('page', 1);
                      }}
                    >
                      {booleanFilterOptions.map(item => (
                        <SelectItem key={item.id} value={String(item.value)}>
                          {item.key}
                        </SelectItem>
                      ))}
                    </SelectRoot>
                  )}
                />
                <Controller
                  name='coordinates'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      placeholder='موقعیت جغرافیایی'
                      lable='موقعیت جغرافیایی'
                      value={String(field.value)}
                      onValueChange={val => {
                        field.onChange(val);
                        setValue('page', 1);
                      }}
                    >
                      {booleanFilterOptions.map(item => (
                        <SelectItem key={item.id} value={String(item.value)}>
                          {item.key}
                        </SelectItem>
                      ))}
                    </SelectRoot>
                  )}
                />
                <Controller
                  name='description'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      placeholder='توضیحات'
                      lable='توضیحات'
                      value={String(field.value)}
                      onValueChange={val => {
                        field.onChange(val);
                        setValue('page', 1);
                      }}
                    >
                      {booleanFilterOptions.map(item => (
                        <SelectItem key={item.id} value={String(item.value)}>
                          {item.key}
                        </SelectItem>
                      ))}
                    </SelectRoot>
                  )}
                />
                <Controller
                  name='features'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      placeholder='امکانات'
                      lable='امکانات'
                      value={String(field.value)}
                      onValueChange={val => {
                        field.onChange(val);
                        setValue('page', 1);
                      }}
                    >
                      {booleanFilterOptions.map(item => (
                        <SelectItem key={item.id} value={String(item.value)}>
                          {item.key}
                        </SelectItem>
                      ))}
                    </SelectRoot>
                  )}
                />
                <Controller
                  name='analyse'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      placeholder='تحلیل'
                      lable='تحلیل'
                      value={String(field.value)}
                      onValueChange={val => {
                        field.onChange(val);
                        setValue('page', 1);
                      }}
                    >
                      {booleanFilterOptions.map(item => (
                        <SelectItem key={item.id} value={String(item.value)}>
                          {item.key}
                        </SelectItem>
                      ))}
                    </SelectRoot>
                  )}
                />
                <Controller
                  name='seo'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      placeholder='سئو'
                      lable='سئو'
                      value={String(field.value)}
                      onValueChange={val => {
                        field.onChange(val);
                        setValue('page', 1);
                      }}
                    >
                      {booleanFilterOptions.map(item => (
                        <SelectItem key={item.id} value={String(item.value)}>
                          {item.key}
                        </SelectItem>
                      ))}
                    </SelectRoot>
                  )}
                />
              </Grid>
            )}
            {/* 
            
            * When have a Select for ARTICLE STATUS
            * _______________________________________________________________________________
            */}
            {item === 'article_status' && (
              <Grid gapY={'14px'}>
                <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12], marginBlockEnd: 4 }}>
                  وضعیت
                </Text>
                <Controller
                  name='is_Published'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      placeholder='انتشار'
                      lable='انتشار'
                      value={String(field.value)}
                      onValueChange={val => {
                        field.onChange(val);
                      }}
                    >
                      {isPublishedOptions.map(item => (
                        <SelectItem key={item.id} value={String(item.value)}>
                          {item.key}
                        </SelectItem>
                      ))}
                    </SelectRoot>
                  )}
                />
                <Controller
                  name='status'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      placeholder='وضعیت'
                      lable='وضعیت'
                      value={String(field.value)}
                      onValueChange={val => {
                        field.onChange(val);
                      }}
                    >
                      {StatusFilterOption.map(item => (
                        <SelectItem key={item.id} value={String(item.value)}>
                          {item.key}
                        </SelectItem>
                      ))}
                    </SelectRoot>
                  )}
                />
                <Controller
                  name='base'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      placeholder='اطلاعات اولیه'
                      lable='اطلاعات اولیه'
                      value={String(field.value)}
                      onValueChange={val => {
                        field.onChange(val);
                      }}
                    >
                      {booleanFilterOptions.map(item => (
                        <SelectItem key={item.id} value={String(item.value)}>
                          {item.key}
                        </SelectItem>
                      ))}
                    </SelectRoot>
                  )}
                />
                <Controller
                  name='text'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      placeholder='محتویات متنی'
                      lable='محتویات متنی'
                      value={String(field.value)}
                      onValueChange={val => {
                        field.onChange(val);
                      }}
                    >
                      {booleanFilterOptions.map(item => (
                        <SelectItem key={item.id} value={String(item.value)}>
                          {item.key}
                        </SelectItem>
                      ))}
                    </SelectRoot>
                  )}
                />
                <Controller
                  name='related'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      placeholder='نقاط مرتبط'
                      lable='نقاط مرتبط'
                      value={String(field.value)}
                      onValueChange={val => {
                        field.onChange(val);
                      }}
                    >
                      {booleanFilterOptions.map(item => (
                        <SelectItem key={item.id} value={String(item.value)}>
                          {item.key}
                        </SelectItem>
                      ))}
                    </SelectRoot>
                  )}
                />
                <Controller
                  name='seo'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      placeholder='سئو'
                      lable='سئو'
                      value={String(field.value)}
                      onValueChange={val => {
                        field.onChange(val);
                      }}
                    >
                      {booleanFilterOptions.map(item => (
                        <SelectItem key={item.id} value={String(item.value)}>
                          {item.key}
                        </SelectItem>
                      ))}
                    </SelectRoot>
                  )}
                />
                <Controller
                  name='mainPic'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      placeholder='تصویر اصلی'
                      lable='تصویر اصلی'
                      value={String(field.value)}
                      onValueChange={val => {
                        field.onChange(val);
                      }}
                    >
                      {booleanFilterOptions.map(item => (
                        <SelectItem key={item.id} value={String(item.value)}>
                          {item.key}
                        </SelectItem>
                      ))}
                    </SelectRoot>
                  )}
                />
              </Grid>
            )}
            {item === 'budget' && (
              <Grid gapY={'3'}>
                <PriceField control={control} placeholder='از' name='budgetStart' lable='بودجه ' />
                <PriceField control={control} placeholder='تا' name='budgetEnd' lable='بودجه ' />
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
      <ModalAction submitButtonText='اعمال فیلتر' closeButtonText='حذف فیلتر' />
    </>
  );
};

export default CustomFilter;
