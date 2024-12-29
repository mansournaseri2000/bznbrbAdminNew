'use client';

import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useParams, useRouter } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQuery } from '@tanstack/react-query';

import { createArticle, editArticle, getArticleById } from '@/api/data-management';
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
  // articleStatus?: boolean;
};

const CreateAndEditArticle = ({ type }: Props) => {
  /**
   * const and Variables
   * _______________________________________________________________________________
   */
  const router = useRouter();
  const params = useParams();

  /**
   * Get Services
   * _______________________________________________________________________________
   */

  const { data: constantData } = useQuery({
    queryKey: ['constant'],
    queryFn: async () => getAllPlacesConstants(),
  });

  const { data: articleByIdData } = useQuery({ queryKey: ['article-data'], queryFn: async () => await getArticleById(Number(params.slug[2])) });

  console.log('ARTICLE DATA BY ID', articleByIdData);

  const methods = useForm({
    defaultValues:
      type === 'create'
        ? {
            title: '',
            content: '',
            writer: '',
            on_titile: '',
            source: '',
            summery: '',
            brief: '',
            slug: '',
            tableOfContent: '',
            inMain: false,
            inTop: false,
            provincesId: '',
            citiesId: '',
            tags: [],
            keywords: [],
            meta_title: '',
            meta_description: '',
            view: null,
            status: false,
            is_published: false,
            categoryId: '',
            parentCategoryId: '',
            source_link: '',
            pic: '',
            isSlider: false,
            mainPoint: null,
            relationPoints: [],
          }
        : type === 'edit'
        ? {
            title: articleByIdData?.title,
            content: '',
            writer: '',
            on_titile: '',
            source: '',
            summery: '',
            brief: '',
            slug: '',
            tableOfContent: '',
            inMain: false,
            inTop: false,
            provincesId: null,
            citiesId: null,
            tags: [],
            keywords: [],
            meta_title: '',
            meta_description: '',
            view: null,
            status: false,
            is_published: false,
            categoryId: null,
            parentCategoryId: null,
            source_link: '',
            pic: '',
            isSlider: false,
          }
        : {},
  });

  const { watch } = methods;
  // console.log('WATCH', watch());

  /**
   * Action Services
   * _______________________________________________________________________________
   */

  const { mutate: createArticleMutate, isPending: createArticlePending } = useMutation({
    mutationFn: async () => createArticle(watch() as any),
    onSuccess: data => {
      console.log('onSuccess', data);
    },
    onError: data => {
      console.log('onError', data);
    },
  });

  const { mutate: editArticleMutate, isPending: editArticlePending } = useMutation({
    mutationFn: async () => editArticle(Number(params.slug[2]), watch() as any),
    onSuccess: data => {
      console.log('onSuccess', data);
    },
    onError: data => {
      console.log('onError', data);
    },
  });

  useEffect(() => {
    editArticleMutate();
  }, []);

  // console.log('ARTICLE DATA0', articleData);

  return (
    <FormProvider {...methods}>
      <Grid width={'100%'} gapY={'5'}>
        {type === 'edit' && (
          <Flex width={'100%'} align={'center'} justify={'between'} p={'8px 16px'} style={{ border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
            <Flex align={'center'} gap={'2'}>
              <Text {...typoVariant.body2} style={{ color: colorPalette.gray[9] }}>
                وضعیت مقاله
              </Text>
              <Text {...typoVariant.body1} style={{ color: watch('status') === true ? colorPalette.blue[11] : colorPalette.pink[11] }}>
                {watch('status') === true ? 'منتشر شده' : 'منتشر نشده'}
              </Text>
            </Flex>
            <Button size={'3'} variant={watch('status') === true ? 'solid' : 'soft'} colorVariant={watch('status') === true ? 'PINK' : 'BLUE'}>
              <Text {...typoVariant.body1}>{watch('status') === true ? 'لغو انتشار' : 'انتشار مقاله'}</Text>
            </Button>
          </Flex>
        )}
        <AccordionWrapper hero='اطلاعات اولیه'>
          <InitialData categories={constantData?.categories ? constantData.categories : []} province={constantData?.provinces ? constantData.provinces : []} />
        </AccordionWrapper>
        <AccordionWrapper hero='محتوای متنی'>
          <TextContent />
        </AccordionWrapper>

        <AccordionWrapper hero='نقطه مقاله'>
          <ArticlePoint />
        </AccordionWrapper>

        <AccordionWrapper hero='نقاط مرتبط'>
          <RelatedPoint />
        </AccordionWrapper>
        <AccordionWrapper hero='تصاویر شاخص'>
          <FeaturedImages type={type} />
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
          <Button size={'3'} variant='soft' style={{ padding: '13.5px 48.5px' }} onClick={() => (type === 'create' ? createArticleMutate() : editArticleMutate())}>
            {type === 'create' && createArticlePending ? <Spinner /> : <Text {...typoVariant.body1}>ثبت</Text>}
            {type === 'edit' && editArticlePending ? <Spinner /> : <Text {...typoVariant.body1}>ثبت</Text>}
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
