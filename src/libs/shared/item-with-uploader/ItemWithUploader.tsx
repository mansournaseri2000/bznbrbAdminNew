import React from 'react';

import Image from 'next/image';

import { Box, IconButton } from '@/libs/primitives';
import { Update } from '@/public/icon';
import { colorPalette } from '@/theme';

import ImagePicker2 from '../ImagePicker2';

type Props = {
  filePath: string;
  type: 'svg' | 'image';
  localPath:string,
  isOrigin:boolean
  resetStore:string
};

const ItemWithUploader = ({ filePath, type ,localPath ,isOrigin ,resetStore }: Props) => {
  return (
    <Box width={'160px'} height={'160px'} position={'relative'} style={{ border: `1px dashed ${colorPalette.blue[8]}`, borderRadius: 8 }}>
      <Image src={isOrigin?`${process.env.NEXT_PUBLIC_BASE_URL_image}${filePath}`:localPath} alt='item image or icon' fill style={{ objectFit: 'cover' }} />
      <ImagePicker2  resetStore={resetStore} localPath={type === 'image' ? 'localImagePath' : 'localIconPath'} name={type === 'image' ? 'imagePath' : 'iconPath'} style={{ position: 'absolute', bottom: 0 }}>
        <IconButton>
          <Update />
        </IconButton>
      </ImagePicker2>
    </Box>
  );
};

export default ItemWithUploader;
