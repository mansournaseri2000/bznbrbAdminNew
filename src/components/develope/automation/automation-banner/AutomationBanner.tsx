import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import AppBox from '@/libs/primitives/layout/Box';
import AppFlex from '@/libs/primitives/layout/Flex';
import AppHeading from '@/libs/primitives/typography/Heading';
import AppText from '@/libs/primitives/typography/Text';

type AutomationBannerProps = {
  header: string;
  imageUrl: string;
  title: string;
  adOwner: string;
  expiryDate: string;
};

const AutomationBanner: React.FC<AutomationBannerProps> = (props: AutomationBannerProps) => {
  const { header, imageUrl, title, adOwner, expiryDate } = props;
  return (
    <AppFlex
      direction={'column'}
      gap={'5'}
      py={'4'}
      style={{ width: '100%', maxWidth: 608, border: '1px solid #D4D4D4', borderRadius: 8 }}
    >
      <AppBox p={'4'} style={{ borderBottom: '1px solid #D4D4D4' }}>
        <AppHeading>{header}</AppHeading>
      </AppBox>
      <AppFlex direction={'column'} gap={'2'} align={'center'} px={'4'}>
        <AppBox
          style={{
            width: 576,
            height: 120,
            position: 'relative',
            border: '1px solid #D4D4D4',
            borderRadius: 8,
          }}
        >
          <Image alt='تصویر آگهی' src={imageUrl} fill style={{ borderRadius: '50%' }} />
        </AppBox>
        <AppBox width={'100%'}>
          <Item label='عنوان آگهی' value={title} />
          <Item label='صاحب امتیاز آگهی' value={adOwner} />
          <Item label='تبلیغ تا' value={expiryDate} />
        </AppBox>
      </AppFlex>
    </AppFlex>
  );
};

export default AutomationBanner;

const Item = ({ label, value }: { label: string; value: string }) => (
  <ItemWrapper>
    <AppText as='label'>{label}</AppText>
    <AppText as='p'>{value}</AppText>
  </ItemWrapper>
);

const ItemWrapper = styled(AppFlex).attrs(() => ({
  width: '100%',
  justify: 'between',
  align: 'center',
  py: '4',
}))`
  border-bottom: 1px solid #d4d4d4;
`;
