import * as React from 'react';
import { SVGProps } from 'react';

const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 16' {...props}>
    <path fill='#fff' fillOpacity={0.01} d='M0 0h16v16H0z' />
    <path
      fill='#00509D'
      fillRule='evenodd'
      d='M8 1.121a.48.48 0 0 1 .48.48v7.375l2.38-2.381a.48.48 0 1 1 .679.679l-3.2 3.2a.48.48 0 0 1-.679 0l-3.2-3.2a.48.48 0 1 1 .679-.679l2.38 2.38V1.602a.48.48 0 0 1 .48-.48m-5.334 9.547c.295 0 .533.239.533.533v1.6c0 .59.476 1.067 1.063 1.067h7.472c.589 0 1.066-.477 1.066-1.067v-1.6a.533.533 0 0 1 1.066 0v1.6a2.13 2.13 0 0 1-2.132 2.133H4.262a2.13 2.13 0 0 1-2.13-2.133v-1.6c0-.294.24-.533.534-.533'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgDownload;
