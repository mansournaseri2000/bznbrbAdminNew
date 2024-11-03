import * as React from 'react';
import { SVGProps } from 'react';

const SvgTriangleUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 16' {...props}>
    <path fill='#fff' fillOpacity={0.01} d='M0 0h16v16H0z' />
    <path fill='#FCFCFD' d='M4.266 9.6h7.466L8 4.8z' />
  </svg>
);
export default SvgTriangleUp;
