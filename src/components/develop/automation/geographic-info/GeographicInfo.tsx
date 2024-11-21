import React from 'react';

import { Flex, Heading, Text } from '@/libs/primitives';
import IconButton from '@/libs/primitives/components/IconButton';
import Box from '@/libs/primitives/layout/Box';

type GeographicInfoProps = {
  companyName: string;
  description: string;
};

const GeographicInfo: React.FC<GeographicInfoProps> = (props: GeographicInfoProps) => {
  const { companyName, description } = props;
  return (
    <Flex width={'100%'} direction={'column'} gap={'5'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
      <Flex width={'100%'} justify={'between'} align={'center'} px={'4'} py={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
        <Heading>مشخصات نقطه</Heading>
        {/* TODO: add icon */}
        <IconButton size={'3'} radius='full'>
          icon
        </IconButton>
      </Flex>
      <Flex width={'100%'} justify={'between'} align={'center'} px={'4'}>
        <Item label='نام و عنوان شرکت پرواز' value={companyName} />

        <Text>Logo</Text>
      </Flex>
      <Box px={'4'} pb={'2'}>
        <Item label='توضیحات قطار' value={description} />
      </Box>
    </Flex>
  );
};

export default GeographicInfo;

const Item = ({ label, value }: { label: string; value: string }) => (
  <Flex direction={'column'} gap={'2'}>
    <Text as='label'>{label}</Text>
    <Text as='p'>{value}</Text>
  </Flex>
);
