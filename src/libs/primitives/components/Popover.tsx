import { ForwardedRef, forwardRef } from 'react';

import { CaretDownIcon } from '@radix-ui/react-icons';
import { Button, Flex, Popover, Text } from '@radix-ui/themes';

import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type PopoverComponentProps = React.ComponentProps<typeof Popover.Root> & {
  label?: string;
  placeholder: string;
  style?: React.CSSProperties;
  disabled?: boolean;
};

export const PopoverRoot = forwardRef<React.ElementRef<typeof Popover.Root>, PopoverComponentProps>(
  ({ placeholder, label, disabled, style, ...props }: PopoverComponentProps | any, forwardedRef: ForwardedRef<React.ElementRef<typeof Popover.Root>>) => {
    /**
     * const and variables
     * _______________________________________________________________________________
     */

    /**
     * template
     * _______________________________________________________________________________
     */
    return (
      <Flex width={'100%'} direction={'column'} gap={'2'} style={style}>
        <Text style={{ paddingRight: '8px', color: colorPalette.gray[12] }} {...typoVariant.body1}>
          {label}
        </Text>
        <Popover.Root {...props} ref={forwardedRef}>
          <Popover.Trigger disabled={disabled}>
            <Button
              style={{
                minHeight: '48px',
                paddingInline: '15px 10px',
                borderRadius: '12px',
                border: `1px solid ${colorPalette.gray[7]}`,
                color: colorPalette.gray[9],
                backgroundColor: colorPalette.gray[2],
              }}
              variant='solid'
              size={'4'}
            >
              <Flex width={'100%'} align={'center'} justify={'between'}>
                <Text {...typoVariant.body2} style={{ color: colorPalette.gray[9] }}>
                  {placeholder}
                </Text>
                <CaretDownIcon style={{ scale: 1.6 }} color={colorPalette.pink[9]} />
              </Flex>
            </Button>
          </Popover.Trigger>
          <Popover.Content style={{ overflowY: 'auto', maxHeight: '450px' }}>{props.children}</Popover.Content>
        </Popover.Root>
      </Flex>
    );
  }
);

export default PopoverRoot;
