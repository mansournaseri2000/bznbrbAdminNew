'use client';

import { useState } from 'react';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { deleteTravelMethid } from '@/api/confirmations';
import { getTravelMethods } from '@/api/place';
import { Button, Flex, Grid, Modal, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import RouteGuideCard from '../point-detail/routing-gide/RouteGuideCard';

/**
 * props
 * _______________________________________________________________________________
 */

type Props = {
  id: number;
};

const RoutingGuideList = ({ id }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const [currentItemId, setCurrentItemId] = useState<number | null>(null);
  const { data } = useQuery({ queryKey: ['RoutingGuideList', page], queryFn: async () => await getTravelMethods(id, page) });

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  const { mutate: deleteMutate, isPending: deletePending } = useMutation({
    mutationFn: async (id: number) => deleteTravelMethid(id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['RoutingGuideList'] });
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

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */
  if (!data) return <Spinner style={{ margin: 'auto' }} />;

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <>
      <Flex direction={'column'} gap={'24px'}>
        {data.filteredSuggestions.length === 0 ? (
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
            هیچ راهنمای مسیری ارسال نشده است.
          </Text>
        ) : (
          <Flex direction={'column'} pr={'36px'} gap={'16px'} style={{ flex: 1 }} position={'relative'}>
            <div style={{ position: 'absolute', height: '100%', right: '12px', border: `1px dashed ${colorPalette.gray[6]}` }} />
            {data.filteredSuggestions.map((item, index) => {
              return (
                <RouteGuideCard
                  onDelete={() => {
                    setCurrentItemId(item.id);
                    setIsOpen(true);
                  }}
                  id={index}
                  description={item.description}
                  type={item.travelMode as 'bus' | 'taxi' | 'subway' as any}
                  key={index}
                  cardType='route_sent'
                />
              );
            })}
          </Flex>
        )}
        <CustomPagination
          current={page}
          total={data?.totalPages as number}
          maxWidth={24}
          onPageChange={p => {
            setPage(p);
          }}
        />
      </Flex>
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

export default RoutingGuideList;

/**
 * styled-component
 * _______________________________________________________________________________
 */
