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
  label?: string;
  placeholder: string;
  style?: React.CSSProperties;
  selectedValue?: boolean;
};

export const SelectRoot = forwardRef<React.ElementRef<typeof Select.Root>, SelectCompnentProps>(
  ({ placeholder, errorText, label, style, selectedValue, ...props }: SelectCompnentProps | any, forwardedRef: ForwardedRef<React.ElementRef<typeof Select.Root>>) => {
    /**
     * const and variables
     * _______________________________________________________________________________
     */

    /**
     * template
     * _______________________________________________________________________________
     */
    return (
      <Root {...props} gap={'4px'} width={'100%'} direction={'column'} position={'relative'}>
        {selectedValue && (
          <Text
            style={{ paddingInline: '8px', color: colorPalette.gray[10], position: 'absolute', top: '-10px', right: 12, backgroundColor: colorPalette.gray[1], borderRadius: 4 }}
            {...typoVariant.body3}
          >
            {label}
          </Text>
        )}
        {/* <Text style={{ paddingInline: '8px', color: colorPalette.gray[12] }} {...typoVariant.body1}>
          {lable}
        </Text> */}
        <Select.Root ref={forwardedRef} size={'3'} {...props}>
          <Select.Trigger placeholder={placeholder} />
          <Select.Content position='popper' style={{ maxHeight: '200px' }}>
            <Select.Group style={style}>{props.children}</Select.Group>
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
  <Select.Item {...props} style={{ cursor: 'pointer' }}>
    <Text {...typoVariant.body1}>{children}</Text>
  </Select.Item>
);

export const SelectItem2 = ({ children, ...props }: SelectItemProps) => (
  <Select.Item {...props} style={{ padding: '13.5px 12px', border: `1px solid ${colorPalette.gray[3]}`, borderRadius: 8, cursor: 'pointer' }}>
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
    height: 48px;
    &:disabled {
      background-color: ${colorPalette.gray[5]};
      &:where(:hover) {
        span {
          color: ${colorPalette.gray[9]};
        }
      }
    }
  }
  & svg.rt-SelectIcon {
    color: ${colorPalette.pink[9]};
  }

  & .rt-Flex {
    width: 100%;
  }
`;
