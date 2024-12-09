import React from 'react';

import Image from 'next/image';

import { Box, Button, Flex, Grid, Text } from '@/libs/primitives';
import BoxWrapper from '@/libs/shared/wrapper/BoxWrapper';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { UserInfoDetail } from '@/types/user/user';

import { convertTimestampToPersianDate } from '../utils/convertTimestampToPersianDate';

type Props = UserInfoDetail & {
  type: 'USER' | 'PLAN';
  onDeActive?: () => void;
  onEditInfo?: () => void;
  onShowProfile?: () => void;
};

const UserDetailCard = (props: Props) => {
  const { pic, name, last_name, birthday, gender, mobile, email, type, status, onShowProfile, onDeActive, onEditInfo } = props;
  return (
    <BoxWrapper hero='سازنده برنامه'>
      <Grid width={'100%'} columns={'3'} px={'4'} gapX={'5'} style={{ gridTemplateColumns: 'auto 3fr auto' }}>
        <Box width={'130px'} height={'130px'} position={'relative'}>
          <Image src={pic ? pic : ''} alt='تصویر کاربر' fill style={{ borderRadius: '100px', border: `1px solid ${colorPalette.blue[9]}` }} />
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
                <Button size={'3'} colorVariant='PINK' onClick={onDeActive}>
                  <Text {...typoVariant.body1}>غیرفعال کردن کاربر</Text>
                </Button>
              ) : (
                <Button size={'3'} onClick={onEditInfo}>
                  <Text {...typoVariant.body1}>فعال سازی کاربر</Text>
                </Button>
              )}
              <Button size={'3'} onClick={onEditInfo}>
                <Text {...typoVariant.body1}>ویرایش اطلاعات</Text>
              </Button>
            </Flex>
          )}
        </Flex>
      </Grid>
    </BoxWrapper>
  );
};

export default UserDetailCard;

const Item = ({ label, value }: { label: string; value: string | number }) => (
  <Flex align={'center'} gap={'2'}>
    <Text {...typoVariant.body2} style={{ color: colorPalette.gray[10] }}>
      {label}
    </Text>
    <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
      {value}
    </Text>
  </Flex>
);
