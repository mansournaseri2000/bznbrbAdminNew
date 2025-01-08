'use client';

import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useRouter, useSearchParams } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';

import { getAllPlacesConstants } from '@/api/place';
import { articleStatusOptions } from '@/constants/data-management';
import { Button, Flex, Grid, IconButton, Modal, SelectItem, SelectRoot, Text } from '@/libs/primitives';
import CustomSearch from '@/libs/shared/custom-search/CustomSearch';
import CustomDatePicker from '@/libs/shared/CustomDatePicker';
import ModalAction from '@/libs/shared/ModalAction';
import ModalHeader from '@/libs/shared/ModalHeader';
import { updateURLWithQueryParams } from '@/libs/utils/updateUrl';
import { ArrowRight, Filter } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  onSubmit: () => void;
};

const ArticleManagementHero = ({ onSubmit }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const searchParams = useSearchParams();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { control, setValue, watch, reset } = useFormContext();
  const router = useRouter();

  /*
   *** Services _________________________________________________________________________________________________________________________________________________________________
   */
  const { data: constantData } = useQuery({
    queryKey: ['constant'],
    queryFn: async () => getAllPlacesConstants(),
  });

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

  const sample = (date: Date) => {
    const currentDate = new Date(date);
    currentDate.setDate(date.getDate() + 1); // Add one day

    return new Date(currentDate);
  };
  return (
    <>
      <Grid width={'100%'} gapX={'5'} style={{ gridTemplateColumns: 'auto auto 3fr' }}>
        <IconButton colorVariant='BLUE' variant='soft' size={'4'} onClick={() => setIsOpen(true)}>
          <Filter />
        </IconButton>
        <Button colorVariant='BLUE' variant='ghost' size={'4'} onClick={() => router.push('/data-management/article-management/create-article')}>
          <Flex gap={'2'} align={'center'}>
            <Text {...typoVariant.body1}>+</Text>
            <Text {...typoVariant.body1}> افزودن مقاله</Text>
          </Flex>
        </Button>
        <Controller name='title' control={control} render={({ field }) => <CustomSearch {...field} placeholder='جستجو نام نقطه' onClick={onSubmit} />} />
        {/* <IconButton size={'3'} variant='soft' onClick={onSubmit}>
          <Search />
        </IconButton> */}
      </Grid>
      {/* 
      ***
        MODAl_______________________________________________________________________________________________
      ***
      */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader title='فیلتر' icon={<ArrowRight />} handleClose={() => setIsOpen(false)} />
        <Grid gapY={'4'} p={'4'}>
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
                {constantData?.categories.map(item => (
                  <SelectItem key={item.id} value={String(item.id)}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectRoot>
            )}
          />
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
      </Modal>
    </>
  );
};

export default ArticleManagementHero;
