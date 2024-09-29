import React from 'react';

import AppButton from '@/libs/primitives/components/Button';
import AppFlex from '@/libs/primitives/layout/Flex';
import AppGrid from '@/libs/primitives/layout/Grid';
import AppText from '@/libs/primitives/typography/Text';

type TeamDetailProps = {
  name: string;
  teamManager: string;
  managerEmail: string;
  personnelNumber: number;
  teamAccess: string[] | string;
  //   onEdit: () => void;
  //   onDeactivate: () => void;
};

const TeamDetail = (props: TeamDetailProps) => {
  const { name, teamManager, managerEmail, personnelNumber, teamAccess } = props;
  return (
    <AppGrid width={'100%'} gapX={'5'} columns={'2'} style={{ gridTemplateColumns: '3.3fr 0.7fr' }}>
      <AppGrid columns={'2'} style={{ gridTemplateColumns: '1fr 1fr' }}>
        <AppFlex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <AppText as='label'>نام تیم</AppText>
          <AppText as='p'>{name}</AppText>
        </AppFlex>
        <AppFlex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <AppText as='label'>مسئول تیم</AppText>
          <AppText as='p'>{teamManager}</AppText>
        </AppFlex>
        <AppFlex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <AppText as='label'>ایمیل مسئول</AppText>
          <AppText as='p'>{managerEmail}</AppText>
        </AppFlex>
        <AppFlex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <AppText as='label'>تعداد پرسنل</AppText>
          <AppText as='p'>{personnelNumber}</AppText>
        </AppFlex>
        <AppFlex align={'center'} py={'4'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <AppText as='label'>دسترسی های تیم</AppText>
          <AppText as='p'>{teamAccess}</AppText>
        </AppFlex>
        <AppFlex style={{ borderBottom: '1px solid #D4D4D4' }}>{''}</AppFlex>
      </AppGrid>
      <AppFlex direction={'column'} gap={'2'}>
        <AppButton size={'3'}>ویرایش اطلاعات</AppButton>
        <AppButton size={'3'} variant='outline'>
          غیر فعال سازی
        </AppButton>
      </AppFlex>
    </AppGrid>
  );
};

export default TeamDetail;
