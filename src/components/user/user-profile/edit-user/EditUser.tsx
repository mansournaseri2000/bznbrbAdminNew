import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { editUser, EditUserDetailResponse } from '@/api/user';
import { genderConstant } from '@/constants/users';
import { Flex, Grid, SelectItem, SelectRoot, Text, TextField } from '@/libs/primitives';
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
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */
  const { mutate: updateUser, isPending: userPending } = useMutation({
    mutationFn: async (body: EditUserDetailResponse) => editUser(userId, body),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['user_info'] });
        ToastSuccess('اطلاعات مورد نظر با موفقیت بروزرسانی شد');
        onClose();
      } else {
        ToastError('لطفا دوباره امتحان نمایید');
      }
    },
    onError: err => {
      console.log(err);
    },
  });

  console.log('USER_DATA', data.userInfo);

  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  // const { control, setValue, watch } = useFormContext();
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
          name='gender'
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
              placeholder='تاریخ تولد'
              value={item.field.value as any}
              onChangeValue={(val: any) => {
                setValue('birthday', Number(new Date(val)));
              }}
            />
          )}
        />
        <Controller name='mobile' control={control} render={({ field }) => <TextField {...field} placeholder='شماره تماس' />} />
        <Controller name='email' control={control} render={({ field }) => <TextField {...field} placeholder='ایمیل' />} />
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
