import React from 'react';

import SelectPrimaryImage from '@/components/develop/data-management/select-primary-image/SelectPrimaryImage';
import { Button, Flex, Heading, Text } from '@/libs/primitives';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

const PrimaryImage = () => {
  return (
    <>
      <Flex direction={'column'} gap={'6'} align={'center'} py={'87.5px'}>
        <Heading as='h3' size={'3'} style={{ color: colorPalette.gray[11] }}>
          هنوز تصویر شاخصی اضافه نشده است.
        </Heading>
        <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11], textAlign: 'center' }}>
          دقت داشته باشید که تصویر شاخص اولین تصویر نقطه و تصویری است که بر روی کارت <br /> نقطه نمایش داده می شود!
        </Text>
        <Button size={'3'}>
          <Flex gap={'2'} align={'center'}>
            <Text {...typoVariant.body1}>+</Text>
            <Text {...typoVariant.body1}>افزودن تصویر شاخص</Text>
          </Flex>
        </Button>
      </Flex>
      <SelectPrimaryImage />
    </>
  );
};

export default PrimaryImage;
