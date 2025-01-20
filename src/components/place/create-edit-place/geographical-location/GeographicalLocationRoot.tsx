'use client';

// import { useEffect, useState } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

import dynamic from 'next/dynamic';

import { Grid, SelectItem, SelectRoot, TextField } from '@/libs/primitives';
// import { Divider } from '@/libs/shared';
// import { colorPalette } from '@/theme';
// import { typoVariant } from '@/theme/typo-variants';
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

  // const [state, setState] = useState<string>(watch('vehicleOptions')[0]?.key);
  // const [index, setIndex] = useState(0);

  // const vehicleOptions = useWatch({ control, name: 'vehicleOptions' }) || [];

  // const watchedContent = useWatch({
  //   control,
  //   name: `vehicleOptions[${index}].content`,
  //   defaultValue: vehicleOptions[index]?.content || '',
  // });

  // const [content, setContent] = useState(watchedContent); 

  /**
   * useEffect
   * _______________________________________________________________________________
   */
  // useEffect(() => {
  //   setContent(watch(`vehicleOptions[${index}].content`)); 
  // }, [index]);
  /**
   * hooks and methods 
   * _______________________________________________________________________________
   */
  // const handleButtonNames = (value: string) => {
  //   switch (value) {
  //     case 'taxi':
  //       return 'تاکسی';
  //     case 'car':
  //       return 'ماشین شخصی';
  //     case 'train':
  //       return 'قطار';
  //     case 'subway':
  //       return 'مترو';
  //     case 'ship':
  //       return 'کشتی';
  //     case 'airplane':
  //       return 'هواپیما';
  //     case 'hike':
  //       return 'پیاده روی';
  //     case 'bus':
  //       return 'اتوبوس';
  //   }
  // };

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Grid gap={'16px'} height={'max-content'}>
      {/*
       ***
       TOP section for form elements
       _______________________________________________________________________________
       ***
       */}
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
      {/*
       ***
       MAP
       _______________________________________________________________________________
       ***
       */}
      <PlaceMap location={Boolean(lat) || Boolean(lng) ? [Number(lat), Number(lng)] : [0, 0]} />
      {/* <Divider style={{ color: colorPalette.gray[6], marginTop: 12 }} /> */}
      {/*
       ***
        BOTTOM section for navigation Vehicles

      
       _______________________________________________________________________________
       ***
       */}
      {/* <Flex direction={'column'} gap={'28px'}>
        <Text {...typoVariant.title2} style={{ color: colorPalette.gray[12], fontWeight: 700 }}>
          چجوری بریم
        </Text>
        <Flex width={'100%'} direction={'column'} gap={'5'}>
          <Flex width={'100%'} gap={'5'} align={'center'} style={{ overflow: 'auto' }}>
            {vehicleOptions?.map((item: any, ind: number) => (
              <Button
                variant={item.key === state ? 'soft' : 'solid'}
                type='button'
                key={item.key}
                size={'3'}
                style={{ paddingInline: 16 }}
                onClick={() => {
                  setState(item.key as any);
                  setIndex(ind);
                }}
              >
                <Text {...typoVariant.body1}>{handleButtonNames(item.key)}</Text>
              </Button>
            ))}
          </Flex>

          <Controller
            name={`vehicleOptions[${index}].content`}
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                value={content}
                onChange={e => {
                  field.onChange(e.target.value);
                  setContent(e.target.value);
                }}
                placeholder={`شرح مسیر ${handleButtonNames(state)}`}
                rows={5}
              />
            )}
          />
        </Flex>
      </Flex> */}
    </Grid>
  );
};

export default GeographicalLocationRoot;

/**
 * styled-component
 * _______________________________________________________________________________
 */
