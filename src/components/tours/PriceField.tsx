import React from 'react';
import { Controller } from 'react-hook-form';

import { Grid, Text } from '@/libs/primitives';
import { CustomTextField, InputWrapper } from '@/libs/shared/SharedStyled';
import { separator } from '@/libs/utils/separator';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  name: string;
  control: any;
  // Control<FieldValues, any>;
  placeholder: string;
  lable?: string;
};

const PriceField = ({ name, control, placeholder, lable }: Props) => {
  return (
    <Grid width={'100%'} gapY={'2'} position={'relative'}>
      <Text
        style={{ paddingInline: '8px', color: colorPalette.gray[10], position: 'absolute', top: '-10px', right: 12, backgroundColor: colorPalette.gray[1], borderRadius: 4 }}
        {...typoVariant.body3}
      >
        {lable}
      </Text>
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
    </Grid>
  );
};

export default PriceField;
