import * as React from 'react';
import { SVGProps } from 'react';

const SvgComment = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 32 32' {...props}>
    <path fill='#fff' fillOpacity={0.01} d='M8 8h16v16H8z' />
    <path
      fill='#00509D'
      fillRule='evenodd'
      d='M21.333 11.2H10.667a1.6 1.6 0 0 0-1.6 1.6v5.333a1.6 1.6 0 0 0 1.6 1.6H16c.142 0 .277.056.377.156l2.29 2.29v-1.913c0-.294.238-.533.533-.533h2.133a1.6 1.6 0 0 0 1.6-1.6V12.8a1.6 1.6 0 0 0-1.6-1.6m-10.666-1.067h10.666A2.667 2.667 0 0 1 24 12.8v5.333a2.667 2.667 0 0 1-2.667 2.666h-1.6v2.667a.533.533 0 0 1-.91.377L15.779 20.8h-5.112A2.667 2.667 0 0 1 8 18.133V12.8a2.667 2.667 0 0 1 2.667-2.667'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgComment;
