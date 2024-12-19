import React from 'react';

import { Flex } from '@/libs/primitives';
import { travelModeOptions } from '@/types/place/find-place';

import RouteGuideCard from './routing-gide/RouteGuideCard';

type item = {
  description: string | null;
  travelMode: travelModeOptions;
};

type Props = {
  data: item[];
  onDelete?: () => void;
  onPublish?: () => void;
};

const RouteGuideSend = ({ data, onDelete, onPublish }: Props) => {
  return (
    <Flex justify={'between'} gap={'20px'} pr={'8px'}>
      {data.length !== 0 && <div style={{ height: 'auto', width: '1px', borderRight: '1px dashed #0000003c' }} />}
      <Flex direction={'column'} gap={'16px'} style={{ flex: 1 }}>
        {data.map((item, index) => {
          return <RouteGuideCard id={index} description={item.description} type={item.travelMode} key={index} cardType='route_sent' onDelete={onDelete} onPublish={onPublish} />;
        })}
      </Flex>
    </Flex>
  );
};

export default RouteGuideSend;
