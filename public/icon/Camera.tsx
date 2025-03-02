import * as React from 'react';
import { SVGProps } from 'react';

const SvgCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 16' {...props}>
    <path fill='#fff' fillOpacity={0.01} d='M0 0h16v16H0z' />
    <path
      fill='#00509D'
      fillRule='evenodd'
      d='M2.133 3.2c-.589 0-1.066.478-1.066 1.067v7.467c0 .589.477 1.066 1.066 1.066h11.734c.589 0 1.066-.477 1.066-1.066V4.267c0-.589-.477-1.067-1.066-1.067zM0 4.267C0 3.09.955 2.134 2.133 2.134h11.734c1.178 0 2.133.955 2.133 2.133v7.467a2.133 2.133 0 0 1-2.133 2.133H2.133A2.133 2.133 0 0 1 0 11.734zm2.133.267c0-.147.12-.267.267-.267h2.667c.147 0 .266.12.266.267v1.605c0 .147-.12.266-.266.266H2.4a.267.267 0 0 1-.267-.266zM12.908 8.09a2.774 2.774 0 1 1-5.55 0 2.774 2.774 0 0 1 5.55 0m1.066 0a3.841 3.841 0 1 1-7.682 0 3.841 3.841 0 0 1 7.682 0'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCamera;
