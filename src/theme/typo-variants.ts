export type TypoVariant = {
  size: {
    initial: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
    lg: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
  };
  weight: {
    initial: 'light' | 'regular' | 'medium' | 'bold';
    lg: 'light' | 'regular' | 'medium' | 'bold';
  };
};

export const typoVariant: Record<string, TypoVariant> = {
  
  title1: {
    size: {
      initial: '1',
      lg: '1',
    },
    weight: {
      initial: 'medium',
      lg: 'medium',
    },
  },
  title2: {
    size: {
      initial: '2',
      lg: '2',
    },
    weight: {
      initial: 'regular',
      lg: 'regular',
    },
  },
  body1: {
    size: {
      initial: '3',
      lg: '3',
    },
    weight: {
      initial: 'medium',
      lg: 'medium',
    },
  },
  body2: {
    size: {
      initial: '3',
      lg: '3',
    },
    weight: {
      initial: 'regular',
      lg: 'regular',
    },
  },
  body3: {
    size: {
      initial: '4',
      lg: '4',
    },
    weight: {
      initial: 'regular',
      lg: 'regular',
    },
  },
  paragraph1: {
    size: {
      initial: '3',
      lg: '3',
    },
    weight: {
      initial: 'medium',
      lg: 'medium',
    },
  },
  paragraph2: {
    size: {
      initial: '3',
      lg: '3',
    },
    weight: {
      initial: 'regular',
      lg: 'regular',
    },
  },
  paragraph3: {
    size: {
      initial: '4',
      lg: '4',
    },
    weight: {
      initial: 'regular',
      lg: 'regular',
    },
  },
  description1: {
    size: {
      initial: '4',
      lg: '4',
    },
    weight: {
      initial: 'regular',
      lg: 'regular',
    },
  },
  description2: {
    size: {
      initial: '5',
      lg: '5',
    },
    weight: {
      initial: 'regular',
      lg: 'regular',
    },
  },
};
