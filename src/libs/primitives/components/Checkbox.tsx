'use client';

import React, { forwardRef } from 'react';

import { Checkbox as RadixCheckbox } from '@radix-ui/themes';
import { Flex, Text } from '@radix-ui/themes';

import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

/**
 * props
 * _______________________________________________________________________________
 */
type CheckboxComponentProps = {
  label: string;
  defaultChecked?: boolean;
} & React.ComponentPropsWithoutRef<typeof RadixCheckbox>;

const CheckboxComponent = forwardRef<HTMLButtonElement, CheckboxComponentProps>(({ label, defaultChecked, ...rest }, ref) => {
  return (
    <Text as='label' {...typoVariant.body2} style={{ color: colorPalette.gray[11] }}>
      <Flex gap='2' align='center'>
        <RadixCheckbox defaultChecked={defaultChecked} ref={ref} {...rest} />
        {label}
      </Flex>
    </Text>
  );
});

CheckboxComponent.displayName = 'CheckboxComponent';

export default CheckboxComponent;
