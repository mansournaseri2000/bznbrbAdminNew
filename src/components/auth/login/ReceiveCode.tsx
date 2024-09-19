'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import Image from 'next/image';

import { yupResolver } from '@hookform/resolvers/yup';
import { Spinner } from '@radix-ui/themes';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import * as yup from 'yup';

import { useGetMobileRegister } from '@/api/auth';
import { Button, Flex, Text, TextField } from '@/libs/primitives';
import AuthLogo from '@/public/image/auth-log.png';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

/**
 * yup validation
 * _______________________________________________________________________________
 */
const iranianMobileNumberRegex = /^(\+98|0|۰)?[9۹][0-9۰-۹]{9}$/;
const validationSchema = yup.object().shape({
  mobileNumber: yup
    .string()
    .matches(iranianMobileNumberRegex, 'شماره موبایل نادرست است')
    .required('لطفا این قسمت را خالی نگذارید'),
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
    console.log(data);
    mobileRegisterMutate(data.mobileNumber);
  };

  /**
   * template
   * _______________________________________________________________________________
   */

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex width={'100%'} direction={'column'} minHeight={'90vh'}>
        <Container
          p={'24px 16px'}
          width={{ initial: '100%' }}
          maxWidth={{ initial: '100%', md: '500px' }}
          m='auto'
          justify={'between'}
          direction={'column'}
          gap={'40px'}
        >
          <Image
            style={{ margin: 'auto', objectFit: 'scale-down' }}
            src={AuthLogo}
            alt='auth-logo-image'
            width={150}
            height={110}
          />
          <Flex direction={'column'} gap={'12px'}>
            <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11] }}>
              برای ورود به حساب کاربری شماره تماس خود را وارد کنید.
            </Text>
            <TextField
              type='number'
              errorText={errors.mobileNumber?.message}
              autoFocus
              id='mobileNumber'
              {...register('mobileNumber')}
              size={'3'}
              placeholder='شماره تماس'
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
        </Container>
      </Flex>
    </form>
  );
};

export default ReceiveCode;
/**
 * styled-component
 * _______________________________________________________________________________
 */

const Container = styled(Flex)`
  @media (min-width: 1024px) {
    border: 1px solid ${colorPalette.gray[7]};
    border-radius: 8px;
  }
`;
