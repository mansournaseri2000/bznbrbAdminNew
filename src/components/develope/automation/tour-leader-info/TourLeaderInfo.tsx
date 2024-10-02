'use client';

import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import AppIconButton from '@/libs/primitives/components/IconButton';
import AppBox from '@/libs/primitives/layout/Box';
import AppFlex from '@/libs/primitives/layout/Flex';
import AppGrid from '@/libs/primitives/layout/Grid';
import AppHeading from '@/libs/primitives/typography/Heading';
import AppText from '@/libs/primitives/typography/Text';

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
  const {
    experienceYears,
    state,
    city,
    specialties,
    cardIssueDate,
    cardExpiryDate,
    about,
    languages,
    image,
  } = props;
  return (
    <AppFlex
      direction={'column'}
      gap={'5'}
      py={'4'}
      style={{ width: '100%', maxWidth: 608, border: '1px solid #D4D4D4', borderRadius: 8 }}
    >
      <AppFlex
        width={'100%'}
        justify={'between'}
        align={'center'}
        px={'4'}
        py={'2'}
        style={{ borderBottom: '1px solid #D4D4D4' }}
      >
        <AppHeading>اطلاعات تورلیدری</AppHeading>
        {/* TODO: add icon */}
        <AppIconButton size={'3'} radius='full'>
          icon
        </AppIconButton>
      </AppFlex>
      <AppFlex direction={'column'} gap={'4'} px={'4'}>
        <AppGrid width={'100%'} columns={'2'} style={{ gridTemplateColumns: '1fr 1fr' }}>
          <Item label='مدت فعالیت' value={`${experienceYears} سال`} />
          <Item label='استان فعالیت' value={state} />
          <Item label='شهر فعالیت' value={city} />
          <Item label='تخصص ها' value={Array.isArray(specialties) ? specialties.join(', ') : specialties} />
          <Item label='تاریخ صدور کارت' value={cardIssueDate} />
          <Item label='تاریخ انقضای کارت' value={cardExpiryDate} />
        </AppGrid>
        <AppFlex direction={'column'} gap={'2'}>
          <AppText>درباره</AppText>
          <AppText style={{ borderBottom: '1px solid #D4D4D4', paddingBottom: 16 }}>{about}</AppText>
        </AppFlex>
        <Item
          label='تسلط بر زبان های'
          value={Array.isArray(languages) ? languages.join(', ') : languages}
          style={{ paddingTop: 0 }}
        />
        <AppBox>
          <AppBox
            style={{
              width: 312,
              height: 120,
              position: 'relative',
              border: '1px solid #D4D4D4',
              borderRadius: 8,
            }}
          >
            <Image alt='' src={image} fill style={{ borderRadius: 8 }} />
          </AppBox>
        </AppBox>
      </AppFlex>
    </AppFlex>
  );
};

export default TourLeaderInfo;

const Item = ({ label, value, style }: { label: string; value: string; style?: React.CSSProperties }) => (
  <ItemWrapper style={style}>
    <AppText as='label' style={{ whiteSpace: 'nowrap' }}>
      {label}
    </AppText>
    <AppText as='p' style={{ whiteSpace: 'wrap' }}>
      {value}
    </AppText>
  </ItemWrapper>
);

const ItemWrapper = styled(AppFlex).attrs(() => ({
  align: 'center',
  py: '4',
  gap: '2',
}))`
  border-bottom: 1px solid #d4d4d4;
`;
