'use client';

import { Controller, useFormContext } from 'react-hook-form';

import { Checkbox } from '@radix-ui/themes';

import { Flex, Text } from '@/libs/primitives';

type Props = {
  store: string;
  items: {
    id: number;
    name: string;
  }[];
  isRow?: boolean;
};

const CheckboxGroup = ({ items, store, isRow = true }: Props) => {
  const { control } = useFormContext();
  console.log('ITEMS', items);
  return (
    <Controller
      name={store}
      control={control}
      defaultValue={[]} // Start with an empty array
      render={({ field }) => {
        const { value = [], onChange } = field;
        console.log('VALUE', value);
        // Fallback to an empty array if value is undefined

        // Handle checkbox change to store objects in the format { "featureId": id }
        const handleCheckboxChange = (checkboxValue: number, isChecked: boolean) => {
          if (isChecked) {
            // Add the new object to the array
            onChange([...value, { featureId: checkboxValue }]);
          } else {
            // Remove the object from the array based on featureId
            onChange(value.filter((v: { featureId: number }) => v.featureId !== checkboxValue));
          }
        };

        return (
          <Flex gap={'10px'} wrap={'wrap'} direction={isRow ? 'row' : 'column'}>
            {items.map(item => (
              <Text style={{ textWrap: 'nowrap' }} as='label' size='2' key={item.id}>
                <Flex gap='2'>
                  <Checkbox checked={value?.some((v: { featureId: number }) => v.featureId === item.id)} onCheckedChange={isChecked => handleCheckboxChange(item.id, isChecked as boolean)} />
                  <Text>{item.name}</Text>
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
