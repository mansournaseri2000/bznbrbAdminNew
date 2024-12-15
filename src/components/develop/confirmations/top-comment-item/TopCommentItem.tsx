'use client';

import React, { useState } from 'react';

import { Flex, IconButton, Text } from '@/libs/primitives';
import { Pencil, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { CommentsDetail, TopCommentItemDetail } from '@/types/confirmations/top-comments';

import ModalContent from '../add-comment/AddEditModalContent';

type TopCommentItemProps = CommentsDetail & {
  onDelete?: () => void;
};

const TopCommentItem: React.FC<TopCommentItemProps> = (props: TopCommentItemProps) => {
  const { commentName, commentContent, onDelete } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Flex width={'100%'} gap={'4'} p={'4'} style={{ backgroundColor: colorPalette.gray[2], border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
        <Flex width={'100%'} direction={'column'} gap={'4'}>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
            {commentName}
          </Text>
          <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11] }}>
            {commentContent}
          </Text>
        </Flex>
        <Flex direction={'column'} gap={'2'}>
          <IconButton size={'3'} onClick={() => setIsOpen(true)}>
            <Pencil />
          </IconButton>
          <IconButton size={'3'} colorVariant='PINK' onClick={onDelete}>
            <Trash />
          </IconButton>
        </Flex>
      </Flex>
      <ModalContent type='edit' isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default TopCommentItem;
