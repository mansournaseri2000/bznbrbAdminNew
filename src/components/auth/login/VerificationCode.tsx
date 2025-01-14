'use client';

import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { Spinner } from '@radix-ui/themes';
import Cookies from 'universal-cookie';
import * as Yup from 'yup';

import { useGetCheckOtp, useGetMobileRegister } from '@/api/auth';
import { Button, Flex, Grid, Text, TextField } from '@/libs/primitives';
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
  verificationCode: Yup.string().matches(persianEnglishDigitRegex, 'کد تأیید مورد نیاز است').length(VERIFICATION_CODE_LENGTH, `کد باید دقیقاً ۶ رقمی باشد`).required('کد تأیید مورد نیاز است'),
});

const VerificationCode = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const cookie = new Cookies(null, { path: '/' });
  const mobileNumber = cookie.get('mobile-number');
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

  const { checkOtpMutate, checkOtpIsPending } = useGetCheckOtp({ cookies: cookie });
  const { mobileRegisterMutate, mobileRegisterIsPending } = useGetMobileRegister({
    mobileNumber: mobileNumber,
    cookies: cookie,
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
        <Flex p={'24px 16px'} width={{ initial: '100%' }} maxWidth={{ initial: '100%', md: '500px' }} m='auto' justify={'between'} direction={'column'} gap={'40px'}>
          <Flex direction={'column'} gap={'10px'}>
            <TextField type='number' errorText={errors.verificationCode?.message} autoFocus id='verificationCode' {...register('verificationCode')} size={'3'} placeholder='کد تایید' />
            <Grid gap={'16px'}>
              <Button variant='soft' size={'4'}>
                {checkOtpIsPending ? (
                  <Spinner />
                ) : (
                  <Text {...typoVariant.body1} style={{ color: colorPalette.gray[1] }}>
                    ثبت
                  </Text>
                )}
              </Button>
              <Button
                onClick={() => {
                  if (isEnd) {
                    mobileRegisterMutate(mobileNumber);
                  }
                }}
                type='button'
                size={'4'}
                colorVariant='PINK'
              >
                <Flex gap={'5px'}>
                  {!isEnd && <Timer handleEndTime={handleEndTime} />}
                  {isEnd && !mobileRegisterIsPending && (
                    <Text {...typoVariant.body1} style={{ color: colorPalette.pink[11] }}>
                      ارسال مجدد
                    </Text>
                  )}
                  {mobileRegisterIsPending && <Spinner />}
                </Flex>
              </Button>
            </Grid>
          </Flex>
        </Flex>
      </Flex>
    </form>
  );
};

export default VerificationCode;
/**
 * styled-component
 * _______________________________________________________________________________
 */
