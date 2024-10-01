'use client';

import { Controller, useFormContext, useWatch } from 'react-hook-form';

import dynamic from 'next/dynamic';

import { Grid, Select, TextField } from '@/libs/primitives';
import { Province } from '@/types/place/place-constant';

import Container from '../Container';

const PlaceMap = dynamic(() => import('./PlaceMap'), { ssr: false });

/**
 * props
 * _______________________________________________________________________________
 */
type Props = {
  province: Province[];
};

const GeographicalLocationRoot = ({ province }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const provinceId = useWatch({ name: 'provinceId' });
  const cityID = useWatch({ name: 'cityID' });
  const lat = useWatch({ name: 'lat' });
  const lng = useWatch({ name: 'lng' });
  const { control } = useFormContext();
  const city = province.filter(item => item.id === provinceId)[0]?.Cities;

  /**
   * useEffect
   * _______________________________________________________________________________
   */

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
    <Container height='auto' title='موقعیت جغرافیایی'>
      <Grid gap={'16px'} height={'max-content'}>
        <Grid columns={'3'} gap={'20px'}>
          <Select errorText={''} selected={province.find(item => item.id === provinceId)?.name} items={province} placeholder={'استان'} store='provinceId' lable='استان' />
          <Select errorText={''} selected={city?.find(item => item.id === cityID)?.name} items={city} placeholder={'شهر'} store='cityID' lable='شهر' />
          <Controller name='area' control={control} render={({ field }) => <TextField style={{ marginTop: '15px' }} {...field} placeholder='محله' aria-label='textFiled' />} />
        </Grid>
        <Grid columns={'3'} gap={'20px'}>
          <Controller name='tell' control={control} render={({ field }) => <TextField {...field} placeholder='تلفن' aria-label='textFiled' />} />
          <Controller name='website' control={control} render={({ field }) => <TextField {...field} placeholder='وب سایت' aria-label='textFiled' />} />
          <Controller name='email' control={control} render={({ field }) => <TextField {...field} placeholder='ایمیل' aria-label='textFiled' />} />
        </Grid>
        <Controller name='address' control={control} render={({ field }) => <TextField {...field} placeholder='آدرس متنی' aria-label='textFiled' />} />
        <Grid gap={'24px'} columns={'2'}>
          <Controller name='lng' control={control} render={({ field }) => <TextField type='number' {...field} placeholder='طول جغرافیایی' aria-label='textFiled' />} />
          <Controller name='lat' control={control} render={({ field }) => <TextField {...field} type='number' placeholder='عرض جغرافیایی' aria-label='textFiled' />} />
        </Grid>
        <PlaceMap location={[Number(lat), Number(lng)]} />
      </Grid>
    </Container>
  );
};

export default GeographicalLocationRoot;

/**
 * styled-component
 * _______________________________________________________________________________
 */
