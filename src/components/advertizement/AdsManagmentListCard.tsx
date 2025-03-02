'use client';

import { Button, Flex, Grid, Text } from '@/libs/primitives';
import { convertTimestampToPersianDate } from '@/libs/utils/convertTimestampToPersianDate';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

/**
 * props
 * _______________________________________________________________________________
 */

type Props = {
  type: 'main' | 'provinces' | 'other';
  lable: string;
  holder?: string;
  latestUpdatedAt: number;
  space: number;
  handleRedirectCities?: () => void;
  handleRedirectAdsManagment?: () => void;
};

const AdsManagmentListCard = ({ lable, latestUpdatedAt, space, type, holder, handleRedirectAdsManagment, handleRedirectCities }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Flex p={'16px'} justify={'between'} style={{ border: `1px solid ${colorPalette.gray[6]}`, borderRadius: '8px', backgroundColor: colorPalette.gray[2] }}>
      {/* right-section _______________________________________________________________________________*/}
      <Grid gap={'12px'}>
        <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
          {lable}
        </Text>
        <Flex align={'center'} gap={'8px'}>
          <Text {...typoVariant.description2} style={{ color: colorPalette.gray[10] }}>
            {type === 'main' ? 'تعداد تبلیغات' : 'بنر های خالی'}
          </Text>
          <Text {...typoVariant.description2} style={{ color: colorPalette.gray[12] }}>
            {space} عدد
          </Text>
        </Flex>
        <Flex align={'center'} gap={'8px'}>
          <Text {...typoVariant.description2} style={{ color: colorPalette.gray[10] }}>
            آخرین ویرایش
          </Text>
          <Text {...typoVariant.description2} style={{ color: colorPalette.gray[12] }}>
            {!Boolean(latestUpdatedAt) ? '_' : convertTimestampToPersianDate(latestUpdatedAt)}
          </Text>
        </Flex>
      </Grid>

      {/* left-section _______________________________________________________________________________*/}
      <Flex direction={'column'} justify={'between'} align={'end'}>
        {type === 'main' && (
          <Text {...typoVariant.body1} style={{ color: colorPalette.pink[9], paddingLeft: '4px' }}>
            {holder}
          </Text>
        )}
        {type === 'provinces' && (
          <Button
            variant='soft'
            size={'2'}
            onClick={() => {
              if (handleRedirectCities) {
                handleRedirectCities();
              }
            }}
          >
            <Text {...typoVariant.body3} style={{ color: colorPalette.gray[1] }}>
              شهرستان ها
            </Text>
          </Button>
        )}
        <Button
          variant='solid'
          size={'2'}
          style={{ marginBlockStart: 'auto' }}
          onClick={() => {
            if (handleRedirectAdsManagment) {
              handleRedirectAdsManagment();
            }
          }}
        >
          <Text {...typoVariant.body3} style={{ color: colorPalette.blue[12] }}>
            مدیریت تبلیغات
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default AdsManagmentListCard;

/**
 * styled-component
 * _______________________________________________________________________________
 */
