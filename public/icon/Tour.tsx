import * as React from 'react';
import { SVGProps } from 'react';

const SvgTour = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 16' {...props}>
    <path
      fill='#62636C'
      d='m10.658 15-5.316-1.603-3.083 1.015a.93.93 0 0 1-.858-.12Q1 14.019 1 13.492V3.193q0-.331.185-.596a.9.9 0 0 1 .46-.36L5.343 1l5.316 1.603 3.083-1.016a.83.83 0 0 1 .859.086q.4.282.4.801v10.367q0 .34-.187.611a.8.8 0 0 1-.493.344zm-.576-1.366V3.616L5.918 2.35v10.017zm1.152-.045 2.614-.87V2.747l-2.614.87zm-9.082-.336 2.614-.887V2.394l-2.614.887z'
    />
  </svg>
);
export default SvgTour;
