import React from 'react';

import { Button, Flex, Grid, IconButton, Text } from '@/libs/primitives';
import { Check, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type ContactUsProps = {
  title: string;
  username: string;
  date: string;
  content: string;
  index: number;
  msgStatus: 'answered' | 'no-answered';
};

const ContactUsCard = (props: ContactUsProps) => {
  const { index, title, content, username, date, msgStatus } = props;
  return (
    <>
      <Grid
        width={'100%'}
        p={'4'}
        gap={'4'}
        style={{
          borderRadius: 8,
          backgroundColor: index % 2 === 0 ? colorPalette.blue[2] : colorPalette.pink[2],
          border: index % 2 === 0 ? `1px solid ${colorPalette.blue[6]}` : `1px solid ${colorPalette.pink[6]}`,
        }}
      >
        <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
          {title}
        </Text>
        {/* TODO: fix typo variant for this two text */}
        <Flex direction={'column'} gap={'1'}>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
            {username}
          </Text>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[9] }}>
            {date}
          </Text>
        </Flex>
        <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11] }}>
          {content}
        </Text>
        <Flex width={'100%'} align={'center'} justify={'end'} gap={'2'}>
          <Button size={'3'} variant='soft'>
            {msgStatus === 'answered' ? (
              <Flex align={'center'} gap={'2'}>
                <Check />
                <Text {...typoVariant.body3}>پاسخ داده شده</Text>
              </Flex>
            ) : (
              <Text {...typoVariant.body3}>بدون پاسخ</Text>
            )}
          </Button>
          <IconButton size={'3'} colorVariant='PINK'>
            <Trash />
          </IconButton>
        </Flex>
      </Grid>
    </>
  );
};

export default ContactUsCard;
