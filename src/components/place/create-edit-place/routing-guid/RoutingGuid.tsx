import React, { useEffect, useState } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

import { Button, Flex, Text, TextArea } from '@/libs/primitives';
import { typoVariant } from '@/theme/typo-variants';

const RoutingGuid = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const { control, watch } = useFormContext();
  const [state, setState] = useState<string>(watch('vehicleOptions')[0]?.key);
  const [index, setIndex] = useState(0);
  const vehicleOptions = useWatch({ control, name: 'vehicleOptions' }) || [];
  const watchedContent = useWatch({
    control,
    name: `vehicleOptions[${index}].content`,
    defaultValue: vehicleOptions[index]?.content || '',
  });

  const [content, setContent] = useState(watchedContent);
  /**
   * hooks and methods
   * _______________________________________________________________________________
   */
  const handleButtonNames = (value: string) => {
    switch (value) {
      case 'taxi':
        return 'تاکسی';
      case 'car':
        return 'ماشین شخصی';
      case 'train':
        return 'قطار';
      case 'subway':
        return 'مترو';
      case 'ship':
        return 'کشتی';
      case 'airplane':
        return 'هواپیما';
      case 'hike':
        return 'پیاده روی';
      case 'bus':
        return 'اتوبوس';
    }
  };
  /**
   * useEffect
   * _______________________________________________________________________________
   */
  useEffect(() => {
    setContent(watch(`vehicleOptions[${index}].content`));
  }, [index]);

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Flex direction={'column'} gap={'28px'}>
      <Flex width={'100%'} direction={'column'} gap={'5'}>
        <Flex width={'100%'} gap={'5'} align={'center'} style={{ overflow: 'auto' }}>
          {vehicleOptions?.map((item: any, ind: number) => (
            <Button
              variant={item.key === state ? 'soft' : 'solid'}
              type='button'
              key={item.key}
              size={'3'}
              style={{ paddingInline: 16 }}
              onClick={() => {
                setState(item.key as any);
                setIndex(ind);
              }}
            >
              <Text {...typoVariant.body1}>{handleButtonNames(item.key)}</Text>
            </Button>
          ))}
        </Flex>

        <Controller
          name={`vehicleOptions[${index}].content`}
          control={control}
          render={({ field }) => (
            <TextArea
              {...field}
              label={`شرح مسیر ${handleButtonNames(state)}`}
              placeholder={`شرح مسیر ${handleButtonNames(state)}`}
              selectedValue={Boolean(field.value)}
              value={content}
              onChange={e => {
                field.onChange(e.target.value);
                setContent(e.target.value);
              }}
              rows={5}
            />
          )}
        />
      </Flex>
    </Flex>
  );
};

export default RoutingGuid;
