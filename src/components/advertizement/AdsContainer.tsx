'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { Button, Flex, Grid, Text } from '@/libs/primitives';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { AdsListResponse } from '@/types/ads/ads';

import AdAdd from './AdAdd';
import AdCard from './AdCard';

type Props = {
  data: AdsListResponse[];
};

const AdsContainer = ({ data }: Props) => {
  const methods = useForm({ defaultValues: { text: '', description: '' } });
  const router = useRouter();

  return (
    <FormProvider {...methods}>
      <Grid width={'100%'} gapY={'5'}>
        {data.map(item => (item.pic && item.url && item.altText && item.description ? <AdCard key={item.id} {...item} /> : <AdAdd key={item.id} id={item.id} />))}

        <Flex p={'4'} gap={'5'} style={{ border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8, backgroundColor: colorPalette.gray[2] }}>
          <Button size={'3'} variant='soft' style={{ padding: '13.5px 48.5px' }}>
            <Text {...typoVariant.body1}>ثبت</Text>
          </Button>
          <Button type='button' size={'3'} colorVariant='PINK' onClick={() => router.back()} style={{ padding: '13.5px 48.5px' }}>
            <Text {...typoVariant.body1}>لغو</Text>
          </Button>
        </Flex>
      </Grid>
    </FormProvider>
  );
};

export default AdsContainer;
