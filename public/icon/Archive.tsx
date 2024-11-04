import * as React from 'react';
import { SVGProps } from 'react';

const SvgArchive = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 16' {...props}>
    <path fill='#fff' fillOpacity={0.01} d='M0 0h16v16H0z' />
    <path
      fill='#62636C'
      fillRule='evenodd'
      d='M3.53 1.066c-.405 0-.774.229-.955.59L1.123 4.561a.5.5 0 0 0-.057.239v9.066c0 .59.478 1.067 1.067 1.067h11.733c.59 0 1.067-.477 1.067-1.067V4.8a.53.53 0 0 0-.056-.239l-1.453-2.905c-.18-.361-.55-.59-.954-.59H3.53m0 1.067h3.936v2.133H2.463zm5.003 2.133V2.133h3.937l1.067 2.133zM8 5.333h5.866v8.533H2.133V5.333zM5.866 7.466a.533.533 0 1 0 0 1.067h4.267a.533.533 0 0 0 0-1.067z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgArchive;
