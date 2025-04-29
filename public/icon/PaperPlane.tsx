import * as React from 'react';
import { SVGProps } from 'react';

const SvgPaperPlane = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 15 15' {...props}>
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M1.203 1.043a.5.5 0 0 0-.635.709L3.921 7.5.568 13.248a.5.5 0 0 0 .635.709l13.5-6a.5.5 0 0 0 0-.914zM4.846 7.1 2.212 2.586 13.27 7.5 2.212 12.414 4.846 7.9H9a.4.4 0 1 0 0-.8z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgPaperPlane;
