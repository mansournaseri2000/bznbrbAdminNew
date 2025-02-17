import * as React from 'react';
import { SVGProps } from 'react';

const SvgHasMedia = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 15 16' {...props}>
    <path
      fill='#62636C'
      fillRule='evenodd'
      d='M7.935.936a7.064 7.064 0 1 0 0 14.128 7.064 7.064 0 0 0 0-14.128M1.885 8a6.051 6.051 0 1 1 12.101 0A6.051 6.051 0 0 1 1.884 8m8.887-2.093a.533.533 0 1 0-.873-.614L6.89 9.57 5.65 8.306a.533.533 0 1 0-.762.748l1.69 1.72a.533.533 0 0 0 .816-.067z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgHasMedia;
