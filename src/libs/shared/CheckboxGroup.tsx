'use client';

import { Controller, useFormContext } from 'react-hook-form';

import { Checkbox } from '@radix-ui/themes';

import { Flex, Text } from '@/libs/primitives';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  store: string;
  items: {
    key: string;
    value: number | string | boolean;
    id: number;
    disable?: boolean;
  }[];
  isRow?: boolean;
};

const CheckboxGroup = ({ items, store, isRow = true }: Props) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={store}
      control={control}
      render={({ field }) => {
        const { value, onChange } = field;

        const handleCheckboxChange = (checkboxValue: number | string) => {
          if (value?.includes(checkboxValue)) {
            onChange(value?.filter((v: number) => v !== checkboxValue));
          } else {
            onChange([...value, checkboxValue]);
          }
        };
        return (
          <Flex width={'100%'} gap={'10px'} wrap={'wrap'} direction={isRow ? 'row' : 'column'}>
            {items.map(item => (
              <Text
                style={{
                  textWrap: 'nowrap',
                  backgroundColor: colorPalette.gray[1],
                  padding: '12px',
                  borderRadius: '8px',
                  border: `1px solid ${colorPalette.gray[7]}`,
                }}
                as='label'
                size='2'
                key={item.id}
              >
                <Flex gap='2' style={{ cursor: 'pointer' }}>
                  <Checkbox
                    disabled={item.disable}
                    value={item.value as any}
                    checked={value?.includes(item.value)}
                    onCheckedChange={() => {
                      handleCheckboxChange(item.value as any);
                      console.log('onChange', item.value);
                    }}
                  />
                  <Text {...typoVariant.body2} style={{ color: item.disable ? colorPalette.gray[8] : colorPalette.gray[11] }}>
                    {item.key}
                  </Text>
                </Flex>
              </Text>
            ))}
          </Flex>
        );
      }}
    />
  );
};

export default CheckboxGroup;
