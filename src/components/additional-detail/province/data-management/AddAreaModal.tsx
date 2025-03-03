import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useParams } from 'next/navigation';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createAreaDetail } from '@/api/additional-detail';
import { Grid, TextArea, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { CreateAreaBody } from '@/types/additional-detail/additional-detail';

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<{ isOpen: boolean; key: 'add' }>>;
};

const AddAreaModal = ({ setIsOpen }: Props) => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const params = useParams();
  const provinceId = Number(params.slug[2]);
  const methods = useForm<CreateAreaBody>({ defaultValues: { type: 'PROVINCE', titleItem: '', descriptionItem: '', id: provinceId } });
  const { control, watch } = methods;
  const queryClient = useQueryClient();

  /*
   *** services_________________________________________________________________________________________________________________________________________________________________
   */
  const { mutate: createAreaMutate, isPending: createAreaPending } = useMutation({
    mutationFn: async () => await createAreaDetail(watch()),
    onSuccess: data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['province-area'] });
        ToastSuccess('جاذبه‌ی مورد نظر با موفقیت افزوده شد');
        setIsOpen({ key: 'add', isOpen: true });
      } else {
        ToastError('خطایی رخ داده است');
      }
    },
  });

  /*
   *** JSX_________________________________________________________________________________________________________________________________________________________________
   */
  return (
    <>
      <Grid width={'100%'} p={'4'} mt={'12px'} gapY={'14px'}>
        <Controller name='titleItem' control={control} render={({ field }) => <TextField {...field} label='عنوان جاذبه' placeholder='عنوان جاذبه' selectedValue={Boolean(field.value)} />} />
        <Controller
          name='descriptionItem'
          control={control}
          render={({ field }) => <TextArea {...field} label='توضیح جاذبه' placeholder='توضیح جاذبه' selectedValue={Boolean(field.value)} rows={5} />}
        />
      </Grid>
      <ModalAction
        submitButtonText='ثبت '
        closeButtonText='لغو'
        onCloseButton={() => setIsOpen({ isOpen: false, key: 'add' })}
        onSubmit={() => createAreaMutate()}
        isLoading={createAreaPending}
        disabled={watch('titleItem').length === 0 && watch('descriptionItem').length === 0}
      />
    </>
  );
};

export default AddAreaModal;
