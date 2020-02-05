//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: payment.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

export function PaymentIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--payment', props.className)}
      style={props.style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      <path
        fillRule="evenodd"
        d="M44 8a8 8 0 0 1 7.93 6.91c.044.362.067.726.07 1.09a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8H12a8 8 0 0 1-8-8V14a6 6 0 0 1 6-6zM8 19.65V48a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4v-4H46a8 8 0 1 1 0-16h10v-4a4 4 0 0 0-4-4H10a5.8 5.8 0 0 1-2-.35zM56 32H46a4 4 0 1 0 0 8h10v-8zm-10 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-2-22H10a2 2 0 0 0 0 4h38a3.882 3.882 0 0 0-.18-1.19l-.067-.198A4 4 0 0 0 44 12z"
      />
    </svg>
  );
}