import React from 'react';

import { Flex } from '@/libs/primitives';

import RouteGuideCard from './routing-gide/RouteGuideCard';

type item = {
  title: string;
  description: string | null;
  type: string;
};

type Props = {
  data: item[];
};

const RouteGuideSend = ({ data }: Props) => {
  return (
    <Flex justify={'between'} gap={'20px'} pr={'8px'}>
      {data.length !== 0 && <div style={{ height: 'auto', width: '1px', borderRight: '1px dashed #0000003c' }} />}
      <Flex direction={'column'} gap={'16px'} style={{ flex: 1 }}>
        {data.map((item, index) => {
          return <RouteGuideCard id={index} description={item.description} title={item.title} type={item.type as 'bus' | 'taxi' | 'subway'} key={index} cardType='route_sent' />;
        })}
      </Flex>
    </Flex>
  );
};

export default RouteGuideSend;
