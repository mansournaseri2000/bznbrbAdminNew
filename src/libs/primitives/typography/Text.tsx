import React, { ForwardedRef } from 'react';

import { Text } from '@radix-ui/themes';

type AppTextProps = React.ComponentProps<typeof Text> & {
  children: React.ReactNode;
};

const AppText = React.forwardRef<HTMLSpanElement, AppTextProps>(
  ({ children, ...props }: AppTextProps, forwardedRef: ForwardedRef<HTMLSpanElement>) => (
    <Text size={'2'} ref={forwardedRef} {...props}>
      {children}
    </Text>
  )
);

AppText.displayName = 'AppText';

export default AppText;
