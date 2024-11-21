import * as React from 'react';
import { SVGProps } from 'react';

const SvgLike = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 16' {...props}>
    <path
      fill='#105FAE'
      d='M14 5.599q.45 0 .826.366.375.367.375.834v.95a1.1 1.1 0 0 1-.1.466l-1.984 4.65q-.133.334-.433.534t-.683.2H5.6q-.5 0-.85-.342a1.15 1.15 0 0 1-.35-.858v-6.3q0-.25.1-.475t.266-.392l3.35-3.35q.3-.3.734-.383.433-.084.733.1.384.216.492.633t.025.817l-.5 2.55zm-12 8q-.482 0-.84-.359A1.15 1.15 0 0 1 .8 12.4v-5.6q0-.484.36-.842.358-.358.84-.358.485 0 .842.358.36.359.359.842v5.6q0 .483-.359.841-.357.36-.841.359'
    />
  </svg>
);
export default SvgLike;
