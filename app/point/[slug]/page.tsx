'use client';

import React from 'react';
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import Image, { StaticImageData } from 'next/image';

import { Button, Flex, Grid, Select, Slider, TextArea, TextField } from '@/libs/primitives';
import { ImagePicker } from '@/libs/shared';

import image1 from '../../../public/image/popup-image.png';

type fomrData = {
  pointName: string;
  description_of_the_point: string;
  summary_of_the_description: string;
  province: string;
  rait: number[];
  images: { path: string | StaticImageData; id: number }[];
  uploadImage: File | null;
};

const PointPage = ({ params }: { params: { slug: string } }) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const methods = useForm<fomrData>({
    defaultValues: {
      pointName: '',
      description_of_the_point: '',
      summary_of_the_description: '',
      province: '',
      rait: [0],
      images: [
        {
          path: image1,
          id: 2450,
        },
        {
          path: image1,
          id: 1560,
        },
        {
          path: image1,
          id: 2650,
        },
      ],
      uploadImage: null,
    },
  });
  console.log(params, 'params');
  const cityItem = [
    {
      key: 'تبریز',
      value: 'تبریز',
      id: 1,
    },
    {
      key: 'تهران',
      value: 'تهران',
      id: 2,
    },
  ];
  const { control, handleSubmit, watch } = methods;

  const onSubmit: SubmitHandler<fomrData> = data => {
    console.log(data);
  };

  console.log(watch());

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Flex p={'48px'} height={'100vh'} justify={'center'} align={'center'} direction={'column'} gap={'10px'}>
      <FormProvider {...methods}>
        <form
          style={{ border: '1px solid #00000037', width: '100%', maxWidth: '1000px', borderRadius: '12px' }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Flex
            gap={'20px'}
            direction={'column'}
            p={'16px'}
            width={'100%'}
            minHeight={'600px'}
            style={{
              borderRadius: '8px',
            }}
          >
            <Controller
              name='pointName'
              control={control}
              render={({ field }) => <TextField {...field} placeholder='نام عنوان' aria-label='textFiled' />}
            />
            <Controller
              name='description_of_the_point'
              control={control}
              render={({ field }) => <TextArea {...field} placeholder='توضیحات نقطه' aria-label='TextArea' />}
            />
            <Controller
              name='summary_of_the_description'
              control={control}
              render={({ field }) => (
                <TextArea {...field} placeholder='خلاصه توضیحات' aria-label='TextArea' />
              )}
            />
            <Flex gap={'20px'}>
              <Select errorText={''} items={cityItem} placeholder={'استان'} store='province' />
              <Select errorText={''} items={cityItem} placeholder={'استان'} store='province' />
            </Flex>
            <Flex gap={'20px'}>
              <Controller
                name='rait'
                control={control}
                defaultValue={[0]} // Initialize with an array if the slider expects an array
                render={({ field }) => (
                  <Slider
                    {...field}
                    min={0}
                    max={5}
                    value={Array.isArray(field.value) ? field.value : [field.value]} // Ensure the value is an array
                    onValueChange={value => field.onChange(value)}
                    aria-label='Overall Rating'
                  />
                )}
              />
              <Controller
                name='rait'
                control={control}
                defaultValue={[0]} // Initialize with an array if the slider expects an array
                render={({ field }) => (
                  <Slider
                    {...field}
                    min={0}
                    max={5}
                    value={Array.isArray(field.value) ? field.value : [field.value]} // Ensure the value is an array
                    onValueChange={value => field.onChange(value)}
                    aria-label='Overall Rating'
                  />
                )}
              />
            </Flex>
            <Grid gap={'16px'}>
              <Flex>
                <ImagePicker name='uploadImage' errorText=''>
                  <Button>اپلود عکس</Button>
                </ImagePicker>
              </Flex>
              <Flex gap={'20px'}>
                {watch('images').map(item => {
                  return (
                    <Flex direction={'column'} align={'center'} gap={'10px'} key={item.id} justify={'center'}>
                      <Image width={60} height={60} alt='' src={item.path} />
                      <Flex gap={'4px'}>
                        <Button>edit</Button>
                        <Button>remove</Button>
                      </Flex>
                    </Flex>
                  );
                })}
              </Flex>
            </Grid>
            <Button size={'4'} variant='outline'>
              ثبت تغییرات
            </Button>
          </Flex>
        </form>
      </FormProvider>
    </Flex>
  );
};

export default PointPage;