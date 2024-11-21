import React from 'react';

import Image from 'next/image';

import { Box, Flex, Grid, IconButton, Text } from '@/libs/primitives';
import { Chart } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { PointCommentItemDetail } from '@/types/confirmations/top-comments';

const PointCommentItem = (props: PointCommentItemDetail) => {
  const { user, comment } = props;
  return (
    <Grid width={'100%'} p={'4'} gapY={'4'} style={{ backgroundColor: colorPalette.gray[2], border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
      <Flex align={'center'} gap={'2'}>
        <Box width={'32px'} height={'32px'} position={'relative'}>
          <Image src={user.pic} alt='' fill style={{ borderRadius: '100%' }} />
        </Box>
        <Flex width={'100%'} align={'center'} justify={'between'}>
          <Flex direction={'column'} gap={'2'}>
            <Text {...typoVariant.body3} style={{ color: colorPalette.gray[11] }}>
              {user.username} {user.last_name}
            </Text>
            <Text {...typoVariant.description2} style={{ color: colorPalette.gray[9] }}>
              {user.date}
            </Text>
          </Flex>
          <IconButton size={'3'} style={{ borderRadius: '100%' }}>
            <Chart />
          </IconButton>
        </Flex>
      </Flex>
      <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11] }}>
        {comment}
      </Text>
    </Grid>
  );
};

export default PointCommentItem;
