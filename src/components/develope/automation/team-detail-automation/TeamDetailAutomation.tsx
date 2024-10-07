'use client';

import React from 'react';

import styled from 'styled-components';

import AppBox from '@/libs/primitives/layout/Box';
import AppFlex from '@/libs/primitives/layout/Flex';
import AppHeading from '@/libs/primitives/typography/Heading';
import AppText from '@/libs/primitives/typography/Text';

type TeamDetailProps = {
  teamManager: string;
  teamName: string;
  personnelNumber: number;
  managerEmail: string;
  teamAccess: string[] | string;
};

const TeamDetailAutomation: React.FC<TeamDetailProps> = (props: TeamDetailProps) => {
  const { teamManager, teamName, personnelNumber, managerEmail, teamAccess } = props;
  return (
    <AppFlex width={'100%'} direction={'column'} gap={'5'} py={'4'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
      <AppBox p={'4'} style={{ borderBottom: '1px solid #D4D4D4' }}>
        <AppHeading>موقعیت جغرافیایی</AppHeading>
      </AppBox>
      <AppFlex direction={'column'} gap={'1'} px={'4'}>
        <Item label='مسئول تیم' value={teamManager} />
        <Item label='نام تیم' value={teamName} />
        <Item label='تعداد پرسنل' value={personnelNumber} />
        <Item label='ایمیل مسئول' value={managerEmail} />
        <Item label='دسترسی های تیم' value={Array.isArray(teamAccess) ? teamAccess.join(',') : teamAccess} />
      </AppFlex>
    </AppFlex>
  );
};

export default TeamDetailAutomation;

const Item = ({ label, value }: { label: string; value: string | number }) => (
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
