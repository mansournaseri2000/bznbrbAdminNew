'use client';

import React, { useState } from 'react';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';

import { acceptPlaceImproveContent, deletePlaceImproveContent } from '@/api/confirmations';
import { Button, Flex, Grid, IconButton, Modal, Text } from '@/libs/primitives';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { Check, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { PlaceImproveContentDataDetail } from '@/types/data-management/point';

type CardProps = PlaceImproveContentDataDetail & {
  onSubmit?: () => void;
  onDelete?: () => void;
  index: number;
  type: 'improve_data_management' | 'point_detail';
};

type modalStateType = {
  isOpen: boolean;
  key: 'publish' | 'remove';
};

const DataCard: React.FC<CardProps> = (props: CardProps) => {
  /*
   *** Variables and Constant _________________________________________________________________________________________________________________________________________________________________
   */
  const { name, placeProvinceName, cityName, provinceName, phone, website, email, type, index, onDelete, address, id, placeId, placeName, placeCityName } = props;
  const [modalState, setModalState] = useState<modalStateType>({
    isOpen: false,
    key: 'remove',
  });

  const queryClient = useQueryClient();

  /* 
    ****
    Services
    ****_____________________________________________________________________________
   */

  const { mutate: publishMutate, isPending: publishPending } = useMutation({
    mutationFn: async () => acceptPlaceImproveContent(id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['improve-data'] });
        ToastSuccess(' آیتم مورد نظر با موفقیت منتشر شد');
        setModalState({ ...modalState, isOpen: false });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  const { mutate: deleteMutate, isPending: deletePending } = useMutation({
    mutationFn: async () => deletePlaceImproveContent(id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['improve-data'] });
        ToastSuccess(' آیتم مورد نظر با موفقیت حذف شد');
        setModalState({ ...modalState, isOpen: false });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });
  /* 
    ****
    Methods
    ****_____________________________________________________________________________
   */

  const handleRedirect = () => {
    window.open(`https://bezanimbiroon.ir/place/${placeId}?view=common`, '_blank');
  };

  return (
    <>
      <Grid
        width={'100%'}
        gapY={'5'}
        p={'4'}
        style={{
          borderRadius: 8,
          backgroundColor: index % 2 === 0 ? colorPalette.blue[2] : colorPalette.pink[2],
          border: index % 2 === 0 ? `1px solid ${colorPalette.blue[6]}` : `1px solid ${colorPalette.pink[6]}`,
        }}
      >
        {type === 'improve_data_management' && (
          <Flex width={'100%'} justify={'between'} align={'center'}>
            <Flex direction={'column'} gap={'2'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
                {placeName}
              </Text>
              <Text {...typoVariant.description2} style={{ color: colorPalette.gray[11] }}>
                {`${placeProvinceName} / ${placeCityName}`}
              </Text>
            </Flex>
            <Button colorVariant={index % 2 === 0 ? 'BLUE' : 'PINK'} size={'3'} onClick={handleRedirect}>
              <Text {...typoVariant.body3}>مشاهده نقطه</Text>
            </Button>
          </Flex>
        )}
        <GridWrapper type={type}>
          <Grid width={'100%'} gapY={'5'}>
            <Grid width={'3'} columns={'3'} gapY={'5'}>
              <Item label='نام نقطه' value={name} />
              <Item label='شماره تماس' value={phone} />
              <Item label='وب سایت' value={website} />
              <Item label='ایمیل' value={email} />
              <Item label='استان' value={provinceName} />
              <Item label='شهر' value={cityName} />
            </Grid>
            <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11] }}>
              {address}
            </Text>
          </Grid>
          {type === 'point_detail' && (
            <IconButton size={'3'} colorVariant='PINK' style={{ borderRadius: 12 }} onClick={onDelete} disabled>
              <Trash />
            </IconButton>
          )}
        </GridWrapper>

        {type === 'improve_data_management' && (
          <Flex width={'100%'} align={'center'} justify={'end'} gap={'2'}>
            <Button size={'3'} colorVariant={index % 2 === 0 ? 'BLUE' : 'PINK'} variant='soft' style={{ padding: '7px 18px' }} onClick={() => setModalState({ isOpen: true, key: 'publish' })}>
              <Flex align={'center'} gap={'2'}>
                <Check />
                <Text {...typoVariant.body3}>تایید</Text>
              </Flex>
            </Button>
            <IconButton size={'3'} colorVariant='PINK' style={{ borderRadius: 12 }} onClick={() => setModalState({ isOpen: true, key: 'remove' })} disabled>
              <Trash />
            </IconButton>
          </Flex>
        )}
      </Grid>
      <Modal isOpen={modalState.isOpen} onClose={() => setModalState({ ...modalState, isOpen: false })}>
        {modalState.key === 'publish' && (
          <Grid gapY={'24px'} p={'5'}>
            <Text>آیا از انتشار این آیتم اطمینان دارید؟ </Text>
            <Grid gap={'10px'} columns={'2'}>
              <Button onClick={() => publishMutate()} variant='soft' size={'4'}>
                <Text {...typoVariant.body3}>{publishPending ? <Spinner /> : 'بله'}</Text>
              </Button>
              <Button type='button' onClick={() => setModalState({ ...modalState, isOpen: false })} variant='solid' size={'4'}>
                <Text {...typoVariant.body3}>خیر</Text>
              </Button>
            </Grid>
          </Grid>
        )}
        {modalState.key === 'remove' && (
          <Grid gapY={'24px'} p={'5'}>
            <Text>آیا از حذف این آیتم اطمینان دارید؟ </Text>
            <Grid gap={'10px'} columns={'2'}>
              <Button onClick={() => deleteMutate()} variant='soft' size={'4'}>
                <Text {...typoVariant.body3}>{deletePending ? <Spinner /> : 'بله'}</Text>
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

export default DataCard;

const Item = ({ label, value }: { label: string; value: string }) => (
  <Flex align={'center'} gap={'2'}>
    <Text {...typoVariant.body2} style={{ color: colorPalette.gray[10] }}>
      {label}
    </Text>
    <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
      {value ? value : 'ــ'}
    </Text>
  </Flex>
);

const GridWrapper = styled(Grid)<{ type: 'improve_data_management' | 'point_detail' }>`
  grid-template-columns: ${({ type }) => (type === 'improve_data_management' ? '1fr' : '95% 5%')};
  column-gap: ${({ type }) => (type === 'improve_data_management' ? '0px' : '16px')};
`;
