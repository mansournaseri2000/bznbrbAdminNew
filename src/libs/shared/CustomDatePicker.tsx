'use client';

import React, { forwardRef } from 'react';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { Controller, useFormContext } from 'react-hook-form';
import { LuCalendarCheck } from 'react-icons/lu';
import DatePicker, { DateObject } from 'react-multi-date-picker';

import { styled } from 'styled-components';

import { Flex } from '../primitives';
import ErrorText from './ErrorText';

/**
 * props
 * _______________________________________________________________________________
 */
type DatePickerComponent = {
  errorText?: string;
  inputMode: 'none' | 'text';
  name: string;
  minDate?: Date;
  placeholder?: string;
  calendarPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
} & React.HTMLAttributes<HTMLInputElement>;

const DatePickerComponent = forwardRef<HTMLInputElement, DatePickerComponent>(({ name, minDate, placeholder = 'تاریخ', calendarPosition = 'bottom-right', errorText, inputMode, ...rest }, ref) => {
  const { control, setValue, clearErrors } = useFormContext();

  return (
    <Flex position={'relative'} pb={'10px'} direction={'column'}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Root position={'relative'} align={'center'}>
            <DatePicker
              inputMode={inputMode}
              inputClass={`input-class`}
              {...rest}
              {...ref}
              value={field.value}
              placeholder={placeholder}
              minDate={minDate || new Date()}
              calendar={persian}
              locale={persian_fa}
              calendarPosition={calendarPosition}
              onChange={(dateObject: DateObject | DateObject[] | null) => {
                const formattedDate = Array.isArray(dateObject) ? dateObject.map(d => d.format()).join(', ') : dateObject?.format() || '';
                setValue(name, formattedDate);
                clearErrors(name);
              }}
            />
            <LuCalendarCheck style={{ position: 'absolute', left: '20px', stroke: '#000' }} />
          </Root>
        )}
      />
      <ErrorText text={errorText} />
    </Flex>
  );
});

DatePickerComponent.displayName = 'DatePickerComponent';
export default DatePickerComponent;

/**
 * styled-component
 * _______________________________________________________________________________
 */

const Root = styled(Flex)`
  .rmdp-day.rmdp-selected span:not(.highlight) {
    background-color: #000;
  }

  .rmdp-arrow {
    border-color: #000;
  }

  .rmdp-week-day {
    color: #000;
  }

  input {
    width: -webkit-fill-available !important;
    padding: 15px 20px !important;
  }

  & .rmdp-container {
    display: flex;
    width: -webkit-fill-available !important;
  }

  .input-class {
    --default-font-family: var(--yekan-font) !important;
    font-family: var(--yekan-font) !important;
    border-radius: 8px;
    width: 100%;
    text-align: right;
    padding: 15px 16px;
    outline: none;
    border: none;
    box-shadow:
      0 0 0 1px color-mix(in oklab, var(--gray-a3), var(--gray-3) 25%),
      0 0 0 0.5px var(--black-a1),
      0 1px 1px 0 var(--gray-a2),
      0 2px 1px -1px var(--black-a1),
      0 1px 3px 0 var(--black-a1);
  }
`;
