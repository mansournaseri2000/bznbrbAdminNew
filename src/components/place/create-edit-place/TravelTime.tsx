'use client';

import { useFormContext, useWatch } from 'react-hook-form';

import { RadioGroup } from '@radix-ui/themes';
import { styled } from 'styled-components';

import { Flex, Grid, Text, TextField } from '@/libs/primitives';
import { Boxshadow, colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

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
  const { setValue, watch } = useFormContext();

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */

  const items = [
    {
      faLable: '24 ساعت باز',
      enLable: 'OPEN',
    },
    {
      faLable: '24 ساعت بسته',
      enLable: 'CLOSED',
    },
    {
      faLable: 'زمان بندی',
      enLable: 'TIMED',
    },
  ];

  const dayNames = {
    SATURDAY: 'شنبه',
    SUNDAY: 'یک‌شنبه',
    MONDAY: 'دوشنبه',
    TUESDAY: 'سه‌شنبه',
    WEDNESDAY: 'چهارشنبه',
    THURSDAY: 'پنج‌شنبه',
    FRIDAY: 'جمعه',
  };

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Root gap={'16px'}>
      {PlaceWorkTimes.map((item: PlaceWorkTimes, firstIndex: number) => {
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
              <Text>{dayNames[item.dayOfWeek as keyof typeof dayNames]}</Text>
            </Flex>
            <Grid gap={'34px'} columns={'2'}>
              <RadioGroup.Root
                defaultValue={item.type} // Set initial value from data
                name={item.dayOfWeek} // Unique name for each day's RadioGroup
                onValueChange={value => {
                  setValue(`PlaceWorkTimes[${firstIndex}].type`, value);
                  if (value === 'CLOSED' || value === 'OPEN') {
                    setValue(`PlaceWorkTimes[${firstIndex}].timing[${0}].time`, '00:00');
                    setValue(`PlaceWorkTimes[${firstIndex}].timing[${1}].time`, '00:00');
                    setValue(`PlaceWorkTimes[${firstIndex}].timing[${2}].time`, '00:00');
                    setValue(`PlaceWorkTimes[${firstIndex}].timing[${3}].time`, '00:00');
                  }
                }}
              >
                <Flex gap='6'>
                  {items.map(statusItem => (
                    <label key={statusItem.enLable} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <RadioGroup.Item
                        value={statusItem.enLable} // Use English label as value
                        id={`${item.dayOfWeek}-${statusItem.enLable}`}
                      />
                      {statusItem.faLable}
                    </label>
                  ))}
                </Flex>
              </RadioGroup.Root>
              <Grid columns={'2'} gap={'16px'}>
                {item.timing.map((v: any, index: number) => {
                  return (
                    <Grid gap={'8px'} key={v.key}>
                      <Text {...typoVariant.description1}>{v.faKey}</Text>

                      <TextField
                        maxLength={5}
                        placeholder='ساعت'
                        value={v.time}
                        disabled={watch(`PlaceWorkTimes[${firstIndex}].type`) === 'CLOSED' || watch(`PlaceWorkTimes[${firstIndex}].type`) === 'OPEN'}
                        onChange={e => {
                          let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters

                          if (value.length > 4) value = value.slice(0, 4); // Ensure a max of 4 digits (HHMM)

                          if (value.length >= 3) {
                            value = `${value.slice(0, 2)}:${value.slice(2, 4)}`; // Format to HH:MM
                          }

                          setValue(`PlaceWorkTimes[${firstIndex}].timing[${index}].time`, value);
                        }}
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
