'use client';

import { useState } from 'react';
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
    {
      name: 'پیاده روی',
      id: 1,
      store: 'hike',
    },
    {
      name: 'تاکسی',
      id: 2,
      store: 'taxi',
    },

    {
      name: 'اتوبوس',
      id: 3,
      store: 'bus',
    },
    {
      name: 'مترو',
      id: 4,
      store: 'subway',
    },
    {
      name: 'ماشین شخصی',
      id: 5,
      store: 'car',
    },
    {
      name: 'قطار',
      id: 6,
      store: 'train',
    },
    {
      name: 'هواپیما',
      id: 7,
      store: 'airplane',
    },
  ];
  const [selectedItem, setSelectedItem] = useState(navigationItems[0]);
  const [key, setKey] = useState(selectedItem.store);
  const { control, watch } = useFormContext();

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
    <Container height='auto' title='چجوری برم ؟'>
      <Grid height={'max-content'} gap={'16px'}>
        <Flex gap={'24px'}>
          {navigationItems.map(item => {
            return (
              <Button
                key={''}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setSelectedItem(item);
                  setKey(item.store);
                }}
                size={'4'}
                variant={selectedItem.id === item.id ? 'soft' : 'solid'}
              >
                <Text>{item.name}</Text>
              </Button>
            );
          })}
        </Flex>
        <Controller
          name={key}
          control={control}
          render={({ field }) => (
            <TextArea
              {...field}
              value={watch(selectedItem.store)}
              placeholder={selectedItem.name}
              aria-label='TextArea'
            />
          )}
        />
      </Grid>
    </Container>
  );
};

export default Navigation;

/**
 * styled-component
 * _______________________________________________________________________________
 */
