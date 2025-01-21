'use client';

import { useState } from 'react';

import { Flex } from '@radix-ui/themes';
import styled from 'styled-components';

import { Grid } from '@/libs/primitives';
import { CommonView } from '@/types/plans/trip';

import CommonViewCard from './CommonViewCard';

/**
 * props
 * _______________________________________________________________________________
 */

type Props = {
  listItem: CommonView[];
  //   addCommentData: TripResponse;
  dayID: number;
};

const TripCommonView = ({ listItem, dayID }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [isExpand, setIsExpand] = useState<{ isOpen: boolean; id: number | null }>({
    isOpen: false,
    id: null,
  });

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
    <Grid height={'calc(100vh - 520px)'} overflowY={'scroll'} width={'100%'}>
      <Flex gap={'13px'} p={{ initial: '0px 8px', lg: '0px 16px' }}>
        <Divider />
        <Flex style={{ flex: 1 }} direction={'column'} gap={'10px'} py={'4px'}>
          {listItem?.map((item, index) => {
            return (
              <>
                {item.type === 'place' && (
                  <CommonViewCard
                    onClick={() =>
                      setIsExpand({
                        isOpen: true,
                        id: item.point_id,
                      })
                    }
                    point_id={item.point_id}
                    isExpand={item.point_id === isExpand.id ? true : false}
                    dayID={dayID}
                    count={index}
                    description={item.description}
                    distanceToNextDestination={Number(item.distance.toFixed(0))}
                    tripID={item.point_id}
                    time={item.startTime as string}
                    title={item.title as string}
                    type={item.type}
                    comment={item.comment}
                  />
                )}
              </>
            );
          })}
        </Flex>
      </Flex>
    </Grid>
  );
};

export default TripCommonView;

/**
 * styled-component
 * _______________________________________________________________________________
 */

const Divider = styled.div`
  height: auto;
  border-right: 1px dashed #00000023;
`;
