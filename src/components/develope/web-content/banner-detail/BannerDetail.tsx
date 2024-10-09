'use client';

import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import { Box, Button, Flex, Grid, Heading, Text } from '@/libs/primitives';

type BannerDetailProps = {
  header: string;
  title: string;
  owner: string;
  expirationDate: string;
  bannerImage: string;
  //   onEditClick: () => void;
  //   onDeleteClick: () => void;
};

const BannerDetail: React.FC<BannerDetailProps> = (props: BannerDetailProps) => {
  const { header, title, owner, bannerImage, expirationDate } = props;
  return (
    <Flex width={'100%'} direction={'column'} gap={'4'}>
      <Heading>{header}</Heading>
      <Grid width={'100%'} p={'4'} gapX={'5'} columns={'2'} style={{ gridTemplateColumns: '1.5fr 3fr', border: '1px solid #D4D4D4', borderRadius: 8 }}>
        <Box>
          <Item label='عنوان آگهی' value={title} />
          <Item label='صاحب امتیاز آگهی' value={owner} />
          <Item label='تبلیغ   تا' value={expirationDate} />
        </Box>
        <Flex direction={'column'} gap={'3'}>
          <Box width={'100%'} style={{ height: 120, position: 'relative', borderRadius: 8 }}>
            <Image src={bannerImage} alt='' fill style={{ borderRadius: 8 }} />
          </Box>
          <Flex width={'100%'} justify='center' gap={'3'}>
            <Button size={'3'} style={{ width: '50%' }}>
              ویرایش
            </Button>
            <Button size={'3'} variant='outline' style={{ width: '50%' }}>
              حذف بنر
            </Button>
          </Flex>
        </Flex>
      </Grid>
    </Flex>
  );
};

export default BannerDetail;

const Item = ({ label, value }: { label: string; value: string }) => (
  <ItemWrapper>
    <Text as='label'>{label}</Text>
    <Text as='p'>{value}</Text>
  </ItemWrapper>
);

const ItemWrapper = styled(Flex).attrs(() => ({
  width: '100%',
  align: 'center',
  py: '4',
  justify: 'between',
}))`
  border-bottom: 1px solid #d4d4d4;
`;
