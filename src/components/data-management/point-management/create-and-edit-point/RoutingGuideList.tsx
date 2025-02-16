'use client';

import { useState } from 'react';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getTravelMethods } from '@/api/place';
import { Flex, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import RouteGuideCard from '../point-detail/routing-gide/RouteGuideCard';

/**
 * props
 * _______________________________________________________________________________
 */

type Props = {
  id: number;
};

const RoutingGuideList = ({ id }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [page, setPage] = useState(1);

  const { data } = useQuery({ queryKey: ['RoutingGuideList', page], queryFn: async () => await getTravelMethods(id, page) });

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */
  if (!data) return <Spinner style={{ margin: 'auto' }} />;

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Flex direction={'column'} gap={'24px'}>
      {data.filteredSuggestions.length === 0 ? (
        <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
          هیچ راهنمای مسیری ارسال نشده است.
        </Text>
      ) : (
        <Flex direction={'column'} pr={'36px'} gap={'16px'} style={{ flex: 1 }} position={'relative'}>
          <div style={{ position: 'absolute', height: '100%', right: '12px', border: `1px dashed ${colorPalette.gray[6]}` }} />
          {data.filteredSuggestions.map((item, index) => {
            return (
              <RouteGuideCard onDelete={() => alert('sfdfd')} id={index} description={item.description} type={item.travelMode as 'bus' | 'taxi' | 'subway' as any} key={index} cardType='route_sent' />
            );
          })}
        </Flex>
      )}
      <CustomPagination
        current={page}
        total={data?.totalPages as number}
        maxWidth={24}
        onPageChange={p => {
          setPage(p);
        }}
      />
    </Flex>
  );
};

export default RoutingGuideList;

/**
 * styled-component
 * _______________________________________________________________________________
 */
