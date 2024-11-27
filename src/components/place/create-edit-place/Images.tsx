import React from 'react';

import { Button, Flex, Grid, Heading, Text } from '@/libs/primitives';
import { Divider } from '@/libs/shared';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

const Images = () => {
  return (
    <Grid width={'100%'} gapY={'5'}>
      <Text {...typoVariant.title2} style={{ color: colorPalette.gray[12], fontWeight: 700 }}>
        تصویر شاخص
      </Text>
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
      <Divider style={{ color: colorPalette.gray[6] }} />
      <Text {...typoVariant.title2} style={{ color: colorPalette.gray[12], fontWeight: 700 }}>
        گالری تصاویر
      </Text>
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
    </Grid>
  );
};

export default Images;
