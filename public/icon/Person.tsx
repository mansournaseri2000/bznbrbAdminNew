import * as React from 'react';
import { SVGProps } from 'react';

const SvgPerson = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 16' {...props}>
    <path fill='#fff' fillOpacity={0.01} d='M0 0h16v16H0z' />
    <path
      fill='#62636C'
      fillRule='evenodd'
      d='M8 .934a3.867 3.867 0 0 0-1.073 7.582c-1.274.155-2.366.606-3.19 1.417-1.047 1.032-1.577 2.569-1.577 4.574a.507.507 0 1 0 1.013 0c0-1.835.484-3.071 1.276-3.853C5.243 9.872 6.43 9.467 8 9.467s2.757.405 3.551 1.188c.793.78 1.276 2.017 1.276 3.852a.507.507 0 1 0 1.013 0c0-2.005-.53-3.542-1.578-4.574-.822-.811-1.915-1.262-3.189-1.417A3.869 3.869 0 0 0 8 .934M5.147 4.8a2.853 2.853 0 1 1 5.706 0 2.853 2.853 0 0 1-5.706 0'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgPerson;
