'use client';

import React from 'react';

import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';

import { Skeleton, Spinner } from '@radix-ui/themes';
import { useQueries } from '@tanstack/react-query';

import { getPlaceComments, getPlaceImproveContent } from '@/api/data-management';
import { getPlace } from '@/api/place';
import CommentCard from '@/components/develop/data-management/comment-card/CommentCard';
import ImageCard from '@/components/develop/data-management/image-card/ImageCard';
import DataCard from '@/components/develop/shared/data-card/DataCard';
import { Box, Flex, Grid, IconButton, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import AccordionWrapper from '@/libs/shared/wrapper/AccordionWrapper';
import SimpleWrapper from '@/libs/shared/wrapper/SimpleWrapper';
import { generateRecommendNavigationItems } from '@/libs/utils/generateRecommendNavigationItems';
import { StatisticsFigures } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import GalleryWithInfo from './GalleryWithInfo';
import PlaceDetails from './PlaceDetail';
import RouteGuideSend from './RouteGuideSend';
import RoutingGuide from './routing-gide/RoutingGuide';

const Map = dynamic(() => import('./routing-gide/Map'), {
  ssr: false,
  loading: () => <Skeleton loading minHeight={'460px'} style={{ borderRadius: '8px' }} />,
});

const PointDetailRoot = () => {
  /**
   * services
   * _______________________________________________________________________________
   */

  const params = useParams();
  console.log('params', params.slug[2]);

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
        // Number(params.slug[2])
      },
    ],
  });
  /*
   *** Variables and Constant _________________________________________________________________________________________________________________________________________________________________
   */
  const [pointResult, commentResult, improveContentResult] = result;
  const { data: pointData, isLoading: pointLoading } = pointResult;
  const { data: commentData } = commentResult;
  const { data: improveContentData } = improveContentResult;
  // const [page,setPage] = useState<number>(commentData?.CurrentShowingCommentsPage)

  // console.log('Data', pointData);
  console.log('improveContentData', improveContentData);

  if (pointLoading) return <Spinner />;

  return (
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
       * _______________________________________________________________________________
       */}
      <AccordionWrapper hero='اصلاح اطلاعات ارسال شده'>
        {improveContentData?.PlaceImproveContent.length !== 0 ? (
          <>
            {improveContentData?.PlaceImproveContent.map((item, index) => (
              <DataCard key={item.id} {...item} type='point_detail' index={index} />
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
        <RouteGuideSend data={generateRecommendNavigationItems(pointData as any)} />
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
              <CommentCard key={item.id} {...item} />
            ))}

            <Flex width={'100%'} align={'center'} justify={'between'}>
              <CustomPagination
                current={commentData?.CurrentShowingCommentsPage ? commentData.CurrentShowingCommentsPage : 0}
                total={commentData?.PlaceCommentsCount ? commentData.PlaceCommentsCount : 0}
                onPageChange={p => {
                  console.log('page', p);
                }}
              />
              <ItemsPerPage
                data={commentData?.PlaceComments}
                currentPage={commentData?.CurrentShowingCommentsPage ? commentData.CurrentShowingCommentsPage : 0}
                totalCount={commentData?.PlaceCommentsCount ? commentData.PlaceCommentsCount : 0}
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
