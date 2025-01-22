'use client';

import React, { useState } from 'react';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { publishTravelSuggestion, removeTravelSuggestion } from '@/api/confirmations';
import { Button, Flex, Grid, IconButton, Modal, Text } from '@/libs/primitives';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { Airplan, Bus, Car, Check, Hike, Ship, Subway, Taxi, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { FilteredSuggestionsDetail } from '@/types/confirmations/path-guid';

type CardProps = FilteredSuggestionsDetail & {
  onPublished?: () => void;
  onDelete?: () => void;
  index: number;
};

type modalStateType = {
  isOpen: boolean;
  key: 'publish' | 'remove';
};

const PathGuidCard: React.FC<CardProps> = (props: CardProps) => {
  /* 
    ****
    const and variables
    ****_____________________________________________________________________________
   */
  const { placeName, placeProvince, placeCity, index, description, travelMode, id } = props;

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
    mutationFn: async () => publishTravelSuggestion(id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['travel-suggestion'] });
        ToastSuccess('راهنمای مسیر مورد نظر با موفقیت منتشر شد');
        setModalState({ ...modalState, isOpen: false });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  const { mutate: deleteMutate, isPending: deletePending } = useMutation({
    mutationFn: async () => removeTravelSuggestion(id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['travel-suggestion'] });
        ToastSuccess('راهنمای مسیر مورد نظر با موفقیت حذف شد');
        setModalState({ ...modalState, isOpen: false });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  return (
    <>
      <Grid
        width={'100%'}
        gapY={'4'}
        p={'4'}
        style={{
          borderRadius: 8,
          backgroundColor: index % 2 === 0 ? colorPalette.blue[2] : colorPalette.pink[2],
          border: index % 2 === 0 ? `1px solid ${colorPalette.blue[6]}` : `1px solid ${colorPalette.pink[6]}`,
        }}
      >
        <Flex align={'center'} gap={'10px'}>
          <Flex justify={'center'} align={'center'} style={{ width: 32, height: 32, backgroundColor: index % 2 === 0 ? colorPalette.blue[9] : colorPalette.pink[9], borderRadius: '100%' }}>
            {travelMode === 'TAXI' ? (
              <Taxi />
            ) : travelMode === 'BUS' ? (
              <Bus />
            ) : travelMode === 'TRAIN' ? (
              <Subway />
            ) : travelMode === 'AIRPLANE' ? (
              <Airplan />
            ) : travelMode === 'CAR' ? (
              <Car />
            ) : travelMode === 'HIKE' ? (
              <Hike />
            ) : (
              travelMode === 'SHIP' && <Ship />
            )}
          </Flex>
          <Flex direction={'column'} gap={'2'}>
            <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
              {placeName ? placeName : '__'}
            </Text>
            <Text {...typoVariant.description2} style={{ color: colorPalette.gray[11] }}>
              {placeProvince ? placeProvince : '__'} / {placeCity ? placeCity : '__'}
            </Text>
          </Flex>
        </Flex>
        <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11] }}>
          {description}
        </Text>
        <Flex width={'100%'} align={'center'} justify={'end'}>
          <Flex align={'center'} gap={'2'}>
            <Button size={'3'} colorVariant={index % 2 === 0 ? 'BLUE' : 'PINK'} variant='soft' onClick={() => setModalState({ isOpen: true, key: 'publish' })}>
              <Flex align={'center'} gap={'2'}>
                <Check />
                <Text {...typoVariant.body1}>تایید</Text>
              </Flex>
            </Button>
            <IconButton size={'3'} colorVariant='PINK' style={{ borderRadius: 12 }} onClick={() => setModalState({ isOpen: true, key: 'remove' })} disabled>
              <Trash />
            </IconButton>
          </Flex>
        </Flex>
      </Grid>
      <Modal isOpen={modalState.isOpen} onClose={() => setModalState({ ...modalState, isOpen: false })}>
        {modalState.key === 'publish' && (
          <Grid gapY={'24px'} p={'5'}>
            <Text>آیا از انتشار این راهنمای مسیر اطمینان دارید؟ </Text>
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
            <Text>آیا از حذف این راهنمای مسیر اطمینان دارید؟ </Text>
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

export default PathGuidCard;
