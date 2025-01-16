'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useSearchParams } from 'next/navigation';

import { userTypeConstant } from '@/constants/users';
import { Grid, SelectItem, SelectRoot } from '@/libs/primitives';
import CustomSearch from '@/libs/shared/custom-search/CustomSearch';

type Props = {
  onSubmit: () => void;
};

const UserHero = (props: Props) => {
  /*
   *** Variables and Constants _________________________________________________________________________________________________________________________________________________________________
   */
  const { control } = useFormContext();

  const searchParams = useSearchParams();
  const getParam = (key: string) => searchParams.get(key) || '';

  // console.log('Watch', watch());
  return (
    <Grid width={'100%'} columns={'3'} gapX={'4'} style={{ gridTemplateColumns: '3fr 1fr' }}>
      <Controller name='searchQuery' control={control} render={({ field }) => <CustomSearch {...field} placeholder='جستجو نام کاربر یا شماره تماس' defaultValue={getParam('searchQuery') ? getParam('searchQuery') : ''} onClick={props.onSubmit} />} />

      <Controller
        name='status'
        control={control}
        render={({ field }) => (
          <SelectRoot
            {...field}
            placeholder='وضعیت کاربر'
            value={String(field.value)}
            onValueChange={val => {
              field.onChange(val);
              props.onSubmit();
            }}
            size={'3'}
          >
            {userTypeConstant.map(item => (
              <SelectItem key={item.id} value={String(item.value)}>
                {item.key}
              </SelectItem>
            ))}
          </SelectRoot>
        )}
      />
    </Grid>
  );
};

export default UserHero;

{
  /* <Popover.Root>
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
                وضعیت کاربر
              </Text>
              <CaretDownIcon style={{ scale: 1.6 }} color={colorPalette.pink[9]} />
            </Flex>
          </Button>
        </Popover.Trigger>
        <Popover.Content>
          <Flex gap={'2'}>
            <CheckboxGroup isRow={false} items={userTypeConstant} store='Type_Of_User' />
          </Flex>
        </Popover.Content>
      </Popover.Root> */
}
