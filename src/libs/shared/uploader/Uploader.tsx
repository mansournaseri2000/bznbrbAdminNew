import React from 'react';

import { Flex, Text } from '@/libs/primitives';
import { Upload } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  type: 'pic' | 'icon';
};

const Uploader = ({ type }: Props) => {
  return (
    <Flex
      width={'100%'}
      maxWidth={'160px'}
      minWidth={'160px'}
      direction={'column'}
      align={'center'}
      gap={'2'}
      p={'36.5px 12px'}
      style={{ border: `1px dashed ${colorPalette.blue[8]}`, borderRadius: 8, cursor: 'pointer' }}
    >
      <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
        {type === 'pic' ? 'آپلود تصویر' : type === 'icon' && 'آپلود آیکون'}
      </Text>
      {type === 'pic' && (
        <Text {...typoVariant.description2} style={{ color: colorPalette.gray[11], textAlign: 'center' }}>
          فایل تصویر را با فرمت png یا <br /> jpeg وارد کنید
        </Text>
      )}
      {type === 'icon' && (
        <Text {...typoVariant.description2} style={{ color: colorPalette.gray[11], textAlign: 'center' }}>
          فایل آیکون را با فرمت svg <br /> وارد کنید
        </Text>
      )}
      <Upload width={16} height={16} />
    </Flex>
  );
};

export default Uploader;
