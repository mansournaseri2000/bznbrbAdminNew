'use client';

import { Controller, useForm } from 'react-hook-form';

import { tagsPaymentOptions } from '@/constants/additional-detail';
import { Button, Grid, SelectItem, SelectRoot, TextField } from '@/libs/primitives';

const TagsHero = () => {
  const methods = useForm({ defaultValues: { search: '', paymentStatus: '' } });
  const { control, watch } = methods;
  console.log('Watch', watch());
  return (
    <Grid width={'100%'} columns={'3'} gapX={'4'} style={{ gridTemplateColumns: '0.5fr 2fr 1fr' }}>
      <Button size={'3'}>افزودن تگ</Button>
      <Controller name='search' control={control} render={({ field }) => <TextField {...field} placeholder='جستجوی تگ' />} />
      <Controller
        name='paymentStatus'
        control={control}
        render={({ field }) => (
          <SelectRoot
            {...field}
            placeholder='وضعیت پرداخت'
            size={'3'}
            value={String(field.value)}
            onValueChange={val => {
              field.onChange(val);
            }}
          >
            {tagsPaymentOptions.map(item => (
              <SelectItem key={item.id} value={String(item.id)}>
                {item.name}
              </SelectItem>
            ))}
          </SelectRoot>
        )}
      />
    </Grid>
  );
};

export default TagsHero;
