'use client';

import { Controller, useForm } from 'react-hook-form';

import { paymentSortConstants } from '@/constants/users';
import { Button, Flex, Grid, IconButton, SelectItem, SelectRoot } from '@/libs/primitives';

const TicketHero = () => {
  const methods = useForm({
    defaultValues: { paymentStatus: '', sort: '' },
  });
  const { control } = methods;
  return (
    <Grid width={'100%'} columns={'2'} style={{ gridTemplateColumns: '4fr 1fr' }}>
      <Flex gap={'4'}>
        <IconButton size={'3'}>icon</IconButton>
        <Button size={'3'}>حذف فیلتر ها</Button>
      </Flex>
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
    </Grid>
  );
};

export default TicketHero;
