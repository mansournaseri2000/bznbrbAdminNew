import * as React from 'react';
import { SVGProps } from 'react';

const SvgAirplan = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 16' {...props}>
    <path
      fill='#FCFCFD'
      d='m6.328 15-1.856-3.464L1 9.672l1.13-1.16 3.01.515 2.274-2.254-6.39-2.754L2.53 2.54l7.697 1.41 2.56-2.568A1.25 1.25 0 0 1 13.702 1q.536 0 .917.381.381.382.381.91 0 .53-.381.91l-2.56 2.552 1.41 7.726-1.496 1.497-2.738-6.39L6.98 10.86l.499 3.009z'
    />
  </svg>
);
export default SvgAirplan;
