import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import Image from 'next/image';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { editUser, EditUserDetailResponse } from '@/api/user';
import { genderConstant } from '@/constants/users';
import { Box, Flex, Grid, SelectItem, SelectRoot, TextField } from '@/libs/primitives';
import CustomDatePicker from '@/libs/shared/CustomDatePicker';
import ModalAction from '@/libs/shared/ModalAction';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { colorPalette } from '@/theme';

type Props = {
  data: EditUserDetailResponse;
  userId: number;
  onClose: () => void;
};

const EditUser = ({ onClose, userId, data }: Props) => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const { control, setValue, watch } = useForm({
    defaultValues: {
      name: data?.userInfo.name,
      last_name: data?.userInfo.last_name,
      email: data?.userInfo.email,
      birthday: data?.userInfo.birthday,
      pic: data?.userInfo.pic,
      gender: data?.userInfo.gender,
      mobile: data?.userInfo.mobile,
      status: data?.userInfo.status,
    },
  });
  const queryClient = useQueryClient();

  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */
  const { mutate: updateUser, isPending: userPending } = useMutation({
    mutationFn: async (body: EditUserDetailResponse) => editUser(userId, body),
    onSuccess: async data => {
      if (data.status === true) {
        onClose();
        ToastSuccess('اطلاعات مورد نظر با موفقیت بروزرسانی شد');
        queryClient.invalidateQueries({ queryKey: ['user_info'] });
      } else {
        ToastError('لطفا دوباره امتحان نمایید');
      }
    },
    onError: err => {
      console.log(err);
    },
  });

  // console.log('USER_DATA', data.userInfo);

  return (
    <Grid width={'100%'} gap={'5'} style={{ backgroundColor: colorPalette.gray[2] }}>
      <Flex width={'100%'} justify={'center'} mt={'5'}>
        <Box width={'120px'} height={'120px'} position={'relative'}>
          <Image
            src={watch('pic') ? `${process.env.NEXT_PUBLIC_BASE_URL_image}${watch('pic')}` : ''}
            alt='تصویر کاربر'
            fill
            style={{ borderRadius: '100px', border: `1px solid ${colorPalette.blue[9]}` }}
          />
        </Box>
      </Flex>
      <Grid columns={'2'} gap={'5'} px={'5'}>
        <Controller name='name' control={control} render={({ field }) => <TextField {...field} label='نام' placeholder='نام' selectedValue={Boolean(field.value)} />} />
        <Controller name='last_name' control={control} render={({ field }) => <TextField {...field} label='نام خانوادگی' placeholder='نام خانوادگی' selectedValue={Boolean(field.value)} />} />
        <Controller
          name='gender'
          control={control}
          render={({ field }) => (
            <SelectRoot
              {...field}
              label='جنسیت'
              placeholder='جنسیت'
              selectedValue={Boolean(field.value)}
              size={'3'}
              value={String(field.value)}
              onValueChange={val => {
                field.onChange(val);
              }}
            >
              {genderConstant.map(item => (
                <SelectItem key={item.id} value={item.value}>
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
              label='تاریخ تولد'
              placeholder='تاریخ تولد'
              selectedValue={Boolean(item.field.value)}
              value={item.field.value as any}
              onChangeValue={(val: any) => {
                setValue('birthday', Number(new Date(val)));
              }}
              style={{ backgroundColor: colorPalette.gray[1] }}
            />
          )}
        />
        <Controller name='mobile' control={control} render={({ field }) => <TextField disabled {...field} label='شماره تماس' placeholder='شماره تماس' selectedValue={Boolean(field.value)} />} />
        <Controller name='email' control={control} render={({ field }) => <TextField {...field} label='ایمیل' placeholder='ایمیل' selectedValue={Boolean(field.value)} />} />
      </Grid>
      <ModalAction
        submitButtonText='ثبت تغییرات'
        closeButtonText='لغو و بازگشت'
        isLoading={userPending}
        // TODO: fix watch and remove as any
        onCloseButton={onClose}
        onSubmit={() => updateUser(watch() as any)}
      />
    </Grid>
  );
};

export default EditUser;
