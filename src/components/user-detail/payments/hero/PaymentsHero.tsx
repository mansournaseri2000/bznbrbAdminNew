'use client';

import { Controller, useForm } from 'react-hook-form';

import { paymentSortConstants, paymentStatusOptions } from '@/constants/users';
import { Flex, Grid, SelectItem, SelectRoot, TextField } from '@/libs/primitives';

const PaymentsHero = () => {
  const methods = useForm({
    defaultValues: { paymentStatus: '', sort: '' },
  });
  const { control } = methods;
  return (
    <Grid width={'100%'} columns={'2'} gapX={'4'}>
      <TextField placeholder='جستجوی شماره رسید' />
      <Flex width={'100%'} gap={'4'}>
        <Controller
          name='paymentStatus'
          control={control}
          render={({ field }) => (
            <SelectRoot
              {...field}
              placeholder='وضعیت پرداخت'
              value={String(field.value)}
              onValueChange={val => {
                field.onChange(val);
              }}
            >
              {paymentStatusOptions.map(item => (
                <SelectItem key={item.id} value={String(item.id)}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectRoot>
          )}
        />
        <Controller
          name='paymentStatus'
          control={control}
          render={({ field }) => (
            <SelectRoot
              {...field}
              placeholder='مرتب سازی بر اساس'
              value={String(field.value)}
              onValueChange={val => {
                field.onChange(val);
              }}
            >
              {paymentSortConstants.map(item => (
                <SelectItem key={item.id} value={String(item.id)} style={{ paddingBottom: '8px 12px', borderBottom: '1px solid #D4D4D4' }}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectRoot>
          )}
        />
      </Flex>
    </Grid>
  );
};

export default PaymentsHero;
