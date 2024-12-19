'use client';

import React, { useState } from 'react';

import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';

import { Skeleton, Spinner } from '@radix-ui/themes';
import { useMutation, useQueries, useQueryClient } from '@tanstack/react-query';

import { getPlaceComments, getPlaceImproveContent, publishTravelMethod, removeCommentForPlace, removePlaceImproveContent, removeTravelMethod } from '@/api/data-management';
import { getPlace } from '@/api/place';
import CommentCard from '@/components/develop/data-management/comment-card/CommentCard';
import ImageCard from '@/components/develop/data-management/image-card/ImageCard';
import DataCard from '@/components/develop/shared/data-card/DataCard';
import { Box, Button, Flex, Grid, IconButton, Modal, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import AccordionWrapper from '@/libs/shared/wrapper/AccordionWrapper';
import SimpleWrapper from '@/libs/shared/wrapper/SimpleWrapper';
import { generateRecommendNavigationItems } from '@/libs/utils/generateRecommendNavigationItems';
import { StatisticsFigures } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { PlaceCommentsDetail, PlaceImproveContentDataDetail } from '@/types/data-management/point';
import { PlaceTravelMethodSuggestionsDetail } from '@/types/place/find-place';

import GalleryWithInfo from './GalleryWithInfo';
import PlaceDetails from './PlaceDetail';
import RouteGuideCard from './routing-gide/RouteGuideCard';
import RoutingGuide from './routing-gide/RoutingGuide';

const Map = dynamic(() => import('./routing-gide/Map'), {
  ssr: false,
  loading: () => <Skeleton loading minHeight={'460px'} style={{ borderRadius: '8px' }} />,
});

type ModalStateType = {
  isOpen: boolean;
  key: 'delete-improve-content' | 'publish-path-guid' | 'delete-path-guid' | 'delete-comment';
};

const PointDetailRoot = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */

  const params = useParams();
  const queryClient = useQueryClient();
  const [modalState, setModalState] = useState<ModalStateType>({ isOpen: false, key: 'delete-improve-content' });
  const [improveContentItem, setImproveContentItem] = useState<PlaceImproveContentDataDetail | null>(null);
  const [pathGuidItem, setPathGuidItem] = useState<PlaceTravelMethodSuggestionsDetail | null>(null);
  const [commentItems, setCommentItems] = useState<PlaceCommentsDetail | null>(null);

  console.log('PATH GUID', pathGuidItem);
  /**
   * services
   * _______________________________________________________________________________
   */

  // ********** GET SERVICES ***********
  const result = useQueries({
    queries: [
      {
        queryKey: ['point-data'],
        queryFn: async () => await getPlace(Number(params.slug[2])),
      },
      {
        queryKey: ['point-comment'],
        queryFn: async () => await getPlaceComments(Number(params.slug[2])),
      },
      {
        queryKey: ['improve-content'],
        queryFn: async () => await getPlaceImproveContent(Number(params.slug[2])),
      },
    ],
  });

  // ********* ACTION SERVICES **********

  const { mutate: removeImproveContent, isPending: pendingImproveContent } = useMutation({
    mutationFn: async (id: number) => removePlaceImproveContent(id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['improve-content'] });
        ToastSuccess('نظر مورد نظر با موفقیت حذف شد');
        setModalState({ ...modalState, isOpen: false });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
    onError: err => {
      console.log(err, 'Err');
    },
  });

  const { mutate: mutatePublishTravelMethod, isPending: pendingPublishTravelMethod } = useMutation({
    mutationFn: async (id: number) => publishTravelMethod(id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['point-data'] });
        ToastSuccess('مسیر مورد نظر با موفقیت منتشر شد');
        setModalState({ ...modalState, isOpen: false });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
    onError: err => {
      console.log(err, 'Err');
    },
  });

  const { mutate: mutateDeleteTravelMethod, isPending: pendingDeleteTravelMethod } = useMutation({
    mutationFn: async (id: number) => removeTravelMethod(id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['point-data'] });
        ToastSuccess('مسیر مورد نظر با موفقیت حذف شد');
        setModalState({ ...modalState, isOpen: false });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
    onError: err => {
      console.log(err, 'Err');
    },
  });

  const { mutate: removeComment, isPending: pendingRemoveComment } = useMutation({
    mutationFn: async (id: number) => removeCommentForPlace(id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['point-comment'] });
        ToastSuccess('نظر مورد نظر با موفقیت حذف شد');
        setModalState({ ...modalState, isOpen: false });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
    onError: err => {
      console.log(err, 'Err');
    },
  });

  /*
   *** Variables and Constant _________________________________________________________________________________________________________________________________________________________________
   */
  const [pointResult, commentResult, improveContentResult] = result;
  const { data: pointData, isLoading: pointLoading, isFetching: pointFetching } = pointResult;
  const { data: commentData } = commentResult;
  const { data: improveContentData } = improveContentResult;

  console.log('POINT DATA', pointData);
  /*
   *** Loading_________________________________________________________________________________________________________________________________________________________________
   */
  if (pointLoading || pointFetching || !pointData) return <Spinner style={{ marginInline: 'auto', scale: 2, marginBlock: '100px' }} />;

  return (
    <>
      <Grid width={'100%'} gap={'5'}>
        {/**
         * Point info
         * _______________________________________________________________________________
         */}
        {/* TODO: fix data type and remove any */}
        <GalleryWithInfo data={pointData ? pointData : ([] as any)} commentList={commentData?.PlaceComments ? commentData.PlaceComments : ([] as any)} />
        <PlaceDetails data={pointData?.PlaceDetails ? pointData.PlaceDetails : []} />
        {/**
         * edit data
         *
         * _______________________________________________________________________________
         */}
        <AccordionWrapper hero='اصلاح اطلاعات ارسال شده'>
          {improveContentData?.PlaceImproveContent.length !== 0 ? (
            <>
              {improveContentData?.PlaceImproveContent.map((item, index) => (
                <DataCard
                  key={item.id}
                  {...item}
                  type='point_detail'
                  index={index}
                  onDelete={() => {
                    setImproveContentItem(item);
                    setModalState({ isOpen: true, key: 'delete-improve-content' });
                  }}
                />
              ))}
              {/* TODO: fix pagination */}
              <Flex width={'100%'} align={'center'} justify={'between'}>
                <CustomPagination
                  current={improveContentData?.currentPage ? improveContentData?.currentPage : 0}
                  total={improveContentData?.totalCount ? improveContentData?.totalCount : 0}
                  onPageChange={p => {
                    console.log('page', p);
                  }}
                />
                <ItemsPerPage
                  data={improveContentData?.PlaceImproveContent}
                  currentPage={improveContentData?.currentPage ? improveContentData?.currentPage : 0}
                  totalCount={improveContentData?.totalCount ? improveContentData?.totalCount : 0}
                />
              </Flex>
            </>
          ) : (
            <Text>دیتایی وجود ندارد</Text>
          )}
        </AccordionWrapper>
        {/**
         * Routing Guide
         * _______________________________________________________________________________
         */}
        <Flex gap={'5'}>
          <Map data={pointData as any} />
          <RoutingGuide data={generateRecommendNavigationItems(pointData as any)} placeId={pointData?.id as any} />
        </Flex>
        {/**
         * Routing Guide for send route
         * _______________________________________________________________________________
         */}
        <AccordionWrapper hero='راهنمای مسیر ارسال شده'>
          {pointData?.PlaceTravelMethodSuggestions.length !== 0 ? (
            <Flex justify={'between'} gap={'20px'} pr={'8px'}>
              {pointData?.PlaceTravelMethodSuggestions.length !== 0 && <div style={{ height: 'auto', width: '1px', borderRight: '1px dashed #0000003c' }} />}
              <Flex direction={'column'} gap={'16px'} style={{ flex: 1 }}>
                {pointData?.PlaceTravelMethodSuggestions.map(item => (
                  <RouteGuideCard
                    id={item.id}
                    description={item.description}
                    type={item.travelMode}
                    key={item.id}
                    cardType='route_sent'
                    onDelete={() => {
                      setPathGuidItem(item);
                      setModalState({ isOpen: true, key: 'delete-path-guid' });
                    }}
                    onPublish={() => {
                      setPathGuidItem(item);
                      setModalState({ isOpen: true, key: 'publish-path-guid' });
                    }}
                  />
                ))}
              </Flex>
            </Flex>
          ) : (
            <Text>دیتایی وجود ندارد</Text>
          )}
        </AccordionWrapper>

        {/**
         * comment
         * _______________________________________________________________________________
         */}

        <SimpleWrapper
          hero='نظرات'
          data={commentData?.PlaceComments}
          iconContent={<CommentInfo score={String(commentData?.PlaceRating)} comment={commentData?.PlaceComments ? commentData.PlaceComments.length : 0} />}
        >
          {commentData?.PlaceComments.length !== 0 ? (
            <>
              {commentData?.PlaceComments.map(item => (
                <CommentCard
                  key={item.id}
                  {...item}
                  onDelete={() => {
                    setCommentItems(item);
                    setModalState({ isOpen: true, key: 'delete-comment' });
                  }}
                />
              ))}

              <Flex width={'100%'} align={'center'} justify={'between'}>
                <CustomPagination
                  current={commentData?.currentPage ? commentData.currentPage : 0}
                  total={commentData?.totalCount ? commentData.totalPages : 0}
                  onPageChange={p => {
                    console.log('page', p);
                  }}
                />
                <ItemsPerPage
                  data={commentData?.PlaceComments}
                  currentPage={commentData?.currentPage ? commentData.currentPage : 0}
                  totalCount={commentData?.totalCount ? commentData.totalCount : 0}
                />
              </Flex>
            </>
          ) : (
            <Text>در حال حاضر نظری ثبت نشده است</Text>
          )}
        </SimpleWrapper>

        {/**
         * images
         * _______________________________________________________________________________
         */}
        <SimpleWrapper hero='تصاویر ارسال شده'>
          <Grid columns={'3'} gap={'5'}>
            <ImageCard title='بهترين زمان براي بازديد از اين جاذبه فصل بهار و تابستان است.' image='/image/image-sent.png' />
            <ImageCard title='بهترين زمان براي بازديد از اين جاذبه فصل بهار و تابستان است.' image='/image/image-sent.png' />
            <ImageCard title='بهترين زمان براي بازديد از اين جاذبه فصل بهار و تابستان است.' image='/image/image-sent.png' />
          </Grid>
        </SimpleWrapper>
      </Grid>

      {/**
       * MODAL
       * _______________________________________________________________________________
       */}
      <Modal isOpen={modalState.isOpen} onClose={() => setModalState({ ...modalState, isOpen: false })}>
        {modalState.key === 'delete-improve-content' && (
          <Grid gapY={'5'} p={'5'}>
            <Text>آیا از حذف این مورد اطمینان دارید؟</Text>
            <Grid columns={'2'} align={'center'} gap={'4'}>
              <Button size={'3'} onClick={() => removeImproveContent(improveContentItem?.id ? improveContentItem.id : 0)}>
                <Text {...typoVariant.body3}>{pendingImproveContent ? <Spinner /> : 'بله'}</Text>
              </Button>
              <Button size={'3'} colorVariant='PINK' onClick={() => setModalState({ ...modalState, isOpen: false })}>
                <Text {...typoVariant.body3}>خیر</Text>
              </Button>
            </Grid>
          </Grid>
        )}
        {modalState.key === 'publish-path-guid' && (
          <Grid gapY={'5'} p={'5'}>
            <Text>آیا از انتشار این مورد اطمینان دارید؟</Text>
            <Grid columns={'2'} align={'center'} gap={'4'}>
              <Button size={'3'} variant='soft' onClick={() => mutatePublishTravelMethod(pathGuidItem?.id ? pathGuidItem.id : 0)}>
                <Text {...typoVariant.body3}>{pendingPublishTravelMethod ? <Spinner /> : 'بله'}</Text>
              </Button>
              <Button size={'3'} colorVariant='PINK' onClick={() => setModalState({ ...modalState, isOpen: false })}>
                <Text {...typoVariant.body3}>خیر</Text>
              </Button>
            </Grid>
          </Grid>
        )}
        {modalState.key === 'delete-path-guid' && (
          <Grid gapY={'5'} p={'5'}>
            <Text>آیا از حذف این مورد اطمینان دارید؟</Text>
            <Grid columns={'2'} align={'center'} gap={'4'}>
              <Button size={'3'} variant='soft' onClick={() => mutateDeleteTravelMethod(pathGuidItem?.id ? pathGuidItem.id : 0)}>
                <Text {...typoVariant.body3}>{pendingDeleteTravelMethod ? <Spinner /> : 'بله'}</Text>
              </Button>
              <Button size={'3'} colorVariant='PINK' onClick={() => setModalState({ ...modalState, isOpen: false })}>
                <Text {...typoVariant.body3}>خیر</Text>
              </Button>
            </Grid>
          </Grid>
        )}
        {modalState.key === 'delete-comment' && (
          <Grid gapY={'5'} p={'5'}>
            <Text>آیا از حذف این نظر اطمینان دارید؟</Text>
            <Grid columns={'2'} align={'center'} gap={'4'}>
              <Button size={'3'} variant='soft' onClick={() => removeComment(commentItems?.id ? commentItems.id : 0)}>
                <Text {...typoVariant.body3}>{pendingRemoveComment ? <Spinner /> : 'بله'}</Text>
              </Button>
              <Button size={'3'} colorVariant='PINK' onClick={() => setModalState({ ...modalState, isOpen: false })}>
                <Text {...typoVariant.body3}>خیر</Text>
              </Button>
            </Grid>
          </Grid>
        )}
      </Modal>
    </>
  );
};

export default PointDetailRoot;

const CommentInfo = ({ score, comment }: { score: string; comment: number }) => (
  <Flex gap={'1'} align={'center'}>
    <IconButton size={'3'} colorVariant='PINK' style={{ borderRadius: 40 }}>
      <StatisticsFigures />
    </IconButton>
    <Flex direction={'column'} gap={'1'}>
      <Box>
        <Text {...typoVariant.title2} style={{ color: colorPalette.gray[12] }}>
          {score}
        </Text>
        <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
          از ۵
        </Text>
      </Box>
      <Text {...typoVariant.body3} style={{ color: colorPalette.gray[9] }}>
        {comment} نظر
      </Text>
    </Flex>
  </Flex>
);
