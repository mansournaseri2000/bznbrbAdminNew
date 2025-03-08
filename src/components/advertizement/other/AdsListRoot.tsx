'use client';

import React, { useState } from 'react';

import { useParams } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { createAd, deleteAd, editAds, getAdsHolders } from '@/api/advertizement';
import { Button, Flex, Grid, Heading, Modal, Text } from '@/libs/primitives';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { AdsHoldersResponse, CreateAdBody, EditADsBody } from '@/types/advertizement/advertizement';

import AdsDetailCard from '../AdsDetailCard';
import AdsModal from '../modal/AdsModal';

type ModalStateType = {
  isOpen: boolean;
  key: 'create' | 'edit' | 'delete';
};

const AdsListRoot = () => {
  /**
   * Const and Variables
   * _______________________________________________________________________________
   */
  const params = useParams();
  const pageType = params.slug[0];
  const handleId = Number(params.slug[1]);
  const handleType = params.slug[0] === 'province_places' || params.slug[0] === 'province' ? 'parent' : undefined;
  const queryClient = useQueryClient();
  const [selectedItem, setSelectedItem] = useState<AdsHoldersResponse | null>(null);
  const [modalState, setModalState] = useState<ModalStateType>({ isOpen: false, key: 'create' });

  /**
   * Services
   * _______________________________________________________________________________
   */

  // *****  GET Service *****
  const { data, isLoading, isError, isFetching } = useQuery({ queryKey: ['ads-page-type'], queryFn: async () => await getAdsHolders(pageType, handleId, handleType) });

  // *****  POST & DELETE Service *****

  const { mutate: createAdMutate, isPending: createAdPending } = useMutation({
    mutationFn: async (body: CreateAdBody) => await createAd(body),
    onSuccess: data => {
      if (data.status) {
        queryClient.invalidateQueries({ queryKey: ['ads-page-type'] });
        ToastSuccess('آگهی مورد نظر با موفقیت ایجاد شد');
        setModalState({ ...modalState, isOpen: false });
      } else {
        ToastError('مشکلی پیش آمده است. لطفا مجددا تلاش کنید');
      }
    },
  });

  const { mutate: editAdsMutate, isPending: editAdsPending } = useMutation({
    mutationFn: async (body: EditADsBody) => await editAds(body),
    onSuccess: data => {
      if (data.status) {
        queryClient.invalidateQueries({ queryKey: ['ads-page-type'] });
        ToastSuccess('آگهی مورد نظر با موفقیت ویرایش شد');
        setModalState({ ...modalState, isOpen: false });
      } else {
        ToastError('مشکلی پیش آمده است. لطفا مجددا تلاش کنید');
      }
    },
  });

  const { mutate: deleteAdsMutate, isPending: deleteAdsPending } = useMutation({
    mutationFn: async () => await deleteAd({ id: selectedItem?.id as any, type: 'ADS' }),
    onSuccess: data => {
      if (data.status) {
        queryClient.invalidateQueries({ queryKey: ['ads-page-type'] });
        ToastSuccess('آگهی مورد نظر با موفقیت حذف شد');
        setModalState({ ...modalState, isOpen: false });
      } else {
        ToastError('مشکلی پیش آمده است. لطفا مجددا تلاش کنید');
      }
    },
  });

  /**
   * Hooks and Methods
   * _______________________________________________________________________________
   */

  const handleCreateAndEditCard = (key: 'create' | 'edit') => {
    setModalState({ key: key, isOpen: true });
  };

  const handleDeleteAds = () => {
    setModalState({ isOpen: true, key: 'delete' });
  };

  const handleSubmit = (obj: any) => {
    const payload = {
      alt: obj.alt,
      description: obj.description,
      file: obj.imageFile,
      type: 'ADS',
      sponsor: obj.sponsor,
      website: obj.website,
      socialMedia: obj.socialMedia,
      summery: obj.summery,
      page: obj.page,
      holder: obj.holder,
      ...(obj.page === 'category' ? { categoryId: obj.categoryId } : { provinceId: obj.provinceId }),
    };

    if (modalState.key === 'edit' && selectedItem) {
      editAdsMutate({
        id: selectedItem?.id,
        type: 'ADS',
        alt: payload.alt,
        description: payload.description,
        summery: payload.summery,
        socialMedia: payload.socialMedia,
        sponsor: payload.sponsor,
        website: payload.website,
      });
    } else if (modalState.key === 'create') {
      createAdMutate(payload as any);
    }
  };

  /**
   * Loading and Error
   * _______________________________________________________________________________
   */
  if (isLoading || isFetching)
    return (
      <Flex width={'100%'} height={'90vh'} justify={'center'} align={'center'}>
        <Spinner style={{ scale: 2.5 }} />
      </Flex>
    );

  if (!data || isError) return ToastError('مشکلی پیش آمده . لطفا دوباره تلاش نمایید');

  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <>
      <Grid gapY={'5'}>
        {data.length === 0 ? (
          <Flex width={'100%'} mt={'4'}>
            <Heading as='h4' size={'4'} style={{ color: colorPalette.gray[11] }}>
              در حال حاضر آگهی برای نمایش وجود ندارد.
            </Heading>
          </Flex>
        ) : (
          data.map(
            (item, index) => item && <AdsDetailCard onClick={() => setSelectedItem(item)} onDelete={() => handleDeleteAds()} onCreateOrEdit={handleCreateAndEditCard} key={index} data={item as any} />
          )
        )}
      </Grid>
      {/*
       * Modal
       * _______________________________________________________________________________
       */}
      <Modal isOpen={modalState.isOpen} onClose={() => setModalState({ ...modalState, isOpen: false })}>
        {modalState.key !== 'delete' && (
          <>
            <ModalHeader title={modalState.key === 'create' ? 'ثبت آگهی' : 'ویرایش آگهی'} handleClose={() => setModalState({ ...modalState, isOpen: false })} />
            <AdsModal
              data={selectedItem as any}
              type={modalState.key}
              isOpen={modalState.isOpen}
              onClose={() => setModalState({ ...modalState, isOpen: false })}
              onSubmit={handleSubmit}
              isLoading={modalState.key === 'create' ? createAdPending : editAdsPending}
            />
          </>
        )}
        {modalState.key === 'delete' && (
          <Grid gapY={'24px'} p={'5'}>
            <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
              آیا از حذف آگهی <span style={{ fontWeight: 'bold', color: 'red' }}>{selectedItem?.position}</span> اطمینان دارید؟
            </Text>
            <Grid gap={'10px'} columns={'2'}>
              <Button variant='soft' size={'4'} onClick={() => deleteAdsMutate()}>
                <Text {...typoVariant.body3}>{deleteAdsPending ? <Spinner /> : 'بله'}</Text>
              </Button>
              <Button type='button' onClick={() => setModalState({ ...modalState, isOpen: false })} variant='solid' size={'4'}>
                <Text {...typoVariant.body3}>خیر</Text>
              </Button>
            </Grid>
          </Grid>
        )}
      </Modal>
    </>
  );
};

export default AdsListRoot;
