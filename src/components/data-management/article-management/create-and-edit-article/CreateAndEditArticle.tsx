'use client';

import React, { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { useParams } from 'next/navigation';

import { useRouter } from '@bprogress/next';
import { Spinner } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createArticle, editArticle } from '@/api/data-management';
import FilterCard from '@/components/develop/shared/filter-card/FilterCard';
import { SeoSettingsRoot } from '@/components/place';
import { createArticleTabsOptions, editArticleTabsOptions, formPublishedOptions, formStatusOptions } from '@/constants/data-management';
import { successMessage } from '@/constants/status-message';
import { Button, Flex, Grid, SelectItem, SelectRoot, Text } from '@/libs/primitives';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import SimpleWrapper2 from '@/libs/shared/wrapper/SimpleWrapper2';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { CreateAndEditArticleBody, CreateArticleButtonTypes, EditArticleButtonTypes, PlacesOptions } from '@/types/data-management/article';
import { PlaceConstantResponse } from '@/types/place';

import ArticlePoint from './ArticlePoint';
import ImageGalleryArticle from './ImageGalleryArticle';
import InitialData from './InitialData';
import MainImageArticle from './MainImageArticle';
import RelatedPoint from './related-point/RelatedPoint';
import TextContent from './TextContent';

type Props = {
  type: 'create-article' | 'edit-article';
  placeConstant: PlaceConstantResponse;
  articleData: CreateAndEditArticleBody;
};

