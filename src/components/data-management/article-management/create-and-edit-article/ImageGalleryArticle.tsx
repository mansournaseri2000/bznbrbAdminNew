'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getImageGalleryArticle } from '@/api/article';
import { removeImageGalleryArticle } from '@/api/data-management';
import { Box, Button, Flex, Grid, Heading, IconButton, Modal, Text, TextField } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { Pencil, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import ImageGalleryArticleUploader from './ImageGalleryArticleUploader';

/**
 * props
 * _______________________________________________________________________________
 */
type Props = {
  articleId: number;
  constant: any;
};

const ImageGalleryArticle = ({ articleId, constant }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [status, setStatus] = useState<'create' | 'edit'>('create');
  const [page, setPage] = useState<number>(1);
  const { data } = useQuery({ queryKey: ['article-image-gallery', articleId, page], queryFn: async () => getImageGalleryArticle(articleId, page) });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<any>(null);
  const queryClient = useQueryClient();

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  const { mutate: removeImageMutate, isPending: removeImageIsPending } = useMutation({
    mutationFn: async (id: number) => removeImageGalleryArticle(id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['place'] });
        setIsOpenModal(false);
        ToastSuccess('زیر دسته بندی مورد نظر با موفقیت حذف شد');
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <>
      {data && data?.gallery.length === 0 ? (
        <Flex direction={'column'} gap={'6'} align={'center'} py={'87.5px'}>
          <Heading as='h3' size={'3'} style={{ color: colorPalette.gray[11] }}>
            هنوز تصاویر گالری اضافه نشده اند.
          </Heading>
          <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11], textAlign: 'center' }}>
            تصاویر گالری مجموعه تصاویری هستند که تنها در صفحه نقطه نمایش داده می شوند.
          </Text>

          <Button
            size={'4'}
            type='button'
            onClick={() => {
              setStatus('create');
              setIsOpen(true);
            }}
          >
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>+</Text>
              <Text {...typoVariant.body1}>افزودن تصویر</Text>
            </Flex>
          </Button>
        </Flex>
      ) : (
        <Flex width={'100%'} direction={'column'} gap={'5'}>
          <Button
            variant='ghost'
            size={'3'}
            style={{ width: 'fit-content' }}
            onClick={() => {
              setStatus('create');
              setIsOpen(true);
            }}
          >
            <Flex align={'center'} gap={'2'}>
              <Text {...typoVariant.body1}>+</Text>
              <Text {...typoVariant.body1}>افزودن تصویر</Text>
            </Flex>
          </Button>

          {data?.gallery.map(item => {
            return (
              <Grid key={item.alt} width={'100%'} gapX={'10px'} p={'12px'} style={{ gridTemplateColumns: 'auto 2fr auto', border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
                <Box width={'328px'} height={'200px'} position={'relative'}>
                  <Image src={`${process.env.NEXT_PUBLIC_BASE_URL_image}${item.path}`} alt='تصویر نقطه' fill style={{ borderRadius: 8 }} />
                </Box>
                <Flex direction={'column'} gap={'2'}>
                  <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11], marginTop: '10px' }}>
                    {item.path}
                  </Text>
                  <Flex direction={'column'} mt={'12px'}>
                    <TextField readOnly value={item.alt} placeholder='Alt Text' style={{ borderRadius: 12 }} />
                    <TextField value={item.description} placeholder='توضیحات تصویر' readOnly style={{ borderRadius: 12 }} />
                  </Flex>
                </Flex>
                <Flex direction={'column'} gap={'4'}>
                  <IconButton
                    size={'3'}
                    type='button'
                    onClick={() => {
                      setStatus('edit');
                      setCurrentItem(item);
                      setIsOpen(true);
                    }}
                  >
                    <Pencil />
                  </IconButton>

                  <IconButton
                    size={'3'}
                    variant='ghost'
                    type='button'
                    colorVariant='PINK'
                    onClick={() => {
                      setIsOpenModal(true);
                    }}
                  >
                    <Trash height={24} />
                  </IconButton>
                </Flex>
              </Grid>
            );
          })}
        </Flex>
      )}
      <CustomPagination current={page} total={data?.totalPages as number} maxWidth={24} onPageChange={p => setPage(p)} />
      {Boolean(currentItem) && status === 'edit' && (
        <ImageGalleryArticleUploader
          resetCurrentItem={() => setCurrentItem(null)}
          articleId={articleId}
          constant={constant}
          currentItem={currentItem}
          handleCloseModal={() => setIsOpen(false)}
          isOpen={isOpen}
          status={status}
          key={''}
        />
      )}
      {status === 'create' && (
        <ImageGalleryArticleUploader
          resetCurrentItem={() => setCurrentItem(null)}
          articleId={articleId}
          constant={constant}
          currentItem={currentItem}
          handleCloseModal={() => setIsOpen(false)}
          isOpen={isOpen}
          status={status}
          key={''}
        />
      )}

      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <Grid gapY={'24px'} p={'5'}>
          <Text>آیا از حذف این تصویر اطمینان دارید؟ </Text>
          <Grid gap={'10px'} columns={'2'}>
            <Button type='button' onClick={() => removeImageMutate(Number(1))} variant='soft' size={'4'}>
              <Text {...typoVariant.body3}>{removeImageIsPending ? <Spinner /> : 'بله'}</Text>
            </Button>
            <Button type='button' onClick={() => setIsOpenModal(false)} variant='solid' size={'4'}>
              <Text {...typoVariant.body3}>خیر</Text>
            </Button>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default ImageGalleryArticle;

/**
 * styled-component
 * _______________________________________________________________________________
 */
