'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useRouter, useSearchParams } from 'next/navigation';

import { isPublishedOptions, StatusFilterOption } from '@/constants/data-management';
import { Grid, SelectItem, SelectRoot, Text } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import { updateURLWithQueryParams } from '@/libs/utils/updateUrl';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { Category, Province } from '@/types/place/place-constant';

type Props = {
  province: Province[];
  categories: Category[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PointFilter = ({ province, categories, setIsOpen }: Props) => {
  /**
   * Variables and Constant
   * _______________________________________________________________________________
   */
  const { control, setValue, watch, reset } = useFormContext();
  const city = province.filter(item => item.id === Number(watch('provinceId')))[0]?.Cities;
  const subCategory = categories.filter(item => item.id === Number(watch('parentCategoryId')))[0]?.children;

  const searchParams = useSearchParams();
  const router = useRouter();

  console.log('watch', watch());
  console.log('subCategory', subCategory);
  /**
   * functions
   * _______________________________________________________________________________
   */
  const addFilter = () => {
    const values = watch();
    updateURLWithQueryParams(router, searchParams, values);
    setIsOpen(false);
  };

  const removeFilter = () => {
    reset();
    updateURLWithQueryParams(router, searchParams, {});
    setIsOpen(false);
  };

  return (
    <Grid height={'776px'} style={{ alignContent: 'space-between' }}>
      <Grid width={'100%'} p={'4'} gapY={'4'}>
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
                    {/* TODO: fix item style */}
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
                placeholder='شهر'
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
          <Controller
            name='arrayCatIds'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                placeholder='زیردسته بندی'
                disabled={!Boolean(subCategory)}
                value={String(field.value)}
                onValueChange={val => {
                  field.onChange(val);
                }}
              >
                {subCategory?.map(item => (
                  <SelectItem key={item.id} value={String(item.id)}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectRoot>
            )}
          />
        </Grid>
        <Grid gapY={'2'}>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
            وضعیت
          </Text>
          <Controller
            name='isInfoCompleted'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                placeholder='وضعیت اطلاعات'
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
            name='isPublished'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                placeholder='وضعیت انتشار'
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
          {/* <Popover.Root>
            <Popover.Trigger>
              <Button
                style={{
                  minHeight: '48px',
                  paddingInline: '15px 10px',
                  borderRadius: '12px',
                  border: `1px solid ${colorPalette.gray[7]}`,
                  color: colorPalette.gray[9],
                  backgroundColor: colorPalette.gray[2],
                }}
                variant='solid'
                size={'4'}
              >
                <Flex width={'100%'} align={'center'} justify={'between'}>
                  <Text {...typoVariant.body2} style={{ color: colorPalette.gray[9] }}>
                    وضعیت اطلاعات
                  </Text>
                  <CaretDownIcon style={{ scale: 1.6 }} color={colorPalette.pink[9]} />
                </Flex>
              </Button>
            </Popover.Trigger>
            <Popover.Content>
              <Flex gap={'2'}>
                <CheckboxGroup isRow={false} items={StatusFilterOption} store='isInfoCompleted' />
              </Flex>
            </Popover.Content>
          </Popover.Root> */}

          {/* <Popover.Root>
            <Popover.Trigger>
              <Button
                style={{
                  minHeight: '48px',
                  paddingInline: '15px 10px',
                  borderRadius: '12px',
                  border: `1px solid ${colorPalette.gray[7]}`,
                  color: colorPalette.gray[9],
                  backgroundColor: colorPalette.gray[2],
                }}
                variant='solid'
                size={'4'}
              >
                <Flex width={'100%'} align={'center'} justify={'between'}>
                  <Text {...typoVariant.body2} style={{ color: colorPalette.gray[9] }}>
                    وضعیت انتشار
                  </Text>
                  <CaretDownIcon style={{ scale: 1.6 }} color={colorPalette.pink[9]} />
                </Flex>
              </Button>
            </Popover.Trigger>
            <Popover.Content>
              <Flex gap={'2'}>
                <CheckboxGroup isRow={false} items={isPublishedOptions} store='isPublished' />
              </Flex>
            </Popover.Content>
          </Popover.Root> */}
        </Grid>
      </Grid>
      <ModalAction submitButtonText='اعمال فیلتر ها' closeButtonText='حذف فیلتر ها' onCloseButton={() => removeFilter()} onSubmit={() => addFilter()} />
    </Grid>
  );
};

export default PointFilter;
