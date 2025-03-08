'use client';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { useRouter } from '@bprogress/next';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import Cookies from 'universal-cookie';
import * as yup from 'yup';

import { addRoutingGuid } from '@/api/place';
import { errorMessage, permissionMessage, successMessage } from '@/constants/status-message';
import { Flex, SelectItem, SelectRoot, TextArea } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { addRoutingGuidBody } from '@/types/place/place';

/**
 * props
 * _______________________________________________________________________________
 */

const travelTypesItems = [
  {
    name: 'تاکسی',
    id: 'taxi',
  },
  {
    name: 'مترو',
    id: 'subway',
  },
  {
    name: 'اتوبوس',
    id: 'bus',
  },
  {
    name: 'هواپیما',
    id: 'airplane',
  },
  {
    name: 'خودرو',
    id: 'car',
  },
  {
    name: 'پیاده‌روی',
    id: 'hike',
  },
  {
    name: 'کشتی',
    id: 'ship',
  },
  {
    name: 'قطار',
    id: 'train',
  },
];

type Props = {
  handleClose?: () => void;
  placeId: number;
};

const validationSchema = yup.object({
  travelType: yup.string().required('نوع وسیله سفر را وارد کنید'),
  routeDescription: yup
    .string()
    .min(40, 'توضیحات باید حداقل 40 کاراکتر باشد')
    .max(250, 'توضیحات باید حداکثر 250 کاراکتر باشد')
    .matches(/^[^A-Za-z]*$/, 'توضیحات نباید شامل حروف انگلیسی باشد')
    .required('شرح مسیر را وارد کنید'),
});
type FormValues = {
  travelType: string;
  routeDescription: string;
};

const AddRouteGuide = ({ handleClose, placeId }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const cookie = new Cookies();
  const { push } = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    mode: 'onTouched', // Trigger validation on blur
  });

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */

  const handleCloseButton = () => {
    if (handleClose) {
      handleClose();
    }
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async (params: addRoutingGuidBody) => addRoutingGuid(params),
    onSuccess: async () => {
      ToastSuccess(successMessage);

      handleCloseButton();
    },
    onError: err => {
      if (err.message.includes('401')) {
        ToastError(permissionMessage);
        cookie.set('falbackurl', `place/${placeId}?view=common`, {
          path: '/',
        });
        push(`/auth/login/receiveCode`);
      } else {
        ToastError(errorMessage);
      }
    },
  });

  const onSubmit: SubmitHandler<FormValues> = data => {
    mutate({
      description: data.routeDescription,
      placesId: placeId,
      travelMode: data.travelType.toLocaleUpperCase(),
      usersId: 0,
    });
  };

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction={'column'} gap={'16px'} width={'100%'} height={{ initial: 'calc(100vh - 130px)', lg: 'calc(100% - 74px)' }} p={'16px'}>
        <Flex direction={'column'} gap={'24px'}>
          <Controller
            name='travelType'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                value={field.value}
                onValueChange={val => {
                  field.onChange(val);
                }}
                placeholder='نوع وسیله سفر'
                errorText={errors.travelType?.message}
                // lable='استان'
              >
                {travelTypesItems?.map(item => {
                  return (
                    <SelectItem key={item.name} value={String(item.id)}>
                      {item.name}
                    </SelectItem>
                  );
                })}
              </SelectRoot>
            )}
          />
          <Controller
            name='routeDescription'
            control={control}
            render={({ field }) => (
              <TextArea
                placeholder='شرح مسیر'
                // isShowCarecter
                // numValue={Boolean(watch('routeDescription')) ? watch('routeDescription').length : 0}
                maxLength={250}
                {...field}
                errorText={errors.routeDescription?.message}
              />
            )}
          />
        </Flex>
      </Flex>
      <ModalAction closeButtonText='بازگشت' submitButtonText='ارسال اطلاعات' isLoading={isPending} onCloseButton={handleCloseButton} />
    </form>
  );
};

export default AddRouteGuide;

/**
 * styled-component
 * _______________________________________________________________________________
 */
