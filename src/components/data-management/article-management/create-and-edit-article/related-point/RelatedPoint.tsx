'use client';

import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Radio } from '@radix-ui/themes';
import styled from 'styled-components';

import { selectPointOptions } from '@/constants/data-management';
import { Box, Button, Flex, Grid, Heading, Modal, Text, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import ModalHeader from '@/libs/shared/ModalHeader';
import { Close, Search } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import RelatedPointList from './RelatedPointList';

type Props = {
  type: 'create' | 'edit';
};

const RelatedPoint = ({ type }: Props) => {
  /**
   * variable and constant
   * _______________________________________________________________________________
   */

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const methods = useForm({ defaultValues: { search: '' } });
  const { control } = methods;
  /**
   * table constant
   * _______________________________________________________________________________
   */

  return (
    <>
      {type === 'create' ? (
        <Flex width={'100%'} direction={'column'} justify={'center'} align={'center'} gap={'32px'}>
          <Heading as='h3' size={'3'} style={{ color: colorPalette.gray[11] }}>
            هنوز نقطه مرتبطی به این مقاله اضافه نشده است.
          </Heading>
          <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11] }}>
            نقاط مرتبط در انتهای مقاله به صورتی لیستی نمایش داده می شوند.
          </Text>
          <Button size={'3'} style={{ padding: '13.5px 16px' }}>
            <Flex align={'center'} gap={'2'}>
              <Text {...typoVariant.body1}>+</Text>
              <Text {...typoVariant.body1}>افزودن نقاط مرتبط</Text>
            </Flex>
          </Button>
        </Flex>
      ) : (
        type === 'edit' && (
          <Grid gapY={'5'}>
            <Button size={'3'} onClick={() => setIsOpen(true)} style={{ padding: '13.5px 16px', width: 'fit-content' }}>
              <Flex align={'center'} gap={'2'}>
                <Text {...typoVariant.body1}>+</Text>
                <Text {...typoVariant.body1}>افزودن نقطه</Text>
              </Flex>
            </Button>
            <RelatedPointList />
          </Grid>
        )
      )}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader title='انتخاب نقطه' icon={<Close />} handleClose={() => setIsOpen(false)} />
        <Grid p={'12px 16px'} gapY={'4'} maxHeight={'450px'} style={{ overflowY: 'auto' }}>
          <Controller name='search' control={control} render={({ field }) => <TextField {...field} placeholder='جستجو نام نقطه' icon={<SearchIcon />} />} />
          <Box width={'100%'} height={'100%'} maxHeight={'450px'} style={{ border: '1px solid #D4D4D4', borderRadius: 8, overflow: 'hidden' }}>
            {selectPointOptions.map((item, index) => (
              <Grid key={index} p={'13.5px 16px'} width={'100%'} gapX={'9'} style={{ gridTemplateColumns: 'auto 1fr 1fr 1fr ' }}>
                <Radio value={''} />
                <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
                  {item.title}
                </Text>
                <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
                  {item.province}
                </Text>
                <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
                  {item.city}
                </Text>
              </Grid>
            ))}
          </Box>
        </Grid>
        <ModalAction submitButtonText='ثبت ' closeButtonText='لغو' onCloseButton={() => setIsOpen(false)} />
      </Modal>
    </>
  );
};

export default RelatedPoint;

const SearchIcon = styled(Search)`
  path {
    fill: ${colorPalette.gray[11]};
  }
`;
