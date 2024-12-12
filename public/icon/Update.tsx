import * as React from 'react';
import { SVGProps } from 'react';

const SvgUpdate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 17 17' {...props}>
    <g clipPath='url(#update_svg__a)'>
      <path
        fill='#00509D'
        d='M3.098 10.951a6.6 6.6 0 0 1-.43-1.156A5 5 0 0 1 2.5 8.5q0-2.444 1.776-4.163T8.63 2.68h.522L7.706 1.278 8.508.5l2.81 2.725-2.81 2.724-.802-.778L9.152 3.77H8.63q-2.121-.042-3.564 1.358T3.622 8.5q0 .437.074.851.074.415.222.804zM8.492 16.5l-2.81-2.725 2.81-2.724.802.777-1.446 1.403h.523q2.119.042 3.563-1.358T13.378 8.5q0-.437-.074-.851a4.5 4.5 0 0 0-.222-.804l.82-.796a6.6 6.6 0 0 1 .43 1.156q.168.618.168 1.295 0 2.424-1.777 4.153-1.776 1.73-4.353 1.667h-.522l1.446 1.402z'
      />
    </g>
    <defs>
      <clipPath id='update_svg__a'>
        <path fill='#fff' d='M.5.5h16v16H.5z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUpdate;
