import * as React from 'react';
import { SVGProps } from 'react';

const SvgLayers = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 16' {...props}>
    <path fill='#fff' fillOpacity={0.01} d='M0 0h16v16H0z' />
    <path
      fill='#62636C'
      fillRule='evenodd'
      d='M8.271.875a.53.53 0 0 0-.543 0L1.862 4.342a.533.533 0 0 0 0 .918l5.866 3.467a.53.53 0 0 0 .543 0l5.867-3.467a.533.533 0 0 0 0-.918zM8 7.648 3.18 4.801 8 1.954 12.818 4.8zm-6.326.348a.533.533 0 0 1 .73-.188L8 11.115l5.595-3.307a.533.533 0 0 1 .543.919L8.27 12.193a.53.53 0 0 1-.543 0L1.862 8.727a.533.533 0 0 1-.188-.73m0 3.2a.533.533 0 0 1 .73-.188L8 14.315l5.595-3.307a.533.533 0 0 1 .543.919L8.27 15.393a.53.53 0 0 1-.543 0l-5.866-3.466a.533.533 0 0 1-.188-.73'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgLayers;
