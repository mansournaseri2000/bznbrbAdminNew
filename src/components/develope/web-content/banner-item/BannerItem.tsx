import React from 'react';

import AppButton from '@/libs/primitives/components/Button';
import AppFlex from '@/libs/primitives/layout/Flex';
import AppGrid from '@/libs/primitives/layout/Grid';
import AppText from '@/libs/primitives/typography/Text';

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
    <AppGrid
      width={'100%'}
      p={'2'}
      columns={'2'}
      align={'center'}
      style={{ gridTemplateColumns: '3fr 1.5fr', border: '1px solid #D4D4D4', borderRadius: 8 }}
    >
      <AppFlex align={'center'} gap={'5'}>
        <Item label='عنوان آگهی' value={title} />
        <Item label='صاحب امتیاز آگهی' value={owner} />
        <Item label='تبلیغ تا' value={expirationDate} />
      </AppFlex>
      <AppFlex justify={'end'} gap={'5'}>
        <AppButton size={'3'}>ویرایش</AppButton>
        <AppButton size={'3'} variant='outline'>
          حذف بنر
        </AppButton>
      </AppFlex>
    </AppGrid>
  );
};

export default BannerItem;

const Item = ({ label, value }: { label: string; value: string }) => (
  <AppFlex align={'center'} justify={'center'} gap={'3'} py={'4'}>
    <AppText as='label' style={{ whiteSpace: 'nowrap' }}>
      {label}
    </AppText>
    <AppText as='p' style={{ whiteSpace: 'nowrap' }}>
      {value}
    </AppText>
  </AppFlex>
);
