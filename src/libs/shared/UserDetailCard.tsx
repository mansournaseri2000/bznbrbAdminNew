'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import { Spinner } from '@radix-ui/themes';

import { Box, Button, Flex, Grid, Modal, Text } from '@/libs/primitives';
import BoxWrapper from '@/libs/shared/wrapper/BoxWrapper';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { UserInfoDetail } from '@/types/user/user';

import { convertTimestampToPersianDate } from '../utils/convertTimestampToPersianDate';

type Props = UserInfoDetail & {
  type: 'USER' | 'PLAN';
  onDeActive?: () => void;
  onActive?: () => void;
  onEditInfo?: () => void;
  onShowProfile?: () => void;
  isLoading?: boolean;
};

type modalStateType = {
  isOpen: boolean;
  key: 'active' | 'deActive';
};

const UserDetailCard = (props: Props) => {
  /*
   *** Variables and Constants _________________________________________________________________________________________________________________________________________________________________
   */
  const { pic, name, last_name, birthday, gender, mobile, email, type, status, onShowProfile, onDeActive, onActive, onEditInfo, isLoading } = props;
  const [modalState, setModalState] = useState<modalStateType>({
    isOpen: false,
    key: 'active',
  });
  return (
    <>
      <BoxWrapper hero='سازنده برنامه'>
        <Grid width={'100%'} columns={'3'} px={'4'} gapX={'5'} style={{ gridTemplateColumns: 'auto 3fr auto' }}>
          <Box width={'130px'} height={'130px'} position={'relative'}>
            <Image src={pic ? `${process.env.NEXT_PUBLIC_BASE_URL_image}${pic}` : ''} alt='تصویر کاربر' fill style={{ borderRadius: '100px', border: `1px solid ${colorPalette.blue[9]}` }} />
          </Box>
          <Grid width={'3'} columns={'3'} gapY={'5'}>
            <Item label='نام' value={name} />
            <Item label='نام خانوادگی' value={last_name} />
            <Item label='تاریخ تولد' value={convertTimestampToPersianDate(birthday)} />
            <Item label='جنسیت' value={gender === 'MALE' ? 'مرد' : 'زن'} />
            <Item label='شماره تماس' value={mobile} />
            <Item label='ایمیل' value={email} />
          </Grid>
          <Flex align={'end'}>
            {type === 'PLAN' ? (
              <Button size={'3'} colorVariant='PINK' onClick={onShowProfile}>
                <Text {...typoVariant.body1}>مشاهده پروفایل</Text>
              </Button>
            ) : (
              <Flex direction={'column'} gap={'2'}>
                {status === true ? (
                  <Button size={'3'} colorVariant='PINK' type='button' onClick={() => setModalState({ isOpen: true, key: 'deActive' })}>
                    <Text {...typoVariant.body1}>غیرفعال کردن کاربر</Text>
                  </Button>
                ) : (
                  <Button size={'3'} type='button' onClick={() => setModalState({ isOpen: true, key: 'active' })}>
                    <Text {...typoVariant.body1}>فعال سازی کاربر</Text>
                  </Button>
                )}
                <Button size={'3'} type='button' onClick={onEditInfo}>
                  <Text {...typoVariant.body1}>ویرایش اطلاعات</Text>
                </Button>
              </Flex>
            )}
          </Flex>
        </Grid>
      </BoxWrapper>
      <Modal isOpen={modalState.isOpen} onClose={() => setModalState({ ...modalState, isOpen: false })}>
        {modalState.key === 'deActive' && (
          <Grid gapY={'24px'} p={'5'}>
            <Text>آیا از غیر فعال کردن این کاربر اظمینان دارید؟ </Text>
            <Grid gap={'10px'} columns={'2'}>
              <Button
                onClick={() => {
                  if (onDeActive) onDeActive();
                  setModalState({ ...modalState, isOpen: false });
                }}
                variant='soft'
                size={'4'}
              >
                <Text {...typoVariant.body3}>{isLoading ? <Spinner /> : 'بله'}</Text>
              </Button>
              <Button type='button' onClick={() => setModalState({ ...modalState, isOpen: false })} variant='solid' size={'4'}>
                <Text {...typoVariant.body3}>خیر</Text>
              </Button>
            </Grid>
          </Grid>
        )}

        {modalState.key === 'active' && (
          <Grid gapY={'24px'} p={'5'}>
            <Text>آیا از فعال کردن این کاربر اظمینان دارید؟ </Text>
            <Grid gap={'10px'} columns={'2'}>
              <Button
                onClick={() => {
                  if (onActive) onActive();
                  setModalState({ ...modalState, isOpen: false });
                }}
                variant='soft'
                size={'4'}
              >
                <Text {...typoVariant.body3}>{isLoading ? <Spinner /> : 'بله'}</Text>
              </Button>
              <Button type='button' onClick={() => setModalState({ ...modalState, isOpen: false })} variant='solid' size={'4'}>
                <Text {...typoVariant.body3}>خیر</Text>
              </Button>
            </Grid>
          </Grid>
        )}
      </Modal>
    </>
  );
};

export default UserDetailCard;

const Item = ({ label, value }: { label: string; value: string | number }) => (
  <Flex align={'center'} gap={'2'}>
    <Text {...typoVariant.body2} style={{ color: colorPalette.gray[10] }}>
      {label}
    </Text>
    <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
      {value ? value : '-'}
    </Text>
  </Flex>
);
