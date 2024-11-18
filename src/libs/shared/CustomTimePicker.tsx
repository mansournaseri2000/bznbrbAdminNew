'use client';

import React, { forwardRef, useEffect, useRef } from 'react';
import persian_fa from 'react-date-object/locales/persian_fa';
import { IoMdTime } from 'react-icons/io';
import DatePicker, {
  CalendarProps,
  CustomComponentProps,
  DateObject,
  DatePickerProps,
} from 'react-multi-date-picker';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';

import { styled } from 'styled-components';

import { colorPalette } from '@/theme';

import { Flex } from '../primitives';
import ErrorText from './ErrorText';

type TimePickerProps = {
  onChangeValue: (dateObject: DateObject | DateObject[] | null) => void;
  errorText?: string;
} & CustomComponentProps &
  CalendarProps &
  DatePickerProps &
  React.HTMLAttributes<HTMLInputElement>;

/**
 * props
 * _______________________________________________________________________________
 */

const CustomTimePicker = forwardRef<HTMLInputElement, TimePickerProps>(
  ({ errorText, onChangeValue, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      const handleInput = (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target.value.length > 10) {
          target.value = target.value.slice(0, 6); // Limit to 10 characters
        }
      };

      if (inputRef.current) {
        inputRef.current.addEventListener('input', handleInput);
      }

      return () => {
        if (inputRef.current) {
          inputRef.current.removeEventListener('input', handleInput);
        }
      };
    }, []);

    return (
      <Root isError={Boolean(errorText)} position={'relative'} align={'center'}>
        <DatePicker
          ref={inputRef}
          {...rest}
          inputClass='input-class'
          locale={persian_fa}
          onChange={(dateObject: DateObject | DateObject[] | null) => onChangeValue(dateObject)}
          key={'time'}
          disableDayPicker
          format='HH:mm'
          plugins={[<TimePicker hideSeconds format='HH:mm' key={'time'} />]}
        />
        <IoMdTime style={{ position: 'absolute', left: '20px', scale: 1.2, fill: colorPalette.pink[9] }} />
        <ErrorText text={errorText} />
      </Root>
    );
  }
);

CustomTimePicker.displayName = 'CustomTimePicker';

export default CustomTimePicker;

/**
 * styled-component
 * _______________________________________________________________________________
 */
const Root = styled(Flex)<{ isError: boolean }>`
  & .rmdp-container {
    display: flex;
    width: -webkit-fill-available !important;
    flex: 1;
  }

  .rmdp-wrapper {
    padding: 0px 0;
  }

  .rmdp-arrow {
    border-color: ${colorPalette.gray[1]};
    scale: 0.8;
  }
  .rmdp-arrow-container {
    background-color: ${colorPalette.pink[9]};
    margin-block: 5px;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rmdp-down i {
    margin-top: 0px;
  }

  .rmdp-time-picker div input {
    font-size: 18px;
  }

  .input-class {
    --default-font-family: var(--sans-font) !important;
    font-family: var(--sans-font) !important;
    text-align: right;
    width: -webkit-fill-available;
    padding: 13px 16px;
    outline: none;
    background-color: ${colorPalette.gray[2]};
    border: ${({ isError }) =>
      !isError ? `1px solid ${colorPalette.gray[7]}` : `1px solid ${colorPalette.pink[9]}`};
    border-radius: 8px;
    font-size: 14px;
    color: ${colorPalette.gray[11]};
  }

  :disabled {
    background-color: ${colorPalette.gray[4]};
    cursor: not-allowed;
  }
`;
