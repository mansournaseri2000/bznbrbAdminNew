import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { articleStatusOptions } from '@/constants/data-management';
import { Flex, Grid, SelectItem, SelectRoot, Text } from '@/libs/primitives';
import CustomDatePicker from '@/libs/shared/CustomDatePicker';
import ModalAction from '@/libs/shared/ModalAction';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { Category, Province } from '@/types/place/place-constant';

type Props = {
  province: Province[];
  categories: Category[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: VoidFunction;
};

const ArticleFilter = ({ province, categories, setIsOpen, onSubmit }: Props) => {
  /**
   * Variables and Constant
   * _______________________________________________________________________________
   */
  const { replace } = useRouter();
  const { control, setValue, watch, reset } = useFormContext();

  const city = province.filter(item => item.id === Number(watch('provinceId')))[0]?.Cities;
  const subCategory = categories.filter(item => item.id === Number(watch('parentCategoryId')))[0]?.children;

  const addFilter = () => {
    setIsOpen(false);
  };

  const removeFilter = () => {
    reset({
      title: '',
      created_atStart: '',
      created_atEnd: '',
      categoryId: '',
      is_published: '',
    });
    replace('/data-management/article-management');
    onSubmit();
    setIsOpen(false);
  };

  const sample = (date: Date) => {
    const currentDate = new Date(date);
    currentDate.setDate(date.getDate() + 1);

    return new Date(currentDate);
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
                    setValue('created_atStart', new Date(val));
                    setValue('created_atEnd', sample(new Date(val)));
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
                    setValue('created_atEnd', new Date(val));
                  }}
                  disabled={!watch('created_atStart')}
                />
              )}
            />
          </Grid>
        </Flex>
        <Controller
          name='categoryId'
          control={control}
          render={({ field }) => (
            <SelectRoot
              {...field}
              placeholder='دسته بندی'
              lable='دسته بندی'
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
          name='is_published'
          control={control}
          render={({ field }) => (
            <SelectRoot
              {...field}
              placeholder='وضعیت انتشار'
              lable='وضعیت'
              value={String(field.value)}
              onValueChange={val => {
                field.onChange(val);
              }}
            >
              {articleStatusOptions.map(item => (
                <SelectItem key={item.id} value={String(item.value)}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectRoot>
          )}
        />
      </Grid>
      <ModalAction submitButtonText='اعمال فیلتر ها' closeButtonText='حذف فیلتر ها' onSubmit={() => addFilter()} onCloseButton={() => removeFilter()} isFull={true} />
    </>
  );
};

export default ArticleFilter;
