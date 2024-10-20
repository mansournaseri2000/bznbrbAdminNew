'use client';

import React, { forwardRef } from 'react';
import persian_fa from 'react-date-object/locales/persian_fa';
import { Controller, useFormContext } from 'react-hook-form';
import { IoMdTime } from 'react-icons/io';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';

import { styled } from 'styled-components';

import { Boxshadow, colorPalette } from '@/theme';

import { Flex } from '../primitives';
import ErrorText from './ErrorText';

type TimePickerProps = {
  errorText?: string;
  inputMode: 'text' | 'none';
  name: string;
} & React.HTMLAttributes<HTMLInputElement>;

/**
 * props
 * _______________________________________________________________________________
 */

const TimePickerComponent = forwardRef<HTMLInputElement, TimePickerProps>(({ name, errorText }) => {
  const { control, setValue, clearErrors } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={() => (
        <Root pb={'10px'} position={'relative'} align={'center'}>
          <DatePicker
            inputMode='none'
            inputClass='input-class'
            locale={persian_fa}
            placeholder='ساعت'
            onChange={(dateObject: DateObject | DateObject[] | any) => {
              setValue(name, dateObject.format());
              clearErrors(name);
            }}
            key={'time'}
            disableDayPicker
            format='HH:mm' // Set format to only show hours and minutes
            plugins={[
              <TimePicker
                hideSeconds
                format='HH:mm' // Set format to only show hours and minutes
                key={'time'}
              />,
            ]}
          />
          <IoMdTime style={{ position: 'absolute', left: '20px', scale: 1.2, fill: '#000' }} />
          <ErrorText text={errorText} />
        </Root>
      )}
    />
  );
});

TimePickerComponent.displayName = 'TimePickerComponent';

export default TimePickerComponent;

/**
 * styled-component
 * _______________________________________________________________________________
 */
const Root = styled(Flex)`
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
    scale: 0.8;
  }
  .rmdp-arrow-container {
    background-color: #000;
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
