import React, { forwardRef } from "react";

export const Gradient = forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>(function Catalsyt(props) {
  return ( 
    <svg
    width="1440"
    height="100"
    viewBox="0 0 1440 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_150_366"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="1440"
      height="692"
    >
      <mask id="path-1-inside-1_150_366" fill="white">
        <path d="M0 0H1440V692H0V0Z" />
      </mask>
      <path d="M0 0H1440V692H0V0Z" fill="#010101" />
      <path
        d="M0 1H1440V-1H0V1Z"
        fill="url(#paint0_radial_150_366)"
        mask="url(#path-1-inside-1_150_366)"
      />
    </mask>
    <g mask="url(#mask0_150_366)">
      <g filter="url(#filter0_f_150_366)">
        <ellipse
          cx="720.5"
          cy="-14"
          rx="319.5"
          ry="88"
          fill="#3F3F46"
          fill-opacity="0.56"
        />
      </g>
    </g>
    <rect
      x="426"
      width="588"
      height="1.14"
      fill="url(#paint1_radial_150_366)"
    />
    <defs>
      <filter
        id="filter0_f_150_366"
        x="201"
        y="-=302"
        width="1039"
        height="576"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="100"
          result="effect1_foregroundBlur_150_366"
        />
      </filter>
      <radialGradient
        id="paint0_radial_150_366"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(720) rotate(-180) scale(929.5 895.522)"
      >
        <stop stop-color="#3F3F46" />
        <stop offset="1" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="paint1_radial_150_366"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(720 1.13771) rotate(-180) scale(345.5 125577)"
      >
        <stop stop-color="#3F3F46" />
        <stop offset="1" stop-color="#010101" />
      </radialGradient>
    </defs>
  </svg>

  );
});
