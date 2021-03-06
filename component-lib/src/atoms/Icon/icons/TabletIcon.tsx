//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: tablet.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function TabletIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--tablet', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M44 4a8 8 0 0 1 8 8v40a8 8 0 0 1-8 8H20a8 8 0 0 1-8-8V12a8 8 0 0 1 8-8zm4 44H16v4a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4v-4zm-16 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM44 8H20a4 4 0 0 0-4 4v32h32V12a4 4 0 0 0-4-4z"
      />
    </svg>
  );
}
