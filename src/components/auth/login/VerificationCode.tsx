'use client';

import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { Spinner } from '@radix-ui/themes';
import Cookies from 'universal-cookie';
import * as Yup from 'yup';

import { useGetCheckOtp, useGetMobileRegister } from '@/api/auth';
import { useCountdown } from '@/libs/hooks';
import { Box, Button, Flex, Grid, Text, TextField } from '@/libs/primitives';
import { AuthLog } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

// import Timer from './Timer';

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
  // const [isEnd, setIsEnd] = useState(false);
  const { minutes, seconds, isEnded, reset } = useCountdown(120000);

  const {
    watch,
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

  console.log('Cookie', cookie);

  const onSubmit: SubmitHandler<IFormInput> = data => {
    checkOtpMutate({ mobile: mobileNumber, otp: data.verificationCode });
    reset();
  };

  // const handleEndTime = (value: boolean) => {
  //   setIsEnd(value);
  // };

  console.log('Mobile', mobileNumber);

  /**
   * template
   * _______________________________________________________________________________
   */

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Flex width={'100%'} direction={'column'} minHeight={'90vh'}>
        <Flex p={'24px 16px'} width={{ initial: '100%' }} maxWidth={'500px'} m='auto' justify={'between'} direction={'column'} gap={'40px'}>
          <Flex direction={'column'} gap={'5'} width={'100%'}>
            <Box mx={'auto'}>
              <AuthLog width={'164px'} height={'124px'} />
            </Box>
            <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11] }}>
              {`کد تایید ارسال شده به شماره موبایل ${Boolean(mobileNumber) ? mobileNumber : ''} را وارد کنید.`}
            </Text>
          </Flex>
          <Flex direction={'column'} gap={'10px'}>
            <TextField type='number' errorText={errors.verificationCode?.message} autoFocus id='verificationCode' {...register('verificationCode')} size={'3'} placeholder='کد تایید' />
            <Grid gap={'16px'} columns={'2'}>
              <Button variant='soft' disabled={String(watch('verificationCode')).length < 6} size={'4'}>
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
                  if (isEnded) {
                    mobileRegisterMutate(mobileNumber);
                    reset();
                  }
                }}
                type='button'
                size={'4'}
                colorVariant='PINK'
              >
                <Flex gap={'5px'}>
                  {/* {!isEnded && <Timer handleEndTime={handleEndTime} />} */}
                  {!isEnded && (
                    <Text
                      {...typoVariant.body2}
                      style={{
                        color: colorPalette.pink[11],
                        paddingRight: '10px',
                      }}
                    >{`${minutes}:${seconds}`}</Text>
                  )}
                  {isEnded && !mobileRegisterIsPending && (
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
