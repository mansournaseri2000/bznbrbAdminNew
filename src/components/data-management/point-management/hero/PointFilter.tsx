'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useRouter } from '@bprogress/next';
import { useQueryClient } from '@tanstack/react-query';

import { booleanFilterOptions, isPublishedOptions, StatusFilterOption } from '@/constants/data-management';
import { Grid, PopoverRoot, SelectItem, SelectRoot, Text } from '@/libs/primitives';
import CheckboxGroup from '@/libs/shared/CheckboxGroup';
import CustomDatePicker from '@/libs/shared/CustomDatePicker';
import ModalAction from '@/libs/shared/ModalAction';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { Category, PlaceType, Province } from '@/types/place/place-constant';

type Props = {
  province: Province[];
  categories: Category[];
  PlaceType: PlaceType[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function serializeSubCategoriesData(category: any) {
  if (category) {
    const test = category.map((item: any) => {
      return { key: item.name, value: item.id, id: item.id, disable: false };
    });

    return test;
  }
}

const PointFilter = ({ province, categories, PlaceType, setIsOpen }: Props) => {
  /**
   * Variables and Constant
   * _______________________________________________________________________________
   */
  const queryClient = useQueryClient();
  const { replace } = useRouter();
  const { control, setValue, watch, reset } = useFormContext();
  const city = province.filter(item => item.id === Number(watch('provinceId')))[0]?.Cities;
  const subCategory = categories.filter(item => item.id === Number(watch('parentCategoryId')))[0]?.children;

  /**
   * Methods
   * _______________________________________________________________________________
   */
  const addFilter = () => {
    setIsOpen(false);
  };

  const removeFilter = () => {
    reset({
      page: 1,
      limit: 10,
      provinceId: '',
      cityId: '',
      parentCategoryId: '',
      arrayCatIds: [],
      arrayTypes: [],
      status: '',
      isPublished: '',
      searchQuery: '',
      startDate: '',
      endDate: '',
      mainPic: '',
      gallery: '',
      info: '',
      coordinates: '',
      description: '',
      features: '',
      analyse: '',
      seo: '',
      workTime: '',
    });
    replace('/data-management/point-management');
    queryClient.invalidateQueries({ queryKey: ['place-list'] });
    setIsOpen(false);
  };

  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <>
      <Grid maxHeight={'776px'} width={'100%'} p={'4'} gapY={'4'} style={{ overflowY: 'auto' }}>
        {/*****
         * Time period
         * _______________________________________________________________________________
         *****/}
        <Grid gapY={'4'}>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
            بازه زمانی
          </Text>
          <Grid gap={'16px'} columns={'2'}>
            <Controller
              name='startDate'
              control={control}
              render={item => (
                <CustomDatePicker
                  {...item}
                  label='از تاریخ'
                  selectedValue={Boolean(item.field.value)}
                  inputMode='none'
                  placeholder='از تاریخ'
                  value={Boolean(item.field.value) ? new Date(item.field.value).toISOString() : ''}
                  onChangeValue={(val: any) => {
                    const newDate = new Date(val);
                    newDate.setHours(0, 0, 0, 0); // Set hour to 23, minutes to 59, seconds to 0, milliseconds to 0
                    setValue('startDate', newDate.getTime());
                    setValue('page', 1);
                  }}
                />
              )}
            />
            <Controller
              name='endDate'
              control={control}
              render={item => (
                <CustomDatePicker
                  {...item}
                  inputMode='none'
                  label='تا تاریخ'
                  selectedValue={Boolean(item.field.value)}
                  placeholder='تا تاریخ'
                  value={Boolean(item.field.value) ? new Date(item.field.value).toISOString() : ''}
                  minDate={watch('startDate')}
                  onChangeValue={(val: any) => {
                    const newDate = new Date(val);
                    newDate.setHours(23, 59, 0, 0);
                    setValue('endDate', newDate.getTime());
                    setValue('page', 1);
                  }}
                  disabled={!watch('startDate')}
                />
              )}
            />
          </Grid>
        </Grid>
        {/*****
        Point position
       * _______________________________________________________________________________
       *****/}
        <Grid gapY={'4'}>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
            موقعیت نقطه
          </Text>
          <Controller
            name='provinceId'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                label='استان'
                selectedValue={Boolean(field.value)}
                placeholder='استان'
                value={String(field.value)}
                onValueChange={val => {
                  field.onChange(val);
                  setValue('cityId', '');
                  setValue('page', 1);
                }}
              >
                {province?.map(item => (
                  <SelectItem key={item.id} value={String(item.id)}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectRoot>
            )}
          />
          <Controller
            name='cityId'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                label='شهرستان'
                selectedValue={Boolean(field.value)}
                placeholder='شهرستان'
                disabled={!Boolean(city)}
                value={String(field.value)}
                onValueChange={val => {
                  field.onChange(val);
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

        {/*****
         * Point Type
         * _______________________________________________________________________________
         *****/}

        <PopoverRoot label='نوع نقطه' placeholder='نوع نقطه'>
          <CheckboxGroup isRow={false} items={serializeSubCategoriesData(PlaceType)} store='arrayTypes' />
        </PopoverRoot>
        {/*****
         * Category Type
         * _______________________________________________________________________________
         *****/}
        <Grid gapY={'4'}>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
            دسته بندی
          </Text>
          <Controller
            name='parentCategoryId'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                label='دسته بندی'
                selectedValue={Boolean(field.value)}
                placeholder='دسته بندی اصلی'
                value={String(field.value)}
                onValueChange={val => {
                  field.onChange(val);
                  setValue('arrayCatIds', '');
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

          <PopoverRoot placeholder='زیردسته بندی' disabled={!Boolean(subCategory)} style={{ marginBlockStart: '-8px' }}>
            <CheckboxGroup isRow={false} items={serializeSubCategoriesData(subCategory)} store='arrayCatIds' />
          </PopoverRoot>
        </Grid>
        {/*****
         * Status Types
         * _______________________________________________________________________________
         *****/}
        <Grid gapY={'4'}>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
            وضعیت
          </Text>
          <Controller
            name='isPublished'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                label='انتشار'
                placeholder='انتشار'
                selectedValue={Boolean(field.value)}
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
                label='وضعیت'
                placeholder='وضعیت'
                selectedValue={Boolean(field.value)}
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
                label='تصویر اصلی'
                placeholder='تصویر اصلی'
                selectedValue={Boolean(field.value)}
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
                label='تصویر گالری'
                placeholder='تصویر گالری'
                selectedValue={Boolean(field.value)}
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
                label='اطلاعات'
                placeholder='اطلاعات'
                selectedValue={Boolean(field.value)}
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
                label='موقعیت جغرافیایی'
                placeholder='موقعیت جغرافیایی'
                selectedValue={Boolean(field.value)}
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
                label='توضیحات'
                selectedValue={Boolean(field.value)}
                placeholder='توضیحات'
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
                label='امکانات'
                selectedValue={Boolean(field.value)}
                placeholder='امکانات'
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
                label='تحلیل'
                selectedValue={Boolean(field.value)}
                placeholder='تحلیل'
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
                label='سئو'
                selectedValue={Boolean(field.value)}
                placeholder='سئو'
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
      </Grid>
      <ModalAction submitButtonText='اعمال فیلتر ها' closeButtonText='حذف فیلتر ها' onCloseButton={() => removeFilter()} onSubmit={() => addFilter()} />
    </>
  );
};

export default PointFilter;
