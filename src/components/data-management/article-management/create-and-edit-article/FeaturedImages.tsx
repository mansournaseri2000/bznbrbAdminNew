'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';

// import SelectedPrimaryImage from '@/components/develop/data-management/select-primary-image/SelectedPrimaryImage';
import { Flex, Heading, Text } from '@/libs/primitives';
// import ImagePicker2 from '@/libs/shared/ImagePicker2';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

// import { Picture } from '@/types/place/find-place';

// type Props = {
//   type: 'create' | 'edit';
//   picture: string;
// };

const FeaturedImages = () => {
  const { watch } = useFormContext();
  return (
    <>
      {watch('pic')?.length === 0 ? (
        <Flex width={'100%'} direction={'column'} justify={'center'} align={'center'} gap={'32px'}>
          <Heading as='h3' size={'3'} style={{ color: colorPalette.gray[11] }}>
            هنوز تصویر شاخصی اضافه نشده است.
          </Heading>
          <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11], maxWidth: '500px', textAlign: 'center' }}>
            دقت داشته باشید که تصویر شاخص اولین تصویر نقطه و تصویری است که بر روی کارت نقطه نمایش داده می شود!
          </Text>
          {/* <ImagePicker2 name='pic' >
            <Button size={'3'} style={{ padding: '13.5px 16px' }}>
              <Flex align={'center'} gap={'2'}>
                <Text {...typoVariant.body1}>+</Text>
                <Text {...typoVariant.body1}>افزودن تصویر شاخص</Text>
              </Flex>
            </Button>
          </ImagePicker2> */}
        </Flex>
      ) : (
        // type === 'edit' && <SelectedPrimaryImage picture={picture} />
        ''
      )}
    </>
  );
};

export default FeaturedImages;
