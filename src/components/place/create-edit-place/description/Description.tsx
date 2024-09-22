'use client';

import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Button, Grid, Modal, Text, TextArea, TextField } from '@/libs/primitives';

import Container from '../Container';
import DescriptionCard from './DescriptionCard';

/**
 * props
 * _______________________________________________________________________________
 */

const Description = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [descriptionItems] = useState([
    {
      id: 1,
      title: 'عنوان',
      description: 'لورم اپیسوم متن ساختگی',
    },
    {
      id: 2,
      title: 'عنوان',
      description: 'لورم اپیسوم متن ساختگی',
    },
  ]);
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
      <Container height='auto' title='توضیحات'>
        <Grid height={'max-content'} gap={'16px'}>
          <Button style={{ width: 'max-content' }} variant='soft' size={'4'} onClick={() => setIsOpen(true)}>
            <Text>افزودن توضیح</Text>
          </Button>
          <Grid gap={'16px'}>
            {descriptionItems.map(item => {
              return <DescriptionCard key={item.id} />;
            })}
          </Grid>
        </Grid>
      </Container>

      {/* modal _______________________________________________________________________________*/}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Grid gap={'8px'}>
          <Controller
            name='pointName'
            control={control}
            render={({ field }) => <TextField {...field} placeholder='نام عنوان' aria-label='textFiled' />}
          />
          <Controller
            name='summary_of_the_description'
            control={control}
            render={({ field }) => <TextArea {...field} placeholder='خلاصه توضیحات' aria-label='TextArea' />}
          />
          <Grid gap={'16px'} columns={'2'}>
            <Button variant='soft' size={'4'}>
              <Text>ثبت</Text>
            </Button>
            <Button type='button' onClick={() => setIsOpen(false)} variant='solid' size={'4'}>
              <Text>انصراف</Text>
            </Button>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default Description;

/**
 * styled-component
 * _______________________________________________________________________________
 */
