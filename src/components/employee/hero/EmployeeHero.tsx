'use client';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button, Flex, Modal, TextField } from '@/libs/primitives';

import EmployeeForm from '../employee-form/EmployeeForm';

const EmployeeHero = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const methods = useForm({
    defaultValues: { search: '' },
  });
  const { control, watch } = methods;
  console.log('watch', watch());
  return (
    <>
      <Flex width={'100%'} gap={'4'} align={'center'}>
        <Button size={'3'} onClick={() => setIsOpen(true)}>
          افزودن پرسنل
        </Button>
        <Controller name='search' control={control} render={({ field }) => <TextField {...field} placeholder='جستجوی نام پرسنل، شماره تماس، ایمیل' />} />
      </Flex>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <EmployeeForm onClose={() => setIsOpen(false)} />
      </Modal>
    </>
  );
};

export default EmployeeHero;
