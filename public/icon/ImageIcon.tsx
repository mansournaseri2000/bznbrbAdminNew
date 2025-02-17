import * as React from 'react';
import { SVGProps } from 'react';

const SvgImageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 16' {...props}>
    <path fill='#fff' fillOpacity={0.01} d='M0 0h16v16H0z' />
    <path
      fill='#00509D'
      fillRule='evenodd'
      d='M2.666 1.067h10.667a1.6 1.6 0 0 1 1.6 1.6v10.666a1.6 1.6 0 0 1-1.6 1.6H2.666a1.6 1.6 0 0 1-1.6-1.6V2.667a1.6 1.6 0 0 1 1.6-1.6m0 1.066a.533.533 0 0 0-.533.534V8.92l1.794-1.794a.48.48 0 0 1 .69.012l3.781 4.05 2.996-2.995a.48.48 0 0 1 .678 0l1.794 1.794V2.667a.533.533 0 0 0-.533-.534zm-.533 11.2V10.28l2.122-2.122 3.778 4.048 1.504 1.662h-6.87a.533.533 0 0 1-.534-.534m11.2.534h-2.501l-1.783-1.97 2.684-2.685 2.133 2.133v1.988a.533.533 0 0 1-.533.534m-6.24-8a.908.908 0 1 1 1.814 0 .908.908 0 0 1-1.815 0M8 3.999a1.868 1.868 0 1 0 0 3.735A1.868 1.868 0 0 0 8 4'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgImageIcon;
