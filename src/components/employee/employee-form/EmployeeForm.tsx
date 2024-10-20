import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Box, Button, Flex, Grid, TextField } from '@/libs/primitives';

type EmployeeFormProps = {
  onClose: () => void;
};

const EmployeeForm = (props: EmployeeFormProps) => {
  const methods = useForm({
    defaultValues: { name: '', last_name: '', nationalId: '', birthday: '', father_name: '', mobile: '', shaba_number: '', address: '' },
  });
  const { control, watch } = methods;
  console.log('Watch', watch());
  return (
    <Flex width={'100%'} direction={'column'} gap={'4'} align={'center'}>
      <Box width={'120px'} height={'120px'} style={{ border: '1px solid', borderRadius: '50%' }}>
        photo
      </Box>
      <Grid width={'100%'} columns={'2'} gapX={'5'} gapY={'4'}>
        <Controller name='name' control={control} render={({ field }) => <TextField {...field} placeholder='نام' />} />

        <Controller name='last_name' control={control} render={({ field }) => <TextField {...field} placeholder='نام خانوادگی' />} />

        <Controller name='nationalId' control={control} render={({ field }) => <TextField {...field} placeholder='کد ملی' />} />

        <Controller name='birthday' control={control} render={({ field }) => <TextField {...field} placeholder='تاریخ تولد' />} />

        <Controller name='father_name' control={control} render={({ field }) => <TextField {...field} placeholder='نام پدر' />} />

        <Controller name='mobile' control={control} render={({ field }) => <TextField {...field} placeholder='شماره تماس' />} />
      </Grid>
      <Controller name='shaba_number' control={control} render={({ field }) => <TextField {...field} placeholder='شماره شبا' />} />
      <Controller name='address' control={control} render={({ field }) => <TextField {...field} placeholder='آدرس منزل' />} />

      <Flex width={'100%'} gap={'4'}>
        <Button size={'3'}>ثبت</Button>
        <Button size={'3'} onClick={props.onClose}>
          لغو
        </Button>
      </Flex>
    </Flex>
  );
};

export default EmployeeForm;
