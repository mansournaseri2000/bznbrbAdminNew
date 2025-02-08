'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useRouter } from 'next/navigation';

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
  onSubmit: VoidFunction;
};

export function serializeSubCategoriesData(category: any) {
  if (category) {
    const test = category.map((item: any) => {
      return { key: item.name, value: item.id, id: item.id, disable: false };
    });

    return test;
  }
}

const PointFilter = ({ province, categories, PlaceType, setIsOpen, onSubmit }: Props) => {
  /**
   * Variables and Constant
   * _______________________________________________________________________________
   */
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
    onSubmit();
    setIsOpen(false);
  };

  const sample = (date: Date) => {
    const currentDate = new Date(date);
    currentDate.setDate(date.getDate() + 1);
    return new Date(currentDate);
  };

  console.log('watch', watch());
  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <>
      <Grid maxHeight={'776px'} width={'100%'} p={'4'} gapY={'4'} style={{ overflowY: 'auto' }}>
        {/*****
        Point position
       * _______________________________________________________________________________
       *****/}
        <Grid gapY={'2'}>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
            موقعیت نقطه
          </Text>
          <Controller
            name='provinceId'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                placeholder='استان'
                value={String(field.value)}
                onValueChange={val => {
                  field.onChange(val);
                  setValue('cityId', '');
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
                placeholder='شهرستان'
                disabled={!Boolean(city)}
                value={String(field.value)}
                onValueChange={val => {
                  field.onChange(val);
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
         * Time period
         * _______________________________________________________________________________
         *****/}
        <Grid gapY={'2'}>
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
                  inputMode='none'
                  placeholder='از تاریخ'
                  value={Boolean(item.field.value) ? new Date(item.field.value).toISOString() : ''}
                  onChangeValue={(val: any) => {
                    setValue('startDate', new Date(val));
                    setValue('endDate', sample(new Date(val)));
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
                  placeholder='تا تاریخ'
                  value={Boolean(item.field.value) ? new Date(item.field.value).toISOString() : ''}
                  minDate={watch('startDate')}
                  onChangeValue={(val: any) => {
                    setValue('endDate', new Date(val));
                  }}
                  disabled={!watch('startDate')}
                />
              )}
            />
          </Grid>
        </Grid>
        {/*****
         * Point Type
         * _______________________________________________________________________________
         *****/}
        <PopoverRoot lable='نوع نقطه' placeholder='نوع نقطه'>
          <CheckboxGroup isRow={false} items={serializeSubCategoriesData(PlaceType)} store='arrayTypes' />
        </PopoverRoot>
        {/*****
         * Category Type
         * _______________________________________________________________________________
         *****/}
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
                value={String(field.value)}
                onValueChange={val => {
                  field.onChange(val);
                  setValue('arrayCatIds', '');
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
        {/*****
         * Status Types
         * _______________________________________________________________________________
         *****/}
        <Grid gapY={'2'}>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
            وضعیت
          </Text>
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
            name='mainPic'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                placeholder='تصویر اصلی'
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
            name='gallery'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                placeholder='تصویر گالری'
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
            name='info'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                placeholder='اطلاعات'
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
            name='coordinates'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                placeholder='موقعیت جغرافیایی'
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
            name='description'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                placeholder='توضیحات'
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
            name='features'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                placeholder='امکانات'
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
            name='analyse'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                placeholder='تحلیل'
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
      </Grid>
      <ModalAction submitButtonText='اعمال فیلتر ها' closeButtonText='حذف فیلتر ها' onCloseButton={() => removeFilter()} onSubmit={() => addFilter()} />
    </>
  );
};

export default PointFilter;
