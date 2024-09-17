'use client';

import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { yupResolver } from '@hookform/resolvers/yup';
import { Spinner } from '@radix-ui/themes';
import { useMutation } from '@tanstack/react-query';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import * as Yup from 'yup';

import { checkOtp, mobileRegister } from '@/api/auth';
import { Button, Flex, Grid, Text, TextField } from '@/libs/primitives';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import AuthLogo from '@/public/image/auth-log.png';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import Timer from './Timer';

/**
 * yup validation
 * _______________________________________________________________________________
 */
interface IFormInput {
  verificationCode: string;
}

const VERIFICATION_CODE_LENGTH = 6;
const persianEnglishDigitRegex = /^[0-9۰-۹]+$/;
const validationSchema = Yup.object().shape({
  verificationCode: Yup.string()
    .matches(persianEnglishDigitRegex, 'کد تأیید مورد نیاز است')
    .length(VERIFICATION_CODE_LENGTH, `کد باید دقیقاً ۶ رقمی باشد`)
    .required('کد تأیید مورد نیاز است'),
});

const VerificationCode = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const cookie = new Cookies(null, { path: '/' });
  const mobileNumber = cookie.get('mobile-number');
  const { push } = useRouter();
  const [isEnd, setIsEnd] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */
  const { mutate: checkOtpMutate, isPending: checkOtpPending } = useMutation({
    mutationFn: async ({ mobile, otp }: { mobile: string; otp: string }) =>
      checkOtp({ mobile: mobile, otp: otp }),
    onSuccess: async data => {
      if (data.status === true) {
        cookie.set('token', data.data);
        cookie.remove('mobile-number');
        ToastSuccess('شما با موفقیت وارد پنل شدید');
        push('/?page=1');
      } else {
        ToastError('لطفا بعد از چند دقیقه دوباره امتحان نمایید');
      }
    },
    onError: err => {
      console.log(err);
    },
  });

  const { mutate: mobileRegisterMutate, isPending: mobileRegisterPending } = useMutation({
    mutationFn: async () => mobileRegister({ mobile: mobileNumber }),
    onSuccess: async () => {
      ToastSuccess('مجددا کد برای شما ارسال شد');
    },
    onError: () => {
      ToastError('لطفا بعد از چند دقیقه دوباره امتحان نمایید');
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = data => {
    checkOtpMutate({ mobile: mobileNumber, otp: data.verificationCode });
  };

  const handleEndTime = (value: boolean) => {
    setIsEnd(value);
  };

  /**
   * template
   * _______________________________________________________________________________
   */

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
            width={160}
            height={116}
          />
          <Flex direction={'column'} gap={'10px'}>
            <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11] }}>
              برای ورود به حساب کاربری شماره تماس خود را وارد کنید.{' '}
            </Text>
            <TextField
              type='number'
              errorText={errors.verificationCode?.message}
              autoFocus
              id='verificationCode'
              {...register('verificationCode')}
              size={'3'}
              placeholder='کد تایید'
            />
            <Grid gap={'16px'}>
              <Button variant='soft' size={'4'}>
                {checkOtpPending ? (
                  <Spinner />
                ) : (
                  <Text {...typoVariant.body1} style={{ color: colorPalette.gray[1] }}>
                    ثبت و ادامه
                  </Text>
                )}
              </Button>
              <Button
                onClick={() => {
                  if (isEnd) {
                    mobileRegisterMutate();
                  }
                }}
                type='button'
                size={'4'}
                variant='solid'
              >
                <Flex gap={'5px'}>
                  {!isEnd && <Timer handleEndTime={handleEndTime} />}
                  {isEnd && !mobileRegisterPending && (
                    <Text {...typoVariant.body1} style={{ color: colorPalette.turquoise[11] }}>
                      ارسال مجدد
                    </Text>
                  )}
                  {mobileRegisterPending && <Spinner />}
                </Flex>
              </Button>
            </Grid>
          </Flex>
        </Container>
      </Flex>
    </form>
  );
};

export default VerificationCode;
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
