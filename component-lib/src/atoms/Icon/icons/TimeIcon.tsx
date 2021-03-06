//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: time.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function TimeIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--time', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M32 4c15.464 0 28 12.536 28 28S47.464 60 32 60 4 47.464 4 32 16.536 4 32 4zm0 4C18.745 8 8 18.745 8 32s10.745 24 24 24 24-10.745 24-24S45.255 8 32 8zm0 8a2 2 0 0 1 2 2v16a2 2 0 0 1-.481 1.302l-6 7a2 2 0 1 1-3.038-2.604L30 33.26V18a2 2 0 0 1 2-2z"
      />
    </svg>
  );
}
