import * as React from 'react';
import { SVGProps } from 'react';

const SvgDislike = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 16' {...props}>
    <path
      fill='#00509D'
      d='M3.549 1h8.48v8.653L6.722 15l-.307-.115q-.315-.22-.483-.55a1 1 0 0 1-.09-.686l.02-.023.708-3.973H1.25q-.516 0-.882-.37A1.23 1.23 0 0 1 0 8.388V7.57q0-.143.022-.255a1 1 0 0 1 .08-.235l2.206-5.26q.147-.378.492-.6.345-.22.749-.22m7.471 1.023H3.55a.36.36 0 0 0-.168.045.3.3 0 0 0-.13.151L1.01 7.51v.88q0 .105.067.174a.23.23 0 0 0 .172.068h6.52l-.876 4.764L11.02 9.23zm1.01 7.63V8.631h2.96V2.023h-2.96V1H16v8.653z'
    />
  </svg>
);
export default SvgDislike;
