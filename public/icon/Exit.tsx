import * as React from 'react';
import { SVGProps } from 'react';

const SvgExit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 16' {...props}>
    <path fill='#fff' fillOpacity={0.01} d='M0 0h16v16H0z' />
    <path
      fill='#A10075'
      fillRule='evenodd'
      d='M3.2 1.066c-.59 0-1.067.478-1.067 1.067v11.733c0 .59.477 1.067 1.066 1.067h8a.533.533 0 0 0 0-1.067h-8V2.133h8a.533.533 0 0 0 0-1.067zm10.243 4.157a.533.533 0 0 0-.754.754l1.49 1.49H6.933a.533.533 0 0 0 0 1.066h7.246l-1.49 1.49a.534.534 0 0 0 .754.754l2.4-2.4a.533.533 0 0 0 0-.754z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgExit;
