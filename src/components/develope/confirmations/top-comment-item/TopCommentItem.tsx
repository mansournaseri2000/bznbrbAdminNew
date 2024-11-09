import React from 'react';

import Image from 'next/image';

import { Accordion, Box, Flex, Grid, IconButton, Text } from '@/libs/primitives';
import { Chart, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { TopCommentItemDetail } from '@/types/confirmations/top-comments';

type TopCommentItemProps = TopCommentItemDetail & {
  onDelete?: () => void;
  onChart?: () => void;
};

const accordionItems = [1, 2, 3, 4, 5];

const TopCommentItem: React.FC<TopCommentItemProps> = (props: TopCommentItemProps) => {
  const { point, user, comment } = props;
  return (
    <Grid width={'100%'} gapY={'4'} p={'4'} style={{ backgroundColor: colorPalette.gray[2], border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
      <Flex width={'100%'} align={'start'} justify={'between'}>
        <Flex direction={'column'} gap={'2'}>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
            {point.name}
          </Text>
          <Text {...typoVariant.description2} style={{ color: colorPalette.gray[11] }}>
            {`${point.Province} / ${point.city}`}
          </Text>
        </Flex>
        <Flex align={'start'} gap={'2'}>
          <Accordion triggerText='1'>
            {accordionItems.map(item => (
              <Text key={item}>{item}</Text>
            ))}
          </Accordion>
          {/* TODO: pass onDelete to icon button for onclick */}
          <IconButton size={'3'} colorVariant='PINK' style={{ borderRadius: 12 }}>
            <Trash />
          </IconButton>
        </Flex>
      </Flex>
      <Flex width={'100%'} align={'center'} justify={'between'}>
        <Flex align={'center'} gap={'2'}>
          <Box width={'32px'} height={'32px'} position={'relative'}>
            <Image src={user.pic} alt='' fill style={{ borderRadius: 100 }} />
          </Box>
          <Flex direction={'column'} gap={'2'}>
            {/* TODO: fix this typoVariant for text  */}
            <Text style={{ color: colorPalette.gray[11] }}>
              {user.username} {user.last_name}
            </Text>
            <Text style={{ color: colorPalette.gray[9] }}>{user.date}</Text>
          </Flex>
        </Flex>
        <IconButton size={'3'} style={{ borderRadius: '100%' }}>
          <Chart />
        </IconButton>
      </Flex>
      <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11] }}>
        {comment}
      </Text>
    </Grid>
  );
};

export default TopCommentItem;
