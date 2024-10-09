'use client';

import React from 'react';

import { Button, Flex, Grid, IconButton, Text } from '@/libs/primitives';

type UserAutomationProps = {
  operatorName: string;
  type: string;
  status: string;
  team: string;
  date: string;
  operatedOn: string;
  //   onAccept: () => void;
  // onReject: () => void;
  //   onMoreInfo: () => void;
};

const UserAutomation = (props: UserAutomationProps) => {
  const { operatorName, date, status, type, team, operatedOn } = props;
  return (
    <Flex width={'100%'} direction={'column'} p={'4'} gap={'4'} style={{ border: '1px solid #D4D4D4', borderRadius: 4 }}>
      <Grid columns={'3'} style={{ borderBottom: '1px solid #D4D4D4' }}>
        <Item label='نام عامل' value={operatorName} />
        <Item label='تاریخ ' value={date} />
        <Item label='وضعیت' value={status} />
        <Item label='نوع عملیات' value={type} />
        <Item label='بر روی ' value={operatedOn} />
        <Item label='تیم' value={team} />
      </Grid>
      <Flex width={'100%'} justify={'between'}>
        <Flex gap={'5'}>
          {/* TODO: define icons for this buttons */}
          <IconButton size={'3'}>icon</IconButton>
          <IconButton size={'3'}>icon</IconButton>
        </Flex>
        <Button size={'3'}>اطلاعات بیشتر</Button>
      </Flex>
    </Flex>
  );
};

export default UserAutomation;

const Item = ({ label, value }: { label: string; value: string }) => (
  <Flex align={'center'} gap={'3'} mb={'4'}>
    <Text as='label' style={{ whiteSpace: 'nowrap' }}>
      {label}
    </Text>
    <Text as='p' style={{ whiteSpace: 'nowrap' }}>
      {value}
    </Text>
  </Flex>
);
