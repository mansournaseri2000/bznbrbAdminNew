'use client';

import { useFormContext } from 'react-hook-form';

import { Select } from '@radix-ui/themes';
import { styled } from 'styled-components';

import { Flex, Text } from '@/libs/primitives';

/**
 * props
 * _______________________________________________________________________________
 */

type SelectCompnentProps = {
  errorText?: string;
  store: string;
  items: { key: string; value: string; id: number }[];
  placeholder: string;
};

const SelectCompnent = ({ store, items, placeholder, errorText }: SelectCompnentProps) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const { setValue, watch } = useFormContext();

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Root width={'100%'} position={'relative'}>
      <Select.Root
        size={'3'}
        value={watch(store)}
        onValueChange={value => setValue(store, value)} // Replace 'city' with the actual field name
      >
        <Select.Trigger placeholder={placeholder} />
        <Select.Content position='popper' style={{ maxHeight: '200px' }}>
          <Select.Group style={{ width: '100%' }}>
            {items.map(item => (
              <Select.Item key={item.id} value={item.key}>
                {item.value}
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
};

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
