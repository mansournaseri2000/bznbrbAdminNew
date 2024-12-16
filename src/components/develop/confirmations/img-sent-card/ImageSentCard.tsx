import React from 'react';
import { useForm } from 'react-hook-form';

import Image from 'next/image';

import { Box, Button, Flex, Grid, IconButton, Text } from '@/libs/primitives';
import { Check, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { FilteredPicsDetail } from '@/types/confirmations/image-sent';

type CardProps = FilteredPicsDetail & {
  onShowPoint?: () => void;
  onPublished?: () => void;
  onDelete?: () => void;
  index: number;
};

const ImageSentCard: React.FC<CardProps> = (props: CardProps) => {
  const { index, placeName, placeProvince, placeCity, picture, content } = props;

  const methods = useForm({ defaultValues: { isTop: false } });
  const { watch } = methods;

  console.log('watch', watch());
  return (
    <Grid
      width={'100%'}
      gapY={'5'}
      p={'4'}
      style={{
        borderRadius: 8,
        backgroundColor: index % 2 === 0 ? colorPalette.blue[2] : colorPalette.pink[2],
        border: index % 2 === 0 ? `1px solid ${colorPalette.blue[6]}` : `1px solid ${colorPalette.pink[6]}`,
      }}
    >
      <Flex width={'100%'} justify={'between'} align={'center'}>
        <Flex direction={'column'} gap={'2'}>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
            {placeName}
          </Text>
          <Text {...typoVariant.description2} style={{ color: colorPalette.gray[11] }}>
            {placeProvince} / {placeCity}
          </Text>
        </Flex>
        {/* TODO: pass props to onClick for button */}
        <Button colorVariant='BLUE' size={'3'}>
          <Text {...typoVariant.body3}>مشاهده نقطه</Text>
        </Button>
      </Flex>
      <Flex gap={'4'} px={'4'} align={'center'}>
        <Box width={'328px'} height={'150px'} position={'relative'}>
          {/* TODO: define alt  */}
          <Image width={328} height={150} src={`https://uploader.darkube.app/${picture}`} alt='' style={{ borderRadius: 8, objectFit: 'cover' }} />
        </Box>
        <Text {...typoVariant.paragraph2} style={{ color: colorPalette.gray[11] }}>
          {content}
        </Text>
      </Flex>
      <Flex width={'100%'} align={'center'} justify={'between'}>
        {/* <Controller name='isTop' control={control} render={({ field }) => <Checkbox {...field} label='تصویر برتر' onCheckedChange={checked => field.onChange(checked)} />} /> */}

        <Flex align={'center'} gap={'2'}>
          <Button size={'3'} colorVariant='BLUE' variant='soft'>
            <Flex align={'center'} gap={'2'}>
              <Check />
              <Text {...typoVariant.body1}>تایید و انتشار</Text>
            </Flex>
          </Button>
          <IconButton size={'3'} colorVariant='PINK' style={{ borderRadius: 12 }}>
            <Trash />
          </IconButton>
        </Flex>
      </Flex>
    </Grid>
  );
};

export default ImageSentCard;
