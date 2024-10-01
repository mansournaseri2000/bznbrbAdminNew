'use client';

import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Button, Flex, Grid, Modal, Text, TextArea, TextField } from '@/libs/primitives';
import { Divider } from '@/libs/shared';

import Container from '../Container';

export const processStringToTags = (inputString: string | undefined): { label: string; id: number }[] => {
  if (typeof inputString !== 'string') {
    console.error('Invalid input: inputString is not a string');
    return [];
  }

  return inputString
    .split(',')
    .map((tag, index) => ({
      id: index + 1,
      label: tag.trim(),
    }))
    .filter(tag => tag.label !== '');
};

export const convertTagsToString = (tags: { label: string; id: number }[]): string => {
  return tags.map(tag => tag.label).join(', ');
};

/**
 * props
 * _______________________________________________________________________________
 */

const SeoSettingsRoot = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const { control, watch, setValue } = useFormContext();
  const [isOpen, setIsOpen] = useState(false);
  const [key, setKey] = useState<'meta' | 'tag'>('tag');
  const [tagList, setTagList] = useState<{ id: number; label: string }[]>(processStringToTags(watch('keywords')));
  const [metaTagList, setMetaTagList] = useState<{ id: number; label: string }[]>(processStringToTags(watch('metakeywords')));

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */

  const addTag = ({ hookformStore, inputStore, localStore, updateLocalStore }: { hookformStore: string; inputStore: string; localStore: any; updateLocalStore: any }) => {
    const pointName = watch(inputStore).trim();

    if (!pointName) return;

    const newTagObject = {
      id: localStore.length > 0 ? new Date().getTime() : 1,
      label: pointName,
    };

    const updatedTagList = [...localStore, newTagObject];
    const tagsAsString = convertTagsToString(updatedTagList); // Convert to comma-separated string
    updateLocalStore(updatedTagList);
    setValue(hookformStore, tagsAsString);
    setValue(inputStore, '');
    setIsOpen(false);
  };

  const removeTag = ({ id, localStore, setLocalStore, hookformStore }: { id: number; localStore: any; setLocalStore: any; hookformStore: string }) => {
    const updatedTagList = localStore.filter((tag: { id: number }) => tag.id !== id);
    setLocalStore(updatedTagList);
    const tagsAsString = convertTagsToString(updatedTagList);
    setValue(hookformStore, tagsAsString);
  };

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <>
      <Container height='auto' title='تنظیمات SEO'>
        <Grid pb={'16px'} gap={'24px'}>
          <Button
            type='button'
            onClick={() => {
              setKey('tag');
              setIsOpen(true);
            }}
            style={{ width: 'max-content' }}
            variant='soft'
            size={'4'}
          >
            <Text>افزودن تگ</Text>
          </Button>
          <Flex gap={'24px'} wrap={'wrap'}>
            {tagList.map(item => {
              return (
                <Button
                  type='button'
                  onClick={() =>
                    removeTag({
                      id: item.id,
                      localStore: tagList,
                      setLocalStore: setTagList,
                      hookformStore: 'keywords',
                    })
                  }
                  key={item.id}
                  variant='solid'
                  size={'4'}
                >
                  <Text>{item.label}</Text>
                  <Text>X</Text>
                </Button>
              );
            })}
          </Flex>
          <Divider />
          <Controller name='meta_title' control={control} render={({ field }) => <TextField {...field} placeholder='عنوان صفحه ( متا تایتل )' aria-label='textFiled' />} />
          <Controller name='meta_description' control={control} render={({ field }) => <TextArea {...field} placeholder='توضیحات متا' aria-label='TextArea' />} />
          <Divider />
          <Button
            type='button'
            onClick={() => {
              setKey('meta');
              setIsOpen(true);
            }}
            style={{ width: 'max-content' }}
            variant='soft'
            size={'4'}
          >
            <Text>افزودن کلمات کلیدی ( متا ) </Text>
          </Button>

          <Flex gap={'24px'} wrap={'wrap'}>
            {metaTagList.map(item => {
              return (
                <Button
                  onClick={() =>
                    removeTag({
                      id: item.id,
                      localStore: metaTagList,
                      setLocalStore: setMetaTagList,
                      hookformStore: 'metakeywords',
                    })
                  }
                  key={item.id}
                  variant='solid'
                  size={'4'}
                >
                  <Text>{item.label}</Text>
                  <Text>X</Text>
                </Button>
              );
            })}
          </Flex>
        </Grid>
      </Container>

      {/* modal _______________________________________________________________________________*/}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {key === 'tag' && (
          <Grid gap={'24px'}>
            <Text>افزودن تگ</Text>
            <Controller name='keyword' control={control} render={({ field }) => <TextField autoFocus {...field} placeholder='نام عنوان' aria-label='textFiled' />} />
            <Grid gap={'16px'} columns={'2'}>
              <Button
                type='button'
                onClick={() => {
                  addTag({
                    inputStore: 'keyword',
                    hookformStore: 'keywords',
                    localStore: tagList,
                    updateLocalStore: setTagList,
                  });
                  setIsOpen(false);
                }}
                variant='soft'
                size={'4'}
              >
                <Text>ثبت</Text>
              </Button>
              <Button type='button' onClick={() => setIsOpen(false)} variant='solid' size={'4'}>
                <Text>انصراف</Text>
              </Button>
            </Grid>
          </Grid>
        )}
        {key === 'meta' && (
          <Grid gap={'24px'}>
            <Text>افزودن متا تگ</Text>
            <Controller name='metakeyword' control={control} render={({ field }) => <TextField autoFocus {...field} placeholder='نام عنوان' aria-label='textFiled' />} />
            <Grid gap={'16px'} columns={'2'}>
              <Button
                type='button'
                onClick={() => {
                  addTag({
                    inputStore: 'metakeyword',
                    hookformStore: 'metakeywords',
                    localStore: metaTagList,
                    updateLocalStore: setMetaTagList,
                  });
                  setIsOpen(false);
                }}
                variant='soft'
                size={'4'}
              >
                <Text>ثبت</Text>
              </Button>
              <Button type='button' onClick={() => setIsOpen(false)} variant='solid' size={'4'}>
                <Text>انصراف</Text>
              </Button>
            </Grid>
          </Grid>
        )}
      </Modal>
    </>
  );
};

export default SeoSettingsRoot;

/**
 * styled-component
 * _______________________________________________________________________________
 */
