'use client';

import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Button, Flex, Grid, Modal, Text, TextArea, TextField } from '@/libs/primitives';

/**
 * props
 * _______________________________________________________________________________
 */

const DescriptionCard = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState(false);
  const { control } = useFormContext();

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
    <>
      <Grid p={'16px'} gap={'16px'} style={{ border: '1px solid #000', borderRadius: '8px' }}>
        <Flex gap={'16px'}>
          <Controller
            name='pointName'
            control={control}
            render={({ field }) => <TextField {...field} placeholder='نام عنوان' aria-label='textFiled' />}
          />
          <Button onClick={() => setIsOpen(true)} variant='soft' size={'4'}>
            <Text>حذف</Text>
          </Button>
        </Flex>
        <Controller
          name='summary_of_the_description'
          control={control}
          render={({ field }) => <TextArea {...field} placeholder='خلاصه توضیحات' aria-label='TextArea' />}
        />
      </Grid>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Grid gap={'24px'}>
          <Text>آیا از خذف این ایتم اطمینان دارید؟</Text>
          <Grid gap={'16px'} columns={'2'}>
            <Button variant='soft' size={'4'}>
              <Text>حذف</Text>
            </Button>
            <Button onClick={() => setIsOpen(false)} variant='solid' size={'4'}>
              <Text>انصراف</Text>
            </Button>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default DescriptionCard;

/**
 * styled-component
 * _______________________________________________________________________________
 */
