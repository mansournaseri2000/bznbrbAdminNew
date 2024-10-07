import React from 'react';

import BannerDetail from '@/components/develope/web-content/banner-detail/BannerDetail';
import { Flex } from '@/libs/primitives';

const MainWebContent = () => {
  return (
    <Flex width={'100%'} direction={'column'} gap={'4'}>
      <BannerDetail header='بنر اول' bannerImage='' expirationDate='01 فروردین 1403' owner='شرکت پویان' title='پویان' />
      <BannerDetail header='بنر دوم' bannerImage='' expirationDate='01 فروردین 1403' owner='شرکت پویان' title='پویان' />
    </Flex>
  );
};

export default MainWebContent;
