import React from 'react';

import { Spinner } from '@radix-ui/themes';

import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import { Button, Flex, Text } from '../primitives';

type Props = {
  submitButtonText: string;
  closeButtonText: string;
  buttonsPosition: 'end' | 'center' | 'start';
  isLoading?: boolean;
  onCloseButton?: VoidFunction;
  onSubmit?: VoidFunction;
  disabled?: boolean;
};

const FormSubmitWrapper = ({ submitButtonText, closeButtonText, buttonsPosition, isLoading, disabled, onCloseButton, onSubmit }: Props) => {
  return (
    <Flex width={'100%'} align={'center'} justify={buttonsPosition} gap={'5'} p={'4'} style={{ border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8, backgroundColor: colorPalette.gray[2] }}>
      <Button size={'3'} variant='soft' disabled={disabled} style={{ padding: '13.5px 48.5px' }} onClick={onSubmit}>
        {isLoading ? <Spinner /> : <Text {...typoVariant.body1}>{submitButtonText}</Text>}
      </Button>
      <Button size={'3'} colorVariant='PINK' style={{ padding: '13.5px 48.5px' }} onClick={onCloseButton}>
        <Text {...typoVariant.body1}>{closeButtonText}</Text>
      </Button>
    </Flex>
  );
};

export default FormSubmitWrapper;
