import React from 'react';

import { Flex, Grid, Text } from '@/libs/primitives';
import BoxWrapper from '@/libs/shared/wrapper/BoxWrapper';
import { convertTimestampToPersianDate } from '@/libs/utils/convertTimestampToPersianDate';
import { ProfileLogo } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  fullName: string;
  createTime: number;
};

const AdminDetailCard = ({ fullName, createTime }: Props) => {
  return (
    <BoxWrapper hero='سازنده برنامه'>
      <Grid width={'100%'} columns={'3'} px={'4'} gapX={'5'}>
        <Flex align={'center'} gap={'5'}>
          <ProfileLogo width={64} height={61} />
          <Item label='سازنده' value='بزنیم بیرون' />
        </Flex>
        <Item label='ساخته شده توسط' value={fullName} />
        <Item label='تاریخ ساخت' value={convertTimestampToPersianDate(createTime)} />
      </Grid>
    </BoxWrapper>
  );
};

export default AdminDetailCard;

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
