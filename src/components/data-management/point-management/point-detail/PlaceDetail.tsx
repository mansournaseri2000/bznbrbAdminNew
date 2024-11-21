'use client';

import { useRef, useState } from 'react';

import dynamic from 'next/dynamic';

import { Skeleton } from '@radix-ui/themes';

import { Button, Flex, Grid, Text } from '@/libs/primitives';
import { Divider } from '@/libs/shared';
import { typoVariant } from '@/theme/typo-variants';
import { PlaceDetail } from '@/types/data-management/point';

const ClientRenderText = dynamic(() => import('@/libs/shared/ClientRenderText'), {
  ssr: false,
  loading: () => <Skeleton loading height={'30px'} style={{ borderRadius: '4px' }} />,
});

type Props = {
  data: PlaceDetail[];
};

const PlaceDetails = ({ data }: Props) => {
  const [key, setKey] = useState(data[0]?.name);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleScrollToPosition = (id: string) => {
    const targetElement = itemRefs.current[id];
    if (targetElement) {
      const offset = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleButtonClick = (itemName: string, itemId: string) => {
    setKey(itemName);
    handleScrollToPosition(itemId);
  };

  return (
    <Grid gap={'24px'}>
      <Flex gap={'16px'} wrap={'nowrap'} overflowX={'scroll'}>
        {data.map(item => (
          <Button
            onClick={() => handleButtonClick(item.name, String(item.id))}
            style={{ cursor: 'pointer', minWidth: '150px' }}
            variant={key === item.name ? 'soft' : 'ghost'}
            size={'3'}
            key={item.id}
            value={item.name}
          >
            <Text {...typoVariant.body1}>{item.name}</Text>
          </Button>
        ))}
      </Flex>
      <Divider />
      <Grid gap={'24px'}>
        {data.map(item => (
          <Grid
            gap={'8px'}
            minHeight={'max-content'}
            ref={el => (itemRefs.current[String(item.id)] = el) as any}
            key={item.id}
          >
            <Text {...typoVariant.title2}>{item.name}</Text>
            <ClientRenderText id={item.name} text={item.description} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default PlaceDetails;
