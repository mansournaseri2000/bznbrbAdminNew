'use client';

import React, { forwardRef, useEffect, useRef } from 'react';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { LuCalendarCheck } from 'react-icons/lu';
import DatePicker, { CalendarProps, CustomComponentProps, DateObject, DatePickerProps } from 'react-multi-date-picker';

import { styled } from 'styled-components';

import { colorPalette } from '@/theme';

import { Flex } from '../primitives';
import ErrorText from './ErrorText';

/**
 * props
 * _______________________________________________________________________________
 */
type DatePickerComponent = {
  onChangeValue: (dateObject: DateObject | DateObject[] | null) => void;
  errorText?: string;
  calendarPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
} & CustomComponentProps &
  DatePickerProps &
  CalendarProps &
  React.HTMLAttributes<HTMLInputElement>;

const CustomDatePicker = forwardRef<HTMLInputElement, DatePickerComponent>(({ onChangeValue, calendarPosition = 'bottom-right', errorText, ...rest }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.setAttribute('readonly', 'true'); // Prevent keyboard input
    }
  }, []);

  useEffect(() => {
    const handleInput = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.value.length > 10) {
        target.value = target.value.slice(0, 10);
      }
    };

    if (inputRef.current) {
      inputRef.current.setAttribute('readonly', 'true'); // Prevent keyboard input
      inputRef.current.addEventListener('input', handleInput);
    }

    return () => {
      if (inputRef.current) {
        // inputRef.current.setAttribute('readonly', 'true'); // Prevent keyboard input
        inputRef.current.removeEventListener('input', handleInput);
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') {
        // Prevent any key input except Tab for accessibility
        event.preventDefault();
      }
    };

    if (inputRef.current) {
      inputRef.current.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, []);

  return (
    <Flex position={'relative'} width={'100%'}>
      <Root isError={Boolean(errorText)} position={'relative'} align={'center'} width={'100%'}>
        <DatePicker
          {...rest}
          {...ref}
          inputClass={`input-class`}
          ref={inputRef}
          calendar={persian}
          locale={persian_fa}
          calendarPosition={calendarPosition}
          onChange={(dateObject: DateObject | DateObject[] | null) => onChangeValue(dateObject)}
        />
        <LuCalendarCheck style={{ position: 'absolute', left: '20px', stroke: colorPalette.pink[9] }} />
      </Root>
      <ErrorText text={errorText} />
    </Flex>
  );
});

CustomDatePicker.displayName = 'CustomDatePicker';
export default CustomDatePicker;

/**
 * styled-component
 * _______________________________________________________________________________
 */

const Root = styled(Flex)<{ isError: boolean }>`
  .rmdp-day.rmdp-selected span:not(.highlight) {
    background-color: ${colorPalette.pink[9]};
  }

  .rmdp-arrow {
    border-color: ${colorPalette.pink[9]};
  }

  .rmdp-week-day {
    color: ${colorPalette.pink[9]};
  }

  input {
    width: -webkit-fill-available !important;
    background-color: ${colorPalette.gray[2]};
    font-size: 14px;
    color: ${colorPalette.gray[11]};
  }

  & .rmdp-container {
    display: flex;
    width: -webkit-fill-available !important;
  }

  .input-class {
    --default-font-family: var(--sans-font) !important;
    font-family: var(--sans-font) !important;
    width: 100%;
    text-align: right;
    outline: none;
    border: ${({ isError }) => (!isError ? `1px solid ${colorPalette.gray[7]}` : `1px solid ${colorPalette.pink[9]}`)};
    border-radius: 8px;
    padding: 13px 16px;

    &:disabled {
      background-color: ${colorPalette.gray[4]};
      cursor: not-allowed;
    }
  }
`;
