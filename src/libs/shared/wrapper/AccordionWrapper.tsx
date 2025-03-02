'use client';

import React, { useState } from 'react';

import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

import { Button, Flex, Grid, IconButton, Text } from '@/libs/primitives';
import { HasMedia, Pencil, Trash, TriangleUp } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type AccordionWrapperProps = {
  hero: string;
  withEdit?: boolean;
  withButton?: boolean;
  withDelete?: boolean;
  isDisableDelete?: boolean;
  onEdit?: (e: any) => void;
  onButtonSubmit?: (e: any) => void;
  onDelete?: (e: any) => void;
  hasMedia?: boolean;
  children: React.ReactNode;
};

const containerVariants: Variants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 0, height: 0 },
};

const AccordionWrapper = (props: AccordionWrapperProps) => {
  const { hero, children, withEdit = false, withButton = false, withDelete = false, isDisableDelete = false, onEdit, onButtonSubmit, onDelete, hasMedia } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Wrapper isOpen={isOpen}>
      <Flex className='style' width={'100%'} justify={'between'} align={'center'} p={'8px 16px'} onClick={toggleAccordion}>
        <Flex gap={'2'} align={'center'}>
          {hasMedia && <HasMedia width={14.13} height={14.13} />}
          <Text style={{ color: colorPalette.gray[11], fontWeight: 700, fontSize: '16px', lineHeight: '24px' }}>{hero}</Text>
          {withButton && (
            <IconButton variant='surface' size={'2'} onClick={onEdit}>
              <Pencil width={16} height={16} />
            </IconButton>
          )}
        </Flex>
        <Flex align={'center'} gap={'4'}>
          {withButton && (
            <Button size={'2'} variant='soft' onClick={onButtonSubmit}>
              <Text {...typoVariant.body1}>افزودن ویژگی</Text>
            </Button>
          )}

          {withEdit && (
            <IconButton variant='surface' size={'2'} onClick={onEdit}>
              <Pencil width={16} height={16} />
            </IconButton>
          )}

          {withDelete && (
            <IconButton variant='surface' size={'2'} onClick={onDelete} disabled={isDisableDelete}>
              <TrashIcon width={16} height={16} />
            </IconButton>
          )}
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} style={{ width: 32, height: 32, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Triangle />
          </motion.div>
        </Flex>
      </Flex>
      <motion.div variants={containerVariants} initial='closed' animate={isOpen ? 'open' : 'closed'} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }} layout>
        <Grid gap={'16px'} p={'24px 16px 16px 16px'}>
          {children}
        </Grid>
      </motion.div>
    </Wrapper>
  );
};

export default AccordionWrapper;

const Wrapper = styled(Grid)<{ isOpen: boolean }>`
  border-radius: 8px;
  border: 1px solid ${colorPalette.gray[6]};
  .style {
    border-radius: ${({ isOpen }) => (isOpen ? '8px 8px 0px 0px' : '8px')};
    height: fit-content;
    background-color: ${colorPalette.blue[4]};
    cursor: pointer;
  }
`;
const Triangle = styled(TriangleUp)`
  path {
    fill: ${colorPalette.blue[10]};
  }
`;

const TrashIcon = styled(Trash)`
  path {
    fill: ${colorPalette.pink[9]};
  }
`;
