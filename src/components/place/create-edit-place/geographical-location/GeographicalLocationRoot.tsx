'use client';

import { Controller, useFormContext } from 'react-hook-form';

import dynamic from 'next/dynamic';

import { Grid, Select, TextField } from '@/libs/primitives';
import { Province } from '@/types/place';

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

  const { control, watch } = useFormContext();
  const city = province.filter(item => item.id === watch('provinceId'))[0]?.Cities;

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
          <Select
            errorText={''}
            selected={province.find(item => item.id === watch('provinceId'))?.name}
            items={province}
            placeholder={'استان'}
            store='provinceId'
            lable='استان'
          />
          <Select
            errorText={''}
            selected={city?.find(item => item.id === watch('cityID'))?.name}
            items={city}
            placeholder={'شهر'}
            store='cityID'
            lable='شهر'
          />
          <Controller
            name='area'
            control={control}
            render={({ field }) => (
              <TextField
                disabled
                style={{ marginTop: '15px' }}
                {...field}
                placeholder='محله'
                aria-label='textFiled'
              />
            )}
          />
        </Grid>
        <Grid columns={'3'} gap={'20px'}>
          <Controller
            name='tell'
            control={control}
            render={({ field }) => <TextField {...field} placeholder='تلفن' aria-label='textFiled' />}
          />
          <Controller
            name='website'
            control={control}
            render={({ field }) => (
              <TextField disabled {...field} placeholder='وب سایت' aria-label='textFiled' />
            )}
          />
          <Controller
            name='email'
            control={control}
            render={({ field }) => <TextField {...field} placeholder='ایمیل' aria-label='textFiled' />}
          />
        </Grid>
        <Controller
          name='address'
          control={control}
          render={({ field }) => <TextField {...field} placeholder='آدرس متنی' aria-label='textFiled' />}
        />
        <Grid gap={'24px'} columns={'2'}>
          <Controller
            name='lng'
            control={control}
            render={({ field }) => (
              <TextField {...field} placeholder='طول جغرافیایی' aria-label='textFiled' />
            )}
          />
          <Controller
            name='lat'
            control={control}
            render={({ field }) => (
              <TextField {...field} placeholder='عرض جغرافیایی' aria-label='textFiled' />
            )}
          />
        </Grid>
        <PlaceMap location={[Number(watch('lat')), Number(watch('lng'))]} />
      </Grid>
    </Container>
  );
};

export default GeographicalLocationRoot;

/**
 * styled-component
 * _______________________________________________________________________________
 */
