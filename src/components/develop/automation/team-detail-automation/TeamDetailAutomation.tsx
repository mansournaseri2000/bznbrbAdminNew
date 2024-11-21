'use client';

import React from 'react';

import styled from 'styled-components';

import { Box, Flex, Heading, Text } from '@/libs/primitives';

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
    <Flex width={'100%'} direction={'column'} gap={'5'} py={'4'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
      <Box p={'4'} style={{ borderBottom: '1px solid #D4D4D4' }}>
        <Heading>موقعیت جغرافیایی</Heading>
      </Box>
      <Flex direction={'column'} gap={'1'} px={'4'}>
        <Item label='مسئول تیم' value={teamManager} />
        <Item label='نام تیم' value={teamName} />
        <Item label='تعداد پرسنل' value={personnelNumber} />
        <Item label='ایمیل مسئول' value={managerEmail} />
        <Item label='دسترسی های تیم' value={Array.isArray(teamAccess) ? teamAccess.join(',') : teamAccess} />
      </Flex>
    </Flex>
  );
};

export default TeamDetailAutomation;

const Item = ({ label, value }: { label: string; value: string | number }) => (
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
