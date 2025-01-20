'use client';

// import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as Yup from 'yup';

// import { saveTrip } from '@/api/trip';
// import { errorMessage, successMessage } from '@/constants/status-message';
import { Flex, Grid, Text, TextArea } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
// import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { TripResponse } from '@/types/plans/trip';

type Props = {
  handleClose: () => void;
  data: TripResponse;
  pointID: number;
  dayID: number;
};

// Define form data type
interface FormData {
  comment: string;
}

// Define Yup validation schema for the form
const validationSchema = Yup.object().shape({
  comment: Yup.string()
    .matches(/^[^A-Za-z]*$/, 'یادداشت نباید شامل حروف انگلیسی باشد')
    .required('لطفا یادداشت خود را وارد کنید'),
});

const AddComment = ({ handleClose, data, dayID, pointID }: Props) => {
  //   const queryClient = useQueryClient();
  //   const [tripData, setTripData] = useState<TripResponse>(data);

  //   const { mutate, isPending } = useMutation({
  //     mutationFn: async (params: TripResponse) => saveTrip(params),
  //     onSuccess: async data => {
  //       if (data.statusCode === 500) {
  //         ToastError(errorMessage);
  //       } else {
  //         ToastSuccess(successMessage);
  //         queryClient.invalidateQueries({ queryKey: ['trip-list'] });
  //         queryClient.invalidateQueries({ queryKey: ['trip'] });
  //         handleClose();
  //       }
  //     },
  //     onError: (err: any) => {
  //       ToastError(errorMessage);
  //       console.log(err, 'Error in saving trip');
  //     },
  //   });

  const {
    control,
    // handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      comment: data.trip.data.days?.find(day => day.day_id === dayID)?.commonView?.find(view => view.point_id === pointID)?.comment || '',
    },
  });

  //   const onSubmit = (formData: FormData) => {
  //     const updatedTripData = {
  //       ...tripData,
  //       days: tripData.days.map(day => {
  //         if (day.day_id === dayID) {
  //           return {
  //             ...day,
  //             commonView: day.commonView.map(view => {
  //               if (view.point_id === pointID) {
  //                 return {
  //                   ...view,
  //                   comment: formData.comment,
  //                 };
  //               }
  //               return view;
  //             }),
  //           };
  //         }
  //         return day;
  //       }),
  //     };
  //     setTripData(updatedTripData);
  //     mutate(updatedTripData);
  //   };

  return (
    <Grid>
      <Flex direction={'column'} p={'16px'} gap={'8px'}>
        <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
          متن یادداشت خود را برای نقطه مورد نظرتان وارد کنید
        </Text>

        <Controller control={control} name='comment' render={({ field }) => <TextArea errorText={errors.comment?.message} {...field} placeholder='متن یادداشت' style={{ minHeight: '140px' }} />} />
      </Flex>
      <ModalAction closeButtonText={'لغو'} submitButtonText='ثبت' onCloseButton={handleClose} />

      {/* 
      onSubmit={handleSubmit(onSubmit)} 
      isLoading={isPending}
      */}
    </Grid>
  );
};

export default AddComment;
