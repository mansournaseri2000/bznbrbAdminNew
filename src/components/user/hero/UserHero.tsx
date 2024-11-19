'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { CaretDownIcon } from '@radix-ui/react-icons';
import { Popover } from '@radix-ui/themes';

import { userTypeConstant } from '@/constants/users';
import { Button, Flex, Grid, IconButton, Text, TextField } from '@/libs/primitives';
import CheckboxGroup from '@/libs/shared/CheckboxGroup';
import { Search } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

const UserHero = () => {
  const { control, watch } = useFormContext();
  console.log('Watch', watch());
  return (
    <Grid width={'100%'} columns={'3'} gapX={'4'} style={{ gridTemplateColumns: '3fr auto 1fr' }}>
      <Controller name='search' control={control} render={({ field }) => <TextField {...field} placeholder='جستجوی  کاربر' style={{ borderRadius: 12 }} />} />

      <IconButton size={'3'} variant='soft'>
        <Search />
      </IconButton>

      <Popover.Root>
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
                {' '}
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
      </Popover.Root>
    </Grid>
  );
};

export default UserHero;
