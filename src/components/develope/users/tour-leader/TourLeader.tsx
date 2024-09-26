import React from 'react';

import Image from 'next/image';

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

const TourLeader = (props: TourLeaderProps) => {
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
        <AppFlex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
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
        </AppFlex>
      </AppGrid>
      <AppBox pb={'4'} style={{ borderBottom: '1px solid #D4D4D4' }}>
        <AppHeading>درباره</AppHeading>
        <AppText>{about}</AppText>
      </AppBox>
      <AppFlex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
        <AppText as='label'>تسلط بر زبان های</AppText>
        <AppText as='p'>{languages}</AppText>
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
