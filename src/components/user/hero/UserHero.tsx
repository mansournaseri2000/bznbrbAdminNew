'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { userTypeConstant } from '@/constants/users';
import { Grid, IconButton, SelectItem, SelectRoot, TextField } from '@/libs/primitives';
import { Search } from '@/public/icon';

type Props = {
  onSubmit: () => void;
};

const UserHero = (props: Props) => {
  const { control } = useFormContext();

  // console.log('Watch', watch());
  return (
    <Grid width={'100%'} columns={'3'} gapX={'4'} style={{ gridTemplateColumns: '3fr auto 1fr' }}>
      <Controller name='searchQuery' control={control} render={({ field }) => <TextField {...field} placeholder='جستجوی  کاربر' style={{ borderRadius: 12 }} />} />

      <IconButton size={'3'} variant='soft' onClick={props.onSubmit}>
        <Search />
      </IconButton>

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
            }}
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
