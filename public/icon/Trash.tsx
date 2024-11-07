import * as React from 'react';
import { SVGProps } from 'react';

const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 16' {...props}>
    <path fill='#fff' fillOpacity={0.01} d='M0 0h16v16H0z' />
    <path
      fill='#B20784'
      fillRule='evenodd'
      d='M5.866 1.066a.533.533 0 1 0 0 1.067h4.267a.533.533 0 0 0 0-1.067zM3.199 3.733c0-.294.239-.533.534-.533h8.533a.533.533 0 0 1 0 1.066h-.533V12.8c0 .589-.478 1.066-1.067 1.066H5.333c-.59 0-1.067-.477-1.067-1.066V4.266h-.533a.533.533 0 0 1-.534-.533m2.134.533h5.333V12.8H5.333z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgTrash;
