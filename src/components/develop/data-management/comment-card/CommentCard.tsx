import React, { useState } from 'react';

import Image from 'next/image';

import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { motion, Variants } from 'framer-motion';

import { Box, Button, Flex, Grid, IconButton, Text } from '@/libs/primitives';
import { Dislike, Like, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  imageSrc: string;
  name: string;
  createAt: string;
  comment: string;
  like: number;
  dislike: number;
};

const containerVariants: Variants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 0, height: 0 },
};

const CommentCard = (props: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const { imageSrc, name, createAt, comment, like, dislike } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const MAX_CHARACTERS = 300;
  /**
   * hooks and methods
   * _______________________________________________________________________________
   */

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Grid width={'100%'} p={'4'} gapY={'2'} style={{ border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
      <Flex width={'100%'} align={'center'} justify={'between'}>
        <Flex align={'center'} gap={'10px'}>
          <Box width={'32px'} height={'32px'} position={'relative'}>
            <Image src={imageSrc} alt='' fill style={{ borderRadius: 100 }} />
          </Box>
          <Flex direction={'column'} gap={'1'}>
            <Text {...typoVariant.body3} style={{ color: colorPalette.gray[11] }}>
              {name}
            </Text>
            <Text {...typoVariant.description2} style={{ color: colorPalette.gray[11], opacity: '50%' }}>
              {createAt}
            </Text>
          </Flex>
        </Flex>
        <IconButton size={'3'} colorVariant='PINK' style={{ borderRadius: 40 }}>
          <Trash />
        </IconButton>
      </Flex>



      <motion.div variants={containerVariants} initial={false} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }} layout>
        <Text {...typoVariant.paragraph2} style={{ color: colorPalette.gray[11] }}>
          {isOpen ? comment : `${comment.slice(0, MAX_CHARACTERS)}${comment.length > MAX_CHARACTERS ? '...' : ''}`}
        </Text>
      </motion.div>
      <Flex width={'100%'} align={'center'} justify={'between'}>
        <Flex align={'center'} gap={'2'}>
          <Flex align={'center'} gap={'2'} p={'2'}>
            <Text {...typoVariant.body3} style={{ color: colorPalette.blue[11] }}>
              {like}
            </Text>
            <IconButton variant='surface'>
              <Like />
            </IconButton>
          </Flex>
          <Flex align={'center'} gap={'2'} p={'2'}>
            <Text {...typoVariant.body3} style={{ color: colorPalette.blue[11] }}>
              {dislike}
            </Text>
            <IconButton variant='surface'>
              <Dislike />
            </IconButton>
          </Flex>
        </Flex>
        <motion.div transition={{ duration: 0.3 }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant='surface' colorVariant='PINK' onClick={() => toggleAccordion()}>
            <Text {...typoVariant.body1}>{isOpen ? 'بستن' : 'بیشتر'}</Text>
            {isOpen ? <ChevronUpIcon style={{ color: colorPalette.pink[10] }} /> : <ChevronDownIcon style={{ color: colorPalette.pink[10] }} />}
          </Button>
        </motion.div>
      </Flex>
    </Grid>
  );
};

export default CommentCard;
