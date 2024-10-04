'use client';

import { ForwardedRef, forwardRef } from 'react';

import { Select } from '@radix-ui/themes';
import { styled } from 'styled-components';

import { Flex, Text } from '@/libs/primitives';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

/**
 * props
 * _______________________________________________________________________________
 */

type SelectCompnentProps = React.ComponentProps<typeof Select.Root> & {
  errorText?: string;
  lable?: string;
  placeholder: string;
};

export const SelectRoot = forwardRef<React.ElementRef<typeof Select.Root>, SelectCompnentProps>(
  ({ placeholder, errorText, lable, ...props }: SelectCompnentProps | any, forwardedRef: ForwardedRef<React.ElementRef<typeof Select.Root>>) => {
    /**
     * const and variables
     * _______________________________________________________________________________
     */

    /**
     * template
     * _______________________________________________________________________________
     */
    return (
      <Root gap={'4px'} width={'100%'} direction={'column'} position={'relative'}>
        <Text style={{ paddingRight: '5px', color: colorPalette.gray[11] }} {...typoVariant.paragraph3}>
          {lable}
        </Text>
        <Select.Root ref={forwardedRef} size={'3'} {...props}>
          <Select.Trigger placeholder={placeholder} />
          <Select.Content position='popper' style={{ maxHeight: '200px' }}>
            <Select.Group style={{ width: '100%' }}>{props.children}</Select.Group>
          </Select.Content>
        </Select.Root>
        <Text weight={'medium'} color='red' style={{ position: 'absolute', bottom: '-19px', fontSize: '10px', right: '10px' }}>
          {errorText}
        </Text>
      </Root>
    );
  }
);

type SelectItemProps = React.ComponentProps<typeof Select.Item>;

export const SelectItem = ({ children, ...props }: SelectItemProps) => (
  <Select.Item {...props}>
    <Text {...typoVariant.body1}>{children}</Text>
  </Select.Item>
);

/**
 * styled-component
 * _______________________________________________________________________________
 */

const Root = styled(Flex)`
  & .rt-SelectTrigger:where(.rt-variant-surface) {
    width: 100%;
  }

  & .rt-Flex {
    width: 100%;
  }
`;
