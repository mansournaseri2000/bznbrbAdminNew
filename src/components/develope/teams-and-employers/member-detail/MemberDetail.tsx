import React from 'react';

import Image from 'next/image';

import AppButton from '@/libs/primitives/components/Button';
import AppBox from '@/libs/primitives/layout/Box';
import AppFlex from '@/libs/primitives/layout/Flex';
import AppGrid from '@/libs/primitives/layout/Grid';
import AppText from '@/libs/primitives/typography/Text';

type MemberDetailProps = {
  firstName: string;
  lastName: string;
  profileImg: string;
  birthDate: string;
  nationalId: string;
  mobile: string;
  orgEmail: string;
  lastSeen: string;
  position: string;
  teamName: string;
  managerName: string;
  //   onRemoveFromTeam: () => void;
};

const MemberDetail = (props: MemberDetailProps) => {
  const {
    firstName,
    lastName,
    profileImg,
    birthDate,
    nationalId,
    mobile,
    orgEmail,
    lastSeen,
    position,
    teamName,
    managerName,
  } = props;
  return (
    <AppBox width={'100%'}>
      <AppGrid columns={'3'} gapX={'5'} style={{ gridTemplateColumns: '0.4fr 5fr 0.6fr' }}>
        <AppBox
          style={{
            width: 100,
            height: 100,
            position: 'relative',
            borderRadius: '50%',
          }}
        >
          <Image src={profileImg} alt='' fill style={{ borderRadius: '50%' }} />
        </AppBox>
        <AppGrid columns={'2'} style={{ gridTemplateColumns: '1fr 1fr' }}>
          <AppFlex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
            <AppText as='label'>نام</AppText>
            <AppText as='p'>{firstName}</AppText>
          </AppFlex>

          <AppFlex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
            <AppText as='label'>نام خانوادگی</AppText>
            <AppText as='p'>{lastName}</AppText>
          </AppFlex>

          <AppFlex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
            <AppText as='label'>کدملی</AppText>
            <AppText as='p'>{nationalId}</AppText>
          </AppFlex>

          <AppFlex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
            <AppText as='label'>تاریخ تولد</AppText>
            <AppText as='p'>{birthDate}</AppText>
          </AppFlex>
        </AppGrid>
        <AppButton size={'3'}>حذف از تیم</AppButton>
      </AppGrid>
      <AppGrid columns={'3'} style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
        <AppFlex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <AppText as='label'>شماره تماس</AppText>
          <AppText as='p'>{mobile}</AppText>
        </AppFlex>
        <AppFlex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <AppText as='label'>ایمیل سازمانی</AppText>
          <AppText as='p'>{orgEmail}</AppText>
        </AppFlex>

        <AppFlex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <AppText as='label'>آخرین بازدید</AppText>
          <AppText as='p'>{lastSeen}</AppText>
        </AppFlex>

        <AppFlex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <AppText as='label'>تیم</AppText>
          <AppText as='p'>{teamName}</AppText>
        </AppFlex>

        <AppFlex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <AppText as='label'>سمت اجرایی</AppText>
          <AppText as='p'>{position}</AppText>
        </AppFlex>

        <AppFlex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <AppText as='label'>مسئول</AppText>
          <AppText as='p'>{managerName}</AppText>
        </AppFlex>
      </AppGrid>
    </AppBox>
  );
};

export default MemberDetail;
