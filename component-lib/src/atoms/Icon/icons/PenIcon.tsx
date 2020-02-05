//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: pen.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

export function PenIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--pen', props.className)}
      style={props.style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      <path
        fillRule="evenodd"
        d="M51.12 12.88c-4.3-4.29-8.58-5.56-10.92-3.22L12.07 37.8l-.16.15a2.26 2.26 0 0 0-.28.35c-1.54 2.22-2.55 9.29-3.12 15a2 2 0 0 0 2 2.2h.2c5.71-.57 12.78-1.58 15-3.12a2.26 2.26 0 0 0 .35-.28l28.28-28.29c2.34-2.35 1.07-6.63-3.22-10.93zM12.76 51.24a71.59 71.59 0 0 1 1.69-9.62 35.94 35.94 0 0 1 7.93 7.93 71.59 71.59 0 0 1-9.62 1.69zM51.51 21l-26 26a32.82 32.82 0 0 0-3.93-4.56A32.12 32.12 0 0 0 17 38.51l26-26c.45-.17 2.61.51 5.3 3.2 2.69 2.69 3.36 4.85 3.21 5.29z"
      />
    </svg>
  );
}