import { useRouter } from 'next/navigation';

import { useMutation } from '@tanstack/react-query';
import Cookies from 'universal-cookie';

import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { ApiManager } from '@/libs/utils/axios.config';

import { ApiData } from './types';

/**
 * mobile-register services
 * _______________________________________________________________________________
 */
export const mobileRegister = async (params: { mobile: string }) => {
  // const res = await ApiManager.post<ApiData<{ token: string }>>('auth/login', params);
  const res = await ApiManager.post<any>('auth/login', params);

  return res.data;
};

export const useGetMobileRegister = ({ mobileNumber, cookies }: { mobileNumber: string; cookies: Cookies }) => {
  const { push } = useRouter();
  const { mutate: mobileRegisterMutate, isPending: mobileRegisterIsPending } = useMutation({
    mutationFn: async (val: string) => mobileRegister({ mobile: val }),
    onSuccess: async data => {
      console.log('Data', data);
      if (data.data.ttl < 120) {
        ToastError('زمان باقیمانده از درخواست قبلی باقیست دقایقی دیگر تلاش نمایید');
      } else {
        cookies.set('mobile-number', mobileNumber);
        push('/auth/login/verificationCode');
      }
    },
    onError: err => {
      ToastError('مشکلی پیش آمده لطفا دوباره امتحان نمایید');
      console.log(err, 'mobile-register services');
    },
  });

  return { mobileRegisterMutate, mobileRegisterIsPending };
};

/**
 * check-otp services
 * _______________________________________________________________________________
 */
export const checkOtp = async (params: { mobile: string; otp: string }) => {
  const res = await ApiManager.post<ApiData<{ data: string }>>('auth/check/otp', params);

  return res.data;
};

export const useGetCheckOtp = ({ cookies }: { cookies: Cookies }) => {
  const { push } = useRouter();
  const { mutate: checkOtpMutate, isPending: checkOtpIsPending } = useMutation({
    mutationFn: async ({ mobile, otp }: { mobile: string; otp: string }) => checkOtp({ mobile: mobile, otp: otp }),
    onSuccess: async data => {
      if (data.status === true) {
        cookies.set('token', data.data, {
          path: '/',
          maxAge: 365 * 50,
          secure: true,
          partitioned: true,
          expires: new Date(new Date().getTime() + 60 * 60 * 24 * 1000),
          sameSite: 'strict',
        });
        cookies.remove('mobile-number');
        ToastSuccess('شما با موفقیت وارد پنل شدید');
        push('/plans');
      } else {
        ToastError('لطفا بعد از چند دقیقه دوباره امتحان نمایید');
      }
    },
    onError: err => {
      console.log(err, 'check-otp services');
    },
  });

  return { checkOtpMutate, checkOtpIsPending };
};
