'use client';

import React from 'react';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getPlaceComments } from '@/api/data-management';
import { getPlace } from '@/api/place';
import CommentCard from '@/components/develop/data-management/comment-card/CommentCard';
import ImageCard from '@/components/develop/data-management/image-card/ImageCard';
import DataCard from '@/components/develop/shared/data-card/DataCard';
import { Box, Flex, Grid, IconButton, Text } from '@/libs/primitives';
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

const point = {
  id: 1,
  name: 'نام و عنوان point',
  Province: 'تهران',
  city: 'تهران',
};

const PointDetailRoot = () => {
  /**
   * services
   * _______________________________________________________________________________
   */
  const { data: pointData, isLoading: pointLoading } = useQuery({
    queryKey: ['point-data'],
    queryFn: async () => await getPlace(70),
  });

  const { data: commentData } = useQuery({
    queryKey: ['point-comment'],
    queryFn: async () => await getPlaceComments(70, 1),
  });

  console.log('Data', pointData);
  console.log('commentData', commentData);

  if (pointLoading) return <Spinner />;

  return (
    <Grid width={'100%'} gap={'5'}>
      {/**
       * Point info
       * _______________________________________________________________________________
       */}
      {/* TODO: fix data type and remove any */}
      <GalleryWithInfo data={pointData ? pointData : ([] as any)} commentList={commentData?.allComments ? commentData.allComments : ([] as any)} />
      <PlaceDetails data={pointData?.PlaceDetails ? pointData.PlaceDetails : []} />
      {/**
       * edit data
       * _______________________________________________________________________________
       */}
      <AccordionWrapper hero='اصلاح اطلاعات ارسال شده'>
        <DataCard
          type='point_detail'
          colorVariant='blue'
          point={point}
          mobile='091212345678'
          website='www.example.com'
          email='example@gmail.com'
          province='نام استان'
          city='نام شهر'
          id={1}
          content='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
        />
        <DataCard
          type='point_detail'
          colorVariant='pink'
          point={point}
          mobile='091212345678'
          website='www.example.com'
          email='example@gmail.com'
          province='نام استان'
          city='نام شهر'
          id={1}
          content='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
        />
        <Flex width={'100%'} justify={'between'} p={'5'} style={{ border: '2px solid red' }}>
          <Text>pagination</Text>
          <Text>data count info</Text>
        </Flex>
      </AccordionWrapper>
      {/**
       * Routing Guide
       * _______________________________________________________________________________
       */}
      <RoutingGuide data={generateRecommendNavigationItems(pointData as any)} placeId={pointData?.id as any} />
      <AccordionWrapper hero='راهنمای مسیر ارسال شده'>
        <RouteGuideSend data={generateRecommendNavigationItems(pointData as any)} />
      </AccordionWrapper>

      {/**
       * comment
       * _______________________________________________________________________________
       */}
      <SimpleWrapper hero='نظرات' iconContent={<CommentInfo score='3.2' comment={1520} />}>
        <CommentCard
          imageSrc='/image/profile.jpeg'
          name='نام کاربر'
          createAt='۲۴ فروردین'
          comment='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است'
          like={1}
          dislike={2}
        />
        <CommentCard
          imageSrc='/image/profile.jpeg'
          name='نام کاربر'
          createAt='۲۴ فروردین'
          comment='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است'
          like={1}
          dislike={2}
        />
        <Flex width={'100%'} justify={'between'} p={'5'} style={{ border: '2px solid red' }}>
          <Text>pagination</Text>
          <Text>data count info</Text>
        </Flex>
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
