'use client';

import { useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import DatePicker from 'react-multi-date-picker';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';

import { RadioGroup } from '@radix-ui/themes';
import { styled } from 'styled-components';

import { placeWorkTimeSchedule } from '@/constants/place';
import { Flex, Grid, Text } from '@/libs/primitives';
import CustomTimePicker from '@/libs/shared/CustomTimePicker';
import { timeStringToDate } from '@/libs/utils';
import { Boxshadow, colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import Container from './Container';

/**
 * props
 * _______________________________________________________________________________
 */

export type PlaceWorkTimes = {
  dayOfWeek: string;
  type: string;
  isTimed: boolean;
  timing: { time: string; key: string; faKey: string }[];
};

export type Timing = { time: string; key: string; faKey: string };

export type PlaceWorkTimeSchedule = {
  dayOfWeek: string;
  faDay: string;
  isTimed: boolean;
  timing: Timing[];
  type: { key: string; value: string }[];
};
export type NewPlaceWorkTimeData = {
  dayOfWeek: string;
  firstOpenTime: string;
  firstCloseTime: string;
  secondOpenTime: string;
  secondCloseTime: string;
  type: string | null;
};

export const serializePlaceWorkTimes = (schedule: PlaceWorkTimeSchedule[], newData: NewPlaceWorkTimeData[]): PlaceWorkTimes[] => {
  return schedule.map(day => {
    // Find matching data by dayOfWeek
    const matchingData = newData?.find(item => item.dayOfWeek === day.dayOfWeek);

    // Determine the type based on matchingData or original day.type
    const type =
      matchingData?.type || // Use the type from matchingData if available
      day.type.find(t => t.key === 'TIMED')?.key || // Otherwise, check if the type is 'TIMED'
      day.type.find(t => t.key === 'CLOSED')?.key || // Or check for 'CLOSED'
      day.type.find(t => t.key === 'OPEN')?.key || // Or check for 'OPEN'
      'TIMED'; // Default to 'TIMED' if no type is found

    // If type is OPEN or CLOSED, set all timing values to "00:00"
    const timing =
      type === 'OPEN' || type === 'CLOSED'
        ? [
            { time: '00:00', key: 'firstOpenTime', faKey: 'ساعت شروع اول' },
            { time: '00:00', key: 'secondOpenTime', faKey: 'ساعت شروع دوم' },
            { time: '00:00', key: 'firstCloseTime', faKey: 'ساعت پایان اول' },
            { time: '00:00', key: 'secondCloseTime', faKey: 'ساعت پایان دوم' },
          ]
        : matchingData
        ? [
            {
              time: matchingData.firstOpenTime || '00:00', // Default to '00:00' if null
              key: 'firstOpenTime',
              faKey: 'ساعت شروع اول',
            },
            {
              time: matchingData.secondOpenTime || '00:00', // Default to '00:00' if null
              key: 'secondOpenTime',
              faKey: 'ساعت شروع دوم',
            },
            {
              time: matchingData.firstCloseTime || '00:00', // Default to '00:00' if null
              key: 'firstCloseTime',
              faKey: 'ساعت پایان اول',
            },
            {
              time: matchingData.secondCloseTime || '00:00', // Default to '00:00' if null
              key: 'secondCloseTime',
              faKey: 'ساعت پایان دوم',
            },
          ]
        : day.timing.map(timeSlot => ({
            time: timeSlot.time || '00:00', // Default to '00:00' if null in original timing data
            key: timeSlot.key,
            faKey: timeSlot.faKey,
          }));

    return {
      dayOfWeek: day.dayOfWeek,
      type, // The type is now properly determined
      isTimed: day.isTimed,
      timing, // Timing is set based on the type
    };
  });
};

const TravelTime = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const PlaceWorkTimes = useWatch({ name: 'PlaceWorkTimes' });
  const [schedule, setSchedule] = useState(serializePlaceWorkTimes(placeWorkTimeSchedule, PlaceWorkTimes));
  const { setValue } = useFormContext();

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */
  const handleStatusChange = (dayOfWeek: string, selectedStatus: any) => {
    const isTimed = selectedStatus === 'TIMED' ? true : false;

    setSchedule(prevSchedule =>
      prevSchedule.map(day => {
        if (day.dayOfWeek === dayOfWeek) {
          return {
            ...day,
            type: selectedStatus,
            isTimed: isTimed,
            timing: !isTimed ? day.timing.map(timingItem => ({ ...timingItem, time: '00:00' as any })) : day.timing, // Otherwise, keep timing as is
          };
        }
        return day;
      })
    );
  };

  const handleTiming = (dayOfWeek: string, time: string, key: string) => {
    setSchedule(prevSchedule =>
      prevSchedule.map(day =>
        day.dayOfWeek === dayOfWeek
          ? {
              ...day,
              timing: day.timing.map(timingItem =>
                timingItem.key === key
                  ? { ...timingItem, time } // Update the specific timing
                  : timingItem
              ),
            }
          : day
      )
    );
  };

  useEffect(() => {
    setValue('PlaceWorkTimes', schedule);
  }, [schedule]);

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Root gap={'16px'}>
      {placeWorkTimeSchedule.map(item => {
        const dayItem = schedule.filter((v: { dayOfWeek: string }) => v.dayOfWeek === item.dayOfWeek)[0];

        return (
          <Grid
            p={'24px'}
            gap={'16px'}
            key={item.dayOfWeek}
            style={{
              borderBottom: `1px solid ${colorPalette.gray[6]}`,
            }}
          >
            <Flex justify={'between'} align={'center'}>
              <Text>{item.faDay}</Text>
            </Flex>
            <Grid gap={'34px'} columns={'2'}>
              <RadioGroup.Root defaultValue={dayItem ? dayItem.type : 'TIMED'} name={`schedule-${item.dayOfWeek}`} onValueChange={value => handleStatusChange(item.dayOfWeek, value)}>
                <Flex gap={'6'}>
                  {item.type.map(statusItem => (
                    <RadioGroup.Item key={statusItem.key} value={statusItem.key} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {statusItem.value}
                    </RadioGroup.Item>
                  ))}
                </Flex>
              </RadioGroup.Root>
              <Grid columns={'2'} gap={'16px'}>
                {dayItem.timing.map((v: any) => {
                  return (
                    <Grid gap={'8px'} key={v.key}>
                      <Text {...typoVariant.description1}>{v.faKey}</Text>
                      <DatePicker
                        key={v.key}
                        inputMode='none'
                        inputClass='input-class'
                        placeholder='ساعت'
                        disabled={(dayItem && dayItem.type === 'CLOSED') || dayItem.type === 'OPEN'}
                        value={timeStringToDate(v.time)}
                        onChange={dateObject => {
                          if (dateObject) {
                            handleTiming(item.dayOfWeek, dateObject.format('HH:mm'), v.key);
                          }
                        }}
                        disableDayPicker
                        format='HH:mm'
                        plugins={[<TimePicker hideSeconds format='HH:mm' key={v.key} />]}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Root>
  );
};

export default TravelTime;

/**
 * styled-component
 * _______________________________________________________________________________
 */

const Root = styled(Grid)`
  & .rmdp-container {
    display: flex;
    width: -webkit-fill-available !important;
    flex: 1;
  }

  .rmdp-wrapper {
    padding: 5px 0;
  }

  .rmdp-arrow {
    border-color: ${colorPalette.gray[1]};
  }
  .rmdp-arrow-container {
    background-color: ${colorPalette.turquoise[9]};
    margin-block: 5px;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rmdp-down i {
    margin-top: -4px;
  }

  .rmdp-time-picker div input {
    font-size: 18px;
  }

  .input-class {
    --default-font-family: var(--yekan-font) !important;
    font-family: var(--yekan-font) !important;
    border-radius: 8px;
    text-align: right;
    width: -webkit-fill-available;
    padding: 15px 16px;
    outline: none;
    border: none;
    box-shadow: ${Boxshadow.shadow1};
  }
`;
