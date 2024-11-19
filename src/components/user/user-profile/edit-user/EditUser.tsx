import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { sexConstant } from '@/constants/users';
import { Flex, Grid, SelectItem, SelectRoot, Text, TextField } from '@/libs/primitives';
import CustomDatePicker from '@/libs/shared/CustomDatePicker';
import ModalAction from '@/libs/shared/ModalAction';
import { colorPalette } from '@/theme';

type Props = {
  onClose: () => void;
};

const EditUser = ({ onClose }: Props) => {
  const { control, setValue } = useFormContext();
  return (
    <Grid width={'100%'} gap={'5'} style={{ backgroundColor: colorPalette.gray[2] }}>
      <Flex width={'100%'} justify={'center'} mt={'5'}>
        <Flex width={'120px'} height={'120px'} justify={'center'} align={'center'} style={{ border: '1px solid gray', borderRadius: '100%' }}>
          <Text>image picker</Text>
        </Flex>
      </Flex>
      <Grid columns={'2'} gap={'5'} px={'5'}>
        <Controller name='name' control={control} render={({ field }) => <TextField {...field} placeholder='نام' />} />
        <Controller name='last_name' control={control} render={({ field }) => <TextField {...field} placeholder='نام خانوادگی' />} />
        <Controller
          name='sex'
          control={control}
          render={({ field }) => (
            <SelectRoot
              {...field}
              placeholder='جنسیت'
              size={'3'}
              value={String(field.value)}
              onValueChange={val => {
                field.onChange(val);
              }}
            >
              {sexConstant.map(item => (
                <SelectItem key={item.id} value={String(item.id)}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectRoot>
          )}
        />
        <Controller
          name='birthday'
          control={control}
          render={item => (
            <CustomDatePicker
              inputMode='none'
              placeholder='تاریخ تولد'
              value={item.field.value as any}
              onChangeValue={(val: any) => {
                setValue('birthday', new Date(val));
              }}
            />
          )}
        />
        <Controller name='mobile' control={control} render={({ field }) => <TextField {...field} placeholder='شماره تماس' />} />
        <Controller name='email' control={control} render={({ field }) => <TextField {...field} placeholder='ایمیل' />} />
      </Grid>
      <ModalAction submitButtonText='ثبت تغییرات' closeButtonText='لغو و بازگشت' onCloseButton={onClose} />
    </Grid>
  );
};

export default EditUser;
