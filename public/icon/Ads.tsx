import * as React from 'react';
import { SVGProps } from 'react';

const SvgAds = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 16' {...props}>
    <path
      fill='#62636C'
      d='M1.628 16q-.684 0-1.156-.481A1.58 1.58 0 0 1 0 14.372V1.628Q0 .962.472.481.944.001 1.628 0h12.744q.684 0 1.156.481.472.48.472 1.147v12.744q0 .666-.472 1.147-.472.48-1.156.481zm0-1.316h12.744q.117 0 .214-.098a.3.3 0 0 0 .098-.214v-9.94H1.316v9.94q0 .117.098.214a.3.3 0 0 0 .214.098'
    />
  </svg>
);
export default SvgAds;
