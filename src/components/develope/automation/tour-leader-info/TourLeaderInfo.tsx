'use client';

import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import { Box, Flex, Grid, Heading, IconButton, Text } from '@/libs/primitives';

type TourLeaderInfoProps = {
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

const TourLeaderInfo: React.FC<TourLeaderInfoProps> = (props: TourLeaderInfoProps) => {
  const { experienceYears, state, city, specialties, cardIssueDate, cardExpiryDate, about, languages, image } = props;
  return (
    <Flex width={'100%'} direction={'column'} gap={'5'} py={'4'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
      <Flex width={'100%'} justify={'between'} align={'center'} px={'4'} py={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
        <Heading>اطلاعات تورلیدری</Heading>
        {/* TODO: add icon */}
        <IconButton size={'3'} radius='full'>
          icon
        </IconButton>
      </Flex>
      <Flex direction={'column'} gap={'4'} px={'4'}>
        <Grid width={'100%'} columns={'2'} style={{ gridTemplateColumns: '1fr 1fr' }}>
          <Item label='مدت فعالیت' value={`${experienceYears} سال`} />
          <Item label='استان فعالیت' value={state} />
          <Item label='شهر فعالیت' value={city} />
          <Item label='تخصص ها' value={Array.isArray(specialties) ? specialties.join(', ') : specialties} />
          <Item label='تاریخ صدور کارت' value={cardIssueDate} />
          <Item label='تاریخ انقضای کارت' value={cardExpiryDate} />
        </Grid>
        <Flex direction={'column'} gap={'2'}>
          <Text>درباره</Text>
          <Text style={{ borderBottom: '1px solid #D4D4D4', paddingBottom: 16 }}>{about}</Text>
        </Flex>
        <Item label='تسلط بر زبان های' value={Array.isArray(languages) ? languages.join(', ') : languages} style={{ paddingTop: 0 }} />
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
            <Image alt='' src={image} fill style={{ borderRadius: 8 }} />
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default TourLeaderInfo;

const Item = ({ label, value, style }: { label: string; value: string; style?: React.CSSProperties }) => (
  <ItemWrapper style={style}>
    <Text as='label' style={{ whiteSpace: 'nowrap' }}>
      {label}
    </Text>
    <Text as='p' style={{ whiteSpace: 'wrap' }}>
      {value}
    </Text>
  </ItemWrapper>
);

const ItemWrapper = styled(Flex).attrs(() => ({
  align: 'center',
  py: '4',
  gap: '2',
}))`
  border-bottom: 1px solid #d4d4d4;
`;
