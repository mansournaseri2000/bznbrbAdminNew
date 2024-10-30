import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowLeftCustomButton = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 16' {...props}>
    <path fill='#fff' fillOpacity={0.01} d='M0 0h16v16H0z' />
    <path fill='#105FAE' fillRule='evenodd' d='M9.406 4.46a.48.48 0 0 1 0 .68L6.546 8l2.86 2.86a.48.48 0 0 1-.679.68l-3.2-3.2a.48.48 0 0 1 0-.68l3.2-3.2a.48.48 0 0 1 .679 0' clipRule='evenodd' />
  </svg>
);
export default SvgArrowLeftCustomButton;
