'use client';

import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { userTypeConstant } from '@/constants/users';
import { Button, Grid, Modal, SelectItem, SelectRoot, TextField } from '@/libs/primitives';

import UserInfoModal from '../info-modal/UserInfoModal';

const UserHero = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const methods = useForm({ defaultValues: { userType: '', search: '' } });
  const { control, watch } = methods;
  console.log('Watch', watch());
  return (
    <>
      <Grid width={'100%'} columns={'3'} gapX={'4'} style={{ gridTemplateColumns: '0.5fr 3fr 1fr' }}>
        <Button size={'3'} onClick={() => setIsOpen(true)}>
          ثبت کاربر
        </Button>
        <Controller name='search' control={control} render={({ field }) => <TextField {...field} placeholder='جستجوی  کاربر' style={{ borderRadius: 12 }} />} />

        <Controller
          name='userType'
          control={control}
          render={({ field }) => (
            <SelectRoot
              {...field}
              placeholder='نوع کاربر'
              value={String(field.value)}
              onValueChange={val => {
                field.onChange(val);
              }}
            >
              {userTypeConstant.map(item => (
                <SelectItem value={String(item.id)} key={item.id}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectRoot>
          )}
        />
      </Grid>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <UserInfoModal />
      </Modal>
    </>
  );
};

export default UserHero;
