import React, { useEffect } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { editAreaDetails } from '@/api/additional-detail';
import { Grid, TextArea, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { EditAreaBody } from '@/types/additional-detail/additional-detail';

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<{ isOpen: boolean; key: 'edit' }>>;
  currentItem: EditAreaBody | null;
};

const EditAreaModal = ({ setIsOpen, currentItem }: Props) => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const { control, setValue } = useFormContext();
  const titleItem = useWatch({ name: 'titleItem', defaultValue: '' });
  const descriptionItem = useWatch({ name: 'descriptionItem', defaultValue: '' });
  const queryClient = useQueryClient();

  /*
   *** services_________________________________________________________________________________________________________________________________________________________________
   */
  const { mutate: editAreaMutate, isPending: editAreaPending } = useMutation({
    mutationFn: async () => await editAreaDetails({ titleItem: titleItem, descriptionItem: descriptionItem, id: currentItem?.id || 0 }),
    onSuccess: data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['province-area'] });
        ToastSuccess('جاذبه‌ی مورد نظر با موفقیت ویرایش شد');
        setIsOpen({ key: 'edit', isOpen: true });
      } else {
        ToastError('خطایی رخ داده است');
      }
    },
  });

  //   /**
  //    * Hooks and Methods
  //    * _______________________________________________________________________________
  //    */
  useEffect(() => {
    if (currentItem) {
      setValue('titleItem', currentItem.titleItem);
      setValue('descriptionItem', currentItem.descriptionItem);
    }
  }, [currentItem, setValue]);

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
        onCloseButton={() => setIsOpen({ isOpen: false, key: 'edit' })}
        isLoading={editAreaPending}
        onSubmit={() => editAreaMutate()}
        disabled={titleItem.trim().length === 0 || descriptionItem.trim().length === 0}
      />
    </>
  );
};

export default EditAreaModal;
