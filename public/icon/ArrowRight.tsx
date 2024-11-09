import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 16' {...props}>
    <path fill='#fff' fillOpacity={0.01} d='M0 0h16v16H0z' />
    <path
      fill='#FCFCFD'
      fillRule='evenodd'
      d='M6.567 3.343a.533.533 0 0 1 .754.025l4 4.266a.533.533 0 0 1 0 .73l-4 4.267a.533.533 0 1 1-.778-.73L10.2 8 6.543 4.097a.533.533 0 0 1 .024-.754'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgArrowRight;
