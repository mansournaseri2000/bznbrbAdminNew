'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';

import { getAllPlacesConstants } from '@/api/place';
import ImageCreator from '@/components/develop/shared/image-creator/ImageCreator';
import { SeoSettingsRoot } from '@/components/place';
import { Button, Flex, Grid, Text } from '@/libs/primitives';
import AccordionWrapper from '@/libs/shared/wrapper/AccordionWrapper';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import ArticlePoint from './ArticlePoint';
import FeaturedImages from './FeaturedImages';
import InitialData from './InitialData';
import RelatedPoint from './related-point/RelatedPoint';
import TextContent from './TextContent';

type Props = {
  type: 'create' | 'edit';
  articleStatus?: boolean;
};

const CreateAndEditArticle = ({ type, articleStatus }: Props) => {
  /**
   * const and Variables
   * _______________________________________________________________________________
   */
  const router = useRouter();
  const methods = useForm({
    defaultValues: {
      onTitr: '',
      title: '',
      url: '',
      writer: '',
      source: '',
      category: '',
      subCategory: '',
      province: '',
      city: '',
      articleSummery: '',
      summery: '',
      articleTopic: '',
      articleText: '',
      showOnPage: false,
      keyword: '',
      meta_title: '',
      meta_description: '',
      metakeyword: '',
    },
  });

  /**
   * Services
   * _______________________________________________________________________________
   */
  const { data: constantData } = useQuery({
    queryKey: ['constant'],
    queryFn: async () => getAllPlacesConstants(),
  });

  return (
    <FormProvider {...methods}>
      <Grid width={'100%'} gapY={'5'}>
        {type === 'edit' && (
          <Flex width={'100%'} align={'center'} justify={'between'} p={'8px 16px'} style={{ border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
            <Flex align={'center'} gap={'2'}>
              <Text {...typoVariant.body2} style={{ color: colorPalette.gray[9] }}>
                وضعیت مقاله
              </Text>
              <Text {...typoVariant.body1} style={{ color: articleStatus === true ? colorPalette.blue[11] : colorPalette.pink[11] }}>
                {articleStatus === true ? 'منتشر شده' : 'منتشر نشده'}
              </Text>
            </Flex>
            <Button size={'3'} variant={articleStatus === true ? 'solid' : 'soft'} colorVariant={articleStatus === true ? 'PINK' : 'BLUE'}>
              <Text {...typoVariant.body1}>{articleStatus === true ? 'لغو انتشار' : 'انتشار مقاله'}</Text>
            </Button>
          </Flex>
        )}
        <AccordionWrapper hero='اطلاعات اولیه'>
          <InitialData categories={constantData?.categories ? constantData.categories : []} province={constantData?.provinces ? constantData.provinces : []} />
        </AccordionWrapper>
        <AccordionWrapper hero='محتوای متنی'>
          <TextContent />
        </AccordionWrapper>
        {type === 'edit' && (
          <AccordionWrapper hero='نقطه مقاله'>
            <ArticlePoint
              pic='/image/add-point-image.png'
              pointName='نام و عنوان point'
              province='تهران'
              city=' سه راه تهرانپارس'
              score='4.7'
              comment={2321}
              description='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است'
              tag={['بوم گردی', 'کوهستانی', 'مناسب کمپ']}
            />
          </AccordionWrapper>
        )}
        <AccordionWrapper hero='نقطه مرتبط'>
          <RelatedPoint type={type} />
        </AccordionWrapper>
        <AccordionWrapper hero='تصاویر شاخص'>
          <FeaturedImages type='edit' />
        </AccordionWrapper>
        {type === 'edit' && (
          <AccordionWrapper hero='تصاویر'>
            <ImageCreator />
          </AccordionWrapper>
        )}
        <AccordionWrapper hero='تنظیمات SEO'>
          <SeoSettingsRoot />
        </AccordionWrapper>
        <Flex p={'4'} gap={'5'} style={{ backgroundColor: colorPalette.gray[2], border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
          <Button size={'3'} variant='soft' style={{ padding: '13.5px 48.5px' }}>
            <Text {...typoVariant.body1}>ثبت</Text>
          </Button>
          <Button size={'3'} colorVariant='PINK' onClick={() => router.back()} style={{ padding: '13.5px 48.5px' }}>
            <Text {...typoVariant.body1}>لغو</Text>
          </Button>
        </Flex>
      </Grid>
    </FormProvider>
  );
};

export default CreateAndEditArticle;
