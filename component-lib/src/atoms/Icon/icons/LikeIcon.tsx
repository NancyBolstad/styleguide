//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: like.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function LikeIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--like', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M54.64 34.52a8 8 0 0 0 .76-8A8.25 8.25 0 0 0 48 22h-5.15a25 25 0 0 0 1.2-4.89 14.07 14.07 0 0 0-1.72-8c-1.21-2.06-4.56-3-7-2.78a4.74 4.74 0 0 0-4.24 3.18c-.23.7-.45 1.42-.66 2.12-.63 2.07-1.27 4.2-2 5.17l-.09.13C26.91 19 22.2 25 20.66 26h-2.2A6 6 0 0 0 8 30v20a6 6 0 0 0 10.46 4h1.79c2.502.1 4.964.662 7.26 1.66a70.51 70.51 0 0 0 15.39 2.4c.454.01.908-.01 1.36-.06 3.45-.46 7.2-3.09 7.7-9.08a9.71 9.71 0 0 0 2.12-7.6 9.09 9.09 0 0 0 .56-6.8zM12 50V30a2 2 0 1 1 4 0v20a2 2 0 1 1-4 0zm38.85-17a2 2 0 0 0-.3 1.93 5.33 5.33 0 0 1-.26 5 2 2 0 0 0-.29 1.39 5.85 5.85 0 0 1-1.5 5.42A2 2 0 0 0 48 48c-.13 3.47-1.69 5.65-4.27 6-2.58.35-12.65-1.31-14.88-2.13a23.93 23.93 0 0 0-8.6-1.87H20V30h1c3.17 0 10-9.88 10.62-10.82 1.21-1.56 1.92-3.93 2.68-6.43.2-.667.41-1.333.63-2 0-.09.1-.31.71-.42a4.54 4.54 0 0 1 3.25.82 10 10 0 0 1 1.17 5.65 34.14 34.14 0 0 1-1.91 6.51 2 2 0 0 0 .2 1.86A2 2 0 0 0 40 26h8a4.24 4.24 0 0 1 3.85 2.23c.63 1.39.29 3.07-1 4.77z"
      />
    </svg>
  );
}