const CreateAndEditArticle = ({ type, placeConstant, articleData }: Props) => {
  /**
   * const and Variables
   * _______________________________________________________________________________
   */

  const serializerArticleDetail = (tableOfContent: string, content: string) => {
    const data = [
      {
        detailId: 1,
        descriptions: Boolean(tableOfContent) ? tableOfContent : '',
      },
      {
        detailId: 2,
        descriptions: Boolean(content) ? content : '',
      },
    ];

    return data;
  };

  type PlaceData = {
    placeId: number;
    placeRelationType: string;
  };

  const getRelationPlaceIds = (data: PlaceData[]): number[] => {
    return data
      .filter(item => item.placeRelationType === 'RELATION') // Keep only "RELATION" type
      .map(item => item.placeId); // Extract placeId
  };
  const queryClient = useQueryClient();
  const router = useRouter();
  const params = useParams();
  const [buttonState, setButtonState] = useState<typeof type extends 'create-article' ? CreateArticleButtonTypes : EditArticleButtonTypes>(type === 'create-article' ? 'initial-data' : 'initial-data');

  const methods = useForm({
    defaultValues:
      type === 'create-article'
        ? {
            articleDetail: [],
            title: '',
            content: '',
            writer: '',
            on_titile: '',
            source: '',
            summery: '',
            brief: '',
            placeRelationType: articleData?.places ? articleData?.places.find((place: PlacesOptions) => place?.placeRelationType === 'MAIN')?.placeId : null,
            slug: '',
            tableOfContent: '',
            inMain: false,
            inTop: false,
            provincesId: '',
            citiesId: '',
            metakeywords: [],
            keywords: [],
            meta_title: '',
            meta_description: '',
            status: '',
            is_published: '',
            type: '',
            categoryId: '',
            parentCategoryId: '',
            source_link: '',
            pic: '',
            isSlider: false,
            mainPoint: null,
            view: null,
          }
        : type === 'edit-article'
        ? {
            articleDetail: serializerArticleDetail(articleData.tableOfContent, articleData.content),
            type: Boolean(articleData?.type) ? articleData?.type : '',
            is_published: articleData?.is_published,
            status: articleData?.status,
            provincesId: Boolean(articleData?.provincesId) ? articleData?.provincesId : '',
            citiesId: Boolean(articleData?.citiesId) ? articleData?.citiesId : '',
            categoryId: Number(articleData?.categoryId),
            parentCategoryId: Number(articleData?.parentCategoryId),

            title: articleData?.title,
            content: articleData?.content,
            writer: articleData?.writer,
            on_titile: articleData?.on_titile,
            source: articleData?.source,
            summery: articleData?.summery,
            brief: articleData?.brief,
            slug: articleData?.slug,
            tableOfContent: articleData?.tableOfContent,
            inMain: articleData?.inMain,
            inTop: articleData?.inTop,
            mainPoint: articleData?.places ? articleData.places.find((place: PlacesOptions) => place.placeRelationType === 'MAIN')?.placeId : null,
            placeRelationType: articleData?.places ? getRelationPlaceIds(articleData?.places) : null,

            metakeywords: articleData?.tags,
            keywords: articleData?.keywords,
            meta_title: articleData?.meta_title,
            meta_description: articleData?.meta_description,
            view: articleData?.view,
            source_link: articleData?.source_link,
            pic: articleData?.pic,
            isSlider: articleData?.isSlider,
          }
        : {},
  });

  const { watch, control } = methods;

  /**
   * Action Services
   * _______________________________________________________________________________
   */

  const { mutate: createArticleMutate, isPending: createArticlePending } = useMutation({
    mutationFn: async (body: any) => createArticle(body),
    onSuccess: data => {
      if (data.statusCode === 201) {
        router.push('/data-management/article-management');
        queryClient.invalidateQueries({ queryKey: ['article-data'] });
        ToastSuccess(successMessage);
      } else {
        ToastError(String(data.message));
      }
    },
    onError: data => {
      console.log('onError', data);
    },
  });

  const { mutate: editArticleMutate, isPending: editArticlePending } = useMutation({
    mutationFn: async (body: any) => editArticle(Number(params.slug[2]), body),
    onSuccess: data => {
      if (data.statusCode === 200) {
        ToastSuccess(successMessage);
        router.push('/data-management/article-management');
        queryClient.invalidateQueries({ queryKey: ['article-data'] });
      } else {
        ToastError(String(data.message));
      }
    },
    onError: data => {
      console.log('onError', data);
    },
  });

  console.log(watch(), 'watchwatchwatch');

  return (
    <FormProvider {...methods}>
      <Grid width={'100%'} gapY={'5'}>
        {/* 
        ****
        Hero for selects
        ****_______________________________________________________________________________ */}
        <Grid width={'100%'} columns={'3'} gap={'5'}>
          <FilterCard label='نوع نقطه'>
            <Controller
              name='type'
              control={control}
              render={({ field }) => (
                <SelectRoot
                  {...field}
                  placeholder='نقطه'
                  value={String(field.value)}
                  onValueChange={val => {
                    field.onChange(val);
                  }}
                >
                  {placeConstant?.PlaceType.map((item, index) => (
                    <SelectItem key={index} value={item.id}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectRoot>
              )}
            />
          </FilterCard>

          <FilterCard label='انتشار'>
            <Controller
              name='is_published'
              control={control}
              render={({ field }) => (
                <SelectRoot
                  {...field}
                  placeholder='انتشار'
                  value={String(field.value)}
                  onValueChange={val => {
                    field.onChange(val);
                  }}
                >
                  {formPublishedOptions.map(item => (
                    <SelectItem key={item.id} value={String(item.value)}>
                      {item.key}
                    </SelectItem>
                  ))}
                </SelectRoot>
              )}
            />
          </FilterCard>

          <FilterCard label='وضعیت'>
            <Controller
              name='status'
              control={control}
              render={({ field }) => (
                <SelectRoot
                  {...field}
                  placeholder='وضعیت'
                  value={String(field.value)}
                  onValueChange={val => {
                    field.onChange(val);
                  }}
                >
                  {formStatusOptions.map(item => (
                    <SelectItem key={item.id} value={String(item.value)}>
                      {item.key}
                    </SelectItem>
                  ))}
                </SelectRoot>
              )}
            />
          </FilterCard>
        </Grid>

        {/* tab-hero-button _______________________________________________________________________________ */}
        <Flex
          position={'sticky'}
          top={'70px'}
          width={'100%'}
          gap={'11px'}
          p={'4'}
          align={'center'}
          style={{ overflowX: 'auto', border: `1px solid ${colorPalette.gray[6]}`, backgroundColor: colorPalette.gray[2], borderRadius: '4px', zIndex: '2' }}
        >
          {type === 'create-article' ? (
            <>
              {createArticleTabsOptions.map((item, index) => (
                <Button size={'3'} type='button' variant={buttonState === item.key ? 'soft' : 'solid'} key={index} onClick={() => setButtonState(item.key)}>
                  <Text {...typoVariant.body1}>{item.label}</Text>
                </Button>
              ))}
            </>
          ) : (
            type === 'edit-article' && (
              <>
                {editArticleTabsOptions.map((item, index) => (
                  <Button size={'3'} type='button' variant={buttonState === item.key ? 'soft' : 'solid'} key={index} onClick={() => setButtonState(item.key)}>
                    <Text {...typoVariant.body1}>{item.label}</Text>
                  </Button>
                ))}
              </>
            )
          )}
        </Flex>

        {buttonState === 'initial-data' && (
          <SimpleWrapper2 type='changeAble' hero='اطلاعات اولیه'>
            <InitialData categories={placeConstant?.categories ? placeConstant.categories : []} province={placeConstant?.provinces ? placeConstant.provinces : []} />
          </SimpleWrapper2>
        )}

        {buttonState === 'text-content' && (
          <SimpleWrapper2 type='changeAble' hero='محتوای متنی'>
            <TextContent />
          </SimpleWrapper2>
        )}

        {buttonState === 'related-points' && (
          <>
            <SimpleWrapper2 type='changeAble' hero='نقطه مقاله'>
              <ArticlePoint />
            </SimpleWrapper2>
            <SimpleWrapper2 type='changeAble' hero='نقاط مرتبط'>
              <RelatedPoint />
            </SimpleWrapper2>
          </>
        )}

        {buttonState === 'seo-setting' && (
          <SimpleWrapper2 type='changeAble' hero='تنظیمات سئو'>
            <SeoSettingsRoot />
          </SimpleWrapper2>
        )}

        {buttonState === 'images' && (
          <Flex direction={'column'} gap={'5'}>
            <SimpleWrapper2 type='changeAble' hero='تصویر شاخص'>
              <MainImageArticle constant={placeConstant} picture={articleData?.pic} articleData={articleData} />
            </SimpleWrapper2>
            <SimpleWrapper2 type='changeAble' hero='گالری تصاویر'>
              <ImageGalleryArticle articleId={articleData?.id} constant={placeConstant} />
            </SimpleWrapper2>
          </Flex>
        )}

        <Flex p={'4'} gap={'5'} style={{ backgroundColor: colorPalette.gray[2], border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
          <Button size={'3'} variant='soft' style={{ padding: '13.5px 48.5px' }} onClick={() => (type === 'create-article' ? createArticleMutate(watch()) : editArticleMutate(watch()))}>
            {createArticlePending || editArticlePending ? <Spinner /> : <Text {...typoVariant.body1}>ثبت</Text>}
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
