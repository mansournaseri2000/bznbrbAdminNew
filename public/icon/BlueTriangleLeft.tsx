import * as React from 'react';
import { SVGProps } from 'react';

const SvgBlueTriangleLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 16' {...props}>
    <path fill='#fff' fillOpacity={0.01} d='M0 0h16v16H0z' />
    <path fill='#00509D' d='M9.6 4.266v7.466L4.8 8z' />
  </svg>
);
export default SvgBlueTriangleLeft;
