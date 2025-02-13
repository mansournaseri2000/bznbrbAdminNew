import * as React from 'react';
import { SVGProps } from 'react';

const SvgUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 17' {...props}>
    <path fill='#fff' fillOpacity={0.01} d='M0 .5h16v16H0z' />
    <path
      fill='#1C68B7'
      fillRule='evenodd'
      d='M8.339 1.76a.48.48 0 0 0-.679 0l-3.2 3.2a.48.48 0 1 0 .679.68l2.38-2.381v7.374a.48.48 0 1 0 .96 0V3.26l2.381 2.38a.48.48 0 1 0 .679-.678zm-5.673 9.407c.295 0 .533.238.533.533v1.6c0 .59.476 1.067 1.063 1.067h7.472c.589 0 1.066-.477 1.066-1.067v-1.6a.533.533 0 1 1 1.066 0v1.6a2.13 2.13 0 0 1-2.132 2.133H4.262a2.13 2.13 0 0 1-2.13-2.133v-1.6c0-.295.24-.533.534-.533'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgUpload;
