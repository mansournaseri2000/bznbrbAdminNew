'use client';

import { Controller, useFormContext } from 'react-hook-form';

import { Flex, Grid, Slider, Text } from '@/libs/primitives';

/**
 * props
 * _______________________________________________________________________________
 */
type Props = {
  lable: string;
  store: string;
};
const CustomSlider = ({ lable, store }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
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
    <Grid gap={'16px'}>
      <Text>{lable}</Text>
      <Flex gap={'16px'} align={'center'}>
        <Text>{`${watch('rait')}%`}</Text>
        <Controller
          name={store}
          control={control}
          defaultValue={[0]} // Initialize with an array if the slider expects an array
          render={({ field }) => (
            <Slider
              style={{ cursor: 'pointer' }}
              mt={'10px'}
              {...field}
              min={0}
              max={100}
              value={Array.isArray(field.value) ? field.value : [field.value]} // Ensure the value is an array
              onValueChange={value => field.onChange(value)}
              aria-label='Overall Rating'
            />
          )}
        />
      </Flex>
    </Grid>
  );
};

export default CustomSlider;

/**
 * styled-component
 * _______________________________________________________________________________
 */
