import React from 'react';

import { Text } from '../primitives';

type Props = {
  text?: string;
};

const ErrorText = ({ text }: Props) => {
  return (
    <Text
      weight={'medium'}
      color='red'
      style={{ position: 'absolute', bottom: '-6px', fontSize: '10px', right: '10px' }}
    >
      {text}
    </Text>
  );
};

export default ErrorText;
