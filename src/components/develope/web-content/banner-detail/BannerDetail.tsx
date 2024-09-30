import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import AppButton from '@/libs/primitives/components/Button';
import AppBox from '@/libs/primitives/layout/Box';
import AppFlex from '@/libs/primitives/layout/Flex';
import AppGrid from '@/libs/primitives/layout/Grid';
import AppText from '@/libs/primitives/typography/Text';

type BannerDetailProps = {
  title: string;
  owner: string;
  expirationDate: string;
  bannerImage: string;
  //   onEditClick: () => void;
  //   onDeleteClick: () => void;
};

const BannerDetail: React.FC<BannerDetailProps> = (props: BannerDetailProps) => {
  const { title, owner, bannerImage, expirationDate } = props;
  return (
    <AppGrid
      width={'100%'}
      p={'4'}
      gapX={'5'}
      columns={'2'}
      style={{ gridTemplateColumns: '1.5fr 3fr', border: '1px solid #D4D4D4', borderRadius: 8 }}
    >
      <AppBox>
        <Item label='عنوان آگهی' value={title} />
        <Item label='صاحب امتیاز آگهی' value={owner} />
        <Item label='تبلیغ تا' value={expirationDate} />
      </AppBox>
      <AppFlex direction={'column'} gap={'3'}>
        <AppBox width={'100%'} style={{ height: 120, position: 'relative', borderRadius: 8 }}>
          <Image src={bannerImage} alt='' fill style={{ borderRadius: 8 }} />
        </AppBox>
        <AppFlex width={'100%'} justify='center' gap={'3'}>
          <AppButton size={'3'} style={{ width: '50%' }}>
            ویرایش
          </AppButton>
          <AppButton size={'3'} variant='outline' style={{ width: '50%' }}>
            حذف بنر
          </AppButton>
        </AppFlex>
      </AppFlex>
    </AppGrid>
  );
};

export default BannerDetail;

const Item = ({ label, value }: { label: string; value: string }) => (
  <ItemWrapper>
    <AppText as='label'>{label}</AppText>
    <AppText as='p'>{value}</AppText>
  </ItemWrapper>
);

const ItemWrapper = styled(AppFlex).attrs(() => ({
  width: '100%',
  align: 'center',
  py: '4',
  justify: 'between',
}))`
  border-bottom: 1px solid #d4d4d4;
`;
