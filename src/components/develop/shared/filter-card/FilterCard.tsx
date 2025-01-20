import React from 'react';

import { Box, Flex, Text } from '@/libs/primitives';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  label: string;
  children: React.ReactNode;
};

const FilterCard = ({ label, children }: Props) => {
  return (
    <Flex width={'100%'} align={'center'} justify={'between'} p={'8px 16px'} style={{ border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8, backgroundColor: colorPalette.gray[2] }}>
      <Text {...typoVariant.body2} style={{ color: colorPalette.gray[9] }}>
        {label}
      </Text>
      <Box width={'50%'}>{children}</Box>
    </Flex>
  );
};

export default FilterCard;
