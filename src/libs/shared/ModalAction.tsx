'use client';

import React from 'react';

import { Spinner } from '@radix-ui/themes';

import { Boxshadow, colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import { Button, Flex, Grid, Text } from '../primitives';

type Props = {
  submitButtonText: string;
  closeButtonText: string;
  isLoading?: boolean;
  onCloseButton?: () => void;
  onSubmit?: () => void;
};

const ModalAction = ({ closeButtonText, submitButtonText, isLoading, onCloseButton, onSubmit }: Props) => {
  return (
    <Flex
      height={'max-content'}
      gap={'16px'}
      left={'0'}
      p={'16px'}
      right={'0'}
      style={{
        backgroundColor: colorPalette.gray[2],
        marginBlockStart: 'auto',
        borderTop: `1px solid ${colorPalette.gray[3]}`,
        boxShadow: Boxshadow.shadow1,
        borderBottomLeftRadius: '8px',
        borderBottomRightRadius: '8px',
      }}
      position={'sticky'}
      bottom={'0px'}
    >
      <Grid gap={'16px'} columns={'2'} width={'max-content'}>
        <Button onClick={onSubmit} type='submit' variant='soft' size={'3'}>
          {isLoading ? <Spinner /> : <Text {...typoVariant.body1}>{submitButtonText}</Text>}
        </Button>
        <Button type='button' variant='solid' size={'3'} onClick={onCloseButton}>
          <Text {...typoVariant.body1}>{closeButtonText}</Text>
        </Button>
      </Grid>
    </Flex>
  );
};

export default ModalAction;
