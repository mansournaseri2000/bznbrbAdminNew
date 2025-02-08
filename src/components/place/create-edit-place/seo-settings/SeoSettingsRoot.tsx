'use client';

import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import { Box, Flex, Grid, IconButton, Text, TextArea, TextField } from '@/libs/primitives';
import { Divider } from '@/libs/shared';
import CustomAddItem from '@/libs/shared/custom-add-item/CustomAddItem';
import { Close } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

export const processStringToTags = (
  input: string | string[] | undefined
): { label: string; id: number }[] => {
  if (!input || (typeof input !== 'string' && !Array.isArray(input))) {
    console.error('Invalid input: input is neither a string nor an array of strings');
    return [];
  }

  // Scenario 1: Process as a comma-separated string
  if (typeof input === 'string') {
    return input
      .split(',')
      .map((tag, index) => ({
        id: index + 1,
        label: tag.trim(),
      }))
      .filter(tag => tag.label !== ''); // Filter out any empty labels after trimming
  }

  // Scenario 2: Process as an array of strings
  if (Array.isArray(input)) {
    return input
      .map((tag, index) => ({
        id: index + 1,
        label: tag.trim(),
      }))
      .filter(tag => tag.label !== ''); // Filter out any empty labels after trimming
  }

  return []; // Fallback in case of invalid input
};

const SeoSettingsRoot = () => {
  const { control, watch, setValue } = useFormContext();
  
  // Initialize states with appropriate types
  const [tagList, setTagList] = useState<{ id: number; label: string }[]>(processStringToTags(watch('keywords')));
  const [metaTagList, setMetaTagList] = useState<{ id: number; label: string }[]>(processStringToTags(watch('metakeywords')));

  // Add new tag to list
  const addTag = ({
    hookformStore,
    inputStore,
    localStore,
    updateLocalStore,
  }: {
    hookformStore: string;
    inputStore: string;
    localStore: { id: number; label: string }[];
    updateLocalStore: React.Dispatch<React.SetStateAction<{ id: number; label: string }[]>>;
  }) => {
    const pointName = watch(inputStore).trim();
    if (!pointName) return;

    const newTagObject = {
      id: localStore.length > 0 ? new Date().getTime() : 1,
      label: pointName,
    };

    const updatedTagList = [...localStore, newTagObject];
    const tagsAsString = convertTagsToString(updatedTagList); // Convert to comma-separated string
    updateLocalStore(updatedTagList); // Update local state
    setValue(hookformStore, tagsAsString); // Update form state
    setValue(inputStore, ''); // Clear input
  };

  // Remove tag from list
  const removeTag = ({
    id,
    localStore,
    setLocalStore,
    hookformStore,
  }: {
    id: number;
    localStore: { id: number; label: string }[];
    setLocalStore: React.Dispatch<React.SetStateAction<{ id: number; label: string }[]>>;
    hookformStore: string;
  }) => {
    const updatedTagList = localStore.filter(tag => tag.id !== id); // Filter out the tag with the given ID
    setLocalStore(updatedTagList); // Update local state
    const tagsAsString = convertTagsToString(updatedTagList); // Convert to string
    setValue(hookformStore, tagsAsString); // Update form state
  };

  // Convert tags to comma-separated string
  const convertTagsToString = (tags: { id: number; label: string }[]): string => {
    return tags.map(tag => tag.label).join(',');
  };

  return (
    <Grid pb={'16px'} gap={'24px'}>
      <Box width={'40%'}>
        <Controller
          name='keyword'
          control={control}
          render={({ field }) => (
            <CustomAddItem
              {...field}
              placeholder='افزودن تگ'
              onClick={() => {
                addTag({
                  inputStore: 'keyword',
                  hookformStore: 'keywords',
                  localStore: tagList,
                  updateLocalStore: setTagList,
                });
              }}
            />
          )}
        />
      </Box>

      <Flex gap={'5'} p={'4'} wrap={'wrap'} style={{ border: `1px solid ${colorPalette.gray[7]}`, borderRadius: 8 }}>
        {tagList.length === 0 ? (
          <Flex direction={'column'} gap={'5'} p={'30px 16px'}>
            <Text {...typoVariant.title1} style={{ color: colorPalette.gray[11], fontWeight: 500 }}>
              هنوز تگی اضافه نشده است.
            </Text>
            <Text {...typoVariant.paragraph2} style={{ color: colorPalette.gray[11] }}>
              از فیلد بالا تگ مورد نظر خود را پیدا کنید و به لیست اضافه کنید.
            </Text>
          </Flex>
        ) : (
          tagList.map(item => (
            <Flex key={item.id} align={'center'} gap={'10px'} p={'9.5px 16px'} style={{ backgroundColor: colorPalette.gray[3], borderRadius: 16 }}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
                {item.label}
              </Text>
              <IconButton
                type='button'
                variant='surface'
                onClick={() =>
                  removeTag({
                    id: item.id,
                    localStore: tagList,
                    setLocalStore: setTagList,
                    hookformStore: 'keywords',
                  })
                }
              >
                <CloseIcon />
              </IconButton>
            </Flex>
          ))
        )}
      </Flex>

      <Divider />
      <Controller name='meta_title' control={control} render={({ field }) => <TextField {...field} placeholder='عنوان صفحه ( متا تایتل )' aria-label='textFiled' />} />
      <Controller name='meta_description' control={control} render={({ field }) => <TextArea {...field} placeholder='توضیحات متا' aria-label='TextArea' rows={5} />} />
      <Divider />

      <Box width={'40%'}>
        <Controller
          name='metakeyword'
          control={control}
          render={({ field }) => (
            <CustomAddItem
              {...field}
              placeholder='کلمات کلیدی ( متا )'
              onClick={() => {
                addTag({
                  inputStore: 'metakeyword',
                  hookformStore: 'metakeywords',
                  localStore: metaTagList,
                  updateLocalStore: setMetaTagList,
                });
              }}
            />
          )}
        />
      </Box>

      <Flex gap={'5'} p={'4'} wrap={'wrap'} style={{ border: `1px solid ${colorPalette.gray[7]}`, borderRadius: 8 }}>
        {metaTagList.length === 0 ? (
          <Flex direction={'column'} gap={'5'} p={'30px 16px'}>
            <Text {...typoVariant.title1} style={{ color: colorPalette.gray[11], fontWeight: 500 }}>
              هنوز تگی اضافه نشده است.
            </Text>
            <Text {...typoVariant.paragraph2} style={{ color: colorPalette.gray[11] }}>
              از فیلد بالا تگ مورد نظر خود را پیدا کنید و به لیست اضافه کنید.
            </Text>
          </Flex>
        ) : (
          metaTagList.map(item => (
            <Flex key={item.id} align={'center'} gap={'10px'} p={'9.5px 16px'} style={{ backgroundColor: colorPalette.gray[3], borderRadius: 16 }}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
                {item.label}
              </Text>
              <IconButton
                type='button'
                variant='surface'
                onClick={() =>
                  removeTag({
                    id: item.id,
                    localStore: metaTagList,
                    setLocalStore: setMetaTagList,
                    hookformStore: 'metakeywords',
                  })
                }
              >
                <CloseIcon />
              </IconButton>
            </Flex>
          ))
        )}
      </Flex>
    </Grid>
  );
};

export default SeoSettingsRoot;

const CloseIcon = styled(Close)`
  path {
    fill: ${colorPalette.pink[11]};
  }
`;
