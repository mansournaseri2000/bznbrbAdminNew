'use client';

import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import Image from 'next/image';

import { CopyIcon } from '@radix-ui/react-icons';

import { Box, Flex, Grid, Heading, IconButton, Text, TextArea, TextField } from '@/libs/primitives';
import { Pencil, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { AdsHoldersResponse, AdsItemsDetail } from '@/types/ads/ads';

type Props = AdsItemsDetail & {
  data: AdsHoldersResponse;
};

// type ModalStateTypes = {
//   isOpen: boolean;
//   key: 'delete' | 'edit';
// };

const AdCard = ({ position, path, slug, alt, description }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */

  // const [modalState, setModalState] = useState<ModalStateTypes>({ isOpen: false, key: 'edit' });
  const methods = useForm({ defaultValues: { alt: alt, description: description } });
  const { control } = methods;

  return (
    <FormProvider {...methods}>
      <Grid width={'100%'} p={'4'} gapY={'4'} style={{ border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
        <Flex width={'100%'} align={'center'} justify={'between'}>
          <Heading style={{ color: colorPalette.gray[11], fontSize: '32px', fontWeight: 500, lineHeight: '37.5px' }}>{position}</Heading>
          <Flex align={'center'} gap={'4'}>
            <IconButton size={'3'}>
              <Pencil />
            </IconButton>
            <IconButton size={'3'} variant='surface'>
              <Trash />
            </IconButton>
          </Flex>
        </Flex>
        <Flex width={'100%'} gap={'10px'}>
          <Box width={'328px'} height={'200px'} position={'relative'}>
            <Image src={`${process.env.NEXT_PUBLIC_BASE_URL_image}${path}`} alt={alt} fill style={{ borderRadius: 8 }} />
          </Box>
          <Flex width={'77.5%'} direction={'column'} mt={'2'} style={{ justifyContent: 'space-between' }}>
            <Flex direction={'column'} gap={'3'}>
              <Controller name='alt' control={control} render={({ field }) => <TextField {...field} placeholder='متن چایگزین' readOnly style={{ borderRadius: 12 }} />} />
              <Controller name='description' control={control} render={({ field }) => <TextArea {...field} placeholder='توضیحات تصویر' readOnly style={{ borderRadius: 12 }} />} />
            </Flex>
            {slug && (
              <Flex p={'12px 16px'} gap={'2'} align={'center'}>
                <IconButton variant='surface' size={'1'}>
                  <CopyIcon style={{ color: colorPalette.blue[10] }} />
                </IconButton>
                <Text {...typoVariant.body3} style={{ color: colorPalette.blue[11] }}>
                  {slug}
                </Text>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Grid>
    </FormProvider>
  );
};

export default AdCard;
