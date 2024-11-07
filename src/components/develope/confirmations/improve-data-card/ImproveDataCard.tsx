import React from 'react';

import { Button, Flex, Grid, IconButton, Text } from '@/libs/primitives';
import { Check, EyeOpen, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { ImproveDataDetail } from '@/types/confirmations/improve-data';

type CardProps = ImproveDataDetail & {
  onShowPoint?: () => void;
  onDelete?: () => void;
  colorVariant: 'blue' | 'pink';
};

const ImproveDataCard: React.FC<CardProps> = (props: CardProps) => {
  const { colorVariant, point, mobile, website, email, province, city, content } = props;
  return (
    <Grid
      width={'100%'}
      gapY={'5'}
      p={'4'}
      style={{
        borderRadius: 8,
        backgroundColor: colorVariant === 'blue' ? colorPalette.blue[2] : colorPalette.pink[2],
        border: colorVariant === 'blue' ? `1px solid ${colorPalette.blue[6]}` : `1px solid ${colorPalette.pink[6]}`,
      }}
    >
      <Flex width={'100%'} justify={'between'} align={'center'}>
        <Flex direction={'column'} gap={'2'}>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
            {point.name}
          </Text>
          <Text {...typoVariant.description2} style={{ color: colorPalette.gray[11] }}>
            {`${point.Province} / ${point.city}`}
          </Text>
        </Flex>
        {/* TODO: pass props to onClick for button */}
        <Button colorVariant='BLUE' size={'3'}>
          <Text {...typoVariant.body3}>مشاهده نقطه</Text>
        </Button>
      </Flex>
      <Grid width={'3'} columns={'3'} gapY={'5'}>
        <Item label='نام نقطه' value={point.name} />
        <Item label='شماره تماس' value={mobile} />
        <Item label='وب سایت' value={website} />
        <Item label='ایمیل' value={email} />
        <Item label='استان' value={province} />
        <Item label='شهر' value={city} />
      </Grid>
      <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11] }}>
        {content}
      </Text>
      <Flex width={'100%'} align={'center'} justify={'between'}>
        <Flex align={'center'} gap={'2'} px={'2'} py={'4'}>
          {/* TODO: use IsRead props to handle this section */}
          <EyeOpen />
          <Text {...typoVariant.body3} style={{ color: colorPalette.blue[11] }}>
            خوانده شد
          </Text>
        </Flex>

        <IconButton size={'3'} colorVariant='PINK' style={{ borderRadius: 12 }}>
          <Trash />
        </IconButton>
      </Flex>
    </Grid>
  );
};

export default ImproveDataCard;

const Item = ({ label, value }: { label: string; value: string }) => (
  <Flex align={'center'} gap={'2'}>
    <Text {...typoVariant.body2} style={{ color: colorPalette.gray[10] }}>
      {label}
    </Text>
    <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
      {value}
    </Text>
  </Flex>
);
