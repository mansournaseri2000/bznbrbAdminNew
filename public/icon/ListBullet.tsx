import * as React from 'react';
import { SVGProps } from 'react';

const SvgListBullet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 16' {...props}>
    <path fill='#fff' fillOpacity={0.01} d='M0 0h16v16H0z' />
    <path
      fill='#62636C'
      fillRule='evenodd'
      d='M1.6 5.6a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6m2.667-.8c0-.295.24-.533.534-.533h9.6a.533.533 0 0 1 0 1.066H4.8a.533.533 0 0 1-.534-.533m.534 2.667a.533.533 0 0 0 0 1.066h9.6a.533.533 0 0 0 0-1.066zm0 3.2a.533.533 0 0 0 0 1.066h9.6a.533.533 0 0 0 0-1.066zM2.4 8A.8.8 0 1 1 .8 8a.8.8 0 0 1 1.6 0m-.8 4a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgListBullet;
