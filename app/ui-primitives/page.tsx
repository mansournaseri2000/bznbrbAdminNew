import React from 'react';

import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

import { Button, Flex, Grid, IconButton, Text, TextField } from '@/libs/primitives';
import CustomPlannerButton from '@/libs/primitives/components/CustomPlannerButton';
import { Divider } from '@/libs/shared';
import { TriangleLeft } from '@/public/icon';
import { colorPalette } from '@/theme';
import '@/theme/globals.css';
import '@/theme/theme.config.css';
import { typoVariant } from '@/theme/typo-variants';

const UiPrimitivesPage = () => {
  return (
    <Theme>
      <Grid columns={'3'} gap={'20px'} px={'7'} py={'5'}>
        {/* 
        ***
          BLUE
        ***
        */}
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'4'} colorVariant='BLUE' variant='soft'>
            <Text {...typoVariant.body1} style={{ color: colorPalette.gray[1] }}>
              عنوان
            </Text>
          </Button>
          <Button size={'4'} colorVariant='BLUE' variant='outline'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'4'} colorVariant='BLUE' variant='ghost'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'4'} colorVariant='BLUE' variant='surface'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'4'} colorVariant='BLUE' variant='soft' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'4'} colorVariant='BLUE' variant='outline' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'4'} colorVariant='BLUE' variant='ghost' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'4'} colorVariant='BLUE' variant='surface' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
        </Grid>
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'4'} colorVariant='BLUE' variant='soft'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[1] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[1]} />
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLUE' variant='outline'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLUE' variant='ghost'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLUE' variant='surface'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLUE' variant='soft' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLUE' variant='outline' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLUE' variant='ghost' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLUE' variant='surface' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
        </Grid>
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'4'} colorVariant='BLUE' variant='soft'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[1]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLUE' variant='outline'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLUE' variant='ghost'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLUE' variant='surface'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLUE' variant='soft' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLUE' variant='outline' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLUE' variant='ghost' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLUE' variant='surface' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
        </Grid>

        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'3'} colorVariant='BLUE' variant='soft'>
            <Text {...typoVariant.body1} style={{ color: colorPalette.gray[1] }}>
              عنوان
            </Text>
          </Button>
          <Button size={'3'} colorVariant='BLUE' variant='outline'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'3'} colorVariant='BLUE' variant='ghost'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'3'} colorVariant='BLUE' variant='surface'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'3'} colorVariant='BLUE' variant='soft' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'3'} colorVariant='BLUE' variant='outline' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'3'} colorVariant='BLUE' variant='ghost' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'3'} colorVariant='BLUE' variant='surface' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
        </Grid>
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'3'} colorVariant='BLUE' variant='soft'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[1] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[1]} />
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLUE' variant='outline'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLUE' variant='ghost'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLUE' variant='surface'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLUE' variant='soft' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLUE' variant='outline' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLUE' variant='ghost' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLUE' variant='surface' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
        </Grid>
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'3'} colorVariant='BLUE' variant='soft'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[1]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLUE' variant='outline'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLUE' variant='ghost'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLUE' variant='surface'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLUE' variant='soft' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLUE' variant='outline' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLUE' variant='ghost' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLUE' variant='surface' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
        </Grid>

        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'2'} colorVariant='BLUE' variant='soft'>
            <Text {...typoVariant.body1} style={{ color: colorPalette.gray[1] }}>
              عنوان
            </Text>
          </Button>
          <Button size={'2'} colorVariant='BLUE' variant='outline'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'2'} colorVariant='BLUE' variant='ghost'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'2'} colorVariant='BLUE' variant='surface'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'2'} colorVariant='BLUE' variant='soft' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'2'} colorVariant='BLUE' variant='outline' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'2'} colorVariant='BLUE' variant='ghost' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'2'} colorVariant='BLUE' variant='surface' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
        </Grid>
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'2'} colorVariant='BLUE' variant='soft'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[1] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[1]} />
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLUE' variant='outline'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLUE' variant='ghost'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLUE' variant='surface'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLUE' variant='soft' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLUE' variant='outline' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLUE' variant='ghost' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLUE' variant='surface' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
        </Grid>
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'2'} colorVariant='BLUE' variant='soft'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[1]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLUE' variant='outline'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLUE' variant='ghost'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLUE' variant='surface'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLUE' variant='soft' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLUE' variant='outline' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLUE' variant='ghost' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLUE' variant='surface' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
        </Grid>

        {/* 
        ***
          PINK
        ***
        */}

        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'4'} colorVariant='PINK' variant='soft'>
            <Text {...typoVariant.body1} style={{ color: colorPalette.gray[1] }}>
              عنوان
            </Text>
          </Button>
          <Button size={'4'} colorVariant='PINK' variant='outline'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'4'} colorVariant='PINK' variant='ghost'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'4'} colorVariant='PINK' variant='surface'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'4'} colorVariant='PINK' variant='soft' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'4'} colorVariant='PINK' variant='outline' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'4'} colorVariant='PINK' variant='ghost' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'4'} colorVariant='PINK' variant='surface' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
        </Grid>
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'4'} colorVariant='PINK' variant='soft'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[1] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[1]} />
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='PINK' variant='outline'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='PINK' variant='ghost'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='PINK' variant='surface'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='PINK' variant='soft' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='PINK' variant='outline' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='PINK' variant='ghost' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='PINK' variant='surface' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
        </Grid>
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'4'} colorVariant='PINK' variant='soft'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[1]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='PINK' variant='outline'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='PINK' variant='ghost'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='PINK' variant='surface'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='PINK' variant='soft' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='PINK' variant='outline' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='PINK' variant='ghost' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='PINK' variant='surface' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
        </Grid>

        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'3'} colorVariant='PINK' variant='soft'>
            <Text {...typoVariant.body1} style={{ color: colorPalette.gray[1] }}>
              عنوان
            </Text>
          </Button>
          <Button size={'3'} colorVariant='PINK' variant='outline'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'3'} colorVariant='PINK' variant='ghost'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'3'} colorVariant='PINK' variant='surface'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'3'} colorVariant='PINK' variant='soft' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'3'} colorVariant='PINK' variant='outline' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'3'} colorVariant='PINK' variant='ghost' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'3'} colorVariant='PINK' variant='surface' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
        </Grid>
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'3'} colorVariant='PINK' variant='soft'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[1] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[1]} />
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='PINK' variant='outline'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='PINK' variant='ghost'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='PINK' variant='surface'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='PINK' variant='soft' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='PINK' variant='outline' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='PINK' variant='ghost' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='PINK' variant='surface' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
        </Grid>
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'3'} colorVariant='PINK' variant='soft'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[1]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='PINK' variant='outline'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='PINK' variant='ghost'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='PINK' variant='surface'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='PINK' variant='soft' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='PINK' variant='outline' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='PINK' variant='ghost' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='PINK' variant='surface' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
        </Grid>

        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'2'} colorVariant='PINK' variant='soft'>
            <Text {...typoVariant.body1} style={{ color: colorPalette.gray[1] }}>
              عنوان
            </Text>
          </Button>
          <Button size={'2'} colorVariant='PINK' variant='outline'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'2'} colorVariant='PINK' variant='ghost'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'2'} colorVariant='PINK' variant='surface'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'2'} colorVariant='PINK' variant='soft' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'2'} colorVariant='PINK' variant='outline' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'2'} colorVariant='PINK' variant='ghost' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'2'} colorVariant='PINK' variant='surface' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
        </Grid>
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'2'} colorVariant='PINK' variant='soft'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[1] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[1]} />
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='PINK' variant='outline'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='PINK' variant='ghost'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='PINK' variant='surface'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='PINK' variant='soft' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='PINK' variant='outline' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='PINK' variant='ghost' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='PINK' variant='surface' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
        </Grid>
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'2'} colorVariant='PINK' variant='soft'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[1]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='PINK' variant='outline'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='PINK' variant='ghost'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='PINK' variant='surface'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='PINK' variant='soft' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='PINK' variant='outline' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='PINK' variant='ghost' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='PINK' variant='surface' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
        </Grid>

        {/* 
        ***
          BLACK
        ***
        */}
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'4'} colorVariant='BLACK' variant='soft'>
            <Text {...typoVariant.body1} style={{ color: colorPalette.gray[1] }}>
              عنوان
            </Text>
          </Button>
          <Button size={'4'} colorVariant='BLACK' variant='outline'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'4'} colorVariant='BLACK' variant='ghost'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'4'} colorVariant='BLACK' variant='surface'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'4'} colorVariant='BLACK' variant='soft' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'4'} colorVariant='BLACK' variant='outline' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'4'} colorVariant='BLACK' variant='ghost' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'4'} colorVariant='BLACK' variant='surface' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
        </Grid>
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'4'} colorVariant='BLACK' variant='soft'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[1] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[1]} />
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLACK' variant='outline'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLACK' variant='ghost'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLACK' variant='surface'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLACK' variant='soft' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLACK' variant='outline' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLACK' variant='ghost' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLACK' variant='surface' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
        </Grid>
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'4'} colorVariant='BLACK' variant='soft'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[1]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLACK' variant='outline'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLACK' variant='ghost'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLACK' variant='surface'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLACK' variant='soft' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLACK' variant='outline' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLACK' variant='ghost' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'4'} colorVariant='BLACK' variant='surface' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
        </Grid>

        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'3'} colorVariant='BLACK' variant='soft'>
            <Text {...typoVariant.body1} style={{ color: colorPalette.gray[1] }}>
              عنوان
            </Text>
          </Button>
          <Button size={'3'} colorVariant='BLACK' variant='outline'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'3'} colorVariant='BLACK' variant='ghost'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'3'} colorVariant='BLACK' variant='surface'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'3'} colorVariant='BLACK' variant='soft' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'3'} colorVariant='BLACK' variant='outline' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'3'} colorVariant='BLACK' variant='ghost' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'3'} colorVariant='BLACK' variant='surface' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
        </Grid>
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'3'} colorVariant='BLACK' variant='soft'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[1] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[1]} />
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLACK' variant='outline'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLACK' variant='ghost'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLACK' variant='surface'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLACK' variant='soft' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLACK' variant='outline' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLACK' variant='ghost' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLACK' variant='surface' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
        </Grid>
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'3'} colorVariant='BLACK' variant='soft'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[1]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLACK' variant='outline'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLACK' variant='ghost'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLACK' variant='surface'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLACK' variant='soft' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLACK' variant='outline' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLACK' variant='ghost' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'3'} colorVariant='BLACK' variant='surface' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
        </Grid>

        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'2'} colorVariant='BLACK' variant='soft'>
            <Text {...typoVariant.body1} style={{ color: colorPalette.gray[1] }}>
              عنوان
            </Text>
          </Button>
          <Button size={'2'} colorVariant='BLACK' variant='outline'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'2'} colorVariant='BLACK' variant='ghost'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'2'} colorVariant='BLACK' variant='surface'>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'2'} colorVariant='BLACK' variant='soft' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'2'} colorVariant='BLACK' variant='outline' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'2'} colorVariant='BLACK' variant='ghost' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
          <Button size={'2'} colorVariant='BLACK' variant='surface' disabled>
            <Text {...typoVariant.body1}>عنوان</Text>
          </Button>
        </Grid>
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'2'} colorVariant='BLACK' variant='soft'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[1] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[1]} />
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLACK' variant='outline'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLACK' variant='ghost'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLACK' variant='surface'>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>عنوان</Text>
              <TriangleLeft color={colorPalette.blue[10]} />
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLACK' variant='soft' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLACK' variant='outline' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLACK' variant='ghost' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLACK' variant='surface' disabled>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
              <TriangleLeft color={colorPalette.gray[8]} />
            </Flex>
          </Button>
        </Grid>
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <Button size={'2'} colorVariant='BLACK' variant='soft'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[1]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLACK' variant='outline'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLACK' variant='ghost'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLACK' variant='surface'>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.blue[10]} />
              <Text {...typoVariant.body1}>عنوان</Text>
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLACK' variant='soft' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLACK' variant='outline' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLACK' variant='ghost' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
          <Button size={'2'} colorVariant='BLACK' variant='surface' disabled>
            <Flex gap={'2'} align={'center'}>
              <TriangleLeft color={colorPalette.gray[8]} />
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[8] }}>
                عنوان
              </Text>
            </Flex>
          </Button>
        </Grid>

        <Divider style={{ backgroundColor: 'red' }} />
        <Divider style={{ backgroundColor: 'red' }} />
        <Divider style={{ backgroundColor: 'red' }} />

        {/* 
        ***
          ICON BUTTONS
        ***
        */}

        {/* 
        ***
          BLUE
        ***
        */}
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <IconButton size={'4'} colorVariant='BLUE' variant='soft'>
            <TriangleLeft color={colorPalette.gray[1]} />
          </IconButton>
          <IconButton size={'4'} colorVariant='BLUE' variant='outline'>
            <TriangleLeft color={colorPalette.blue[10]} />
          </IconButton>
          <IconButton size={'4'} colorVariant='BLUE' variant='ghost'>
            <TriangleLeft color={colorPalette.gray[1]} />
          </IconButton>
          <IconButton size={'4'} colorVariant='BLUE' variant='surface'>
            <TriangleLeft color={colorPalette.blue[10]} />
          </IconButton>
          <IconButton size={'4'} colorVariant='BLUE' variant='soft' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'4'} colorVariant='BLUE' variant='outline' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'4'} colorVariant='BLUE' variant='ghost' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'4'} colorVariant='BLUE' variant='surface' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
        </Grid>
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <IconButton size={'3'} colorVariant='BLUE' variant='soft'>
            <TriangleLeft color={colorPalette.gray[1]} />
          </IconButton>
          <IconButton size={'3'} colorVariant='BLUE' variant='outline'>
            <TriangleLeft color={colorPalette.blue[10]} />
          </IconButton>
          <IconButton size={'3'} colorVariant='BLUE' variant='ghost'>
            <TriangleLeft color={colorPalette.gray[1]} />
          </IconButton>
          <IconButton size={'3'} colorVariant='BLUE' variant='surface'>
            <TriangleLeft color={colorPalette.blue[10]} />
          </IconButton>
          <IconButton size={'3'} colorVariant='BLUE' variant='soft' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'3'} colorVariant='BLUE' variant='outline' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'3'} colorVariant='BLUE' variant='ghost' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'3'} colorVariant='BLUE' variant='surface' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
        </Grid>
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <IconButton size={'2'} colorVariant='BLUE' variant='soft'>
            <TriangleLeft color={colorPalette.gray[1]} />
          </IconButton>
          <IconButton size={'2'} colorVariant='BLUE' variant='outline'>
            <TriangleLeft color={colorPalette.blue[10]} />
          </IconButton>
          <IconButton size={'2'} colorVariant='BLUE' variant='ghost'>
            <TriangleLeft color={colorPalette.gray[1]} />
          </IconButton>
          <IconButton size={'2'} colorVariant='BLUE' variant='surface'>
            <TriangleLeft color={colorPalette.blue[10]} />
          </IconButton>
          <IconButton size={'2'} colorVariant='BLUE' variant='soft' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'2'} colorVariant='BLUE' variant='outline' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'2'} colorVariant='BLUE' variant='ghost' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'2'} colorVariant='BLUE' variant='surface' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
        </Grid>

        {/* 
        ***
          PINK
        ***
        */}
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <IconButton size={'4'} colorVariant='PINK' variant='soft'>
            <TriangleLeft color={colorPalette.gray[1]} />
          </IconButton>
          <IconButton size={'4'} colorVariant='PINK' variant='outline'>
            <TriangleLeft color={colorPalette.blue[10]} />
          </IconButton>
          <IconButton size={'4'} colorVariant='PINK' variant='ghost'>
            <TriangleLeft color={colorPalette.gray[1]} />
          </IconButton>
          <IconButton size={'4'} colorVariant='PINK' variant='surface'>
            <TriangleLeft color={colorPalette.blue[10]} />
          </IconButton>
          <IconButton size={'4'} colorVariant='PINK' variant='soft' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'4'} colorVariant='PINK' variant='outline' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'4'} colorVariant='PINK' variant='ghost' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'4'} colorVariant='PINK' variant='surface' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
        </Grid>
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <IconButton size={'3'} colorVariant='PINK' variant='soft'>
            <TriangleLeft color={colorPalette.gray[1]} />
          </IconButton>
          <IconButton size={'3'} colorVariant='PINK' variant='outline'>
            <TriangleLeft color={colorPalette.blue[10]} />
          </IconButton>
          <IconButton size={'3'} colorVariant='PINK' variant='ghost'>
            <TriangleLeft color={colorPalette.gray[1]} />
          </IconButton>
          <IconButton size={'3'} colorVariant='PINK' variant='surface'>
            <TriangleLeft color={colorPalette.blue[10]} />
          </IconButton>
          <IconButton size={'3'} colorVariant='PINK' variant='soft' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'3'} colorVariant='PINK' variant='outline' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'3'} colorVariant='PINK' variant='ghost' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'3'} colorVariant='PINK' variant='surface' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
        </Grid>
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <IconButton size={'2'} colorVariant='PINK' variant='soft'>
            <TriangleLeft color={colorPalette.gray[1]} />
          </IconButton>
          <IconButton size={'2'} colorVariant='PINK' variant='outline'>
            <TriangleLeft color={colorPalette.blue[10]} />
          </IconButton>
          <IconButton size={'2'} colorVariant='PINK' variant='ghost'>
            <TriangleLeft color={colorPalette.gray[1]} />
          </IconButton>
          <IconButton size={'2'} colorVariant='PINK' variant='surface'>
            <TriangleLeft color={colorPalette.blue[10]} />
          </IconButton>
          <IconButton size={'2'} colorVariant='PINK' variant='soft' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'2'} colorVariant='PINK' variant='outline' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'2'} colorVariant='PINK' variant='ghost' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'2'} colorVariant='PINK' variant='surface' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
        </Grid>

        {/* 
        ***
          PINK
        ***
        */}
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <IconButton size={'4'} colorVariant='BLACK' variant='soft'>
            <TriangleLeft color={colorPalette.gray[1]} />
          </IconButton>
          <IconButton size={'4'} colorVariant='BLACK' variant='outline'>
            <TriangleLeft color={colorPalette.blue[10]} />
          </IconButton>
          <IconButton size={'4'} colorVariant='BLACK' variant='ghost'>
            <TriangleLeft color={colorPalette.gray[1]} />
          </IconButton>
          <IconButton size={'4'} colorVariant='BLACK' variant='surface'>
            <TriangleLeft color={colorPalette.blue[10]} />
          </IconButton>
          <IconButton size={'4'} colorVariant='BLACK' variant='soft' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'4'} colorVariant='BLACK' variant='outline' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'4'} colorVariant='BLACK' variant='ghost' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'4'} colorVariant='BLACK' variant='surface' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
        </Grid>
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <IconButton size={'3'} colorVariant='BLACK' variant='soft'>
            <TriangleLeft color={colorPalette.gray[1]} />
          </IconButton>
          <IconButton size={'3'} colorVariant='BLACK' variant='outline'>
            <TriangleLeft color={colorPalette.blue[10]} />
          </IconButton>
          <IconButton size={'3'} colorVariant='BLACK' variant='ghost'>
            <TriangleLeft color={colorPalette.gray[1]} />
          </IconButton>
          <IconButton size={'3'} colorVariant='BLACK' variant='surface'>
            <TriangleLeft color={colorPalette.blue[10]} />
          </IconButton>
          <IconButton size={'3'} colorVariant='BLACK' variant='soft' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'3'} colorVariant='BLACK' variant='outline' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'3'} colorVariant='BLACK' variant='ghost' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'3'} colorVariant='BLACK' variant='surface' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
        </Grid>
        <Grid columns={'4'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <IconButton size={'2'} colorVariant='BLACK' variant='soft'>
            <TriangleLeft color={colorPalette.gray[1]} />
          </IconButton>
          <IconButton size={'2'} colorVariant='BLACK' variant='outline'>
            <TriangleLeft color={colorPalette.blue[10]} />
          </IconButton>
          <IconButton size={'2'} colorVariant='BLACK' variant='ghost'>
            <TriangleLeft color={colorPalette.gray[1]} />
          </IconButton>
          <IconButton size={'2'} colorVariant='BLACK' variant='surface'>
            <TriangleLeft color={colorPalette.blue[10]} />
          </IconButton>
          <IconButton size={'2'} colorVariant='BLACK' variant='soft' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'2'} colorVariant='BLACK' variant='outline' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'2'} colorVariant='BLACK' variant='ghost' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
          <IconButton size={'2'} colorVariant='BLACK' variant='surface' disabled>
            <TriangleLeft color={colorPalette.gray[10]} />
          </IconButton>
        </Grid>

        <Divider style={{ backgroundColor: 'red' }} />
        <Divider style={{ backgroundColor: 'red' }} />
        <Divider style={{ backgroundColor: 'red' }} />

        {/* 
        ***
          CUSTOM PLANNER BUTTON
        ***
        */}
        <Grid columns={'1'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <CustomPlannerButton error={false} isFill={true} value={'استان'} size={'4'} />
        </Grid>
        <Grid columns={'1'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <CustomPlannerButton error={true} isFill={true} value={'استان'} size={'4'} />
        </Grid>
        <Grid columns={'1'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <CustomPlannerButton error={false} isFill={true} value={'استان'} size={'4'} disabled />
        </Grid>
        {/* 
        ***
          TextField
        ***
        */}
        <Grid columns={'1'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <TextField placeholder='متن' />
        </Grid>
        <Grid columns={'1'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <TextField placeholder='متن' error />
        </Grid>
        <Grid columns={'1'} gap={'20px'} p={'4'} style={{ border: '1px solid red' }}>
          <TextField placeholder='متن' disabled />
        </Grid>
      </Grid>
    </Theme>
  );
};

export default UiPrimitivesPage;