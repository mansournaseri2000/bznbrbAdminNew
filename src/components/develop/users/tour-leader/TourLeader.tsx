'use client';

import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import { Box, Flex, Grid, Heading, Text } from '@/libs/primitives';

type TourLeaderProps = {
  state: string;
  city: string;
  specialties: string[] | string;
  experienceYears: number;
  cardIssueDate: string;
  cardExpiryDate: string;
  about: string;
  languages: string[] | string;
  image: string;
};

const TourLeader: React.FC<TourLeaderProps> = (props: TourLeaderProps) => {
  const { experienceYears, state, city, specialties, cardIssueDate, cardExpiryDate, about, languages, image } = props;
  return (
    <Flex width={'100%'} direction={'column'} gap={'4'}>
      <Box style={{ borderBottom: '1px solid #D4D4D4' }}>
        <Heading mb={'1'}> اطلاعات تورلیدری</Heading>
      </Box>
      <Grid columns={'3'}>
        <CardItem label='مدت فعالیت' value={`${experienceYears} سال`} />
        <CardItem label='استان فعالیت' value={state} />
        <CardItem label='شهر فعالیت' value={city} />
        <CardItem label='تخصص ها' value={Array.isArray(specialties) ? specialties.join(', ') : specialties} />
        <CardItem label='تاریخ صدور کارت' value={cardIssueDate} />
        <CardItem label='تاریخ انقضای کارت' value={cardExpiryDate} />
      </Grid>

      <Box pb={'4'} style={{ borderBottom: '1px solid #D4D4D4' }}>
        <Heading>درباره</Heading>
        <Text>{about}</Text>
      </Box>

      <Flex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
        <Text as='label'>تسلط بر زبان های</Text>
        <Text as='p'>{Array.isArray(languages) ? languages.join(', ') : languages}</Text>
      </Flex>

      <Box>
        <Box
          style={{
            width: 312,
            height: 120,
            position: 'relative',
            border: '1px solid #D4D4D4',
            borderRadius: 8,
          }}
        >
          <Image alt='' src={image} style={{ borderRadius: 8 }} />
        </Box>
      </Box>
    </Flex>
  );
};

export default TourLeader;

const CardItem = ({ label, value }: { label: string; value: string }) => (
  <ItemWrapper>
    <Text as='label'>{label}</Text>
    <Text as='p'>{value}</Text>
  </ItemWrapper>
);

const ItemWrapper = styled(Flex).attrs(() => ({
  align: 'center',
  py: '4',
  gap: '2',
}))`
  border-bottom: 1px solid #d4d4d4;
`;

{
  /* <Flex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <Text as='label'>مدت فعالیت</Text>
          <Text as='p'>{experienceYears}</Text>
        </Flex>
        <Flex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <Text as='label'>استان فعالیت</Text>
          <Text as='p'>{state}</Text>
        </Flex>
        <Flex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <Text as='label'>شهر فعالیت</Text>
          <Text as='p'>{city}</Text>
        </Flex>

        <Flex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <Text as='label'>تخصص ها</Text>
          <Text as='p'>{specialties}</Text>
        </Flex>
        <Flex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <Text as='label'>تاریخ صدور کارت</Text>
          <Text as='p'>{cardIssueDate}</Text>
        </Flex>
        <Flex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <Text as='label'>تاریخ انقضای کارت</Text>
          <Text as='p'>{cardExpiryDate}</Text>
        </Flex> */
}
