import React from 'react';

import ProvinceDetailCard from '@/components/develop/confirmations/province-detail-card/ProvinceDetailCard';
import { adsCardOptions } from '@/constants/ads';
import { Grid } from '@/libs/primitives';

export default function Ads() {
  return (
    <Grid width={'100%'} columns={'2'} gap={'5'}>
      {adsCardOptions.map(item => (
        <ProvinceDetailCard key={item.id} {...(item as any)} type='province' />
      ))}
    </Grid>
  );
}
