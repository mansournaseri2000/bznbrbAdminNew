'use client';

import { ForwardedRef, forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';

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
  store: string;
  items: { name: string; id: number }[];
  placeholder: string;
  selected?: string;
  lable?: string;
};

const SelectCompnent = forwardRef<
  React.ElementRef<typeof Select.Root>, // The correct type for the ref of Select.Root
  SelectCompnentProps
>(
  (
    { store, items, placeholder, lable, errorText, selected, ...props }: SelectCompnentProps | any,
    forwardedRef: ForwardedRef<React.ElementRef<typeof Select.Root>>
  ) => {
    /**
     * const and variables
     * _______________________________________________________________________________
     */
    const { setValue } = useFormContext();

    console.log(store, 'storestorestore');

    /**
     * template
     * _______________________________________________________________________________
     */
    return (
      <Root gap={'4px'} width={'100%'} direction={'column'} position={'relative'}>
        <Text style={{ paddingRight: '5px', color: colorPalette.gray[11] }} {...typoVariant.paragraph3}>
          {lable}
        </Text>
        <Select.Root
          ref={forwardedRef}
          size={'3'}
          value={selected}
          onValueChange={value => {
            const id = items.find((item: any) => item.name === value)?.id;
            setValue(store, id);
          }}
          {...props}
        >
          <Select.Trigger placeholder={placeholder} />
          <Select.Content position='popper' style={{ maxHeight: '200px' }}>
            <Select.Group style={{ width: '100%' }}>
              {items?.map((item: any) => (
                <Select.Item key={item.id} value={item.name}>
                  <Text {...typoVariant.body1}>{item.name}</Text>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>
        <Text
          weight={'medium'}
          color='red'
          style={{ position: 'absolute', bottom: '-19px', fontSize: '10px', right: '10px' }}
        >
          {errorText}
        </Text>
      </Root>
    );
  }
);

export default SelectCompnent;

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
