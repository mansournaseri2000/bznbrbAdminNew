import * as React from 'react';
import { SVGProps } from 'react';

const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' {...props}>
    <path fill='#62636C' d='m2.884 12.667 1.083-4.684-3.634-3.15 4.8-.416L7 0l1.867 4.417 4.8.416-3.633 3.15 1.083 4.684L7 10.183z' />
  </svg>
);
export default SvgStar;
