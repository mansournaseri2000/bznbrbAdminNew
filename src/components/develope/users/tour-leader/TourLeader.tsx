'use client';

import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import AppBox from '@/libs/primitives/layout/Box';
import AppFlex from '@/libs/primitives/layout/Flex';
import AppGrid from '@/libs/primitives/layout/Grid';
import AppHeading from '@/libs/primitives/typography/Heading';
import AppText from '@/libs/primitives/typography/Text';

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
    <AppFlex width={'100%'} direction={'column'} gap={'4'}>
      <AppBox style={{ borderBottom: '1px solid #D4D4D4' }}>
        <AppHeading mb={'1'}> اطلاعات تورلیدری</AppHeading>
      </AppBox>
      <AppGrid columns={'3'}>
        <CardItem label='مدت فعالیت' value={`${experienceYears} سال`} />
        <CardItem label='استان فعالیت' value={state} />
        <CardItem label='شهر فعالیت' value={city} />
        <CardItem label='تخصص ها' value={Array.isArray(specialties) ? specialties.join(', ') : specialties} />
        <CardItem label='تاریخ صدور کارت' value={cardIssueDate} />
        <CardItem label='تاریخ انقضای کارت' value={cardExpiryDate} />
      </AppGrid>

      <AppBox pb={'4'} style={{ borderBottom: '1px solid #D4D4D4' }}>
        <AppHeading>درباره</AppHeading>
        <AppText>{about}</AppText>
      </AppBox>

      <AppFlex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
        <AppText as='label'>تسلط بر زبان های</AppText>
        <AppText as='p'>{Array.isArray(languages) ? languages.join(', ') : languages}</AppText>
      </AppFlex>

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
          <Image alt='' src={image} style={{ borderRadius: 8 }} />
        </AppBox>
      </AppBox>
    </AppFlex>
  );
};

export default TourLeader;

const CardItem = ({ label, value }: { label: string; value: string }) => (
  <ItemWrapper>
    <AppText as='label'>{label}</AppText>
    <AppText as='p'>{value}</AppText>
  </ItemWrapper>
);

const ItemWrapper = styled(AppFlex).attrs(() => ({
  align: 'center',
  py: '4',
  gap: '2',
}))`
  border-bottom: 1px solid #d4d4d4;
`;

{
  /* <AppFlex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <AppText as='label'>مدت فعالیت</AppText>
          <AppText as='p'>{experienceYears}</AppText>
        </AppFlex>
        <AppFlex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <AppText as='label'>استان فعالیت</AppText>
          <AppText as='p'>{state}</AppText>
        </AppFlex>
        <AppFlex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <AppText as='label'>شهر فعالیت</AppText>
          <AppText as='p'>{city}</AppText>
        </AppFlex>

        <AppFlex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <AppText as='label'>تخصص ها</AppText>
          <AppText as='p'>{specialties}</AppText>
        </AppFlex>
        <AppFlex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <AppText as='label'>تاریخ صدور کارت</AppText>
          <AppText as='p'>{cardIssueDate}</AppText>
        </AppFlex>
        <AppFlex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <AppText as='label'>تاریخ انقضای کارت</AppText>
          <AppText as='p'>{cardExpiryDate}</AppText>
        </AppFlex> */
}
