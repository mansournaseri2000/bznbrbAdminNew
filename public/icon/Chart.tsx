import * as React from 'react';
import { SVGProps } from 'react';

const SvgChart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 16' {...props}>
    <path fill='#00509D' d='M.772 13 0 12.219l5.944-6.016 3.404 3.423L15.129 3l.871.732-6.57 7.562-3.486-3.528z' />
  </svg>
);
export default SvgChart;
