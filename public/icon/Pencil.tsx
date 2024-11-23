import * as React from 'react';
import { SVGProps } from 'react';

const SvgPencil = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 16' {...props}>
    <path fill='#fff' fillOpacity={0.01} d='M0 0h16v16H0z' />
    <path
      fill='#00509D'
      fillRule='evenodd'
      d='M12.643 1.223a.533.533 0 0 0-.754 0L3.962 9.15c-.096.096-.173.21-.227.334l-1.559 3.639a.533.533 0 0 0 .7.7l3.64-1.56q.188-.081.333-.225l7.928-7.928a.533.533 0 0 0 0-.754zM4.716 9.904l7.55-7.55 1.38 1.38-7.551 7.55-1.595.683-.468-.468z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgPencil;
