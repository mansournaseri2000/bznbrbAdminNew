'use client';

import React, { useState } from 'react';

import { Box, Flex, Grid, Text } from '@/libs/primitives';
import AccordionWrapper from '@/libs/shared/wrapper/AccordionWrapper';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { CategoriesResponse } from '@/types/additional-detail/additional-detail';

import CategoryModal from '../category-modal/CategoryModal';

const CategoryItems = (props: CategoriesResponse) => {
  const { name, children } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Grid width={'100%'} gapY={'5'}>
        <AccordionWrapper
          hero={name}
          withEdit
          onEdit={e => {
            e.stopPropagation();
            setIsOpen(true);
          }}
        >
          <Flex width={'100%'} align={'center'} gap={'5'} wrap={'wrap'}>
            {children.map(item => (
              <Box key={item.id} p={'9.5px 16px'} style={{ backgroundColor: colorPalette.gray[3], borderRadius: 16 }}>
                <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
                  {item.name}
                </Text>
              </Box>
            ))}
          </Flex>
        </AccordionWrapper>
      </Grid>
      <CategoryModal isOpen={isOpen} setIsOpen={setIsOpen} type='edit_category' />
    </>
  );
};

export default CategoryItems;
