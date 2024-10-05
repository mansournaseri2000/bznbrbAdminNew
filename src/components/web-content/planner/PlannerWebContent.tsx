import React from 'react';

import BannerDetail from '@/components/develope/web-content/banner-detail/BannerDetail';
import BannerItem from '@/components/develope/web-content/banner-item/BannerItem';
import { Button, Flex, Heading } from '@/libs/primitives';

const PlannerWebContent = () => {
  return (
    <Flex width={'100%'} direction={'column'} gap={'4'} p={'5'}>
      <BannerDetail
        header='بنر اول'
        bannerImage=''
        expirationDate='01 فروردین 1403'
        owner='شرکت پویان'
        title='پویان'
      />
      <BannerDetail
        header='بنر دوم'
        bannerImage=''
        expirationDate='01 فروردین 1403'
        owner='شرکت پویان'
        title='پویان'
      />
      <Heading>لیست بنر های داینامیک</Heading>
      <Flex direction={'column'} p={'4'} gap={'4'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
        <Button size={'3'} style={{ width: 'fit-content' }}>
          افزودن
        </Button>
        <BannerItem expirationDate='01 فروردین 1403' owner='شرکت پویان' title='پویان' />
        <BannerItem expirationDate='01 فروردین 1403' owner='شرکت پویان' title='پویان' />
      </Flex>
    </Flex>
  );
};

export default PlannerWebContent;
