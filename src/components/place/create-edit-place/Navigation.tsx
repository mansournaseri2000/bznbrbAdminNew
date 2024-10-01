'use client';

import { SetStateAction, useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Button, Flex, Grid, Text, TextArea } from '@/libs/primitives';

import Container from './Container';

/**
 * props
 * _______________________________________________________________________________
 */

const Navigation = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const navigationItems = [
    { name: 'پیاده روی', id: 1, store: 'hike' },
    { name: 'تاکسی', id: 2, store: 'taxi' },
    { name: 'اتوبوس', id: 3, store: 'bus' },
    { name: 'مترو', id: 4, store: 'subway' },
    { name: 'ماشین شخصی', id: 5, store: 'car' },
    { name: 'قطار', id: 6, store: 'train' },
    { name: 'هواپیما', id: 7, store: 'airplane' },
  ];

  const [selectedItem, setSelectedItem] = useState(navigationItems[0]);
  const [textValue, setTextValue] = useState('');
  const { control, getValues, setValue } = useFormContext();

  useEffect(() => {
    const currentTabValue = getValues(selectedItem.store);
    setTextValue(currentTabValue || '');
  }, [selectedItem, getValues]);

  const handleTabChange = (item: SetStateAction<{ name: string; id: number; store: string }>) => {
    setValue(selectedItem.store, textValue);
    setSelectedItem(item);
  };

  const handleInputChange = (e: { target: { value: SetStateAction<string> } }) => {
    setTextValue(e.target.value);
    setValue(selectedItem.store, textValue);
  };

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Container height='auto' title='چجوری برم ؟'>
      <Grid height={'max-content'} gap={'16px'}>
        <Flex gap={'24px'}>
          {navigationItems.map(item => (
            <Button type='button' key={item.id} style={{ cursor: 'pointer' }} onClick={() => handleTabChange(item)} size={'4'} variant={selectedItem.id === item.id ? 'soft' : 'solid'}>
              <Text>{item.name}</Text>
            </Button>
          ))}
        </Flex>
        <Controller
          name={selectedItem.store}
          control={control}
          defaultValue={textValue}
          render={({ field }) => <TextArea {...field} value={textValue} onChange={handleInputChange} placeholder={selectedItem.name} aria-label='TextArea' />}
        />
      </Grid>
    </Container>
  );
};

export default Navigation;
