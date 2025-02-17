'use client';

import React, { useState } from 'react';

import { Grid, Spinner } from '@radix-ui/themes';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { deletePlaceImproveContent } from '@/api/confirmations';
import { getPlaceImproveContent } from '@/api/data-management';
import { Button, Flex, Modal, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import ImproveContentCard from './ImproveContentCard';

type Props = {
  id: number;
};

const ImproveContentPoint = ({ id }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [page, setPage] = useState<number>(1);
  const [currentItemId, setCurrentItemId] = useState<number | null>(null);
  /**
   * services
   * _______________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();
  const { data, isLoading, isFetching } = useQuery({ queryKey: ['place-user-uploads', id, page], queryFn: async () => getPlaceImproveContent(id, page, 6) });

  const { mutate: deleteMutate, isPending: deletePending } = useMutation({
    mutationFn: async (id: number) => deletePlaceImproveContent(id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['place-user-uploads'] });
        ToastSuccess(' آیتم مورد نظر با موفقیت حذف شد');
        setIsOpen(false);
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  const isDataLoading = isLoading || isFetching;

  return (
    <>
      {isDataLoading ? (
        <Spinner style={{ margin: '50px auto', scale: 2 }} />
      ) : data?.PlaceImproveContent?.length === 0 ? (
        <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
          در حال حاضر موردی ثبت نشده است
        </Text>
      ) : (
        <Flex direction={'column'} gap={'5'}>
          {data?.PlaceImproveContent?.map((item, index) => (
            <ImproveContentCard
              key={index}
              state={index}
              {...(item as any)}
              type='point_detail'
              onDelete={() => {
                setCurrentItemId(Number(item.id));
                setIsOpen(true);
              }}
            />
          ))}
          {data?.PlaceImproveContent && (
            <Flex width={'100%'} align={'center'} justify={'between'} px={'5'}>
              <CustomPagination current={page} total={data?.totalPages as number} maxWidth={24} onPageChange={p => setPage(p)} />
              <ItemsPerPage data={data.PlaceImproveContent} currentPage={data?.currentPage} totalCount={data?.totalCount} />
            </Flex>
          )}
        </Flex>
      )}

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Grid gapY={'24px'} p={'5'}>
          <Text>آیا از حذف این آیتم اطمینان دارید؟ </Text>
          <Grid gap={'10px'} columns={'2'}>
            <Button type='button' onClick={() => deleteMutate(Number(currentItemId))} variant='soft' size={'4'}>
              <Text {...typoVariant.body3}>{deletePending ? <Spinner /> : 'بله'}</Text>
            </Button>
            <Button type='button' onClick={() => setIsOpen(false)} variant='solid' size={'4'}>
              <Text {...typoVariant.body3}>خیر</Text>
            </Button>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default ImproveContentPoint;
