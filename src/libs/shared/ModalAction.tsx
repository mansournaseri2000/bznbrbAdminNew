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
  isFull?: boolean;
  onCloseButton?: () => void;
  onSubmit?: () => void;
  isDisableSubmitBtn?: boolean;
  isSubmit?: boolean;
  disabled?: boolean;
};

const ModalAction = ({ isSubmit = true, closeButtonText, submitButtonText, isLoading, onCloseButton, onSubmit, isFull, isDisableSubmitBtn = false, disabled = false }: Props) => {
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
      <Grid gap={'16px'} columns={'2'} width={isFull ? '100%' : 'max-content'}>
        <Button
          disabled={isDisableSubmitBtn|| disabled}
          onClick={onSubmit}
          type={isSubmit ? 'submit' : 'button'}
          variant='soft'
          size={'3'}
          style={{ width: isFull ? '100%' : 'fit-content', padding: '9.5px 38px' }}
        >
          {isLoading ? <Spinner /> : <Text {...typoVariant.body1}>{submitButtonText}</Text>}
        </Button>
        <Button type='button' colorVariant='PINK' size={'3'} onClick={onCloseButton} style={{ width: isFull ? '100%' : 'fit-content', padding: '9.5px 46px' }}>
          <Text {...typoVariant.body1}>{closeButtonText}</Text>
        </Button>
      </Grid>
    </Flex>
  );
};

export default ModalAction;
