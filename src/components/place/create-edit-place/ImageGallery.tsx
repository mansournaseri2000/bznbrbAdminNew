import React from 'react';

import { Button, Flex, Heading, Text } from '@/libs/primitives';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import ImageCreator from '@/components/develop/shared/image-creator/ImageCreator';

const ImageGallery = () => {
  return (
    <>
      <Flex direction={'column'} gap={'6'} align={'center'} py={'87.5px'}>
        <Heading as='h3' size={'3'} style={{ color: colorPalette.gray[11] }}>
          هنوز تصاویر گالری اضافه نشده اند.
        </Heading>
        <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11], textAlign: 'center' }}>
          تصاویر گالری مجموعه تصاویری هستند که تنها در صفحه نقطه نمایش داده می شوند.
        </Text>
        <Button size={'3'}>
          <Flex gap={'2'} align={'center'}>
            <Text {...typoVariant.body1}>+</Text>
            <Text {...typoVariant.body1}>افزودن تصویر</Text>
          </Flex>
        </Button>
      </Flex>
      <ImageCreator />
    </>
  );
};

export default ImageGallery;
