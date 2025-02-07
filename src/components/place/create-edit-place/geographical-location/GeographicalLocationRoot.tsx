'use client';

import { Controller, useFormContext, useWatch } from 'react-hook-form';

import dynamic from 'next/dynamic';

import { Grid, SelectItem, SelectRoot, TextField } from '@/libs/primitives';
import { Province } from '@/types/place/place-constant';

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
  const { control, setValue } = useFormContext();
  const provinceId = useWatch({ name: 'provinceId' });
  const cityID = useWatch({ name: 'cityID' });
  const lat = useWatch({ name: 'lat' });
  const lng = useWatch({ name: 'lng' });
  const city = province.filter(item => item.id === Number(provinceId))[0]?.Cities;

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
    <Grid gap={'16px'} height={'max-content'}>
      <Grid columns={'3'} gap={'20px'}>
        <Controller
          name='provinceId'
          control={control}
          render={({ field }) => (
            <SelectRoot
              {...field}
              value={String(provinceId)}
              onValueChange={val => {
                field.onChange(val);
                setValue('cityID', '');
              }}
              placeholder={'استان'}
            >
              {province.map(item => {
                return (
                  <SelectItem key={item.id} value={String(item.id)}>
                    {item.name}
                  </SelectItem>
                );
              })}
            </SelectRoot>
          )}
        />
        <Controller
          name='cityID'
          control={control}
          render={({ field }) => (
            <SelectRoot
              {...field}
              disabled={!Boolean(provinceId)}
              value={String(cityID)}
              onValueChange={val => {
                field.onChange(val);
              }}
              placeholder={'شهرستان'}
            >
              {city?.map(item => {
                return (
                  <SelectItem key={item.id} value={String(item.id)}>
                    {item.name}
                  </SelectItem>
                );
              })}
            </SelectRoot>
          )}
        />

        <Controller name='area' control={control} render={({ field }) => <TextField style={{ marginTop: '-7px' }} {...field} placeholder='شهر' aria-label='textFiled' />} />
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
      <PlaceMap location={Boolean(lat) || Boolean(lng) ? [Number(lat), Number(lng)] : [0, 0]} />
    </Grid>
  );
};

export default GeographicalLocationRoot;

/**
 * styled-component
 * _______________________________________________________________________________
 */
