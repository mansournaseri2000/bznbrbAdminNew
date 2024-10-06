import React from 'react';

import { Button, Flex, Grid, Heading, Text, TextField } from '@/libs/primitives';
import { Divider } from '@/libs/shared';

// { params }: { params: { slug: 'create' | 'edit' } }

const imgItem = [1, 2, 3, 4, 5, 6];
const seoItems = [
  'تگ',
  'تگ',
  'تگ',
  'تگ',
  'تگ',
  'تگ',
  'تگ',
  'تگ',
  'تگ',
  'تگ',
  'تگ',
  'تگ',
  'تگ',
  'تگ',
  'تگ',
  'تگ',
  'تگ',
  'تگ',
  'تگ',
  'تگ',
];

export default function ArticleDetail() {
  return (
    <Flex width={'100%'} direction={'column'} gap={'4'} p={'5'}>
      {/* 
        ****
          top accordion _________________________________________________________________________________________________________
        ****
      */}
      <Flex direction={'column'} gap={'5'} p={'4'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
        <Heading>اطلاعات اولیه</Heading>
        <Grid width={'100%'} columns={'2'} gapX={'5'}>
          <TextField placeholder='عنوان مقاله' />
          <TextField placeholder='تاریخ انتشار' />
        </Grid>
        <Flex height={'144px'} px={'4'} py={'12px'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
          خلاصه مقاله
        </Flex>
        <Flex px={'4'} py={'12px'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
          Custom URL
        </Flex>
        <Flex height={'208px'} px={'4'} py={'12px'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
          متن مقاله
        </Flex>
        <Grid width={'100%'} columns={'2'} gap={'5'}>
          <TextField placeholder='نام منبع' />
          <TextField placeholder='لینک منبع' />
          <Flex align={'center'} gap={'4'}>
            <Text>checkbox</Text>
            <Text>نمایش در صفحه اصلی</Text>
          </Flex>
          <Flex align={'center'} gap={'4'}>
            <Text>checkbox</Text>
            <Text>نمایش در بالای لیست مقالات</Text>
          </Flex>
        </Grid>
      </Flex>
      {/* 
        ****
          center accordion _________________________________________________________________________________________________________
        ****
      */}
      <Flex direction={'column'} gap={'5'} p={'4'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
        <Heading>گالری تصاویر</Heading>
        <Button size={'3'} style={{ width: 'fit-content' }}>
          افزودن تصویر
        </Button>
        <Flex align={'center'} gap={'10px'}>
          {imgItem.map((item, index) => (
            <Flex
              width={'174px'}
              height={'224px'}
              direction={'column'}
              gap={'10px'}
              p={'12px'}
              key={index}
              style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}
            >
              {item}
            </Flex>
          ))}
        </Flex>
      </Flex>
      {/* 
        ****
          bottom accordion _________________________________________________________________________________________________________
        ****
      */}
      <Flex direction={'column'} gap={'5'} p={'4'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
        <Heading>تنظیمات SEO</Heading>
        <Flex width={'50%'} p={'4'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
          افزودن تگ
        </Flex>
        <Flex p={'4'} gap={'5'} wrap={'wrap'} style={{ border: '1px dashed #D4D4D4', borderRadius: 8 }}>
          {seoItems.map((item, index) => (
            <Text key={index} style={{ padding: '11px 16px', borderRadius: 16, backgroundColor: '#D4D4D4' }}>
              {item}
            </Text>
          ))}
        </Flex>
        <Divider />
        <Flex p={'4'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
          عنوان صفحه ( متا تایتل )
        </Flex>
        <Flex p={'4'} height={'144px'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
          توضیحات متا
        </Flex>
        <Divider />
        <Flex width={'50%'} p={'4'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
          کلمات کلیدی ( متا )
        </Flex>
        <Flex p={'4'} gap={'5'} wrap={'wrap'} style={{ border: '1px dashed #D4D4D4', borderRadius: 8 }}>
          {seoItems.map((item, index) => (
            <Text key={index} style={{ padding: '11px 16px', borderRadius: 16, backgroundColor: '#D4D4D4' }}>
              {item}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
