'use client';

import { Controller, useForm } from 'react-hook-form';

import { employeeSortOptions } from '@/constants/employee';
import { Flex, Grid, SelectItem, SelectRoot, TextField } from '@/libs/primitives';

const ActionListHero = () => {
  const methods = useForm({
    defaultValues: { search: '', sort: '' },
  });
  const { control, watch } = methods;
  console.log('watch', watch());
  return (
    <Grid width={'100%'} columns={'4'} gapX={'4'} style={{ gridTemplateColumns: '2fr 0.5fr 0.5fr 1fr' }}>
      <Controller name='search' control={control} render={({ field }) => <TextField {...field} placeholder='جستجوی عنوان' />} />
      <Flex justify={'center'} align={'center'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
        از تاریخ
      </Flex>
      <Flex justify={'center'} align={'center'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
        تا تاریخ
      </Flex>
      <Controller
        name='sort'
        control={control}
        render={({ field }) => (
          <SelectRoot
            {...field}
            placeholder='مرتب سازی بر اساس'
            size={'3'}
            value={String(field.value)}
            onValueChange={val => {
              field.onChange(val);
            }}
          >
            {employeeSortOptions.map(item => (
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

export default ActionListHero;
