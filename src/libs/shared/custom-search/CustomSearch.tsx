'use client';

import React, { forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';

import { useQueryClient } from '@tanstack/react-query';

import { IconButton } from '@/libs/primitives';
import { Search } from '@/public/icon';

import { CustomTextField, InputWrapper } from '../SharedStyled';

type CustomSearchProps = {
  placeholder: string;
  defaultValue?: string;
};

const CustomSearch = forwardRef<HTMLDivElement, CustomSearchProps>(({ placeholder, defaultValue, ...rest }, ref) => {
  const queryClient = useQueryClient();
  const { setValue } = useFormContext();
  return (
    <InputWrapper {...rest} ref={ref} height={'fit-content'}>
      <CustomTextField {...rest} ref={ref as any} placeholder={placeholder} variant='surface' defaultValue={defaultValue} />

      <IconButton
        size={'4'}
        variant='soft'
        onClick={() => {
          setValue('page', 1);
          queryClient.invalidateQueries({ queryKey: ['article-list'] });
          queryClient.invalidateQueries({ queryKey: ['user-list'] });
        }}
      >
        <Search />
      </IconButton>
    </InputWrapper>
  );
});

CustomSearch.displayName = 'CustomSearch';

export default CustomSearch;
