'use client';

import React from 'react';

import { styled } from 'styled-components';

// import { Close } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import { Flex, IconButton, Text } from '../primitives';

type Props = {
  title: string;
  icon: React.ReactNode;
  handleClose: () => void;
};

const ModalHeader = ({ handleClose, title, icon }: Props) => {
  return (
    <HeadContainer position={'sticky'} top={'0'} p={'8px 16px'} justify={'between'} style={{ backgroundColor: colorPalette.blue[10], zIndex: '100' }} align={'center'}>
      <Text {...typoVariant.title2} style={{ color: colorPalette.gray[1], fontWeight: 700 }}>
        {title}
      </Text>
      <IconButton type='button' onClick={handleClose} variant='soft' size={'2'} style={{ backgroundColor: colorPalette.blue[9], borderRadius: '12px' }}>
        {/* <Close /> */}
        <Flex justify={'center'} align={'center'} style={{ backgroundColor: colorPalette.blue[9], borderRadius: 12, padding: 8 }}>
          {icon}
        </Flex>
      </IconButton>
    </HeadContainer>
  );
};

export default ModalHeader;

const HeadContainer = styled(Flex)`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;
