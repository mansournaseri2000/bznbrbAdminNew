'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { isPublishedOptions, StatusFilterOption } from '@/constants/data-management';
import { Grid, SelectItem, SelectRoot, Text } from '@/libs/primitives';
import CustomDatePicker from '@/libs/shared/CustomDatePicker';
import ModalAction from '@/libs/shared/ModalAction';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { Category, Province } from '@/types/place/place-constant';

type Props = {
  province: Province[];
  categories: Category[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: () => void;
};

const PointFilter = ({ province, categories, setIsOpen, onSubmit }: Props) => {
  /**
   * Variables and Constant
   * _______________________________________________________________________________
   */
  const { replace } = useRouter();
  const { control, setValue, watch, reset } = useFormContext();
  const city = province.filter(item => item.id === Number(watch('provinceId')))[0]?.Cities;
  const subCategory = categories.filter(item => item.id === Number(watch('parentCategoryId')))[0]?.children;

  /**
   * functions
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
      isInfoCompleted: '',
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
    currentDate.setDate(date.getDate() + 1); // Add one day

    return new Date(currentDate);
  };

  return (
    <Grid maxHeight={'776px'} height={'100%'} style={{ alignContent: 'space-between' }}>
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
        <Grid gapY={'2'}>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
            نوع نقطه
          </Text>
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
