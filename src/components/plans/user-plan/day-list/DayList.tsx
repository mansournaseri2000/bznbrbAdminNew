'use client';

import { memo } from 'react';

import styled from 'styled-components';

import { daysKey } from '@/constants/plans';
import { Flex } from '@/libs/primitives';
import { formatToPersianDate } from '@/libs/utils/formatToPersianDate';
import { colorPalette } from '@/theme';
import { Day } from '@/types/plans/trip';

import DayListCard from './DayListCard';

/**
 * props
 * _______________________________________________________________________________
 */

type Props = {
  dayList: Day[];
  onChangeDay: (value: number) => void;
  currentDayId: number;
};

const DayList = ({ dayList, onChangeDay, currentDayId }: Props) => {
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
    <Root gap={'10px'} overflowX={'scroll'} minHeight={{ initial: '55px', lg: '63px' }} px={'4px'} style={{ borderBottom: `1px solid ${colorPalette.gray[6]}` }} width={'100%'}>
      {dayList.map((item, index) => {
        const day = daysKey.filter(item => item.id === index)[0];
        return (
          <DayListCard
            isSelected={item.day_id === currentDayId}
            onClick={() => onChangeDay(item.day_id)}
            key={index}
            value={formatToPersianDate({ isoDate: item.date })}
            title={Boolean(day) ? day.key : ''}
            dayID={item.day_id}
          />
        );
      })}
    </Root>
  );
};

export default memo(DayList);

/**
 * styled-component
 * _______________________________________________________________________________
 */

const Root = styled(Flex)`
  overflow-x: scroll;
  overflow-y: auto;
  scrollbar-width: 100%;
  -ms-overflow-style: auto;
  scroll-behavior: smooth;
  background-color: ${colorPalette.gray[1]};
`;
