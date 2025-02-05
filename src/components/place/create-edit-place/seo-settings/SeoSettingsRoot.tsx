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
          tagList.length > 0 && (
            <>
              {tagList.map(item => {
                return (
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
                );
              })}
            </>
          )
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
          metaTagList.length > 0 && (
            <>
              {metaTagList.map(item => {
                return (
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
                );
              })}
            </>
          )
        )}
      </Flex>
    </Grid>
  );
};

export default SeoSettingsRoot;

/**
 * styled-component
 * _______________________________________________________________________________
 */
const CloseIcon = styled(Close)`
  path {
    fill: ${colorPalette.pink[11]};
  }
`;
