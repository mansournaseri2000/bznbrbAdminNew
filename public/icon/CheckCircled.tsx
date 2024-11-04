import * as React from 'react';
import { SVGProps } from 'react';

const SvgCheckCircled = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 16' {...props}>
    <path fill='#fff' fillOpacity={0.01} d='M0 0h16v16H0z' />
    <path
      fill='#62636C'
      fillRule='evenodd'
      d='M8 .934a7.064 7.064 0 1 0 0 14.128A7.064 7.064 0 0 0 8 .934M1.949 7.998a6.051 6.051 0 1 1 12.102 0 6.051 6.051 0 0 1-12.102 0m8.887-2.093a.533.533 0 0 0-.872-.614l-3.01 4.277-1.24-1.264a.533.533 0 0 0-.761.748l1.689 1.72a.533.533 0 0 0 .816-.067z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCheckCircled;
