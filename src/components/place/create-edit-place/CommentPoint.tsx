import React, { useState } from 'react';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { deleteCommentById } from '@/api/confirmations';
import { getPlaceComments } from '@/api/data-management';
import CommentCard from '@/components/develop/data-management/comment-card/CommentCard';
import { Button, Flex, Grid, Modal, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  id: number;
};

const CommentPoint = ({ id }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [page, setPage] = useState<number>(1);
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const [currentItemId, setCurrentItemId] = useState<number | null>(null);

  /**
   * services
   * _______________________________________________________________________________
   */
  const { data, isLoading, isFetching } = useQuery({ queryKey: ['place-user-comments', id, page], queryFn: async () => getPlaceComments(id, page, 6) });

  const { mutate: deleteMutate, isPending: deletePending } = useMutation({
    mutationFn: async (id: number) => deleteCommentById(id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['place-user-comments'] });
        ToastSuccess(' آیتم مورد نظر با موفقیت حذف شد');
        setIsOpen(false);
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
        setIsOpen(false);
      }
    },
    onError: () => {
      ToastError('لطفا دوباره تلاش نمایید');
      setIsOpen(false);
    },
  });

  if (isLoading || isFetching) return <Spinner style={{ margin: '50px auto' }} />;

  return (
    <>
      {data?.PlaceComments?.length === 0 ? (
        <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
          در حال حاضر برای این نقطه نظری ثبت نشده است
        </Text>
      ) : (
        <Flex direction={'column'} gap={'5'}>
          {data?.PlaceComments?.map((item, index) => (
            <CommentCard
              key={index}
              {...item}
              isDisable={false}
              onDelete={() => {
                setIsOpen(true);
                setCurrentItemId(item.id);
              }}
            />
          ))}

          {data?.PlaceComments && (
            <Flex width={'100%'} align={'center'} justify={'between'} px={'5'}>
              <CustomPagination current={page} total={data?.totalPages as number} maxWidth={24} onPageChange={p => setPage(p)} />
              <ItemsPerPage data={data.PlaceComments} currentPage={data?.currentPage} totalCount={data?.totalCount} />
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

export default CommentPoint;
