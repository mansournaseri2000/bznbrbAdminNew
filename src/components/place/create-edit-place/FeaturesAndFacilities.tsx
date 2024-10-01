'use client';

import { CaretDownIcon } from '@radix-ui/react-icons';
import { Button, Flex, Popover } from '@radix-ui/themes';

import { CheckboxGroup, Grid, Text } from '@/libs/primitives';
import { colorPalette } from '@/theme';
import { Feature } from '@/types/place/place-constant';

import Container from './Container';

/**
 * props
 * _______________________________________________________________________________
 */

type Props = {
  featureItems: Feature[];
};

const FeaturesAndFacilities = ({ featureItems }: Props) => {
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
    <Container height='auto' title='ویژگی ها و امکانات'>
      <Grid height={'max-content'} gap={'16px'} columns={'3'}>
        {featureItems.map((featureItem, index) => (
          <Popover.Root key={index}>
            <Popover.Trigger>
              <Button
                style={{
                  paddingInline: '15px',
                  borderRadius: '8px',
                  border: `1px solid ${colorPalette.gray[7]}`,
                  color: colorPalette.gray[9],
                  backgroundColor: '#fff',
                }}
                variant='solid'
                size={'4'}
              >
                <Flex align={'center'} width={'100%'} justify={'between'}>
                  <Text>{featureItem.name}</Text>
                  <CaretDownIcon style={{ scale: 1.5 }} />
                </Flex>
              </Button>
            </Popover.Trigger>
            <Popover.Content width='360px'>
              <Flex gap='3'>
                <CheckboxGroup isRow={false} items={featureItem.features} store={'features'} />
              </Flex>
            </Popover.Content>
          </Popover.Root>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturesAndFacilities;

/**
 * styled-component
 * _______________________________________________________________________________
 */
