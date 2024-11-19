'use client';

import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import EditUser from '@/components/user/user-profile/edit-user/EditUser';
import UserProfileHero from '@/components/user/user-profile/hero/UserProfileHero';
import UserProfileList from '@/components/user/user-profile/list/UserProfileList';
import { Grid, Modal, Text } from '@/libs/primitives';
import ModalHeader from '@/libs/shared/ModalHeader';
import UserDetailCard from '@/libs/shared/UserDetailCard';
import { Close } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

export default function UserProfile() {
  /*
   *** Variables and Constants _________________________________________________________________________________________________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const methods = useForm({
    defaultValues: { search: '', sort: '', sourceProvince: '', sourceCity: '', departureProvince: '', departureCity: '', name: '', last_name: '', sex: '', birthday: '', mobile: '', email: '' },
  });
  return (
    <FormProvider {...methods}>
      <Grid width={'100%'} gapY={'5'}>
        <UserDetailCard
          type='USER'
          userStatus='deActive'
          name='اکبر'
          last_name='روشن دل'
          image='/image/profile.jpeg'
          birthday='1379/01/24'
          sex='زن'
          mobile='091212345678'
          email='example@gmail.com'
          onEditInfo={() => setIsOpen(true)}
        />
        <Text {...typoVariant.title2} style={{ color: colorPalette.gray[12] }}>
          برنامه های کاربر
        </Text>
        <UserProfileHero />
        <UserProfileList />
        {/* TODO: define pagination */}
      </Grid>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader title='ویرایش کاربر' icon={<Close />} handleClose={() => setIsOpen(false)} />
        <EditUser onClose={() => setIsOpen(false)} />
      </Modal>
    </FormProvider>
  );
}
