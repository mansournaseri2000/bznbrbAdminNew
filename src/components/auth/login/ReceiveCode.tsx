'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { Spinner } from '@radix-ui/themes';
import Cookies from 'universal-cookie';
import * as yup from 'yup';

import { useGetMobileRegister } from '@/api/auth';
import { Box, Button, Flex, Text, TextField } from '@/libs/primitives';
import { AuthLog } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

/**
 * yup validation
 * _______________________________________________________________________________
 */
const iranianMobileNumberRegex = /^(\+98|0|۰)?[9۹][0-9۰-۹]{9}$/;
const validationSchema = yup.object().shape({
  mobileNumber: yup.string().matches(iranianMobileNumberRegex, 'شماره موبایل نادرست است').required('لطفا این قسمت را خالی نگذارید'),
});

/**
 * props
 * _______________________________________________________________________________
 */
interface LoginFormInputs {
  mobileNumber: string;
}

const ReceiveCode = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const cookie = new Cookies(null, { path: '/' });
  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const { mobileRegisterMutate, mobileRegisterIsPending } = useGetMobileRegister({
    mobileNumber: watch('mobileNumber'),
    cookies: cookie,
  });
  const onSubmit = (data: LoginFormInputs) => {
    mobileRegisterMutate(data.mobileNumber);
  };

  /**
   * template
   * _______________________________________________________________________________
   */

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex width={'100%'} direction={'column'} minHeight={'100vh'}>
        <Flex p={'24px 16px'} width={'100%'} maxWidth={'500px'} m='auto' justify={'between'} direction={'column'} gap={'40px'}>
          <Flex direction={'column'} gap={'5'} width={'100%'}>
            <Box mx={'auto'}>
              <AuthLog width={'164px'} height={'124px'} />
            </Box>
            <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11] }}>
              برای ورود به حساب کاربری شماره موبایل خود را وارد کنید.
            </Text>
            <Flex width={'100%'} direction={'column'} gap={'12px'}>
              <TextField
                type='number'
                errorText={errors.mobileNumber?.message}
                autoFocus
                id='mobileNumber'
                {...register('mobileNumber')}
                size={'3'}
                placeholder='شماره تماس'
                onInput={e => {
                  const target = e.target as HTMLInputElement;
                  if (target.value.length > 11) {
                    target.value = target.value.slice(0, 11); // Limit to 12 characters
                  }
                }}
              />
              <Button variant='soft' disabled={errors.mobileNumber ? true : false} type='submit' size={'4'}>
                {mobileRegisterIsPending ? (
                  <Spinner />
                ) : (
                  <Text {...typoVariant.body1} style={{ color: colorPalette.gray[1] }}>
                    ورود
                  </Text>
                )}
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </form>
  );
};

export default ReceiveCode;
/**
 * styled-component
 * _______________________________________________________________________________
 */
