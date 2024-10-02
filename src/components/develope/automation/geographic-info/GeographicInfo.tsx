import React from 'react';

import AppIconButton from '@/libs/primitives/components/IconButton';
import AppBox from '@/libs/primitives/layout/Box';
import AppFlex from '@/libs/primitives/layout/Flex';
import AppHeading from '@/libs/primitives/typography/Heading';
import AppText from '@/libs/primitives/typography/Text';

type GeographicInfoProps = {
  companyName: string;
  description: string;
};

const GeographicInfo: React.FC<GeographicInfoProps> = (props: GeographicInfoProps) => {
  const { companyName, description } = props;
  return (
    <AppFlex
      direction={'column'}
      gap={'5'}
      style={{ width: '100%', maxWidth: 608, border: '1px solid #D4D4D4', borderRadius: 8 }}
    >
      <AppFlex
        width={'100%'}
        justify={'between'}
        align={'center'}
        px={'4'}
        py={'2'}
        style={{ borderBottom: '1px solid #D4D4D4' }}
      >
        <AppHeading>مشخصات نقطه</AppHeading>
        {/* TODO: add icon */}
        <AppIconButton size={'3'} radius='full'>
          icon
        </AppIconButton>
      </AppFlex>
      <AppFlex width={'100%'} justify={'between'} align={'center'} px={'4'}>
        <Item label='نام و عنوان شرکت پرواز' value={companyName} />

        <AppText>Logo</AppText>
      </AppFlex>
      <AppBox px={'4'} pb={'2'}>
        <Item label='توضیحات قطار' value={description} />
      </AppBox>
    </AppFlex>
  );
};

export default GeographicInfo;

const Item = ({ label, value }: { label: string; value: string }) => (
  <AppFlex direction={'column'} gap={'2'}>
    <AppText as='label'>{label}</AppText>
    <AppText as='p'>{value}</AppText>
  </AppFlex>
);
