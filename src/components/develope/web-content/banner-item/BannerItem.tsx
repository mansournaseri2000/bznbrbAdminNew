import React from 'react';

import { Button, Flex, Grid, Text } from '@/libs/primitives';

type BannerDetailProps = {
  title: string;
  owner: string;
  expirationDate: string;
  //   onEditClick: () => void;
  //   onDeleteClick: () => void;
};

const BannerItem: React.FC<BannerDetailProps> = (props: BannerDetailProps) => {
  const { title, owner, expirationDate } = props;
  return (
    <Grid width={'100%'} p={'2'} columns={'2'} align={'center'} style={{ gridTemplateColumns: '3fr 1.5fr', border: '1px solid #D4D4D4', borderRadius: 8 }}>
      <Flex align={'center'} gap={'5'}>
        <Item label='عنوان آگهی' value={title} />
        <Item label='صاحب امتیاز آگهی' value={owner} />
        <Item label='تبلیغ تا' value={expirationDate} />
      </Flex>
      <Flex justify={'end'} gap={'5'}>
        <Button size={'3'}>ویرایش</Button>
        <Button size={'3'} variant='outline'>
          حذف بنر
        </Button>
      </Flex>
    </Grid>
  );
};

export default BannerItem;

const Item = ({ label, value }: { label: string; value: string }) => (
  <Flex align={'center'} justify={'center'} gap={'3'} py={'4'}>
    <Text as='label' style={{ whiteSpace: 'nowrap' }}>
      {label}
    </Text>
    <Text as='p' style={{ whiteSpace: 'nowrap' }}>
      {value}
    </Text>
  </Flex>
);
