import * as React from 'react';
import { SVGProps } from 'react';

const SvgEyeOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 16' {...props}>
    <path fill='#fff' fillOpacity={0.01} d='M0 0h16v16H0z' />
    <path
      fill='#00509D'
      fillRule='evenodd'
      d='M8 11.733c-2.877 0-5.302-1.47-6.83-3.734C2.697 5.736 5.122 4.266 8 4.266s5.302 1.47 6.83 3.733c-1.528 2.263-3.953 3.734-6.83 3.734m0-8.534C4.595 3.2 1.767 5.02.081 7.717a.53.53 0 0 0 0 .565C1.767 10.979 4.595 12.799 8 12.799s6.233-1.82 7.919-4.517a.53.53 0 0 0 0-.565C14.233 5.019 11.405 3.199 8 3.199m0 6.934a2.133 2.133 0 1 0 0-4.267 2.133 2.133 0 0 0 0 4.267'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgEyeOpen;
