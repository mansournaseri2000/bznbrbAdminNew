import React from 'react';

import SelectPrimaryImage from '@/components/develop/data-management/select-primary-image/SelectPrimaryImage';
import { Button, Flex, Heading, Text } from '@/libs/primitives';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  type: 'create' | 'edit';
};

const FeaturedImages = ({ type }: Props) => {
  return (
    <>
      {type === 'create' ? (
        <Flex width={'100%'} direction={'column'} justify={'center'} align={'center'} gap={'32px'}>
          <Heading as='h3' size={'3'} style={{ color: colorPalette.gray[11] }}>
            هنوز تصویر شاخصی اضافه نشده است.
          </Heading>
          <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11], maxWidth: '500px', textAlign: 'center' }}>
            دقت داشته باشید که تصویر شاخص اولین تصویر نقطه و تصویری است که بر روی کارت نقطه نمایش داده می شود!
          </Text>
          <Button size={'3'} style={{ padding: '13.5px 16px' }}>
            <Flex align={'center'} gap={'2'}>
              <Text {...typoVariant.body1}>+</Text>
              <Text {...typoVariant.body1}>افزودن تصویر شاخص</Text>
            </Flex>
          </Button>
        </Flex>
      ) : (
        type === 'edit' && <SelectPrimaryImage />
      )}
    </>
  );
};

export default FeaturedImages;
