'use client';

import React from 'react';

import styled from 'styled-components';

import { Button, Flex, Grid, Text } from '@/libs/primitives';

type TeamDetailProps = {
  name: string;
  teamManager: string;
  managerEmail: string;
  personnelNumber: number;
  teamAccess: string[] | string;
  //   onEdit: () => void;
  //   onDeactivate: () => void;
};

const TeamDetail: React.FC<TeamDetailProps> = (props: TeamDetailProps) => {
  const { name, teamManager, managerEmail, personnelNumber, teamAccess } = props;
  return (
    <Grid width={'100%'} gapX={'5'} columns={'2'} style={{ gridTemplateColumns: '3.3fr 0.7fr' }}>
      <Grid columns={'2'} style={{ gridTemplateColumns: '1fr 1fr' }}>
        <Item label='نام تیم' value={name} />
        <Item label='مسئول تیم' value={teamManager} />
        <Item label='ایمیل مسئول' value={managerEmail} />
        <Item label='تعداد پرسنل' value={personnelNumber.toString()} />
        <Item label='دسترسی های تیم' value={Array.isArray(teamAccess) ? teamAccess.join(', ') : teamAccess} />
        <Item label='' value='' />
      </Grid>
      <Flex direction={'column'} gap={'2'}>
        <Button size={'3'}>ویرایش اطلاعات</Button>
        <Button size={'3'} variant='outline'>
          غیر فعال سازی
        </Button>
      </Flex>
    </Grid>
  );
};

export default TeamDetail;

const Item = ({ label, value }: { label: string; value: string }) => (
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
