import * as React from 'react';
import { SVGProps } from 'react';

const SvgHike = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 16' {...props}>
    <path
      fill='#FCFCFD'
      d='M4.277 16 6.369 5.723l-2.232.936v2.182H3V5.908l3.776-1.545q.219-.085.393-.132t.346-.071q.543-.025.947.2.404.223.701.625l.062.063q.587.885 1.228 1.757.639.873 2.547.922v1.106q-1.388-.065-2.463-.633A4 4 0 0 1 8.88 6.59l-.585 3.065 1.556 1.604V16H8.714v-4.305l-1.9-1.61L5.359 16zM9.02 3.313q-.715 0-1.208-.48a1.58 1.58 0 0 1-.494-1.176q0-.696.494-1.176T9.02 0q.716 0 1.209.48t.494 1.177q0 .695-.494 1.176-.494.48-1.209.48'
    />
  </svg>
);
export default SvgHike;
