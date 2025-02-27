import React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

import { Text } from '@/libs/primitives';
import { CustomTextField, InputWrapper } from '@/libs/shared/SharedStyled';
import { separator } from '@/libs/utils/separator';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  name: string;
  control: Control<FieldValues, any>;
  placeholder: string;
};

const PriceField = ({ name, control, placeholder }: Props) => {
  return (
    <InputWrapper height={'fit-content'}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <CustomTextField
            {...field}
            placeholder={placeholder}
            type='text'
            value={separator(field.value)}
            onChange={e => {
              const numericValue = e.target.value.replace(/[^0-9]/g, '');
              field.onChange(numericValue);
            }}
            onBlur={() => field.onChange(field.value)}
          />
        )}
      />
      <Text {...typoVariant.body2} style={{ color: colorPalette.pink[9], marginInlineEnd: 16 }}>
        ریال
      </Text>
    </InputWrapper>
  );
};

export default PriceField;
