//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: store.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function StoreIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--store', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M52 8a8 8 0 0 1 6 2.69A8 8 0 0 1 60 16v32a8 8 0 0 1-8 8H12a8 8 0 0 1-8-8V16a8 8 0 0 1 8-8zm-6 28h-4a2 2 0 0 0-2 2v14h8V38a2 2 0 0 0-2-2zm10-10.54a6 6 0 0 1-8 0 6 6 0 0 1-8 0 6 6 0 0 1-8 0 6 6 0 0 1-8 0 6 6 0 0 1-8 0 6 6 0 0 1-8 0V48a4 4 0 0 0 4 4h24V38a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v14a4 4 0 0 0 4-4zM26 32a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6h-8a6 6 0 0 1-6-6v-4a6 6 0 0 1 6-6zm0 4h-8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm28-23h-4v8a2 2 0 1 0 4 0v-8zm-8 0h-4v8a2 2 0 1 0 4 0v-8zm-8 0h-4v8a2 2 0 1 0 4 0v-8zm-8 0h-4v8a2 2 0 1 0 4 0v-8zm-8 0h-4v8a2 2 0 1 0 4 0v-8zm-8 0h-4v8a2 2 0 1 0 4 0v-8z"
      />
    </svg>
  );
}
