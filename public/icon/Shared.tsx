import * as React from 'react';
import { SVGProps } from 'react';

const SvgShared = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' {...props}>
    <path
      fill='#62636C'
      d='M18 22a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 15 19q0-.175.025-.363.025-.187.075-.337l-7.05-4.1q-.425.375-.95.588T6 15a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 3 12q0-1.25.875-2.125A2.9 2.9 0 0 1 6 9q.575 0 1.1.213.525.212.95.587l7.05-4.1a2 2 0 0 1-.075-.338A3 3 0 0 1 15 5q0-1.25.875-2.125A2.9 2.9 0 0 1 18 2q1.25 0 2.125.875T21 5t-.875 2.125A2.9 2.9 0 0 1 18 8q-.575 0-1.1-.213a3.3 3.3 0 0 1-.95-.587L8.9 11.3q.05.15.075.337a2.7 2.7 0 0 1 0 .726 2 2 0 0 1-.075.337l7.05 4.1q.425-.375.95-.588T18 16q1.25 0 2.125.875T21 19t-.875 2.125A2.9 2.9 0 0 1 18 22m0-16q.424 0 .712-.287A.97.97 0 0 0 19 5a.97.97 0 0 0-.288-.713A.97.97 0 0 0 18 4a.97.97 0 0 0-.712.287A.97.97 0 0 0 17 5q0 .424.288.713Q17.575 6 18 6M6 13q.424 0 .713-.287A.97.97 0 0 0 7 12a.97.97 0 0 0-.287-.713A.97.97 0 0 0 6 11a.97.97 0 0 0-.713.287A.97.97 0 0 0 5 12q0 .424.287.713Q5.576 13 6 13m12 7q.424 0 .712-.288A.97.97 0 0 0 19 19a.97.97 0 0 0-.288-.712A.97.97 0 0 0 18 18a.97.97 0 0 0-.712.288A.97.97 0 0 0 17 19q0 .424.288.712.287.288.712.288'
    />
  </svg>
);
export default SvgShared;