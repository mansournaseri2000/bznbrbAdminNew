import * as React from 'react';
import { SVGProps } from 'react';

const SvgProfileLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 48 32' {...props}>
    <g clipPath='url(#profile-logo_svg__a)'>
      <g clipPath='url(#profile-logo_svg__b)'>
        <path fill='url(#profile-logo_svg__c)' d='M27.464 22.8a8.8 8.8 0 1 1 0-13.599h8.9C33.81 3.765 28.285 0 21.879 0c-8.836 0-16 7.164-16 16s7.164 16 16 16c6.405 0 11.93-3.764 14.487-9.2z' />
        <path
          fill='url(#profile-logo_svg__d)'
          d='M21.878 7.2c2.122 0 4.067.752 5.586 2h.005A16.04 16.04 0 0 0 17.434.627C10.759 2.551 5.878 8.706 5.878 16s4.876 13.442 11.546 15.372a16.04 16.04 0 0 0 10.041-8.57A8.8 8.8 0 1 1 21.88 7.202z'
        />
        <path fill='#3A79BA' d='m30.686 16-3.217-5.6h-3.504l3.217 5.6.002-.002' />
        <path fill='url(#profile-logo_svg__e)' d='m27.184 15.998-.002.002h.002-.002l-3.217 5.6h3.504l3.217-5.6' />
        <path fill='#3A79BA' d='m39.579 16-3.218-5.6H32.86l3.218 5.6v-.002' />
        <path fill='url(#profile-logo_svg__f)' d='M36.077 15.998V16l-3.218 5.6h3.502L39.58 16' />
        <path fill='#3A79BA' d='m35.142 16-3.217-5.6h-3.504L31.64 16v-.002' />
        <path fill='url(#profile-logo_svg__g)' d='M31.639 15.998V16l-3.218 5.6h3.504l3.217-5.6' />
      </g>
    </g>
    <defs>
      <linearGradient id='profile-logo_svg__c' x1={1.925} x2={40.265} y1={16} y2={16} gradientUnits='userSpaceOnUse'>
        <stop offset={0.6} stopColor='#C12890' />
        <stop offset={1} stopColor='#E091BE' />
      </linearGradient>
      <linearGradient id='profile-logo_svg__d' x1={-1.958} x2={54.353} y1={15.998} y2={15.998} gradientUnits='userSpaceOnUse'>
        <stop offset={0.04} stopColor='#E091BE' />
        <stop offset={0.35} stopColor='#C12890' />
        <stop offset={0.55} stopColor='#65164C' />
      </linearGradient>
      <linearGradient id='profile-logo_svg__e' x1={27.326} x2={27.326} y1={21.755} y2={10.741} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#2369B3' />
        <stop offset={0.14} stopColor='#2266AE' />
        <stop offset={0.3} stopColor='#1F5FA2' />
        <stop offset={0.45} stopColor='#1B538D' />
        <stop offset={0.6} stopColor='#164270' />
        <stop offset={0.76} stopColor='#0F2C4B' />
        <stop offset={0.91} stopColor='#06111D' />
        <stop offset={1} stopColor='#010101' />
      </linearGradient>
      <linearGradient id='profile-logo_svg__f' x1={36.22} x2={36.22} y1={21.617} y2={10.604} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#2369B3' />
        <stop offset={0.14} stopColor='#2266AE' />
        <stop offset={0.3} stopColor='#1F5FA2' />
        <stop offset={0.45} stopColor='#1B538D' />
        <stop offset={0.6} stopColor='#164270' />
        <stop offset={0.76} stopColor='#0F2C4B' />
        <stop offset={0.91} stopColor='#06111D' />
        <stop offset={1} stopColor='#010101' />
      </linearGradient>
      <linearGradient id='profile-logo_svg__g' x1={31.782} x2={31.782} y1={21.617} y2={10.604} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#2369B3' />
        <stop offset={0.14} stopColor='#2266AE' />
        <stop offset={0.3} stopColor='#1F5FA2' />
        <stop offset={0.45} stopColor='#1B538D' />
        <stop offset={0.6} stopColor='#164270' />
        <stop offset={0.76} stopColor='#0F2C4B' />
        <stop offset={0.91} stopColor='#06111D' />
        <stop offset={1} stopColor='#010101' />
      </linearGradient>
      <clipPath id='profile-logo_svg__a'>
        <path fill='#fff' d='M0 0h48v32H0z' />
      </clipPath>
      <clipPath id='profile-logo_svg__b'>
        <path fill='#fff' d='M-72.91 0H40v32H-72.91z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgProfileLogo;
