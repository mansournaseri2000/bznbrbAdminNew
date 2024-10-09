'use client';

import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import { Box, Flex, Heading, Text } from '@/libs/primitives';

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
    <Flex width={'100%'} direction={'column'} gap={'5'} py={'4'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
      <Box p={'4'} style={{ borderBottom: '1px solid #D4D4D4' }}>
        <Heading>{header}</Heading>
      </Box>
      <Flex direction={'column'} gap={'2'} align={'center'} px={'4'}>
        <Box
          style={{
            width: 576,
            height: 120,
            position: 'relative',
            border: '1px solid #D4D4D4',
            borderRadius: 8,
          }}
        >
          <Image alt='تصویر آگهی' src={imageUrl} fill style={{ borderRadius: '50%' }} />
        </Box>
        <Box width={'100%'}>
          <Item label='عنوان آگهی' value={title} />
          <Item label='صاحب امتیاز آگهی' value={adOwner} />
          <Item label='تبلیغ تا' value={expiryDate} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default AutomationBanner;

const Item = ({ label, value }: { label: string; value: string }) => (
  <ItemWrapper>
    <Text as='label'>{label}</Text>
    <Text as='p'>{value}</Text>
  </ItemWrapper>
);

const ItemWrapper = styled(Flex).attrs(() => ({
  width: '100%',
  justify: 'between',
  align: 'center',
  py: '4',
}))`
  border-bottom: 1px solid #d4d4d4;
`;
