import * as React from 'react';
import { SVGProps } from 'react';

const SvgComment1 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' {...props}>
    <path fill='#fff' d='M0 0h16v16H0z' />
    <path
      fill='#008F8E'
      d='M13.333 3.2H2.667a1.6 1.6 0 0 0-1.6 1.6v5.333a1.6 1.6 0 0 0 1.6 1.6H8c.141 0 .277.056.377.156l2.29 2.29v-1.913c0-.294.239-.533.533-.533h2.133a1.6 1.6 0 0 0 1.6-1.6V4.799a1.6 1.6 0 0 0-1.6-1.6M2.667 2.132h10.666A2.667 2.667 0 0 1 16 4.799v5.334a2.667 2.667 0 0 1-2.667 2.667h-1.6v2.666a.533.533 0 0 1-.91.377L7.779 12.8H2.667A2.667 2.667 0 0 1 0 10.133V4.8a2.667 2.667 0 0 1 2.667-2.667'
    />
  </svg>
);
export default SvgComment1;
