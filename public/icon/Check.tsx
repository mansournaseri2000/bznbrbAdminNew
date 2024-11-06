import * as React from 'react';
import { SVGProps } from 'react';

const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 16' {...props}>
    <path fill='#fff' fillOpacity={0.01} d='M0 0h16v16H0z' />
    <path
      fill='#FCFCFD'
      fillRule='evenodd'
      d='M12.233 3.976a.667.667 0 0 1 .193.923l-4.534 6.933a.667.667 0 0 1-1.006.128L3.953 9.295a.667.667 0 1 1 .896-.987l2.355 2.141 4.106-6.279a.667.667 0 0 1 .922-.193'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCheck;
