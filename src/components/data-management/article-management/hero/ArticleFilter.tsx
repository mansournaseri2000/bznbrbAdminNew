import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { useQueryClient } from '@tanstack/react-query';

import { booleanFilterOptions, isPublishedOptions, StatusFilterOption } from '@/constants/data-management';
import { Flex, Grid, PopoverRoot, SelectItem, SelectRoot, Text } from '@/libs/primitives';
import CheckboxGroup from '@/libs/shared/CheckboxGroup';
import CustomDatePicker from '@/libs/shared/CustomDatePicker';
import ModalAction from '@/libs/shared/ModalAction';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { Category, Province } from '@/types/place/place-constant';

import { serializeSubCategoriesData } from '../../point-management/hero/PointFilter';

type Props = {
  province: Province[];
  categories: Category[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ArticleFilter = ({ province, categories, setIsOpen }: Props) => {
  /**
   * Variables and Constant
   * _______________________________________________________________________________
   */
  const queryClient = useQueryClient();
  const { replace } = useRouter();
  const { control, setValue, watch, reset } = useFormContext();

  const city = province.filter(item => item.id === Number(watch('provincesId')))[0]?.Cities;
  const subCategory = categories.filter(item => item.id === Number(watch('parentCategoryId')))[0]?.children;

  const addFilter = () => {
    setIsOpen(false);
  };

  const removeFilter = () => {
    reset({
      title: '',
      created_atStart: '',
      created_atEnd: '',
      provincesId: '',
      citiesId: '',
      parentCategoryId: '',
      arrayCatIds: [],
      is_published: '',
      status: '',
      base: '',
      text: '',
      related: '',
      seo: '',
      mainPic: '',
    });

    replace('/data-management/article-management');
    queryClient.invalidateQueries({ queryKey: ['article-list'] });
    setIsOpen(false);
  };

  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <>
      <Grid gapY={'4'} p={'4'}>
        {/*
         * Time period
         * _______________________________________________________________________________
         */}
        <Flex direction={'column'} gap={'2'}>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12], paddingInlineStart: 8 }}>
            بازه زمانی
          </Text>
          <Grid width={'100%'} columns={'2'} gapX={'2'}>
            <Controller
              name='created_atStart'
              control={control}
              render={item => (
                <CustomDatePicker
                  {...item}
                  inputMode='none'
                  placeholder='از تاریخ'
                  value={Boolean(item.field.value) ? new Date(item.field.value).toISOString() : ''}
                  onChangeValue={(val: any) => {
                    const newDate = new Date(val);
                    newDate.setHours(0, 0, 0, 0); // Set hour to 23, minutes to 59, seconds to 0, milliseconds to 0
                    setValue('created_atStart', newDate.getTime());
                    setValue('page', 1);
                  }}
                />
              )}
            />
            <Controller
              name='created_atEnd'
              control={control}
              render={item => (
                <CustomDatePicker
                  {...item}
                  inputMode='none'
                  placeholder='تا تاریخ'
                  value={Boolean(item.field.value) ? new Date(item.field.value).toISOString() : ''}
                  minDate={watch('created_atStart')}
                  onChangeValue={(val: any) => {
                    const newDate = new Date(val);
                    newDate.setHours(23, 59, 0, 0);
                    setValue('created_atEnd', newDate.getTime());
                    setValue('page', 1);
                  }}
                  disabled={!watch('created_atStart')}
                />
              )}
            />
          </Grid>
        </Flex>
        {/*****
          Point position
         * _______________________________________________________________________________
         *****/}
        <Controller
          name='provincesId'
          control={control}
          render={({ field }) => (
            <SelectRoot
              {...field}
              lable='موقعیت'
              placeholder='استان'
              value={String(field.value)}
              onValueChange={val => {
                field.onChange(val);
                setValue('citiesId', '');
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
          name='citiesId'
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
        {/*****
         * Category Type
         * _______________________________________________________________________________
         *****/}
        <Controller
          name='parentCategoryId'
          control={control}
          render={({ field }) => (
            <SelectRoot
              {...field}
              lable='دسته بندی'
              placeholder='دسته بندی اصلی'
              value={String(field.value)}
              onValueChange={val => {
                field.onChange(val);
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
        {/*****
         * Status Types
         * _______________________________________________________________________________
         *****/}
        <Controller
          name='is_published'
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
      </Grid>
      <ModalAction submitButtonText='اعمال فیلتر ها' closeButtonText='حذف فیلتر ها' onSubmit={() => addFilter()} onCloseButton={() => removeFilter()} />
    </>
  );
};

export default ArticleFilter;
