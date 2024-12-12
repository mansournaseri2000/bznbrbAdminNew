import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Checkbox, Grid, TextArea } from '@/libs/primitives';

const TextContent = () => {
  const methods = useFormContext();
  const { control } = methods;
  return (
    <Grid width={'100%'} gapY={'5'}>
      <Controller name='articleSummery' control={control} render={({ field }) => <TextArea {...field} placeholder='خلاصه مقاله' rows={4} />} />
      <Controller name='summery' control={control} render={({ field }) => <TextArea {...field} placeholder='summery' rows={4} />} />
      <Controller name='showOnPage' control={control} render={({ field }) => <Checkbox {...field} size={'2'} label='نمایش در صفحه اصلی' />} />
    </Grid>
  );
};

export default TextContent;
