import React from 'react';

import Image from 'next/image';

import { Box, Button, Flex, Grid, Text } from '@/libs/primitives';
import BoxWrapper from '@/libs/shared/wrapper/BoxWrapper';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { UserPlansProfileDetail } from '@/types/plans/user-plans';

const UserPlanHero = (props: UserPlansProfileDetail) => {
  const { image, name, last_name, birthday, sex, mobile, email } = props;
  return (
    <BoxWrapper hero='سازنده برنامه'>
      <Grid width={'100%'} columns={'3'} px={'4'} gapX={'5'} style={{ gridTemplateColumns: 'auto 3fr auto' }}>
        <Box width={'130px'} height={'130px'} position={'relative'}>
          <Image src={image} alt='تصویر کاربر' fill style={{ borderRadius: '100px', border: `1px solid ${colorPalette.blue[9]}` }} />
        </Box>
        <Grid width={'3'} columns={'3'} gapY={'5'}>
          <Item label='نام' value={name} />
          <Item label='نام خانوادگی' value={last_name} />
          <Item label='تاریخ تولد' value={birthday} />
          <Item label='جنسیت' value={sex} />
          <Item label='شماره تماس' value={mobile} />
          <Item label='ایمیل' value={email} />
        </Grid>
        <Flex align={'end'}>
          {/* TODO: define onClick for button */}
          <Button size={'3'} colorVariant='PINK'>
            <Text {...typoVariant.body1}>مشاهده پروفایل</Text>
          </Button>
        </Flex>
      </Grid>
    </BoxWrapper>
  );
};

export default UserPlanHero;

const Item = ({ label, value }: { label: string; value: string }) => (
  <Flex align={'center'} gap={'2'}>
    <Text {...typoVariant.body2} style={{ color: colorPalette.gray[10] }}>
      {label}
    </Text>
    <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
      {value}
    </Text>
  </Flex>
);
