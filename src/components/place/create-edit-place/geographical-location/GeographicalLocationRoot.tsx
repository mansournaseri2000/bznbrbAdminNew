'use client';

import { useEffect, useState } from 'react';
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
  constant: any;
};

const GeographicalLocationRoot = ({ province, constant }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [town, setTown] = useState([]);
  const { control, setValue, watch } = useFormContext();
  const provinceId = useWatch({ name: 'provinceId' });
  const cityID = useWatch({ name: 'cityID' });
  const lat = useWatch({ name: 'lat' });
  const lng = useWatch({ name: 'lng' });
  const city = province.filter(item => item.id === Number(provinceId))[0]?.Cities;

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  useEffect(() => {
    const cityID = watch('cityID');
    const provinceID = watch('provinceId');

    if (cityID && provinceID) {
      const province = constant.provinces.find((item: any) => item.id === Number(provinceID));

      if (province) {
        const city = province.Cities?.find((item: any) => item.id === Number(cityID));

        if (city) {
          setTown(city.Town ?? []); // Ensure it's an array
        }
      }
    }
  }, [watch('cityID'), watch('provinceId')]);

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
              label='استان'
              placeholder={'استان'}
              selectedValue={Boolean(field.value)}
              value={String(provinceId)}
              onValueChange={val => {
                field.onChange(val);
                setValue('cityID', '');
              }}
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
              label='شهرستان'
              placeholder={'شهرستان'}
              selectedValue={Boolean(field.value)}
              disabled={!Boolean(provinceId)}
              value={String(cityID)}
              onValueChange={val => {
                field.onChange(val);
              }}
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
        <Controller
          name='townId'
          control={control}
          render={({ field }) => (
            <SelectRoot
              {...field}
              label='شهر'
              placeholder={'شهر'}
              selectedValue={Boolean(field.value)}
              disabled={!Boolean(watch('provinceId')) || !Boolean(watch('cityID'))}
              value={String(watch('townId'))}
              onValueChange={val => {
                field.onChange(val);
              }}
            >
              {town?.map((item: any) => {
                return (
                  <SelectItem key={item.id} value={String(item.id)}>
                    {item.name}
                  </SelectItem>
                );
              })}
            </SelectRoot>
          )}
        />
      </Grid>
      <Grid columns={'3'} gap={'20px'}>
        <Controller name='tell' control={control} render={({ field }) => <TextField {...field} label='تلفن' placeholder='تلفن' selectedValue={Boolean(field.value)} aria-label='textFiled' />} />
        <Controller
          name='website'
          control={control}
          render={({ field }) => <TextField {...field} label='وب سایت' placeholder='وب سایت' selectedValue={Boolean(field.value)} aria-label='textFiled' />}
        />
        <Controller name='email' control={control} render={({ field }) => <TextField {...field} label='ایمیل' placeholder='ایمیل' selectedValue={Boolean(field.value)} aria-label='textFiled' />} />
      </Grid>
      <Controller
        name='address'
        control={control}
        render={({ field }) => <TextField {...field} label='آدرس متنی' placeholder='آدرس متنی' selectedValue={Boolean(field.value)} aria-label='textFiled' />}
      />
      <Grid gap={'24px'} columns={'2'}>
        <Controller
          name='lng'
          control={control}
          render={({ field }) => <TextField type='number' {...field} label='طول جغرافیایی' placeholder='طول جغرافیایی' selectedValue={Boolean(field.value)} aria-label='textFiled' />}
        />
        <Controller
          name='lat'
          control={control}
          render={({ field }) => <TextField {...field} type='number' label='عرض جغرافیایی' placeholder='عرض جغرافیایی' selectedValue={Boolean(field.value)} aria-label='textFiled' />}
        />
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
