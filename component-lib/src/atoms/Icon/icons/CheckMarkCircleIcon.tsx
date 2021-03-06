//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: check-mark-circle.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function CheckMarkCircleIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--check-mark-circle', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M32 6a26 26 0 0 1 26 26c0 14.36-11.64 26-26 26S6 46.36 6 32 17.64 6 32 6zm0 4c-12.15 0-22 9.85-22 22s9.85 22 22 22 22-9.85 22-22-9.85-22-22-22zm10.498 12.007a2 2 0 0 1 1.042 3.463L30.17 41.11a2 2 0 0 1-1.44.7h-.08a2 2 0 0 1-1.41-.58l-6.7-6.7a2.001 2.001 0 0 1 2.83-2.83l5.17 5.17 12-14a2 2 0 0 1 1.958-.863z"
      />
    </svg>
  );
}
