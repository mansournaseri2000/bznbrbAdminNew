'use client';

import React, { useEffect, useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { useParams, useRouter } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useMutation } from '@tanstack/react-query';

import { createArticle, editArticle } from '@/api/data-management';
import FilterCard from '@/components/develop/shared/filter-card/FilterCard';
import { SeoSettingsRoot } from '@/components/place';
import { createArticleTabsOptions, editArticleTabsOptions, formPublishedOptions, formStatusOptions } from '@/constants/data-management';
import { Button, Flex, Grid, SelectItem, SelectRoot, Text } from '@/libs/primitives';
import SimpleWrapper2 from '@/libs/shared/wrapper/SimpleWrapper2';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { CreateAndEditArticleBody, CreateArticleButtonTypes, EditArticleButtonTypes } from '@/types/data-management/article';
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
  const router = useRouter();
  const params = useParams();
  const [buttonState, setButtonState] = useState<typeof type extends 'create-article' ? CreateArticleButtonTypes : EditArticleButtonTypes>(type === 'create-article' ? 'initial-data' : 'initial-data');

  const methods = useForm({
    defaultValues:
      type === 'create-article'
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
            status: '',
            is_published: '',
            type: '',
            categoryId: '',
            parentCategoryId: '',
            source_link: '',
            pic: '',
            isSlider: false,
            mainPoint: null,
            places: [],
            view: null,
          }
        : type === 'edit-article'
        ? {
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
            provincesId: articleData?.provincesId,
            citiesId: articleData?.citiesId,
            tags: articleData?.tags,
            keywords: articleData?.keywords,
            meta_title: articleData?.meta_title,
            meta_description: articleData?.meta_description,
            view: articleData?.view,
            status: articleData?.status,
            is_published: articleData?.is_published,
            type: articleData?.type,
            categoryId: articleData?.categoryId,
            parentCategoryId: articleData?.parentCategoryId,
            source_link: articleData?.source_link,
            pic: articleData?.pic,
            isSlider: articleData?.isSlider,
            places: articleData?.places,
          }
        : {},
  });

  const { watch, control } = methods;

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
                  {placeConstant.PlaceType.map((item, index) => (
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
        <Flex width={'100%'} gap={'11px'} pb={'4'} align={'center'} style={{ overflowX: 'auto', borderBottom: `1px solid ${colorPalette.gray[6]}` }}>
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
              <MainImageArticle constant={placeConstant} picture={articleData.pic} articleData={articleData} />
            </SimpleWrapper2>
            <SimpleWrapper2 type='changeAble' hero='گالری تصاویر'>
              <ImageGalleryArticle articleId={articleData.id} constant={placeConstant} />
            </SimpleWrapper2>
          </Flex>
        )}

        <Flex p={'4'} gap={'5'} style={{ backgroundColor: colorPalette.gray[2], border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
          <Button size={'3'} variant='soft' style={{ padding: '13.5px 48.5px' }} onClick={() => (type === 'create-article' ? createArticleMutate() : editArticleMutate())}>
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
