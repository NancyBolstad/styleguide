//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: refresh.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function RefreshIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--refresh', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M53 38.6c-3.385 10.765-14.367 17.223-25.42 14.949-11.054-2.275-18.594-12.544-17.454-23.77C11.266 18.55 20.716 10.006 32 9.998a21.761 21.761 0 0 1 16.37 7.311l.63-4.26a2.02 2.02 0 0 1 4 .57L51.73 22a3 3 0 0 1-3 2.51 3.11 3.11 0 0 1-.43 0l-9-1.28a2.02 2.02 0 1 1 .57-4l5.54.79A17.78 17.78 0 0 0 32 14c-9.233.005-16.966 6.995-17.899 16.181-.933 9.186 5.236 17.588 14.28 19.45C37.425 51.49 46.41 46.208 49.18 37.4A2.002 2.002 0 1 1 53 38.6z" />
    </svg>
  );
}
