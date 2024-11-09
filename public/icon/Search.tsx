import * as React from 'react';
import { SVGProps } from 'react';

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 16' {...props}>
    <path fill='#fff' fillOpacity={0.01} d='M0 0h16v16H0z' />
    <path
      fill='#FCFCFD'
      fillRule='evenodd'
      d='M10.666 6.933a3.733 3.733 0 1 1-7.466 0 3.733 3.733 0 0 1 7.466 0m-.737 3.75a4.8 4.8 0 1 1 .754-.754l3.027 3.027a.534.534 0 0 1-.754.754z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSearch;
